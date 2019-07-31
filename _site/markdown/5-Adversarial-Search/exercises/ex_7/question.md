Prove the following assertion: For every
game tree, the utility obtained by max using minimax
decisions against a suboptimal min will never be lower than
the utility obtained playing against an optimal min. Can
you come up with a game tree in which max can do still
better using a <i>suboptimal</i> strategy against a suboptimal
min?
<br>
Player $A$ moves first. The two players take turns moving, and each
player must move his token to an open adjacent space in either
direction.  If the opponent occupies an adjacent space, then a player
may jump over the opponent to the next open space if any. (For
example, if $A$ is on 3 and $B$ is on 2, then $A$ may move back to 1.)
The game ends when one player reaches the opposite end of the board.
If player $A$ reaches space 4 first, then the value of the game to $A$
is $+1$; if player $B$ reaches space 1 first, then the value of the
game to $A$ is $-1$.
<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/line-game4.svg" alt="line-game4-figure" id="line-game4-figure" style="width:100%">
  <figcaption><center><b>The starting position of a simple game.</b></center></figcaption>
</figure>

