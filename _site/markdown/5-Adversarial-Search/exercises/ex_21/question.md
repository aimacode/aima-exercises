[Exercise 5.21 \[game-playing-monte-carlo-exercise\]](ex_21/)

Consider the following procedure
for choosing moves in games with chance nodes:

-   Generate some dice-roll sequences (say, 50) down to a suitable depth
    (say, 8).

-   With known dice rolls, the game tree becomes deterministic. For each
    dice-roll sequence, solve the resulting deterministic game tree
    using alpha–beta.

-   Use the results to estimate the value of each move and to choose
    the best.

Will this procedure work well? Why (or why not)?
