[Exercise 7.3 \[truth-value-exercise\]](ex_3/)

Consider the problem of deciding whether a
propositional logic sentence is true in a given model.

1.  Write a recursive algorithm PL-True?$ (s, m )$ that returns ${true}$ if and
    only if the sentence $s$ is true in the model $m$ (where $m$ assigns
    a truth value for every symbol in $s$). The algorithm should run in
    time linear in the size of the sentence. (Alternatively, use a
    version of this function from the online code repository.)

2.  Give three examples of sentences that can be determined to be true
    or false in a *partial* model that does not specify a
    truth value for some of the symbols.

3.  Show that the truth value (if any) of a sentence in a partial model
    cannot be determined efficiently in general.

4.  Modify your algorithm so that it can sometimes judge truth from
    partial models, while retaining its recursive structure and linear
    run time. Give three examples of sentences whose truth in a partial
    model is *not* detected by your algorithm.

5.  Investigate whether the modified algorithm makes $TT-Entails?$ more efficient.
