

The following Prolog code defines a predicate P. (Remember
that uppercase terms are variables, not constants, in Prolog.)<br>

        P(X,[X|Y]).<br>
        P(X,[Y|Z]) :- P(X,Z).<br>

1.  Show proof trees and solutions for the queries
    P(A,[1,2,3]) and P(2,[1,A,3]).<br>

2.  What standard list operation does P represent?<br>
