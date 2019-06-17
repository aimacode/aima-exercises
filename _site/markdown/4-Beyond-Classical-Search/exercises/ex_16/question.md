

Like DFS, online DFS is incomplete for reversible state spaces with
infinite paths. For example, suppose that states are points on the
infinite two-dimensional grid and actions are unit vectors $(1,0)$,
$(0,1)$, $(-1,0)$, $(0,-1)$, tried in that order. Show that online DFS
starting at $(0,0)$ will not reach $(1,-1)$. Suppose the agent can
observe, in addition to its current state, all successor states and the
actions that would lead to them. Write an algorithm that is complete
even for bidirected state spaces with infinite paths. What states does
it visit in reaching $(1,-1)$?
