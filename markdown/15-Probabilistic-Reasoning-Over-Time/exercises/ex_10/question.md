

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
and follow it with probability .8 on each step; the robot switches to a
randomly selected new heading with probability .2 (or with probability 1
if it encounters a wall). Implement this as an HMM and do filtering to
track the robot. How accurately can we track the robot’s path?
