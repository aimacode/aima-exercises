[Exercise 6.20](ex_20/)

Consider the problem of tiling a surface (completely and exactly
covering it) with $n$ dominoes ($2\times
1$ rectangles). The surface is an arbitrary edge-connected (i.e.,
adjacent along an edge, not just a corner) collection of $2n$
$1\times 1$ squares (e.g., a checkerboard, a checkerboard with some
squares missing, a $10\times 1$ row of squares, etc.).

1.  Formulate this problem precisely as a CSP where the dominoes are
    the variables.

2.  Formulate this problem precisely as a CSP where the squares are the
    variables, keeping the state space as small as possible.
    (*Hint:* does it matter which particular domino goes on
    a given pair of squares?)

3.  Construct a surface consisting of 6 squares such that your CSP
    formulation from part (b) has a *tree-structured*
    constraint graph.

4.  Describe exactly the set of solvable instances that have a
    tree-structured constraint graph.

<div id="footnote1">^1. @Ginsberg+al:1990 discuss several methods for constructing crossword puzzles.
@Littman+al:1999 tackle the harder problem of solving them.</div>
