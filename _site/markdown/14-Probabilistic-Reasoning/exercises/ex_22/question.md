

This exercise explores the stationary
distribution for Gibbs sampling methods.<br>

1.  The convex composition $[\alpha, q_1; 1-\alpha, q_2]$ of $q_1$ and
    $q_2$ is a transition probability distribution that first chooses
    one of $q_1$ and $q_2$ with probabilities $\alpha$ and $1-\alpha$,
    respectively, and then applies whichever is chosen. Prove that if
    $q_1$ and $q_2$ are in detailed balance with $\pi$, then their
    convex composition is also in detailed balance with $\pi$.
    (<i>Note</i>: this result justifies a variant of GIBBS-ASK in which
    variables are chosen at random rather than sampled in a
    fixed sequence.)<br>

2.  Prove that if each of $q_1$ and $q_2$ has $\pi$ as its stationary
    distribution, then the sequential composition
    $q {{\,=\,}}q_1 \circ q_2$ also has $\pi$ as its
    stationary distribution.<br>
