[Exercise 7.21](ex_21/)

A propositional *2-CNF* expression is a conjunction of
clauses, each containing *exactly 2* literals, e.g.,
$$(A\lor B) \land (\lnot A \lor C) \land (\lnot B \lor D) \land (\lnot
  C \lor G) \land (\lnot D \lor G)\ .$$

1.  Prove using resolution that the above sentence entails $G$.

2.  Two clauses are *semantically distinct* if they are not
    logically equivalent. How many semantically distinct 2-CNF clauses
    can be constructed from $n$ proposition symbols?

3.  Using your answer to (b), prove that propositional resolution always
    terminates in time polynomial in $n$ given a 2-CNF sentence
    containing no more than $n$ distinct symbols.

4.  Explain why your argument in (c) does not apply to 3-CNF.
