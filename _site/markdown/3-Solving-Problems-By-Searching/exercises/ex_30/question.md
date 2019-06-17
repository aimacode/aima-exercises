

Accurate heuristics don’t necessarily reduce search time in the worst
case. Given any depth $d$, define a search problem with a goal node at
depth $d$, and write a heuristic function such that $|h(n) - h^\*(n)|  \le O(\log h^\*(n))$ but $A^*$ expands all nodes of depth less
than $d$.
