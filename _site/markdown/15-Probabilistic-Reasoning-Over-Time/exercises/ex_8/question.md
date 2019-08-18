

Consider a version of the vacuum robot
(page <a class="pageRef" title="" href="#">vacuum-maze-hmm2-figure</a>) that has the policy of going straight for as long
as it can; only when it encounters an obstacle does it change to a new
(randomly selected) heading. To model this robot, each state in the
model consists of a <i>(location, heading)</i> pair. Implement
this model and see how well the Viterbi algorithm can track a robot with
this model. The robot’s policy is more constrained than the random-walk
robot; does that mean that predictions of the most likely path are more
accurate?
