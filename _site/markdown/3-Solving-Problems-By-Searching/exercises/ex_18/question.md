

Consider a state space where the start state is number 1 and each state
$k$ has two successors: numbers $2k$ and $2k+1$. <br>

1.  Draw the portion of the state space for states 1 to 15. <br>

2.  Suppose the goal state is 11. List the order in which nodes will be
    visited for breadth-first search, depth-limited search with limit 3,
    and iterative deepening search. <br>

3.  How well would bidirectional search work on this problem? What is
    the branching factor in each direction of the bidirectional search?<br>

4.  Does the answer to (c) suggest a reformulation of the problem that
    would allow you to solve the problem of getting from state 1 to a
    given goal state with almost no search? <br>

5.  Call the action going from $k$ to $2k$ Left, and the action going to
    $2k+1$ Right. Can you find an algorithm that outputs the solution to
    this problem without any search at all?
