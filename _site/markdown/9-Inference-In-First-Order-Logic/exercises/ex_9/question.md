[Exercise 9.9](ex_9/)

This question considers Horn KBs, such as the following:
$$\begin{array}{l}
P(F(x)) {\:\;{\Rightarrow}\:\;}P(x)\\
Q(x) {\:\;{\Rightarrow}\:\;}P(F(x))\\
P(A)\\
Q(B)
\end{array}$$ Let FC be a breadth-first forward-chaining algorithm that
repeatedly adds all consequences of currently satisfied rules; let BC be
a depth-first left-to-right backward-chaining algorithm that tries
clauses in the order given in the KB. Which of the following are true?

1.  FC will infer the literal $Q(A)$.

2.  FC will infer the literal $P(B)$.

3.  If FC has failed to infer a given literal, then it is not entailed
    by the KB.

4.  BC will return ${true}$ given the query $P(B)$.

5.  If BC does not return ${true}$ given a query literal, then it is
    not entailed by the KB.

