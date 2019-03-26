[Exercise 14.6](ex_6/)

Suppose that in a Bayesian network containing an unobserved variable
$Y$, all the variables in the Markov blanket ${MB}(Y)$ have been
observed.

1.  Prove that removing the node $Y$ from the network will not affect
    the posterior distribution for any other unobserved variable in
    the network.

2.  Discuss whether we can remove $Y$ if we are planning to use (i)
    rejection sampling and (ii) likelihood weighting.

<center>
<b id="handedness-figure">Figure [handedness-figure]</b> Three possible structures for a Bayesian network describing genetic inheritance of handedness.
</center>

$\quad\quad\quad$ |  $\quad\quad\quad$ | $\quad\quad\quad$
:-------------------------:|:-------------------------:|:-------------------------:
![handedness-figure](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/handedness1.svg)  |  ![handedness-figure](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/handedness2.svg) |  ![handedness-figure](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/handedness3.svg)
(a) | (b) | (c)