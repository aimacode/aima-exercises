The traveling salesperson problem (TSP) can be
solved with the minimum-spanning-tree (MST) heuristic, which estimates
the cost of completing a tour, given that a partial tour has already
been constructed. The MST cost of a set of cities is the smallest sum of
the link costs of any tree that connects all the cities.<br>

1.  Show how this heuristic can be derived from a relaxed version of
    the TSP.<br>

2.  Show that the MST heuristic dominates straight-line distance.<br>

3.  Write a problem generator for instances of the TSP where cities are
    represented by random points in the unit square.<br>

4.  Find an efficient algorithm in the literature for constructing the
    MST, and use it with A graph search to solve instances of the TSP.
