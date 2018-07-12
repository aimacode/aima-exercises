[Exercise 7.24 \[dnf-exercise\]](ex_24/)

A sentence is in disjunctive normal form(DNF) if it is the disjunction of
conjunctions of literals. For example, the sentence
$(A \land B \land \lnot C) \lor (\lnot A \land C) \lor (B \land \lnot C)$
is in DNF.

1.  Any propositional logic sentence is logically equivalent to the
    assertion that some possible world in which it would be true is in
    fact the case. From this observation, prove that any sentence can be
    written in DNF.

2.  Construct an algorithm that converts any sentence in propositional
    logic into DNF. (*Hint*: The algorithm is similar to
    the algorithm for conversion to CNF iven in
    Sectio [pl-resolution-section](#/).)

3.  Construct a simple algorithm that takes as input a sentence in DNF
    and returns a satisfying assignment if one exists, or reports that
    no satisfying assignment exists.

4.  Apply the algorithms in (b) and (c) to the following set of
    sentences:

> $A {\Rightarrow} B$

> $B {\Rightarrow} C$

> $C {\Rightarrow} A$

5.  Since the algorithm in (b) is very similar to the algorithm for
    conversion to CNF, and since the algorithm in (c) is much simpler
    than any algorithm for solving a set of sentences in CNF, why is
    this technique not used in automated reasoning?
