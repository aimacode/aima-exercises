

AC-3 puts back on the queue <i>every</i> arc
($X_{k}, X_{i}$) whenever <i>any</i> value is deleted from the
domain of $X_{i}$, even if each value of $X_{k}$ is consistent with
several remaining values of $X_{i}$. Suppose that, for every arc
($X_{k}, X_{i}$), we keep track of the number of remaining values of
$X_{i}$ that are consistent with each value of $X_{k}$. Explain how to
update these numbers efficiently and hence show that arc consistency can
be enforced in total time $O(n^2d^2)$.
