

This exercise is concerned with filtering in an environment with no
landmarks. Consider a vacuum robot in an empty room, represented by an
$n \times m$ rectangular grid. The robot’s location is hidden; the only
evidence available to the observer is a noisy location sensor that gives
an approximation to the robot’s location. If the robot is at location
$(x, y)$ then with probability .1 the sensor gives the correct location,
with probability .05 each it reports one of the 8 locations immediately
surrounding $(x, y)$, with probability .025 each it reports one of the
16 locations that surround those 8, and with the remaining probability
of .1 it reports “no reading.” The robot’s policy is to pick a direction
and follow it with probability .7 on each step; the robot switches to a
randomly selected new heading with probability .3 (or with probability 1
if it encounters a wall). Implement this as an HMM and do filtering to
track the robot. How accurately can we track the robot’s path?

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
