

Suppose that an agent is in a $3 \times 3$
maze environment like the one shown in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/maze-3x3-figure.png">maze-3x3-figure</a>. The agent knows that its
initial location is (3,3), that the goal is at (1,1), and that the four
actions *Up*, *Down*, *Left*, *Right* have their usual
effects unless blocked by a wall. The agent does *not* know
where the internal walls are. In any given state, the agent perceives
the set of legal actions; it can also tell whether the state is one it
has visited before or is a new state.<br>

1.  Explain how this online search problem can be viewed as an offline
    search in belief-state space, where the initial belief state
    includes all possible environment configurations. How large is the
    initial belief state? How large is the space of belief states?<br>

2.  How many distinct percepts are possible in the initial state?<br>

3.  Describe the first few branches of a contingency plan for this
    problem. How large (roughly) is the complete plan?<br>

Notice that this contingency plan is a solution for *every
possible environment* fitting the given description. Therefore,
interleaving of search and execution is not strictly necessary even in
unknown environments.
