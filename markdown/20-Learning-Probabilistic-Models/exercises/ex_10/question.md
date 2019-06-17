

Consider a single Boolean random variable $Y$ (the “classification”).
Let the prior probability $P(Y=true)$ be $\pi$. Let’s try to
find $\pi$, given a training set $D=(y_1,\ldots,y_N)$ with $N$
independent samples of $Y$. Furthermore, suppose $p$ of the $N$ are
positive and $n$ of the $N$ are negative.<br>

1.  Write down an expression for the likelihood of $D$ (i.e., the
    probability of seeing this particular sequence of examples, given a
    fixed value of $\pi$) in terms of $\pi$, $p$, and $n$.<br>

2.  By differentiating the log likelihood $L$, find the value of $\pi$
    that maximizes the likelihood.<br>

3.  Now suppose we add in $k$ Boolean random variables
    $X_1, X_2,\ldots,X_k$ (the “attributes”) that describe each sample,
    and suppose we assume that the attributes are conditionally
    independent of each other given the goal $Y$. Draw the Bayes net
    corresponding to this assumption.<br>

4.  Write down the likelihood for the data including the attributes,
    using the following additional notation:<br>

    -   $\alpha_i$ is $P(X_i=true \| Y=true)$.<br>

    -   $\beta_i$ is $P(X_i=true \| Y=false)$.<br>

    -   $p_i^+$ is the count of samples for which $X_i=true$
        and $Y=true$.<br>

    -   $n_i^+$ is the count of samples for which $X_i=false$
        and $Y=true$.<br>

    -   $p_i^-$ is the count of samples for which $X_i=true$
        and $Y=false$.<br>

    -   $n_i^-$ is the count of samples for which $X_i=false$
        and $Y=false$.<br>

    \[<i>Hint</i>: consider first the probability of seeing a
    single example with specified values for $X_1, X_2,\ldots,X_k$ and
    $Y$.\]<br>

5.  By differentiating the log likelihood $L$, find the values of
    $\alpha_i$ and $\beta_i$ (in terms of the various counts) that
    maximize the likelihood and say in words what these
    values represent.<br>

6.  Let $k = 2$, and consider a data set with 4 all four possible
    examples of thexor function. Compute the maximum
    likelihood estimates of $\pi$, $\alpha_1$, $\alpha_2$, $\beta_1$,
    and $\beta_2$.<br>

7.  Given these estimates of $\pi$, $\alpha_1$, $\alpha_2$, $\beta_1$,
    and $\beta_2$, what are the posterior probabilities
    $P(Y=true | x_1,x_2)$ for each example?<br>
