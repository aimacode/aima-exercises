[Exercise 5.7 \[minimax-optimality-exercise\]](ex_7/)

Prove the following assertion: For every
game tree, the utility obtained by max using minimax
decisions against a suboptimal min will never be lower than
the utility obtained playing against an optimal min. Can
you come up with a game tree in which max can do still
better using a *suboptimal* strategy against a suboptimal
min?

<center>
<b id="line-game4-figure">Figure [line-game4-figure]</b> The starting position of a simple game.
</center>

![line-game4-figure](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/line-game4.svg)

Player $A$ moves first. The two players take turns moving, and each
player must move his token to an open adjacent space in either
direction.  If the opponent occupies an adjacent space, then a player
may jump over the opponent to the next open space if any. (For
example, if $A$ is on 3 and $B$ is on 2, then $A$ may move back to 1.)
The game ends when one player reaches the opposite end of the board.
If player $A$ reaches space 4 first, then the value of the game to $A$
is $+1$; if player $B$ reaches space 1 first, then the value of the
game to $A$ is $-1$.
