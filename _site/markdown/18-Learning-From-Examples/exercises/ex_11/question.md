

This exercise considers $\chi^2$ pruning of
decision trees (Section <a class="sectionRef" title="" href="#">chi-squared-section</a><br>.

1.  Create a data set with two input attributes, such that the
    information gain at the root of the tree for both attributes is
    zero, but there is a decision tree of depth 2 that is consistent
    with all the data. What would $\chi^2$ pruning do on this data set
    if applied bottom up? If applied top down?<br>

2.  Modify DECISION-TREE-LEARNING to include $\chi^2$-pruning. You might wish to consult
    Quinlan [<a class="paperRef" title="" href="">Quinlan:1986</a>] or [<a class="paperRef" title="" href="">Kearns+Mansour:1998</a>] for details.<br>
