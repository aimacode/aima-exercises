[Exercise 23.13](ex_13/)

Consider the following PCFG:

> $S \rightarrow NP \space VP[1.0] $

> $NP \rightarrow \textit{Noun}[0.6] \space|\space \textit{Pronoun}[0.4] $

> $VP \rightarrow \textit{Verb} \space NP[0.8] \space|\space \textit{Modal}\space \textit{Verb}[0.2]$

> $\textit{Noun} \rightarrow \textbf{can}[0.1] \space|\space \textbf{fish}[0.3] \space|\space ...$

> $\textit{Pronoun} \rightarrow \textbf{I}[0.4] \space|\space ...$

> $\textit{Verb} \rightarrow \textbf{can}[0.01] \space|\space \textbf{fish}[0.1] \space|\space ...$

> $\textit{Modal} \rightarrow \textbf{can}[0.3] \space|\space ...$

The sentence “I can fish” has two parse trees with this grammar. Show
the two trees, their prior probabilities, and their conditional
probabilities, given the sentence.
