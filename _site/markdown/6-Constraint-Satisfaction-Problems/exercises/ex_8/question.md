

Consider the graph with 8 nodes $A_1$, $A_2$, $A_3$, $A_4$, $H$, $T$,
$F_1$, $F_2$. $A_i$ is connected to $A_{i+1}$ for all $i$, each $A_i$ is
connected to $H$, $H$ is connected to $T$, and $T$ is connected to each
$F_i$. Find a 3-coloring of this graph by hand using the following
strategy: backtracking with conflict-directed backjumping, the variable
order $A_1$, $H$, $A_4$, $F_1$, $A_2$, $F_2$, $A_3$, $T$, and the value
order $R$, $G$, $B$.
