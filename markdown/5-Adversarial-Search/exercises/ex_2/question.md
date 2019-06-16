[Exercise 5.2](ex_2/)

Consider the problem of solving two 8-puzzles.

1.  Give a complete problem formulation in the style of
    Chapter [search-chapter](#/).

2.  How large is the reachable state space? Give an exact
    numerical expression.

3.  Suppose we make the problem adversarial as follows: the two players
    take turns moving; a coin is flipped to determine the puzzle on
    which to make a move in that turn; and the winner is the first to
    solve one puzzle. Which algorithm can be used to choose a move in
    this setting?

4.  Does the game eventually end, given optimal play? Explain.

<center>
<b id="pursuit-evasion-game-figure">Figure [pursuit-evasion-game-figure]</b> (a) A map where the cost of every edge is 1. Initially the pursuer $P$ is at
node <b>b</b> and the evader $E$ is at node <b>d</b> (b) A partial game tree for this map.
Each node is labeled with the $P,E$ positions. $P$ moves first. Branches marked "?" have yet to be explored.
</center>

![pursuit-evasion-game-figure](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/pursuit-evasion-game.svg)
