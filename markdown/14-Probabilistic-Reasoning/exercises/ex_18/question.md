

Consider the variable elimination algorithm in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/elimination-ask-algorithm.png">elimination-ask-algorithm</a> (page <a class="pageRef" title="" href="#">elimination-ask-algorithm</a>).<br>

1.  Section <a class="sectionRef" title="" href="#">exact-inference-section</a> applies variable
    elimination to the query
    $${\textbf{P}}({Burglary}{{\,|\,}}{JohnCalls}{{\,=\,}}{true},{MaryCalls}{{\,=\,}}{true})\ .$$
    Perform the calculations indicated and check that the answer
    is correct.<br>

2.  Count the number of arithmetic operations performed, and compare it
    with the number performed by the enumeration algorithm.<br>

3.  Suppose a network has the form of a <i>chain</i>: a sequence
    of Boolean variables $X_1,\ldots, X_n$ where
    ${Parents}(X_i){{\,=\,}}\{X_{i-1}\}$ for $i{{\,=\,}}2,\ldots,n$.
    What is the complexity of computing
    ${\textbf{P}}(X_1{{\,|\,}}X_n{{\,=\,}}{true})$ using
    enumeration? Using variable elimination?<br>

4.  Prove that the complexity of running variable elimination on a
    polytree network is linear in the size of the tree for any variable
    ordering consistent with the network structure.<br>
