[Exercise 17.10 \[3x3-mdp-exercise\]](ex_10/)

Consider the $3 \times 3$ world shown in
Figure [grid-mdp-figure](#grid-mdp-figure)(a). The transition model is the
same as in the $4\times 3$
Figure [sequential-decision-world-figure](#/): 80% of the
time the agent goes in the direction it selects; the rest of the time it
moves at right angles to the intended direction.

Implement value iteration for this world for each value of $r$ below.
Use discounted rewards with a discount factor of 0.99. Show the policy
obtained in each case. Explain intuitively why the value of $r$ leads to
each policy.

1.  $r = -100$

2.  $r = -3$

3.  $r = 0$

4.  $r = +3$
