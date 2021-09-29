

Often, we wish to monitor a continuous-state
system whose behavior switches unpredictably among a set of $k$ distinct
“modes.” For example, an aircraft trying to evade a missile can execute
a series of distinct maneuvers that the missile may attempt to track. A
Bayesian network representation of such a <b>switching Kalman
filter</b> model is shown in the figure below. The follow-up questions will be based on this diagram.

<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/switching-kf.svg" alt="switching-kf-figure" id="switching-kf-figure" style="width:100%">
  <figcaption><center><b>A Bayesian network representation of a switching Kalman filter. The switching variable $S_t$ is a discrete state variable whose value determines
  the transition model for the continuous state variables $\textbf{X}_t$.
  For any discrete state $\textit{i}$, the transition model
  $\textbf{P}(\textbf{X}_{t+1}|\textbf{X}_t,S_t= i)$ is a linear Gaussian model, just as in a
  regular Kalman filter. The transition model for the discrete state,
  $\textbf{P}(S_{t+1}|S_t)$, can be thought of as a matrix, as in a hidden
  Markov model.</b></center></figcaption>
</figure>

1.  Suppose that the discrete state $S_t$ has $k$ possible values and
    that the prior continuous state estimate
    ${\textbf{P}}(\textbf{X}_0)$ is a multivariate
    Gaussian distribution. Show that the prediction
    ${\textbf{P}}(\textbf{X}_1)$ is a <b>mixture of
    Gaussians</b>—that is, a weighted sum of Gaussians such
    that the weights sum to 1.<br><br>

2.  Show that if the current continuous state estimate
    ${\textbf{P}}(\textbf{X}_t|\textbf{e}_{1:t})$ is a mixture of $m$ Gaussians,
    then in the general case the updated state estimate
    ${\textbf{P}}(\textbf{X}_{t+1}|\textbf{e}_{1:t+1})$ will be a mixture of
    $km$ Gaussians.<br><br>

3.  What aspect of the temporal process do the weights in the Gaussian
    mixture represent?<br><br>

The results in (a) and (b) show that the representation of the posterior
grows without limit even for switching Kalman filters, which are among
the simplest hybrid dynamic models.
