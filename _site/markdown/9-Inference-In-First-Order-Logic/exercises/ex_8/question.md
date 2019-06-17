

These questions concern concern issues with substitution and
Skolemization.<br>

1.  Given the premise ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$, it is
    not valid to conclude that ${\exists\,q\;\;} P(q,q)$. Give an
    example of a predicate $P$ where the first is true but the second
    is false.<br>

2.  Suppose that an inference engine is incorrectly written with the
    occurs check omitted, so that it allows a literal like $P(x,F(x))$
    to be unified with $P(q,q)$. (As mentioned, most standard
    implementations of Prolog actually do allow this.) Show that such an
    inference engine will allow the conclusion ${\exists\,y\;\;} P(q,q)$
    to be inferred from the premise
    ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$.<br>

3.  Suppose that a procedure that converts first-order logic to clausal
    form incorrectly Skolemizes
    ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$ to $P(x,Sk0)$—that is, it
    replaces $y$ by a Skolem constant rather than by a Skolem function
    of $x$. Show that an inference engine that uses such a procedure
    will likewise allow ${\exists\,q\;\;} P(q,q)$ to be inferred from
    the premise ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$.<br>

4.  A common error among students is to suppose that, in unification,
    one is allowed to substitute a term for a Skolem constant instead of
    for a variable. For instance, they will say that the formulas
    $P(Sk1)$ and $P(A)$ can be unified under the substitution
    $\{ Sk1/A \}$. Give an example where this leads to an
    invalid inference.<br>
