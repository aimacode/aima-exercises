

Consider the two-player game described in
Figure <a class="insideExerciseFigRef" href="#line-game4-figure">line-game4-figure</a><br>

1.  Draw the complete game tree, using the following conventions:<br>

    -   Write each state as $(s_A,s_B)$, where $s_A$ and $s_B$ denote
        the token locations.<br>

    -   Put each terminal state in a square box and write its game value
        in a circle.<br>

    -   Put <i>loop states</i> (states that already appear on
        the path to the root) in double square boxes. Since their value
        is unclear, annotate each with a “?” in a circle.<br>

2.  Now mark each node with its backed-up minimax value (also in
    a circle). Explain how you handled the “?” values and why.<br>

3.  Explain why the standard minimax algorithm would fail on this game
    tree and briefly sketch how you might fix it, drawing on your answer
    to (b). Does your modified algorithm give optimal decisions for all
    games with loops?<br>

4.  This 4-square game can be generalized to $n$ squares for any
    $n > 2$. Prove that $A$ wins if $n$ is even and loses if $n$ is odd.
