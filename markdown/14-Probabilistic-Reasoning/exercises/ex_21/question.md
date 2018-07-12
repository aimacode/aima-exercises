[Exercise 14.21](ex_21/)

Consider the query
${\textbf{P}}({Rain}{{\,|\,}}{Sprinkler}{{\,=\,}}{true},{WetGrass}{{\,=\,}}{true})$
in Figure [rain-clustering-figure](#/)(a)
(page [rain-clustering-figure](#/)) and how Gibbs sampling can answer it.

1.  How many states does the Markov chain have?

2.  Calculate the **transition matrix**
    ${\textbf{Q}}$ containing
    $q({\textbf{y}}$ $\rightarrow$ ${\textbf{y}}')$
    for all ${\textbf{y}}$, ${\textbf{y}}'$.

3.  What does ${\textbf{ Q}}^2$, the square of the
    transition matrix, represent?

4.  What about ${\textbf{Q}}^n$ as $n\to \infty$?

5.  Explain how to do probabilistic inference in Bayesian networks,
    assuming that ${\textbf{Q}}^n$ is available. Is this a
    practical way to do inference?
