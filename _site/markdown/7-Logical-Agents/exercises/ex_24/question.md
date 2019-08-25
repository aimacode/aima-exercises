

A sentence is in disjunctive normal form(DNF) if it is the disjunction of
conjunctions of literals. For example, the sentence
$(A \land B \land \lnot C) \lor (\lnot A \land C) \lor (B \land \lnot C)$
is in DNF.<br>

1.  Any propositional logic sentence is logically equivalent to the
    assertion that some possible world in which it would be true is in
    fact the case. From this observation, prove that any sentence can be
    written in DNF.<br>

2.  Construct an algorithm that converts any sentence in propositional
    logic into DNF. (<i>Hint</i>: The algorithm is similar to
    the algorithm for conversion to CNF iven in
    Sectio <a class="sectionRef" title="" href="#">pl-resolution-section</a>.)<br>

3.  Construct a simple algorithm that takes as input a sentence in DNF
    and returns a satisfying assignment if one exists, or reports that
    no satisfying assignment exists.<br>

4.  Apply the algorithms in (b) and (c) to the following set of
    sentences:<br>

 $A {\Rightarrow} B$<bR>

 $B {\Rightarrow} C$<br>

 $C {\Rightarrow} A$<br>

5.  Since the algorithm in (b) is very similar to the algorithm for
    conversion to CNF, and since the algorithm in (c) is much simpler
    than any algorithm for solving a set of sentences in CNF, why is
    this technique not used in automated reasoning?
