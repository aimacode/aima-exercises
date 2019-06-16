[Exercise 9.19](ex_19/)

The following Prolog code defines a predicate P. (Remember
that uppercase terms are variables, not constants, in Prolog.)

        P(X,[X|Y]).
        P(X,[Y|Z]) :- P(X,Z).

1.  Show proof trees and solutions for the queries
    P(A,[1,2,3]) and P(2,[1,A,3]).

2.  What standard list operation does P represent?
