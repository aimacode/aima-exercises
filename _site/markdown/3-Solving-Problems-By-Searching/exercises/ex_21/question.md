

On page <a class="pageRef" title="" href="#">iterative-lengthening-page</a>,
we mentioned <b>iterative lengthening search</b>,
an iterative analog of uniform cost search. The idea is to use increasing limits on
path cost. If a node is generated whose path cost exceeds the current
limit, it is immediately discarded. For each new iteration, the limit is
set to the lowest path cost of any node discarded in the previous
iteration.<br>

1.  Show that this algorithm is optimal for general path costs.<br>

2.  Consider a uniform tree with branching factor $b$, solution depth
    $d$, and unit step costs. How many iterations will iterative
    lengthening require?<br>

3.  Now consider step costs drawn from the continuous range
    $[\epsilon,1]$, where $0 < \epsilon < 1$. How many iterations are
    required in the worst case? <br>

4.  Implement the algorithm and apply it to instances of the 8-puzzle
    and traveling salesperson problems. Compare the algorithm’s
    performance to that of uniform-cost search, and comment on
    your results. <br>
