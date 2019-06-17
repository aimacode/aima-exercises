

The standard DECISION-TREE-LEARNING algorithm described in the
chapter does not handle cases in which some examples have missing
attribute values.<br>

1.  First, we need to find a way to classify such examples, given a
    decision tree that includes tests on the attributes for which values
    can be missing. Suppose that an example $\textbf{x}$ has a missing value for
    attribute $A$ and that the decision tree tests for $A$ at a node
    that $\textbf{x}$ reaches. One way to handle this case is to pretend that
    the example has <i>all</i> possible values for the
    attribute, but to weight each value according to its frequency among
    all of the examples that reach that node in the decision tree. The
    classification algorithm should follow all branches at any node for
    which a value is missing and should multiply the weights along each
    path. Write a modified classification algorithm for decision trees
    that has this behavior.<br>

2.  Now modify the information-gain calculation so that in any given
    collection of examples $C$ at a given node in the tree during the
    construction process, the examples with missing values for any of
    the remaining attributes are given “as-if” values according to the
    frequencies of those values in the set $C$.<br>
