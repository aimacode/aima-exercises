

Suppose you have a chess program that can evaluate 10 million nodes per
second. Decide on a compact representation of a game state for storage
in a transposition table. About how many entries can you fit in a
2-gigabyte in-memory table? Will that be enough for the three minutes of
search allocated for one move? How many table lookups can you do in the
time it would take to do one evaluation? Now suppose the transposition
table is stored on disk. About how many evaluations could you do in the
time it takes to do one disk seek with standard disk hardware?<br>


<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/pruning.svg" alt="trivial-chance-game-figure" id="trivial-chance-game-figure" style="width:100%">
  <figcaption><center><b>The complete game tree for a trivial game with chance nodes..</b></center></figcaption>
</figure>
