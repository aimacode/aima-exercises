
# 4. Beyond Classical Search

**4.1** Give the name of the algorithm that results from each of the following
special cases:

1.  Local beam search with $k = 1$.

2.  Local beam search with one initial state and no limit on the number
    of states retained.

3.  Simulated annealing with $T = 0$ at all times (and omitting the
    termination test).

4.  Simulated annealing with $T=\infty$ at all times.

5.  Genetic algorithm with population size $N = 1$.

**4.2** Exercise [brio-exercise](#/) considers the problem of
building railway tracks under the assumption that pieces fit exactly
with no slack. Now consider the real problem, in which pieces don’t fit
exactly but allow for up to 10 degrees of rotation to either side of the
“proper” alignment. Explain how to formulate the problem so it could be
solved by simulated annealing.

**4.3** In this exercise, we explore the use of local search methods to solve
TSPs of the type defined in Exercise [tsp-mst-exercise](#/).

1.  Implement and test a hill-climbing method to solve TSPs. Compare the
    results with optimal solutions obtained from the A* algorithm with
    the MST heuristic (Exercise [tsp-mst-exercise](#/)).

2.  Repeat part (a) using a genetic algorithm instead of hill climbing.
    You may want to consult @Larranaga+al:1999 for some suggestions for representations.

**4.4** \[hill-climbing-exercise\]Generate a large number of 8-puzzle and
8-queens instances and solve them (where possible) by hill climbing
(steepest-ascent and first-choice variants), hill climbing with random
restart, and simulated annealing. Measure the search cost and percentage
of solved problems and graph these against the optimal solution cost.
Comment on your results.

**4.5** \[cond-plan-repeated-exercise\] The **And-Or-Graph-Search** algorithm in
Figure [and-or-graph-search-algorithm](#/) checks for
repeated states only on the path from the root to the current state.
Suppose that, in addition, the algorithm were to store
*every* visited state and check against that list. (See in
Figure [breadth-first-search-algorithm](#/) for an example.)
Determine the information that should be stored and how the algorithm
should use that information when a repeated state is found.
(*Hint*: You will need to distinguish at least between
states for which a successful subplan was constructed previously and
states for which no subplan could be found.) Explain how to use labels,
as defined in Section [cyclic-plan-section](#/), to avoid
having multiple copies of subplans.

**4.6** \[cond-loop-exercise\]Explain precisely how to modify the **And-Or-Graph-Search** algorithm to
generate a cyclic plan if no acyclic plan exists. You will need to deal
with three issues: labeling the plan steps so that a cyclic plan can
point back to an earlier part of the plan, modifying **Or-Search** so that it
continues to look for acyclic plans after finding a cyclic plan, and
augmenting the plan representation to indicate whether a plan is cyclic.
Show how your algorithm works on (a) the slippery vacuum world, and (b)
the slippery, erratic vacuum world. You might wish to use a computer
implementation to check your results.

**4.7** In Section [conformant-section](#/) we introduced belief
states to solve sensorless search problems. A sequence of actions solves
a sensorless problem if it maps every physical state in the initial
belief state $b$ to a goal state. Suppose the agent knows $h^*(s)$, the
true optimal cost of solving the physical state $s$ in the fully
observable problem, for every state $s$ in $b$. Find an admissible
heuristic $h(b)$ for the sensorless problem in terms of these costs, and
prove its admissibilty. Comment on the accuracy of this heuristic on the
sensorless vacuum problem of
Figure [vacuum2-sets-figure](#/). How well does A* perform?

**4.8** \[belief-state-superset-exercise\] This exercise explores
subset–superset relations between belief states in sensorless or
partially observable environments.

1.  Prove that if an action sequence is a solution for a belief state
    $b$, it is also a solution for any subset of $b$. Can anything be
    said about supersets of $b$?

2.  Explain in detail how to modify graph search for sensorless problems
    to take advantage of your answers in (a).

3.  Explain in detail how to modify and–or search for
    partially observable problems, beyond the modifications you describe
    in (b).

**4.9** \[multivalued-sensorless-exercise\] On page [multivalued-sensorless-page](#/) it was assumed
that a given action would have the same cost when executed in any
physical state within a given belief state. (This leads to a
belief-state search problem with well-defined step costs.) Now consider
what happens when the assumption does not hold. Does the notion of
optimality still make sense in this context, or does it require
modification? Consider also various possible definitions of the “cost”
of executing an action in a belief state; for example, we could use the
*minimum* of the physical costs; or the
*maximum*; or a cost *interval* with the lower
bound being the minimum cost and the upper bound being the maximum; or
just keep the set of all possible costs for that action. For each of
these, explore whether A* (with modifications if necessary) can return
optimal solutions.

**4.10** \[vacuum-solvable-exercise\]Consider the sensorless version of the
erratic vacuum world. Draw the belief-state space reachable from the
initial belief state $\{{{\rm 1,2,3,4,5,6,7,8}}\}$, and explain why the
problem is unsolvable.

**4.11** \[vacuum-solvable-exercise\]Consider the sensorless version of the
erratic vacuum world. Draw the belief-state space reachable from the
initial belief state $\{{{\rm 1,3,5,7}}\}$, and explain why the problem
is unsolvable.

**4.12** \[path-planning-agent-exercise\]We can turn the navigation problem in
Exercise [path-planning-exercise](#/) into an environment as
follows:

-   The percept will be a list of the positions, *relative to the
    agent*, of the visible vertices. The percept does
    *not* include the position of the robot! The robot must
    learn its own position from the map; for now, you can assume that
    each location has a different “view.”

-   Each action will be a vector describing a straight-line path
    to follow. If the path is unobstructed, the action succeeds;
    otherwise, the robot stops at the point where its path first
    intersects an obstacle. If the agent returns a zero motion vector
    and is at the goal (which is fixed and known), then the environment
    teleports the agent to a *random location* (not inside
    an obstacle).

-   The performance measure charges the agent 1 point for each unit of
    distance traversed and awards 1000 points each time the goal
    is reached.

1.  Implement this environment and a problem-solving agent for it. After
    each teleportation, the agent will need to formulate a new problem,
    which will involve discovering its current location.

2.  Document your agent’s performance (by having the agent generate
    suitable commentary as it moves around) and report its performance
    over 100 episodes.

3.  Modify the environment so that 30% of the time the agent ends up at
    an unintended destination (chosen randomly from the other visible
    vertices if any; otherwise, no move at all). This is a crude model
    of the motion errors of a real robot. Modify the agent so that when
    such an error is detected, it finds out where it is and then
    constructs a plan to get back to where it was and resume the
    old plan. Remember that sometimes getting back to where it was might
    also fail! Show an example of the agent successfully overcoming two
    successive motion errors and still reaching the goal.

4.  Now try two different recovery schemes after an error: (1) head for
    the closest vertex on the original route; and (2) replan a route to
    the goal from the new location. Compare the performance of the three
    recovery schemes. Would the inclusion of search costs affect the
    comparison?

5.  Now suppose that there are locations from which the view
    is identical. (For example, suppose the world is a grid with
    square obstacles.) What kind of problem does the agent now face?
    What do solutions look like?

**4.13** \[online-offline-exercise\]Suppose that an agent is in a $3 \times 3$
maze environment like the one shown in
Figure [maze-3x3-figure](#/). The agent knows that its
initial location is (1,1), that the goal is at (3,3), and that the
actions *Up*, *Down*, *Left*, *Right* have their usual
effects unless blocked by a wall. The agent does *not* know
where the internal walls are. In any given state, the agent perceives
the set of legal actions; it can also tell whether the state is one it
has visited before.

1.  Explain how this online search problem can be viewed as an offline
    search in belief-state space, where the initial belief state
    includes all possible environment configurations. How large is the
    initial belief state? How large is the space of belief states?

2.  How many distinct percepts are possible in the initial state?

3.  Describe the first few branches of a contingency plan for this
    problem. How large (roughly) is the complete plan?

Notice that this contingency plan is a solution for *every
possible environment* fitting the given description. Therefore,
interleaving of search and execution is not strictly necessary even in
unknown environments.

**4.14** \[online-offline-exercise\]Suppose that an agent is in a $3 \times 3$
maze environment like the one shown in
Figure [maze-3x3-figure](#/). The agent knows that its
initial location is (3,3), that the goal is at (1,1), and that the four
actions *Up*, *Down*, *Left*, *Right* have their usual
effects unless blocked by a wall. The agent does *not* know
where the internal walls are. In any given state, the agent perceives
the set of legal actions; it can also tell whether the state is one it
has visited before or is a new state.

1.  Explain how this online search problem can be viewed as an offline
    search in belief-state space, where the initial belief state
    includes all possible environment configurations. How large is the
    initial belief state? How large is the space of belief states?

2.  How many distinct percepts are possible in the initial state?

3.  Describe the first few branches of a contingency plan for this
    problem. How large (roughly) is the complete plan?

Notice that this contingency plan is a solution for *every
possible environment* fitting the given description. Therefore,
interleaving of search and execution is not strictly necessary even in
unknown environments.

**4.15** \[path-planning-hc-exercise\]In this exercise, we examine hill climbing
in the context of robot navigation, using the environment in
Figure [geometric-scene-figure](#/) as an example.

1.  Repeat Exercise [path-planning-agent-exercise](#/) using
    hill climbing. Does your agent ever get stuck in a local minimum? Is
    it *possible* for it to get stuck with convex
    obstacles?

2.  Construct a nonconvex polygonal environment in which the agent
    gets stuck.

3.  Modify the hill-climbing algorithm so that, instead of doing a
    depth-1 search to decide where to go next, it does a
    depth-$k$ search. It should find the best $k$-step path and do one
    step along it, and then repeat the process.

4.  Is there some $k$ for which the new algorithm is guaranteed to
    escape from local minima?

5.  Explain how LRTA enables the agent to escape from local minima in
    this case.

**4.16** Like DFS, online DFS is incomplete for reversible state spaces with
infinite paths. For example, suppose that states are points on the
infinite two-dimensional grid and actions are unit vectors $(1,0)$,
$(0,1)$, $(-1,0)$, $(0,-1)$, tried in that order. Show that online DFS
starting at $(0,0)$ will not reach $(1,-1)$. Suppose the agent can
observe, in addition to its current state, all successor states and the
actions that would lead to them. Write an algorithm that is complete
even for bidirected state spaces with infinite paths. What states does
it visit in reaching $(1,-1)$?

**4.17** Relate the time complexity of LRTA* to its space complexity.

