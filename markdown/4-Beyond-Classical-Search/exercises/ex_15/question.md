

In this exercise, we examine hill climbing
in the context of robot navigation, using the environment in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/geometric-scene-figure.png">geometric-scene-figure</a> as an example.<br>

1.  Repeat Exercise <a class="exerciseRef" href="{{ site.baseurl }}/advanced-search-exercises/ex_11/">path-planning-agent-exercise</a> using
    hill climbing. Does your agent ever get stuck in a local minimum? Is
    it *possible* for it to get stuck with convex
    obstacles?<br>

2.  Construct a nonconvex polygonal environment in which the agent
    gets stuck.<br>

3.  Modify the hill-climbing algorithm so that, instead of doing a
    depth-1 search to decide where to go next, it does a
    depth-$k$ search. It should find the best $k$-step path and do one
    step along it, and then repeat the process.<br>

4.  Is there some $k$ for which the new algorithm is guaranteed to
    escape from local minima?<br>

5.  Explain how LRTA enables the agent to escape from local minima in
    this case.<br>
