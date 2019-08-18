Develop a formal proof of correctness for alpha–beta pruning. To do
this, consider the situation shown in
Figure <a class="insideExerciseFigRef" href="#alpha-beta-proof-figure">alpha-beta-proof-figure</a>. The question is whether
to prune node $n_j$, which is a max-node and a descendant of node $n_1$.
The basic idea is to prune it if and only if the minimax value of $n_1$
can be shown to be independent of the value of $n_j$.<br>

1.  Mode $n_1$ takes on the minimum value among its children:
    $n_1 = \min(n_2,n_{{21}},\ldots,n_{2b_2})$. Find a similar
    expression for $n_2$ and hence an expression for $n_1$ in terms of
    $n_j$.<br>

2.  Let $l_i$ be the minimum (or maximum) value of the nodes to the
    <i>left</i> of node $n_i$ at depth $i$, whose minimax value
    is already known. Similarly, let $r_i$ be the minimum (or maximum)
    value of the unexplored nodes to the right of $n_i$ at depth $i$.
    Rewrite your expression for $n_1$ in terms of the $l_i$ and
    $r_i$ values.<br>

3.  Now reformulate the expression to show that in order to affect
    $n_1$, $n_j$ must not exceed a certain bound derived from the
    $l_i$ values.<br>

4.  Repeat the process for the case where $n_j$ is a min-node.<br>
<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/alpha-beta-proof.svg" alt="alpha-beta-proof-figure" id="alpha-beta-proof-figure" style="width:100%">
  <figcaption><center><b>Situation when considering whether to prune node $n_j$.</b></center></figcaption>
</figure>
