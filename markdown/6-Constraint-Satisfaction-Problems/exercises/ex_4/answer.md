#Solution 6.4<br><br>
**a)** For rectilinear floor-planning, one possibility is to have a variable for each of the
small rectangles, with the value of each variable being a 4-tuple consisting of the x and y
coordinates of the upper left and lower right corners of the place where the rectangle will
be located. The domain of each variable is the set of 4-tuples that are the right size for the
corresponding small rectangle and that fit within the large rectangle. Constraints say that no
two rectangles can overlap; for example if the value of variable R1 is [0, 0, 5, 8], then no other
variable can take on a value that overlaps with the 0, 0 to 5, 8 rectangle. <br><br>
**b)**  For class scheduling, one possibility is to have three variables for each class, one with
times for values (e.g. MWF8:00, TuTh8:00, MWF9:00, ...), one with classrooms for values
(e.g. Wheeler110, Evans330, ...) and one with instructors for values (e.g. Abelson, Bibel,
Canny, ...). Constraints say that only one class can be in the same classroom at the same time,
and an instructor can only teach one class at a time. There may be other constraints as well
(e.g. an instructor should not have two consecutive classes).<br><br>
**c)**  For Hamiltonian tour, one possibility is to have one variable for each stop on the tour,
with binary constraints requiring neighboring cities to be connected by roads, and an AllDiff
constraint that all variables have a different value.
6.5 The exact steps depend on certain choices y
