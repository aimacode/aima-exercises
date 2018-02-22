
# 19. Knowledge in Learning

**19.1** \[dbsig-exercise\]Show, by translating into conjunctive normal form and
applying resolution, that the conclusion drawn on page [dbsig-page](#/)
concerning Brazilians is sound.

**19.2** For each of the following determinations, write down the logical
representation and explain why the determination is true (if it is):

1.  Design and denomination determine the mass of a coin.

2.  For a given program, input determines output.

3.  Climate, food intake, exercise, and metabolism determine weight gain
    and loss.

4.  Baldness is determined by the baldness (or lack thereof) of one’s
    maternal grandfather.

**19.3** For each of the following determinations, write down the logical
representation and explain why the determination is true (if it is):

1.  Zip code determines the state (U.S.).

2.  Design and denomination determine the mass of a coin.

3.  Climate, food intake, exercise, and metabolism determine weight gain
    and loss.

4.  Baldness is determined by the baldness (or lack thereof) of one’s
    maternal grandfather.

**19.4** Would a probabilistic version of determinations be useful? Suggest a
definition.

**19.5** \[ir-step-exercise\]Fill in the missing values for the clauses $C_1$ or
$C_2$ (or both) in the following sets of clauses, given that $C$ is the
resolvent of $C_1$ and $C_2$:

1.  $C = {True} {\:\;{\Rightarrow}\:\;}P(A,B)$,
    $C_1 = P(x,y) {\:\;{\Rightarrow}\:\;}Q(x,y)$, $C_2
    = ??$.

2.  $C = {True} {\:\;{\Rightarrow}\:\;}P(A,B)$, $C_1 = ??$,
    $C_2 = ??$.

3.  $C = P(x,y) {\:\;{\Rightarrow}\:\;}P(x,f(y))$, $C_1 = ??$,
    $C_2 = ??$.

If there is more than one possible solution, provide one example of each
different kind.

**19.6** \[prolog-ir-exercise\]Suppose one writes a logic program that carries
out a resolution inference step. That is, let ${Resolve}(c_1,c_2,c)$
succeed if $c$ is the result of resolving $c_1$ and $c_2$. Normally,
${Resolve}$ would be used as part of a theorem prover by calling it
with $c_1$ and $c_2$ instantiated to particular clauses, thereby
generating the resolvent $c$. Now suppose instead that we call it with
$c$ instantiated and $c_1$ and $c_2$ uninstantiated. Will this succeed
in generating the appropriate results of an inverse resolution step?
Would you need any special modifications to the logic programming system
for this to work?

**19.7** \[foil-literals-exercise\]Suppose that is considering adding a literal
to a clause using a binary predicate $P$ and that previous literals
(including the head of the clause) contain five different variables.

1.  How many functionally different literals can be generated? Two
    literals are functionally identical if they differ only in the names
    of the *new* variables that they contain.

2.  Can you find a general formula for the number of different literals
    with a predicate of arity $r$ when there are $n$ variables
    previously used?

3.  Why does not allow literals that contain no previously used
    variables?

**19.8** Using the data from the family tree in
Figure [family2-figure](#/), or a subset thereof, apply the
algorithm to learn a definition for the ${Ancestor}$ predicate.

