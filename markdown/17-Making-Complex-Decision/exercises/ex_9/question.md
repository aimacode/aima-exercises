

This exercise considers two-player MDPs that correspond to zero-sum,
turn-taking games like those in
Chapter <a class="chapterRef" href="{{site.baseurl}}/game-playing-exercises/">game-playing-chapter</a>. Let the players be $A$
and $B$, and let $R(s)$ be the reward for player $A$ in state $s$. (The
reward for $B$ is always equal and opposite.)<br>

1.  Let $U_A(s)$ be the utility of state $s$ when it is $A$’s turn to
    move in $s$, and let $U_B(s)$ be the utility of state $s$ when it is
    $B$’s turn to move in $s$. All rewards and utilities are calculated
    from $A$’s point of view (just as in a minimax game tree). Write
    down Bellman equations defining $U_A(s)$ and $U_B(s)$.<br>

2.  Explain how to do two-player value iteration with these equations,
    and define a suitable termination criterion.<br>

3.  Consider the game described in
    Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/line-game4-figure.png">line-game4-figure</a> on page <a class="pageRef" id="pageref" title="" href="#">line-game4-figure</a>.
    Draw the state space (rather than the game tree), showing the moves
    by $A$ as solid lines and moves by $B$ as dashed lines. Mark each
    state with $R(s)$. You will find it helpful to arrange the states
    $(s_A,s_B)$ on a two-dimensional grid, using $s_A$ and $s_B$ as
    “coordinates.”<br>

4.  Now apply two-player value iteration to solve this game, and derive
    the optimal policy.<br>


    <figure>
      <img src="https://aimacode.github.io/aima-exercises/figures/grid-mdp-figure.svg" alt="grid-mdp-figure" id="grid-mdp-figure" style="width:100%">
      <figcaption><center><b>(a) $3 \times 3$ world for Exercise <a href="#">3x3-mdp-exercise</a>. The reward for each state is indicated. The upper right square is a terminal state. (b) $101 \times 3$ world for Exercise <a href="#">101x3-mdp-exercise</a> (omitting 93 identical columns in the middle).
      The start state has reward 0.</b></center></figcaption>
    </figure>
