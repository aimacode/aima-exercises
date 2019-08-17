

Consider the application of EM to learn the parameters for the network
in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/mixture-networks-figure.png">mixture-networks-figure</a>(a), given the true
parameters in Equation (<a class="equationRef" title="" href="#">candy-true-equation</a>).

1.  Explain why the EM algorithm would not work if there were just two
    attributes in the model rather than three.

2.  Show the calculations for the first iteration of EM starting from
    Equation (<a class="equationRef" title="" href="#">candy-64-equation</a>).

3.  What happens if we start with all the parameters set to the same
    value $p$? (<i>Hint</i>: you may find it helpful to
    investigate this empirically before deriving the general result.)

4.  Write out an expression for the log likelihood of the tabulated
    candy data on page <a class="pageRef" title="" href="#">candy-counts-page</a> in terms of the parameters,
    calculate the partial derivatives with respect to each parameter,
    and investigate the nature of the fixed point reached in part (c).
