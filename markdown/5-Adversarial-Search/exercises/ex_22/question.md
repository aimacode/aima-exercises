[Exercise 5.22](ex_22/)

In the following, a “max” tree consists only of max nodes, whereas an
“expectimax” tree consists of a max node at the root with alternating
layers of chance and max nodes. At chance nodes, all outcome
probabilities are nonzero. The goal is to *find the value of the
root* with a bounded-depth search. For each of (a)–(f), either
give an example or explain why this is impossible.

1.  Assuming that leaf values are finite but unbounded, is pruning (as
    in alpha–beta) ever possible in a max tree?

2.  Is pruning ever possible in an expectimax tree under the same
    conditions?

3.  If leaf values are all nonnegative, is pruning ever possible in a
    max tree? Give an example, or explain why not.

4.  If leaf values are all nonnegative, is pruning ever possible in an
    expectimax tree? Give an example, or explain why not.

5.  If leaf values are all in the range $[0,1]$, is pruning ever
    possible in a max tree? Give an example, or explain why not.

6.  If leaf values are all in the range $[0,1]$, is pruning ever
    possible in an expectimax tree?

7.  Consider the outcomes of a chance node in an expectimax tree. Which
    of the following evaluation orders is most likely to yield pruning
    opportunities?

    1.  Lowest probability first

    2.  Highest probability first

    3.  Doesn’t make any difference
