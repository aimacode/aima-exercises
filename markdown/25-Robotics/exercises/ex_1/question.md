

Monte Carlo localization is
<i>biased</i> for any finite sample size—i.e., the expected
value of the location computed by the algorithm differs from the true
expected value—because of the way particle filtering works. In this
question, you are asked to quantify this bias.<br>

To simplify, consider a world with four possible robot locations:
$X=\{x_1,x_2,x_3,x_4\}$. Initially, we
draw $N\geq {{\rm 1}}$ samples uniformly from among those locations. As
usual, it is perfectly acceptable if more than one sample is generated
for any of the locations $X$. Let $Z$ be a Boolean sensor variable
characterized by the following conditional probabilities:<br>


$$\begin{aligned}
P(z | x_1) = 0.8 \qquad\qquad P(z | x_1) = 0.2  \\
P(z | x_2) = 0.4 \qquad\qquad P(z | x_2) = 0.6  \\
P(z | x_3) = 0.1 \qquad\qquad P(z | x_3) = 0.9  \\
P(z | x_4) = 0.1 \qquad\qquad P(z | x_4) = 0.9 
\end{aligned}$$


<br>

MCL uses these probabilities to generate particle weights, which are
subsequently normalized and used in the resampling process. For
simplicity, let us assume we generate only one new sample in the
resampling process, regardless of $N$. This sample might correspond to
any of the four locations in $X$. Thus, the sampling process defines a
probability distribution over $X$.<br>

1.  What is the resulting probability distribution over $X$ for this new
    sample? Answer this question separately for
    $N=1,\ldots,10$, and for $N=\infty$.<br>

2.  The difference between two probability distributions $P$ and $Q$ can
    be measured by the KL divergence, which is defined as
    $${KL}(P,Q) = \sum_i P(x_i)\log\frac{P(x_i)}{Q(x_i)}\ .$$ What are
    the KL divergences between the distributions in (a) and the true
    posterior?<br>

3.  What modification of the problem formulation (not the algorithm!)
    would guarantee that the specific estimator above is unbiased even
    for finite values of $N$? Provide at least two such modifications
    (each of which should be sufficient).<br>
