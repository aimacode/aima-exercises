

A propositional <i>2-CNF</i> expression is a conjunction of
clauses, each containing <i>exactly 2</i> literals, e.g.,
$$(A\lor B) \land (\lnot A \lor C) \land (\lnot B \lor D) \land (\lnot
  C \lor G) \land (\lnot D \lor G)\ .$$<br>

1.  Prove using resolution that the above sentence entails $G$.<br>

2.  Two clauses are <i>semantically distinct</i> if they are not
    logically equivalent. How many semantically distinct 2-CNF clauses
    can be constructed from $n$ proposition symbols?<br>

3.  Using your answer to (b), prove that propositional resolution always
    terminates in time polynomial in $n$ given a 2-CNF sentence
    containing no more than $n$ distinct symbols.<br>

4.  Explain why your argument in (c) does not apply to 3-CNF.<br>
