

Up to now we have assumed that the
plans we create always make sure that an action’s preconditions are
satisfied. Let us now investigate what propositional successor-state
axioms such as ${HaveArrow}^{t+1} {\;\;{\Leftrightarrow}\;\;}{}$
$({HaveArrow}^t
\land \lnot {Shoot}^t)$ have to say about actions whose preconditions
are not satisfied.<br>

1.  Show that the axioms predict that nothing will happen when an action
    is executed in a state where its preconditions are not satisfied.<br>

2.  Consider a plan $p$ that contains the actions required to achieve a
    goal but also includes illegal actions. Is it the case that
$$
initial state \land successor-state axioms \land
p {\models} goal ?
$$

3.  With first-order successor-state axioms in situation calculus, is it
    possible to prove that a plan containing illegal actions will
    achieve the goal?<br>
