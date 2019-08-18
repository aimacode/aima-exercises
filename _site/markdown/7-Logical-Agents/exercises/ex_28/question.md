Minesweeper, the well-known computer game, is
closely related to the wumpus world. A minesweeper world is
a rectangular grid of $N$ squares with $M$ invisible mines scattered
among them. Any square may be probed by the agent; instant death follows
if a mine is probed. Minesweeper indicates the presence of mines by
revealing, in each probed square, the <i>number</i> of mines
that are directly or diagonally adjacent. The goal is to probe every
unmined square.

1.  Let $X_{i,j}$ be true iff square $[i,j]$ contains a mine. Write down
    the assertion that exactly two mines are adjacent to \[1,1\] as a
    sentence involving some logical combination of
    $X_{i,j}$ propositions.

2.  Generalize your assertion from (a) by explaining how to construct a
    CNF sentence asserting that $k$ of $n$ neighbors contain mines.

3.  Explain precisely how an agent can use {DPLL} to prove that a given square
    does (or does not) contain a mine, ignoring the global constraint
    that there are exactly $M$ mines in all.

4.  Suppose that the global constraint is constructed from your method
    from part (b). How does the number of clauses depend on $M$ and $N$?
    Suggest a way to modify {DPLL} so that the global constraint does not need
    to be represented explicitly.

5.  Are any conclusions derived by the method in part (c) invalidated
    when the global constraint is taken into account?

6.  Give examples of configurations of probe values that induce
    <i>long-range dependencies</i> such that the contents of a
    given unprobed square would give information about the contents of a
    far-distant square. (<i>Hint</i>: consider an
    $N\times 1$ board.)
