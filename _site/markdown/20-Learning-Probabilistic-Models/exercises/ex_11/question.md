[Exercise 20.11](ex_11/)

Consider the application of EM to learn the parameters for the network
in Figure [mixture-networks-figure](#/)(a), given the true
parameters in Equation ([candy-true-equation](#/)).

1.  Explain why the EM algorithm would not work if there were just two
    attributes in the model rather than three.

2.  Show the calculations for the first iteration of EM starting from
    Equation ([candy-64-equation](#/)).

3.  What happens if we start with all the parameters set to the same
    value $p$? (*Hint*: you may find it helpful to
    investigate this empirically before deriving the general result.)

4.  Write out an expression for the log likelihood of the tabulated
    candy data on page [candy-counts-page](#/) in terms of the parameters,
    calculate the partial derivatives with respect to each parameter,
    and investigate the nature of the fixed point reached in part (c).
