

Suppose that you are working with the robot in
Exercise <a class="exerciseRef" href="{{ site.baseurl }}/nlp-english-exercises/ex_3/">AB-manipulator-ex</a> and you are given the
problem of finding a path from the starting configuration of
figure <a class="insideExercisesFigRef" href="#figRobot2">figRobot2</a> to the ending configuration. Consider a potential
function $$D(A, {Goal})^2 + D(B, {Goal})^2 + \frac{1}{D(A, B)^2}$$
where $D(A,B)$ is the distance between the closest points of A and B.<br>

1.  Show that hill climbing in this potential field will get stuck in a
    local minimum.<br>

2.  Describe a potential field where hill climbing will solve this
    particular problem. You need not work out the exact numerical
    coefficients needed, just the general form of the solution. (Hint:
    Add a term that “rewards" the hill climber for moving A out of B’s
    way, even in a case like this where this does not reduce the
    distance from A to B in the above sense.)<br>
