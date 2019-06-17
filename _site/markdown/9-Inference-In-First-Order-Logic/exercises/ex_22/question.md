

This exercise considers the implementation of search algorithms in
Prolog. Suppose that successor(X,Y) is true when state
Y is a successor of state X; and that
goal(X) is true when X is a goal state. Write
a definition for solve(X,P), which means that
P is a path (list of states) beginning with X,
ending in a goal state, and consisting of a sequence of legal steps as
defined by successor. You will find that depth-first search
is the easiest way to do this. How easy would it be to add heuristic
search control?
