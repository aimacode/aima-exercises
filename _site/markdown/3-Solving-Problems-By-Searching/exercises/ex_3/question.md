

Your goal is to navigate a robot out of a maze. The robot starts in the
center of the maze facing north. You can turn the robot to face north,
east, south, or west. You can direct the robot to move forward a certain
distance, although it will stop before hitting a wall.<br>

1.  Formulate this problem. How large is the state space?<br>

2.  In navigating a maze, the only place we need to turn is at the
    intersection of two or more corridors. Reformulate this problem
    using this observation. How large is the state space now?<br>

3.  From each point in the maze, we can move in any of the four
    directions until we reach a turning point, and this is the only
    action we need to do. Reformulate the problem using these actions.
    Do we need to keep track of the robot’s orientation now?<br>

4.  In our initial description of the problem we already abstracted from
    the real world, restricting actions and removing details. List three
    such simplifications we made.<br>
