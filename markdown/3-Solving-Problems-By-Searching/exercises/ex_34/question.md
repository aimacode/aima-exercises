

Consider the problem of moving $k$ knights from $k$ starting squares
$s_1,\ldots,s_k$ to $k$ goal squares $g_1,\ldots,g_k$, on an unbounded
chessboard, subject to the rule that no two knights can land on the same
square at the same time. Each action consists of moving <i>up
to</i> $k$ knights simultaneously. We would like to complete the
maneuver in the smallest number of actions.<br>

1.  What is the maximum branching factor in this state space, expressed
    as a function of $k$?<br>

2.  Suppose $h_i$ is an admissible heuristic for the problem of moving
    knight $i$ to goal $g_i$ by itself. Which of the following
    heuristics are admissible for the $k$-knight problem? Of those,
    which is the best?<br>

    1.  $\min\{h_1,\ldots,h_k\}$.<br>

    2.  $\max\{h_1,\ldots,h_k\}$.<br>

    3.  $\sum_{i= 1}^{k} h_i$.<br>

3.  Repeat (b) for the case where you are allowed to move only one
    knight at a time.
