---
layout: exercise
title: Answers to Exercise 3.25
permalink: /search-exercises/ex_25/answers/
breadcrumb: 3-Solving-Problems-By-Searching
canonical_id: ch3ex25_ans
---

{% include mathjax_support %}

## Answers

### 1. Breadth-First Search as a Special Case of Uniform-Cost Search

Breadth-first search (BFS) can be seen as a special case of uniform-cost search (UCS) when all edge costs are equal. In UCS, the algorithm expands the least-cost node, but if all costs are the same, it effectively behaves like BFS, expanding nodes in the order they were added. 

- **Proof**: In BFS, each level of the search tree is expanded one level at a time, where each level corresponds to nodes that are equally distant from the root node. In UCS, nodes are expanded based on cumulative cost, and if all edges have equal cost, the cumulative cost is directly proportional to the depth of the node. Hence, UCS will expand nodes in the same order as BFS when edge costs are uniform.

### 2. Depth-First Search as a Special Case of Best-First Tree Search

Depth-first search (DFS) can be interpreted as a special case of best-first tree search if the evaluation function used always prefers deeper nodes.

- **Proof**: In DFS, nodes are expanded by going as deep as possible down one branch before backtracking. This behavior can be mimicked in a best-first tree search by using an evaluation function that prioritizes nodes with greater depth (negative depth as priority). This ensures that the search always proceeds to the deepest unexplored node, effectively replicating the behavior of DFS.

### 3. Uniform-Cost Search as a Special Case of A* Search

Uniform-cost search (UCS) can be viewed as a special case of A* search where the heuristic function \( h(n) = 0 \) for all nodes \( n \).

- **Proof**: A* search algorithm expands nodes based on the evaluation function \( f(n) = g(n) + h(n) \), where \( g(n) \) is the cost from the start node to node \( n \), and \( h(n) \) is the heuristic estimate from \( n \) to the goal. When \( h(n) = 0 \), the evaluation function simplifies to \( f(n) = g(n) \), which is exactly the same as the cost criterion used in UCS. Thus, A* with a zero heuristic behaves identically to UCS.

These proofs demonstrate the relationship between the different search algorithms and show how specific conditions in one algorithm can replicate the behavior of another.
