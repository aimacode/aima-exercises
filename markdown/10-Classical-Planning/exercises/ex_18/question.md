

In the $SATPlan$ algorithm in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/satplan-agent-algorithm.png">satplan-agent-algorithm</a> (page <a class="pageRef" title="" href="#">satplan-agent-algorithm</a>,
each call to the satisfiability algorithm asserts a goal $g^T$, where
$T$ ranges from 0 to $T_{max}$. Suppose instead that the
satisfiability algorithm is called only once, with the goal
$g^0 \vee g^1 \vee \cdots \vee g^{T_{max}}$. <br>

1.  Will this always return a plan if one exists with length less than
    or equal to $T_{max}$? <br>

2.  Does this approach introduce any new spurious “solutions”?<br>

3.  Discuss how one might modify a satisfiability algorithm such as $WalkSAT$ so
    that it finds short solutions (if they exist) when given a
    disjunctive goal of this form.<br>
