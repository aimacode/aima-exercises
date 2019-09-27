

Consider the problem of solving two 8-puzzles.<br>

1.  Give a complete problem formulation in the style of
    Chapter <a class="chapterRef" title="" href="{{site.baseurl}}/search-exercises/">search-chapter.</a><br>

2.  How large is the reachable state space? Give an exact
    numerical expression.<br>

3.  Suppose we make the problem adversarial as follows: the two players
    take turns moving; a coin is flipped to determine the puzzle on
    which to make a move in that turn; and the winner is the first to
    solve one puzzle. Which algorithm can be used to choose a move in
    this setting?<br>

4.  Does the game eventually end, given optimal play? Explain.<br>
(a) A map where the cost of every edge is 1. Initially the pursuer $P$ is at
node <b>b</b> and the evader $E$ is at node <b>d</b> <br>(b) A partial game tree for this map.
Each node is labeled with the $P,E$ positions. $P$ moves first. Branches marked "?" have yet to be explored.
<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/pursuit-evasion-game.svg" alt="pursuit-evasion-game-figure" id="pursuit-evasion-game-figure" style="width:100%">
  <figcaption><center><b>Pursuit evasion game Figure</b></center></figcaption>
</figure>
