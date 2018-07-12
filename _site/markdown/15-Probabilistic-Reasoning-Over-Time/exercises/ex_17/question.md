[Exercise 15.17](ex_17/)

For the DBN specified in Exercise [sleep1-exercise](#/) and
for the evidence values

$$
\textbf{e}_1 = not\space red\space eyes,\space not\space sleeping\space in\space class
$$
$$
\textbf{e}_2 = red\space eyes,\space not\space sleeping\space in\space class
$$
$$
\textbf{e}_3 = red\space eyes,\space sleeping\space in\space class
$$

perform the following computations:

1.  State estimation: Compute $$P({EnoughSleep}_t | \textbf{e}_{1:t})$$ for each
    of $t = 1,2,3$.

2.  Smoothing: Compute $$P({EnoughSleep}_t | \textbf{e}_{1:3})$$ for each of
    $t = 1,2,3$.

3.  Compare the filtered and smoothed probabilities for $t=1$ and $t=2$.
