

Generate random instances of map-coloring problems as follows: scatter
$n$ points on the unit square; select a point $X$ at random, connect $X$
by a straight line to the nearest point $Y$ such that $X$ is not already
connected to $Y$ and the line crosses no other line; repeat the previous
step until no more connections are possible. The points represent
regions on the map and the lines connect neighbors. Now try to find
$k$-colorings of each map, for both $k3$ and
$k4$, using min-conflicts, backtracking, backtracking with
forward checking, and backtracking with MAC. Construct a table of
average run times for each algorithm for values of $n$ up to the largest
you can manage. Comment on your results.
