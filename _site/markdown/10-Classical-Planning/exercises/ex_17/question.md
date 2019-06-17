

Consider how to translate a set of action
schemas into the successor-state axioms of situation calculus.<br>

1.  Consider the schema for ${Fly}(p,{from},{to})$. Write a
    logical definition for the predicate
    ${Poss}({Fly}(p,{from},{to}),s)$, which is true if the
    preconditions for ${Fly}(p,{from},{to})$ are satisfied in
    situation $s$.<br>

2.  Next, assuming that ${Fly}(p,{from},{to})$ is the only action
    schema available to the agent, write down a successor-state axiom
    for ${At}(p,x,s)$ that captures the same information as the
    action schema.<br>

3.  Now suppose there is an additional method of travel:
    ${Teleport}(p,{from},{to})$. It has the additional
    precondition $\lnot {Warped}(p)$ and the additional effect
    ${Warped}(p)$. Explain how the situation calculus knowledge base
    must be modified.<br>

4.  Finally, develop a general and precisely specified procedure for
    carrying out the translation from a set of action schemas to a set
    of successor-state axioms.<br>
