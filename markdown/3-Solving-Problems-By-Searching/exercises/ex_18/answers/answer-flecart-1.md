---
Name: Angelo Huang
Email: angelo.huang.ai@gmail.com
---
1: ![Image of the graph](https://i.imgur.com/XGUXMJ5.jpg)
2:
BFS: 1-2-3-4-5-6-7-8-9-10-11
DFS: 1-2-4-8-9-5-10-11
DLS: 8-9-4-2-5-10-11
3: Bidirectional search would do quite well, the two directions could meet at node 5 or 2. Branching factor of this problem is 2 as every node except node 1 or leaves are related to 3 nodes.
4: Yes, starting from the goal is a lot easier, we just need to decompose the goal number with the following algorithm
5: start from the goal node.

solution <- empty_list
while goal != 1
do
if goal is even then put Left into solution; goal <- goal/2
else if goal is odd then put Right into solution; goal <- (goal-1)/2
finish
reverse order of solution
print solution
