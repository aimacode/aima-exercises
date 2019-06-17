
In the following, a “max” tree consists only of max nodes, whereas an
“expectimax” tree consists of a max node at the root with alternating
layers of chance and max nodes. At chance nodes, all outcome
probabilities are nonzero. The goal is to <i>find the value of the
root</i> with a bounded-depth search.<br>

1.  Assuming that leaf values are finite but unbounded, is pruning (as
    in alpha–beta) ever possible in a max tree? Give an example, or
    explain why not.<br>

2.  Is pruning ever possible in an expectimax tree under the same
    conditions? Give an example, or explain why not.<br>

3.  If leaf values are constrained to be in the range $[0,1]$, is
    pruning ever possible in a max tree? Give an example, or explain
    why not.<br>

4.  If leaf values are constrained to be in the range $[0,1]$, is
    pruning ever possible in an expectimax tree? Give an example
    (qualitatively different from your example in (e), if any), or
    explain why not.<br>

5.  If leaf values are constrained to be nonnegative, is pruning ever
    possible in a max tree? Give an example, or explain why not.<br>

6.  If leaf values are constrained to be nonnegative, is pruning ever
    possible in an expectimax tree? Give an example, or explain why not.<br>

7.  Consider the outcomes of a chance node in an expectimax tree. Which
    of the following evaluation orders is most likely to yield pruning
    opportunities: (i) Lowest probability first; (ii) Highest
    probability first; (iii) Doesn’t make any difference?
