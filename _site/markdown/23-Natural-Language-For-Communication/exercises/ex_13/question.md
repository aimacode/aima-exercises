

Consider the following PCFG:<br>

> $S \rightarrow NP \space VP[1.0] $<br>

> $NP \rightarrow \textit{Noun}[0.6] \space|\space \textit{Pronoun}[0.4] $<br>

> $VP \rightarrow \textit{Verb} \space NP[0.8] \space|\space \textit{Modal}\space \textit{Verb}[0.2]$<br>

> $\textit{Noun} \rightarrow \textbf{can}[0.1] \space|\space \textbf{fish}[0.3] \space|\space ...$<br>

> $\textit{Pronoun} \rightarrow \textbf{I}[0.4] \space|\space ...$<br>

> $\textit{Verb} \rightarrow \textbf{can}[0.01] \space|\space \textbf{fish}[0.1] \space|\space ...$<br>

> $\textit{Modal} \rightarrow \textbf{can}[0.3] \space|\space ...$<br>

The sentence “I can fish” has two parse trees with this grammar. Show
the two trees, their prior probabilities, and their conditional
probabilities, given the sentence.
