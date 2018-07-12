[Exercise 18.11 \[pruning-DTL-exercise\]](ex_11/)

This exercise considers $\chi^2$ pruning of
decision trees (Section [chi-squared-section](#/)).

1.  Create a data set with two input attributes, such that the
    information gain at the root of the tree for both attributes is
    zero, but there is a decision tree of depth 2 that is consistent
    with all the data. What would $\chi^2$ pruning do on this data set
    if applied bottom up? If applied top down?

2.  Modify DECISION-TREE-LEARNING to include $\chi^2$-pruning. You might wish to consult
    Quinlan [@Quinlan:1986] or [@Kearns+Mansour:1998] for details.
