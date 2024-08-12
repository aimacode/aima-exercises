

This question considers representing satisfiability (SAT) problems as
CSPs.<br>

1.  Draw the constraint graph corresponding to the SAT problem
    $$(\lnot X_1 \lor X_2) \land (\lnot X_2 \lor X_3) \land \ldots \land (\lnot X_{n-1} \lor X_n)$$
    for the particular case $n{{\,=\,}}5$.<br>

2.  How many solutions are there for this general SAT problem as a
    function of $n$?<br>

3.  Suppose we apply {Backtracking-Search} (page <a class="pageRef" title="" href="#">backtracking-search-algorithm</a>) to find <i>all</i>
    solutions to a SAT CSP of the type given in (a). (To find
    <i>all</i> solutions to a CSP, we simply modify the basic
    algorithm so it continues searching after each solution is found.)
    Assume that variables are ordered $X_1,\ldots,X_n$ and ${false}$
    is ordered before ${true}$. How much time will the algorithm take
    to terminate? (Write an $O(\cdot)$ expression as a function of $n$.)<br>

4.  We know that SAT problems in Horn form can be solved in linear time
    by forward chaining (unit propagation). We also know that every
    tree-structured binary CSP with discrete, finite domains can be
    solved in time linear in the number of variables
    (Section <a class="sectionRef" title="" href="#">csp-structure-section</a>). Are these two
    facts connected? Discuss.<br>
