#Solution Exeercise 3.2<br><br>
**a)** We’ll define the coordinate system so that the center of the maze is at (0, 0), and the
maze itself is a square from (−1, −1) to (1, 1).<br>
Initial state: robot at coordinate (0, 0), facing North.<br>
Goal test: either |x| > 1 or |y| > 1 where (x, y) is the current location.<br>
Successor function: move forwards any distance d; change direction robot it facing.<br>
Cost function: total distance moved.<br>
The state space is infinitely large, since the robot’s position is continuous.<br><br>
**b)** The state will record the intersection the robot is currently at, along with the direction
it’s facing. At the end of each corridor leaving the maze we will have an exit node.
We’ll assume some node corresponds to the center of the maze.<br>
Initial state: at the center of the maze facing North.<br>
Goal test: at an exit node.<br>
Successor function: move to the next intersection in front of us, if there is one; turn to
face a new direction.<br>
Cost function: total distance moved.<br>
There are 4n states, where n is the number of intersections.<br><br>
**c)** . Initial state: at the center of the maze.<br>
Goal test: at an exit node.<br>
Successor function: move to next intersection to the North, South, East, or West.<br>
Cost function: total distance moved.<br>
We no longer need to keep track of the robot’s orientation since it is irrelevant to predicting the outcome of our actions, and not part of the goal test. The motor system
that executes this plan will need to keep track of the robot’s current orientation, to know
when to rotate the robot.<br><br>
**d)** State abstractions:<br>
(i) Ignoring the height of the robot off the ground, whether it is tilted off the vertical<br>
(ii) The robot can face in only four directions. <br>
(iii) Other parts of the world ignored: possibility of other robots in the maze, the
weather in the Caribbean<br>
Action abstractions:<br>
(i) We assumed all positions we safely accessible: the robot couldn’t get stuck or
damaged.<br>
(ii) The robot can move as far as it wants, without having to recharge its batteries.<br>
(iii) Simplified movement system: moving forwards a certain distance, rather than controlled each individual motor and watching the sensors to detect collisions.<br>
