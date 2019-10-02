

We can turn the navigation problem in
Exercise <a class="exerciseRef" href="{{ site.baseurl }}/search-exercises/ex_9/">path-planning-exercise</a> into an environment as
follows:<br>

-   The percept will be a list of the positions, <i>relative to the
    agent</i>, of the visible vertices. The percept does
    <i>not</i> include the position of the robot! The robot must
    learn its own position from the map; for now, you can assume that
    each location has a different “view.”<br>

-   Each action will be a vector describing a straight-line path
    to follow. If the path is unobstructed, the action succeeds;
    otherwise, the robot stops at the point where its path first
    intersects an obstacle. If the agent returns a zero motion vector
    and is at the goal (which is fixed and known), then the environment
    teleports the agent to a <i>random location</i> (not inside
    an obstacle).<br>

-   The performance measure charges the agent 1 point for each unit of
    distance traversed and awards 1000 points each time the goal
    is reached.<br>

1.  Implement this environment and a problem-solving agent for it. After
    each teleportation, the agent will need to formulate a new problem,
    which will involve discovering its current location.<br>

2.  Document your agent’s performance (by having the agent generate
    suitable commentary as it moves around) and report its performance
    over 100 episodes.<br>

3.  Modify the environment so that 30% of the time the agent ends up at
    an unintended destination (chosen randomly from the other visible
    vertices if any; otherwise, no move at all). This is a crude model
    of the motion errors of a real robot. Modify the agent so that when
    such an error is detected, it finds out where it is and then
    constructs a plan to get back to where it was and resume the
    old plan. Remember that sometimes getting back to where it was might
    also fail! Show an example of the agent successfully overcoming two
    successive motion errors and still reaching the goal.<br>

4.  Now try two different recovery schemes after an error: (1) head for
    the closest vertex on the original route; and (2) replan a route to
    the goal from the new location. Compare the performance of the three
    recovery schemes. Would the inclusion of search costs affect the
    comparison?<br>

5.  Now suppose that there are locations from which the view
    is identical. (For example, suppose the world is a grid with
    square obstacles.) What kind of problem does the agent now face?
    What do solutions look like?
