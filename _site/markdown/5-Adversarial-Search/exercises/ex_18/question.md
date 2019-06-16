[Exercise 5.18](ex_18/)

This question considers pruning in games with chance nodes.
Figure [trivial-chance-game-figure](#trivial-chance-game-figure) shows the complete
game tree for a trivial game. Assume that the leaf nodes are to be
evaluated in left-to-right order, and that before a leaf node is
evaluated, we know nothing about its value—the range of possible values
is $-\infty$ to $\infty$.

1.  Copy the figure, mark the value of all the internal nodes, and
    indicate the best move at the root with an arrow.

2.  Given the values of the first six leaves, do we need to evaluate the
    seventh and eighth leaves? Given the values of the first seven
    leaves, do we need to evaluate the eighth leaf? Explain
    your answers.

3.  Suppose the leaf node values are known to lie between –2 and 2
    inclusive. After the first two leaves are evaluated, what is the
    value range for the left-hand chance node?

4.  Circle all the leaves that need not be evaluated under the
    assumption in (c).
