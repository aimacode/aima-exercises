[Exercise 23.11](ex_11/)

Consider the following toy grammar:

> $S \rightarrow NP\space VP$

> $NP \rightarrow Noun$

> $NP \rightarrow NP\space and\space NP$

> $NP \rightarrow NP\space PP$

> $VP \rightarrow Verb$

> $VP \rightarrow VP\space and \space VP$

> $VP \rightarrow VP\space PP$

> $PP \rightarrow Prep\space NP$

> $Noun \rightarrow Sally\space; pools\space; streams\space; swims$

> $Prep \rightarrow in$

> $Verb \rightarrow pools\space; streams\space; swims$

1.  Show all the parse trees in this grammar for the sentence “Sally
    swims in streams and pools.”

2.  Show all the table entries that would be made by
    a (non-probabalistic) CYK parser on this sentence.
