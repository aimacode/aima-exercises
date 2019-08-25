

Consider the simplified robot shown in
Figure <a class="insideExercisesFigRef"  href="#FigEx3">FigEx3</a>. Suppose the robot’s Cartesian
coordinates are known at all times, as are those of its goal location.
However, the locations of the obstacles are unknown. The robot can sense
obstacles in its immediate proximity, as illustrated in this figure. For
simplicity, let us assume the robot’s motion is noise-free, and the
state space is discrete. Figure <a class="insideExercisesFigRef"  href="#FigEx3">FigEx3</a> is only one
example; in this exercise you are required to address all possible grid
worlds with a valid path from the start to the goal location.<br>

1.  Design a deliberate controller that guarantees that the robot always
    reaches its goal location if at all possible. The deliberate
    controller can memorize measurements in the form of a map that is
    being acquired as the robot moves. Between individual moves, it may
    spend arbitrary time deliberating.<br>

2.  Now design a <i>reactive</i> controller for the same task.
    This controller may not memorize past sensor measurements. (It may
    not build a map!) Instead, it has to make all decisions based on the
    current measurement, which includes knowledge of its own location
    and that of the goal. The time to make a decision must be
    independent of the environment size or the number of past
    time steps. What is the maximum number of steps that it may take for
    your robot to arrive at the goal?<br>

3.  How will your controllers from (a) and (b) perform if any of the
    following six conditions apply: continuous state space, noise in
    perception, noise in motion, noise in both perception and motion,
    unknown location of the goal (the goal can be detected only when
    within sensor range), or moving obstacles. For each condition and
    each controller, give an example of a situation where the robot
    fails (or explain why it cannot fail).<br>
