

This exercise develops a space-efficient variant of
the forward–backward algorithm described in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/forward-backward-algorithm.png">forward-backward-algorithm</a> (page <a class="pageRef" title="" href="#">forward-backward-algorithm</a>).
We wish to compute $\textbf{P} (\textbf{X}_k|\textbf{e}_{1:t})$ for
$k=1,\ldots ,t$. This will be done with a divide-and-conquer
approach.<br>

1.  Suppose, for simplicity, that $t$ is odd, and let the halfway point
    be $h=(t+1)/2$. Show that $\textbf{P} (\textbf{X}_k|\textbf{e}_{1:t}) $
     can be computed for
    $k=1,\ldots ,h$ given just the initial forward message
    $\textbf{f}_{1:0}$, the backward message $\textbf{b}_{h+1:t}$, and the evidence
    $\textbf{e}_{1:h}$.<br>

2.  Show a similar result for the second half of the sequence.<br>

3.  Given the results of (a) and (b), a recursive divide-and-conquer
    algorithm can be constructed by first running forward along the
    sequence and then backward from the end, storing just the required
    messages at the middle and the ends. Then the algorithm is called on
    each half. Write out the algorithm in detail.<br>

4.  Compute the time and space complexity of the algorithm as a function
    of $t$, the length of the sequence. How does this change if we
    divide the input into more than two pieces?<br>
