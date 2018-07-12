[Exercise 4.15 \[path-planning-hc-exercise\]](ex_15/)

In this exercise, we examine hill climbing
in the context of robot navigation, using the environment in
Figure [geometric-scene-figure](#/) as an example.

1.  Repeat Exercise [path-planning-agent-exercise](#/) using
    hill climbing. Does your agent ever get stuck in a local minimum? Is
    it *possible* for it to get stuck with convex
    obstacles?

2.  Construct a nonconvex polygonal environment in which the agent
    gets stuck.

3.  Modify the hill-climbing algorithm so that, instead of doing a
    depth-1 search to decide where to go next, it does a
    depth-$k$ search. It should find the best $k$-step path and do one
    step along it, and then repeat the process.

4.  Is there some $k$ for which the new algorithm is guaranteed to
    escape from local minima?

5.  Explain how LRTA enables the agent to escape from local minima in
    this case.
