

Consider the query
${\textbf{P}}({Rain}{{\,|\,}}{Sprinkler}{{\,=\,}}{true},{WetGrass}{{\,=\,}}{true})$
in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/rain-clustering-figure.png">rain-clustering-figure</a>(a)
(page <a class="pageRef" title="" href="#">rain-clustering-figure</a>) and how Gibbs sampling can answer it.<br>

1.  How many states does the Markov chain have?<br>

2.  Calculate the <b>transition matrix</b>
    ${\textbf{Q}}$ containing
    $q({\textbf{y}}$ $\rightarrow$ ${\textbf{y}}')$
    for all ${\textbf{y}}$, ${\textbf{y}}'$.<br>

3.  What does ${\textbf{ Q}}^2$, the square of the
    transition matrix, represent?<br>

4.  What about ${\textbf{Q}}^n$ as $n\to \infty$?<br>

5.  Explain how to do probabilistic inference in Bayesian networks,
    assuming that ${\textbf{Q}}^n$ is available. Is this a
    practical way to do inference?
