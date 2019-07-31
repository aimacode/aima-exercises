

Consider a mobile robot moving on a horizontal surface. Suppose that the
robot can execute two kinds of motions:<br>

-   Rolling forward a specified distance.<br>

-   Rotating in place through a specified angle.<br>

The state of such a robot can be characterized in terms of three
parameters ${\langle}x,y,\phi$, the x-coordinate and y-coordinate of the
robot (more precisely, of its center of rotation) and the robot’s
orientation expressed as the angle from the positive x direction. The
action “$Roll(D)$” has the effect of changing state ${\langle}x,y,\phi$
to ${\langle}x+D \cos(\phi), y+D \sin(\phi), \phi {\rangle}$, and the
action $Rotate(\theta)$ has the effect of changing state<br>
${\langle}x,y,\phi {\rangle}$ to
${\langle}x,y, \phi + \theta {\rangle}$.

1.  Suppose that the robot is initially at ${\langle}0,0,0 {\rangle}$
    and then executes the actions $Rotate(60^{\circ})$, $Roll(1)$,
    $Rotate(25^{\circ})$, $Roll(2)$. What is the final state of the
    robot?<br>

2.  Now suppose that the robot has imperfect control of its own
    rotation, and that, if it attempts to rotate by $\theta$, it may
    actually rotate by any angle between $\theta-10^{\circ}$ and
    $\theta+10^{\circ}$. In that case, if the robot attempts to carry
    out the sequence of actions in (A), there is a range of possible
    ending states. What are the minimal and maximal values of the
    x-coordinate, the y-coordinate and the orientation in the final
    state?<br>

3.  Let us modify the model in (B) to a probabilistic model in which,
    when the robot attempts to rotate by $\theta$, its actual angle of
    rotation follows a Gaussian distribution with mean $\theta$ and
    standard deviation $10^{\circ}$. Suppose that the robot executes the
    actions $Rotate(90^{\circ})$, $Roll(1)$. Give a simple argument
    that (a) the expected value of the location at the end is not equal
    to the result of rotating exactly $90^{\circ}$ and then rolling
    forward 1 unit, and (b) that the distribution of locations at the
    end does not follow a Gaussian. (Do not attempt to calculate the
    true mean or the true distribution.)<br>

    The point of this exercise is that rotational uncertainty quickly
    gives rise to a lot of positional uncertainty and that dealing with
    rotational uncertainty is painful, whether uncertainty is treated in
    terms of hard intervals or probabilistically, due to the fact that
    the relation between orientation and position is both non-linear
    and non-monotonic.<br>
<figure>
  <img src="http://aimacode.github.io/aima-exercises/figures/robotics-pic7.svg" alt="FigEx3" id="FigEx3" style="width:100%">
    <figcaption><center><b>Simplified robot in a maze. See Exercise <a href="#">robot-exploration-exercise</a></b></center></figcaption>
</figure>
