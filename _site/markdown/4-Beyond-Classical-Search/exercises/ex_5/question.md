

The <b>And-Or-Graph-Search</b> algorithm in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/and-or-graph-search-algorithm.png">and-or-graph-search-algorithm</a> checks for
repeated states only on the path from the root to the current state.
Suppose that, in addition, the algorithm were to store
<i>every</i> visited state and check against that list. (See in
Figure <a class="insideBookFigRef" href="#">breadth-first-search-algorithm</a> for an example.)
Determine the information that should be stored and how the algorithm
should use that information when a repeated state is found.
(*Hint*: You will need to distinguish at least between
states for which a successful subplan was constructed previously and
states for which no subplan could be found.) Explain how to use labels,
as defined in Section <a class="sectionRef" title="" href="#">cyclic-plan-section</a>, to avoid
having multiple copies of subplans.
