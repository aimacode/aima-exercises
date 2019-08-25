

This exercise concerns the problem of planning a route for a robot to
take from one city to another. The basic action taken by the robot is
${Go}(x,y)$, which takes it from city $x$ to city $y$ if there is a
route between those cities. ${Road}(x, y)$ is true if and only if
there is a road connecting cities $x$ and $y$; if there is, then
${Distance}(x, y)$ gives the length of the road. See the map on
page <a class="pageRef" title="" href="#">romania-distances-figure</a> for an example. The robot begins in Arad and must
reach Bucharest.<br>

1.  Write a suitable logical description of the initial situation of
    the robot.<br>

2.  Write a suitable logical query whose solutions provide possible
    paths to the goal.<br>

3.  Write a sentence describing the ${Go}$ action.<br>

4.  Now suppose that the robot consumes fuel at the rate of .02 gallons
    per mile. The robot starts with 20 gallons of fuel. Augment your
    representation to include these considerations.<br>

5.  Now suppose some of the cities have gas stations at which the robot
    can fill its tank. Extend your representation and write all the
    rules needed to describe gas stations, including the
    ${Fillup}$ action.<br>
