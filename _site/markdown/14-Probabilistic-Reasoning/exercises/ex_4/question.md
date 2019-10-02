

The <b>arc reversal</b> operation of in a Bayesian network allows us to change the direction
of an arc $X\rightarrow Y$ while preserving the joint probability
distribution that the network represents <a class="paperRef" title="" href="">Shachter:1986</a>. Arc reversal
may require introducing new arcs: all the parents of $X$ also become
parents of $Y$, and all parents of $Y$ also become parents of $X$.<br>

1.  Assume that $X$ and $Y$ start with $m$ and $n$ parents,
    respectively, and that all variables have $k$ values. By calculating
    the change in size for the CPTs of $X$ and $Y$, show that the total
    number of parameters in the network cannot decrease during
    arc reversal. (<i>Hint</i>: the parents of $X$ and $Y$ need
    not be disjoint.)<br>

2.  Under what circumstances can the total number remain constant?<br>

3.  Let the parents of $X$ be $\textbf{U} \cup \textbf{V}$ and the parents of $Y$ be
    $\textbf{V} \cup \textbf{W}$, where $\textbf{U}$ and $\textbf{W}$ are disjoint. The formulas for the
    new CPTs after arc reversal are as follows: $$\begin{aligned}
    {\textbf{P}}(Y | \textbf{U},\textbf{V},\textbf{W}) &=& \sum_x {\textbf{P}}(Y | \textbf{V},\textbf{W}, x) {\textbf{P}}(x | \textbf{U}, \textbf{V}) \\
    {\textbf{P}}(X | \textbf{U},\textbf{V},\textbf{W}, Y) &=& {\textbf{P}}(Y | X, \textbf{V}, \textbf{W}) {\textbf{P}}(X | \textbf{U}, \textbf{V}) / {\textbf{P}}(Y | \textbf{U},\textbf{V},\textbf{W})\ .\end{aligned}$$
    Prove that the new network expresses the same joint distribution
    over all variables as the original network.
