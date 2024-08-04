---
Name: Udit Kumar Nayak
Email: uditkumar.23bcs10059@ms.sst.scaler.com
---
## Intro
1. The state of the problem are number of missionaries and cannibals on each side of the river
This is why i made a structure that takes these data into account. (not sure about the implementation
of the actions though, because i have to filter it two times)

2. Solve1 is a custom graph-search BFS, i found that the general implementation was present
at [this](https://github.com/aimacode/aima-python/blob/master/search.py) repo, but it was to late
so i just used solve2 to see a DFS.

3. Probably because people tend to be frustrated by hard problems and make the same error
over and over again

## Implementation
### Program solution
```python
# search is the module here
# https://github.com/aimacode/aima-python/blob/master/search.py
from search import Problem, Node, depth_first_graph_search
from queue import Queue

SHIP_SIZE = 2

class RiverSide():
    """
    Structure representing the people on one side of the river
    """

    def __init__(self, missionary=0, cannibals=0, tuple=None):
        """
        tuple(missionaries, cannibals) on one riverside
        """
        if tuple == None:
            # security check
            if missionary < 0 or cannibals < 0:
                raise ValueError("Coudn't have negative missionaries or cannibals")

            self.missionaries = missionary
            self.cannibals = cannibals
        else:
            # security check
            if tuple[0] < 0 or tuple[1] < 0:
                raise ValueError("Coudn't have negative missionaries or cannibals")

            self.missionaries = tuple[0]
            self.cannibals = tuple[1]
        self.shipSize = SHIP_SIZE

    def isValid(self):
        """
        Check if current state is valid
        """
        # check if one or more missionaire is overwhelmed by a cannibal
        if self.cannibals > self.missionaries and self.missionaries > 0:
            return False

        return True

    def set(self, tuple):
        self.missionaries = tuple[0]
        self.cannibals = tuple[1]

    def action(self):
        """
        Returns possible ship transportations, by ship size.
        """
        # Tuples of (missionary, cannibals)
        actions = list()
        for i in range(self.missionaries + 1):
            for j in range(self.cannibals + 1):
                if i + j != 0 and i + j <= self.shipSize:
                    actions.append((i,j))

        return actions

    def __eq__(self, other):
        if self.missionaries == other.missionaries and self.cannibals == other.cannibals:
            return True
        else:
            return False

    def __sub__(self, other):
        missionaries = self.missionaries - other.missionaries
        cannibals = self.cannibals - other.cannibals
        if missionaries < 0 or cannibals < 0:
            raise ValueError("Coudn't have negative missionaries or cannibals")
        return RiverSide(missionaries, cannibals)

    def __add__(self, other):
        missionaries = self.missionaries + other.missionaries
        cannibals = self.cannibals + other.cannibals
        return RiverSide(missionaries, cannibals)

    def __str__(self):
        return f"Riverside with {self.missionaries} missionaries and {self.cannibals} cannibals"

    def __repr__(self):
        return f"{self.missionaries} {self.cannibals}"

    def __hash__(self):
        return hash((self.missionaries, self.cannibals))

class Mc(Problem):
    def __init__(self, initial):
        self.state = (RiverSide(initial, 0), RiverSide(0, initial))
        # i needed this to make solve2 work, compatibility stuff
        self.initial = self.state
        self.goalState = (RiverSide(0, initial), RiverSide(initial, 0))

    def actions(self, state):
        """
        The second member of the tuple is direction, 0 is from left to right, 1 is from right
        to left, the first is the possible ship setup by missionaries and cannibals.
        Data like this:
        ((missionaries, cannibals), 0)
        """
        act = list()
        for sideAction in state[0].action():
            act.append(((sideAction), 0))

        for sideAction in state[1].action():
            act.append(((sideAction), 1))

        return act

    def result(self, state, action):
        sideAction, code = action
        sideAction = RiverSide(tuple=sideAction)
        leftRiver, rightRiver = state

        if code == 0:
            state = (leftRiver - sideAction, rightRiver + sideAction)
        else:
            state = (leftRiver + sideAction, rightRiver - sideAction)

        # check if these results are valid:
        # print(state, f"and valid check is { state[0].isValid() and state[1].isValid()}")
        if state[0].isValid() and state[1].isValid():
            return state
        else:
            return (leftRiver, rightRiver)

    def goal_test(self, state):
        if state == self.goalState:
            return True

        return False

    def solve(self):
        """
        solving using BFS
        """
        # initial parameters
        frontier = Queue()
        explored = set()

        currentNode = Node(self.state)
        frontier.put(currentNode)
        explored.add(currentNode)

        while True:
            if frontier.empty():
                print("no solution")
                return False
            currentNode = frontier.get()
            if self.goal_test(currentNode.state):
                print("found solution")
                print(currentNode.solution())
                return True
            explored.add(currentNode)

            for node in currentNode.expand(self):
                if node not in explored:
                    frontier.put(node)

    def solve2(self):
        solNode = depth_first_graph_search(self)
        if solNode != None:
            print(solNode.solution())

def main():
    # REGION TEST
    # print("hello, these are some tests")
    # print(RiverSide(0,0) == RiverSide(0,1))

    # # test __init__ clas
    # a = RiverSide(1,1)
    # b = RiverSide(tuple=(1,2))

    # # test string rapresentation
    # print(a)
    # print(b)

    # # addition and subtraction
    # print(a + RiverSide(2, 3))
    # print(a - RiverSide(0, 1))
    # ENDREGION

    # testing problem and solving it
    probbi = Mc(3)
    probbi.solve2()

if __name__ == "__main__":
    main() 
```