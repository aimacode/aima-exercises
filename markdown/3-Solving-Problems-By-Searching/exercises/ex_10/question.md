

On page <a class="pageRef" title="" href="#">non-negative-g</a>, we said that we would not consider problems
with negative path costs. In this exercise, we explore this decision in
more depth.<br>

1.  Suppose that actions can have arbitrarily large negative costs;
    explain why this possibility would force any optimal algorithm to
    explore the entire state space.<br>

2.  Does it help if we insist that step costs must be greater than or
    equal to some negative constant $c$? Consider both trees and graphs.<br>

3.  Suppose that a set of actions forms a loop in the state space such
    that executing the set in some order results in no net change to
    the state. If all of these actions have negative cost, what does
    this imply about the optimal behavior for an agent in such an
    environment?<br>

4.  One can easily imagine actions with high negative cost, even in
    domains such as route finding. For example, some stretches of road
    might have such beautiful scenery as to far outweigh the normal
    costs in terms of time and fuel. Explain, in precise terms, within
    the context of state-space search, why humans do not drive around
    scenic loops indefinitely, and explain how to define the state space
    and actions for route finding so that artificial agents can also
    avoid looping.<br>

5.  Can you think of a real domain in which step costs are such as to
    cause looping?<br>
