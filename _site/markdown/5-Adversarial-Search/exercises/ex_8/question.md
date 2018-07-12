[Exercise 5.8](ex_8/)

Consider the two-player game described in
Figure [line-game4-figure](#line-game4-figure).

1.  Draw the complete game tree, using the following conventions:

    -   Write each state as $(s_A,s_B)$, where $s_A$ and $s_B$ denote
        the token locations.

    -   Put each terminal state in a square box and write its game value
        in a circle.

    -   Put *loop states* (states that already appear on
        the path to the root) in double square boxes. Since their value
        is unclear, annotate each with a “?” in a circle.

2.  Now mark each node with its backed-up minimax value (also in
    a circle). Explain how you handled the “?” values and why.

3.  Explain why the standard minimax algorithm would fail on this game
    tree and briefly sketch how you might fix it, drawing on your answer
    to (b). Does your modified algorithm give optimal decisions for all
    games with loops?

4.  This 4-square game can be generalized to $n$ squares for any
    $n > 2$. Prove that $A$ wins if $n$ is even and loses if $n$ is odd.
