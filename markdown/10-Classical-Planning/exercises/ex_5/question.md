

The original {Strips} planner was designed to control Shakey the robot.
Figure <a class="insideExercisesFigRef" href="#shakey-figure">shakey-figure</a> shows a version of Shakey’s world
consisting of four rooms lined up along a corridor, where each room has
a door and a light switch. The actions in Shakey’s world include moving from place to place,
pushing movable objects (such as boxes), climbing onto and down from
rigid objects (such as boxes), and turning light switches on and off.
The robot itself could not climb on a box or toggle a switch, but the
planner was capable of finding and printing out plans that were beyond
the robot’s abilities. Shakey’s six actions are the following:<br>

-   ${Go}(x,y,r)$, which requires that Shakey be ${At}$ $x$ and that
    $x$ and $y$ are locations ${In}$ the same room $r$. By convention
    a door between two rooms is in both of them.<br>

-   Push a box $b$ from location $x$ to location $y$ within the same
    room: ${Push}(b,x,y,r)$. You will need the predicate ${Box}$ and
    constants for the boxes.<br>

-   Climb onto a box from position $x$: ${ClimbUp}(x, b)$; climb down
    from a box to position $x$: ${ClimbDown}(b, x)$. We will need the
    predicate ${On}$ and the constant ${Floor}$.<br>

-   Turn a light switch on or off: ${TurnOn}(s,b)$;
    ${TurnOff}(s,b)$. To turn a light on or off, Shakey must be on top
    of a box at the light switch’s location.<br>

Write PDDL sentences for Shakey’s six actions and the initial state from
Construct a plan for Shakey to
get ${Box}{}_2$ into ${Room}{}_2$.<br>

  <figure>
    <img src="https://aimacode.github.io/aima-exercises/figures/shakey2.svg" alt="shakey-figure" id="shakey-figure" style="width:100%">
    <figcaption><center><b>Shakey's world. Shakey can move between landmarks within a room, can pass through the door between rooms, can climb climbable objects and push pushable objects, and can flip light switches.</b></center></figcaption>
  </figure>
