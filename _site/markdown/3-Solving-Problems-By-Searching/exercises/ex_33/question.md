

$n$ vehicles occupy squares $(1,1)$ through $(n,1)$ (i.e., the bottom
row) of an $n\times n$ grid. The vehicles must be moved to the top row
but in reverse order; so the vehicle $i$ that starts in $(i,1)$ must end
up in $(n-i+1,n)$. On each time step, every one of the $n$ vehicles can
move one square up, down, left, or right, or stay put; but if a vehicle
stays put, one other adjacent vehicle (but not more than one) can hop
over it. Two vehicles cannot occupy the same square. <br>

1.  Calculate the size of the state space as a function of $n$.<br>

2.  Calculate the branching factor as a function of $n$.<br>

3.  Suppose that vehicle $i$ is at $(x_i,y_i)$; write a nontrivial
    admissible heuristic $h_i$ for the number of moves it will require
    to get to its goal location $(n-i+1,n)$, assuming no other vehicles
    are on the grid.<br>

4.  Which of the following heuristics are admissible for the problem of
    moving all $n$ vehicles to their destinations? Explain.<br>

    1.  $\sum_{i= 1}^{n} h_i$.<br>

    2.  $\max\{h_1,\ldots,h_n\}$.<br>

    3.  $\min\{h_1,\ldots,h_n\}$.<br>
