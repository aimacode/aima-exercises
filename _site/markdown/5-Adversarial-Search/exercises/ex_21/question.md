Consider the following procedure
for choosing moves in games with chance nodes:<br>

-   Generate some dice-roll sequences (say, 50) down to a suitable depth
    (say, 8).<br>

-   With known dice rolls, the game tree becomes deterministic. For each
    dice-roll sequence, solve the resulting deterministic game tree
    using alpha–beta.<br>

-   Use the results to estimate the value of each move and to choose
    the best.<br>

Will this procedure work well? Why (or why not)?<br>
