[Exercise 10.18 \[disjunctive-satplan-exercise\]](ex_18/)

In the $SATPlan$ algorithm in
Figure [satplan-agent-algorithm](#/) (page [satplan-agent-algorithm](#/)),
each call to the satisfiability algorithm asserts a goal $g^T$, where
$T$ ranges from 0 to $T_{max}$. Suppose instead that the
satisfiability algorithm is called only once, with the goal
$g^0 \vee g^1 \vee \cdots \vee g^{T_{max}}$.

1.  Will this always return a plan if one exists with length less than
    or equal to $T_{max}$?

2.  Does this approach introduce any new spurious “solutions”?

3.  Discuss how one might modify a satisfiability algorithm such as $WalkSAT$ so
    that it finds short solutions (if they exist) when given a
    disjunctive goal of this form.

