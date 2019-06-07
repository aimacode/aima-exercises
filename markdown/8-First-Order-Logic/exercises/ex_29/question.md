

For each of the following sentences in English, decide if the
accompanying first-order logic sentence is a good translation. If not,
explain why not and correct it.<br>

1.  Any apartment in London has lower rent than some apartments
    in Paris.<br>

$$
\forall {x} [{Apt}(x) \land {In}(x,{London})]
\implies \exists {y} ([{Apt}(y) \land {In}(y,{Paris})] \implies ({Rent}(x) < {Rent}(y)))
$$

2.  There is exactly one apartment in Paris with rent below \$1000.<br>

$$
\exists {x} {Apt}(x) \land {In}(x,{Paris}) \land \forall{y} [{Apt}(y) \land {In}(y,{Paris}) \land ({Rent}(y) < {Dollars}(1000))] \implies (y = x)
$$

3.  If an apartment is more expensive than all apartments in London, it
    must be in Moscow.<br>

$$
\forall{x} {Apt}(x) \land [\forall{y} {Apt}(y) \land {In}(y,{London}) \land ({Rent}(x) > {Rent}(y))] \implies
{In}(x,{Moscow}).
$$
