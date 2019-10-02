

An <i>HMM grammar</i> is essentially a standard HMM whose state
variable is $N$ (nonterminal, with values such as $Det$, $Adjective$,
$Noun$ and so on) and whose evidence variable is $W$ (word, with values
such as $is$, $duck$, and so on). The HMM model includes a prior
${\textbf{P}}(N_0)$, a transition model
${\textbf{P}}(N_{t+1}|N_t)$, and a sensor model
${\textbf{P}}(W_t|N_t)$. Show that every HMM grammar can be
written as a PCFG. [Hint: start by thinking about how the HMM prior can
be represented by PCFG rules for the sentence symbol. You may find it
helpful to illustrate for the particular HMM with values $A$, $B$ for
$N$ and values $x$, $y$ for $W$.]
