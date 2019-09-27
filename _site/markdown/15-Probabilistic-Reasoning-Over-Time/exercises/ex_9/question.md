

We have described three policies for the vacuum robot: (1) a uniform
random walk, (2) a bias for wandering southeast, as described in
Exercise <a class="exerciseRef" href="{{ site.baseurl }}/dbn-exercises/ex_7/">hmm-robust-exercise</a>, and (3) the policy
described in Exercise <a href="#">roomba-viterbi-exercise</a>. Suppose
an observer is given the observation sequence from a vacuum robot, but
is not sure which of the three policies the robot is following. What
approach should the observer use to find the most likely path, given the
observations? Implement the approach and test it. How much does the
localization accuracy suffer, compared to the case in which the observer
knows which policy the robot is following?
