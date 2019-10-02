

The circuit representation in the chapter is more detailed than
necessary if we care only about circuit functionality. A simpler
formulation describes any $m$-input, $n$-output gate or circuit using a
predicate with $m+n$ arguments, such that the predicate is true exactly
when the inputs and outputs are consistent. For example, NOT gates are
described by the binary predicate ${NOT}(i,o)$, for which
${NOT}(0,1)$ and ${NOT}(1,0)$ are known. Compositions of gates are
defined by conjunctions of gate predicates in which shared variables
indicate direct connections. For example, a NAND circuit can be composed
from ${AND}$s and ${NOT}$s:
$${\forall\,i_1,i_2,o_a,o\;\;} {AND}(i_1,i_2,o_a) \land {NOT}(o_a,o) {\:\;{\Rightarrow}\:\;}{NAND}(i_1,i_2,o)\ .$$
Using this representation, define the one-bit adder in
Figure <a class="insideExercisesFigRef" href="#4bit-adder-figure">adder-figure</a> and the four-bit adder in
Figure <a class="insideExercisesFigRef" href="#4bit-adder-figure">adder-figure</a>, and explain what queries you
would use to verify the designs. What kinds of queries are
*not* supported by this representation that
*are* supported by the representation in
Section <a class="sectionRef" title="" href="#">circuits-section</a>?
