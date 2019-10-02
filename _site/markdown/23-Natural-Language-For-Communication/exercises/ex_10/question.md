

In this exercise you will transform $\large \varepsilon_0$  into
Chomsky Normal Form (CNF). There are five steps: (a) Add a new start
symbol, (b) Eliminate $\epsilon$ rules, (c) Eliminate multiple words on
right-hand sides, (d) Eliminate rules of the form
(${\it X} \rightarrow{{\;}}$${\it Y}$),
(e) Convert long right-hand sides into binary rules.<br>

1.  The start symbol, $S$, can occur only on the left-hand side in CNF.
    Replace ${\it S}$ everywhere by a new symbol
    ${\it S'}$ and add a rule of the form
    ${\it S}$
    ${{\;}}\rightarrow{{\;}}$${\it S'}$.<br>

2.  The empty string, $\epsilon$ cannot appear on the right-hand side
    in CNF. $\large \varepsilon_0$ does not have any rules with $\epsilon$, so this is not
    an issue.<br>

3.  A word can appear on the right-hand side in a rule only of the form
    (${\it X}$
    ${{\;}}\rightarrow{{\;}}$<i>word</i>).
    Replace each rule of the form (${\it X}$
    ${{\;}}\rightarrow{{\;}}$…<i>word</i> …)
    with (${\it X}$
    ${{\;}}\rightarrow{{\;}}$…${\it W'}$ …)
    and (${\it W'}$
    ${{\;}}\rightarrow{{\;}}$<i>word</i>),
    using a new symbol ${\it W'}$.<br>

4.  A rule (${\it X}$
    ${{\;}}\rightarrow{{\;}}$${\it Y}$)
    is not allowed in CNF; it must be (${\it X}$
    ${{\;}}\rightarrow{{\;}}$${\it Y}$
    ${\it Z}$) or (${\it X}$
    ${{\;}}\rightarrow{{\;}}$<i>word</i>).
    Replace each rule of the form (${\it X}$
    ${{\;}}\rightarrow{{\;}}$${\it Y}$)
    with a set of rules of the form (${\it X}$
    ${{\;}}\rightarrow{{\;}}$…), one
    for each rule (${\it Y}$
    ${{\;}}\rightarrow{{\;}}$…),
    where (…) indicates one or more symbols.<br>

5.  Replace each rule of the form (${\it X}$
    ${{\;}}\rightarrow{{\;}}$${\it Y}$
    ${\it Z}$ …) with two rules, (${\it X}$
    ${{\;}}\rightarrow{{\;}}$${\it Y}$
    ${\it Z'}$) and (${\it Z'}$
    ${{\;}}\rightarrow{{\;}}$${\it Z}$
    …), where ${\it Z'}$ is a new symbol.<br>

Show each step of the process and the final set of rules.<br>
