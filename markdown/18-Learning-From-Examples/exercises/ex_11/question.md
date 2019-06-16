

This exercise considers $\chi^2$ pruning of
decision trees (Section <a href="#">chi-squared-section</a><br>.

1.  Create a data set with two input attributes, such that the
    information gain at the root of the tree for both attributes is
    zero, but there is a decision tree of depth 2 that is consistent
    with all the data. What would $\chi^2$ pruning do on this data set
    if applied bottom up? If applied top down?<br>

2.  Modify DECISION-TREE-LEARNING to include $\chi^2$-pruning. You might wish to consult
    Quinlan [@Quinlan:1986] or [@Kearns+Mansour:1998] for details.<br>
