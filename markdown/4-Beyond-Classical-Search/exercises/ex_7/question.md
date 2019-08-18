In Section <a class="sectionRef" title="" href="#">conformant-section</a> we introduced belief
states to solve sensorless search problems. A sequence of actions solves
a sensorless problem if it maps every physical state in the initial
belief state $b$ to a goal state. Suppose the agent knows $h^\*(s)$, the
true optimal cost of solving the physical state $s$ in the fully
observable problem, for every state $s$ in $b$. Find an admissible
heuristic $h(b)$ for the sensorless problem in terms of these costs, and
prove its admissibilty. Comment on the accuracy of this heuristic on the
sensorless vacuum problem of
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/vacuum2-sets-figure.png">vacuum2-sets-figure</a>. How well does A* perform?
