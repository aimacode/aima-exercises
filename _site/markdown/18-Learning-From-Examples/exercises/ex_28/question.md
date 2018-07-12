[Exercise 18.28 \[perceptron-ML-gradient-exercise\]](ex_28/)

Section [logistic-regression-section](#/)
(page [logistic-regression-section](#/)) noted that the output of the logistic function
could be interpreted as a *probability* $p$ assigned by the
model to the proposition that $f(\textbf{x}){{\,=\,}}1$; the probability that
$f(\textbf{x}){{\,=\,}}0$ is therefore $1-p$. Write down the probability $p$
as a function of $\textbf{x}$ and calculate the derivative of $\log p$ with
respect to each weight $w_i$. Repeat the process for $\log (1-p)$. These
calculations give a learning rule for minimizing the
negative-log-likelihood loss function for a probabilistic hypothesis.
Comment on any resemblance to other learning rules in the chapter.
