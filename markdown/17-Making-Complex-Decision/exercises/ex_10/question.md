Consider the $3 \times 3$ world shown in
Figure <a class="insideExercisesFigRef"  href="#grid-mdp-figure">grid-mdp-figure</a>(a). The transition model is the
same as in the $4\times 3$
Figure <a class="insideBookFigRef" id="insidebookfigref" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/sequential-decision-world-figure.png">sequential-decision-world-figure</a>: 80% of the
time the agent goes in the direction it selects; the rest of the time it
moves at right angles to the intended direction.<br>

Implement value iteration for this world for each value of $r$ below.
Use discounted rewards with a discount factor of 0.99. Show the policy
obtained in each case. Explain intuitively why the value of $r$ leads to
each policy.<br>

1.  $r = -100$<br>

2.  $r = -3$<br>

3.  $r = 0$<br>

4.  $r = +3$<br>
