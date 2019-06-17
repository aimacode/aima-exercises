

In the recursive construction of
decision trees, it sometimes happens that a mixed set of positive and
negative examples remains at a leaf node, even after all the attributes
have been used. Suppose that we have $p$ positive examples and $n$
negative examples.<br>

1.  Show that the solution used by DECISION-TREE-LEARNING, which picks the majority
    classification, minimizes the absolute error over the set of
    examples at the leaf.<br>

2.  Show that the <b>class probability</b> $p/(p+n)$ minimizes the sum of squared errors.
