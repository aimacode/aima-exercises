[Exercise 18.29 \[linear-nn-exercise\]](ex_29/)

Suppose you had a neural network with linear
activation functions. That is, for each unit the output is some constant
$c$ times the weighted sum of the inputs.

1.  Assume that the network has one hidden layer. For a given assignment
    to the weights $\textbf{w}$, write down equations for the value of the
    units in the output layer as a function of $\textbf{w}$ and the input layer
    $\textbf{x}$, without any explicit mention of the output of the
    hidden layer. Show that there is a network with no hidden units that
    computes the same function.

2.  Repeat the calculation in part (a), but this time do it for a
    network with any number of hidden layers.

3.  Suppose a network with one hidden layer and linear activation
    functions has $n$ input and output nodes and $h$ hidden nodes. What
    effect does the transformation in part (a) to a network with no
    hidden layers have on the total number of weights? Discuss in
    particular the case $h \ll n$.
