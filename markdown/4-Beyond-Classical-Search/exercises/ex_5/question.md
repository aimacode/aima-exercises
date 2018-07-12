[Exercise 4.5 \[cond-plan-repeated-exercise\]](ex_5/)

The **And-Or-Graph-Search** algorithm in
Figure [and-or-graph-search-algorithm](#/) checks for
repeated states only on the path from the root to the current state.
Suppose that, in addition, the algorithm were to store
*every* visited state and check against that list. (See in
Figure [breadth-first-search-algorithm](#/) for an example.)
Determine the information that should be stored and how the algorithm
should use that information when a repeated state is found.
(*Hint*: You will need to distinguish at least between
states for which a successful subplan was constructed previously and
states for which no subplan could be found.) Explain how to use labels,
as defined in Section [cyclic-plan-section](#/), to avoid
having multiple copies of subplans.
