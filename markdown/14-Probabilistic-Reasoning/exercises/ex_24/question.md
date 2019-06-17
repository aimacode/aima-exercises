

Three soccer teams $A$, $B$, and $C$, play each
other once. Each match is between two teams, and can be won, drawn, or
lost. Each team has a fixed, unknown degree of quality—an integer
ranging from 0 to 3—and the outcome of a match depends probabilistically
on the difference in quality between the two teams.<br>

1.  Construct a relational probability model to describe this domain,
    and suggest numerical values for all the necessary
    probability distributions.<br>

2.  Construct the equivalent Bayesian network for the three matches.<br>

3.  Suppose that in the first two matches $A$ beats $B$ and draws with
    $C$. Using an exact inference algorithm of your choice, compute the
    posterior distribution for the outcome of the third match.<br>

4.  Suppose there are $n$ teams in the league and we have the results
    for all but the last match. How does the complexity of predicting
    the last game vary with $n$?<br>

5.  Investigate the application of MCMC to this problem. How quickly
    does it converge in practice and how well does it scale?<br>
