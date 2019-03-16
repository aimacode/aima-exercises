# Solution Ex 7.18
**a)** A simple truth table has eight rows, and shows that the sentence is true for all models
and hence valid.

**b)** For the left-hand side we have:<br>
        (Food ⇒ Party) ∨ (Drinks ⇒ Party)<br>
        (¬Food ∨ Party) ∨ (¬Drinks ∨ Party)<br>
        (¬Food ∨ Party ∨ ¬Drinks ∨ Party)<br>
        (¬Food ∨ ¬Drinks ∨ Party)<br>
and for the right-hand side we have<br>
        (F ood ∧ Drinks) ⇒ Party<br>
       ¬(F ood ∧ Drinks) ∨ Party<br>
        (¬Food ∨ ¬Drinks) ∨ Party<br>
        (¬Food ∨ ¬Drinks ∨ Party)<br>
The two sides are identical in CNF, and hence the original sentence is of the form
P ⇒ P, which is valid for any P.

**c).** To prove that a sentence is valid, prove that its negation is unsatisfiable. I.e., negate
it, convert to CNF, use resolution to prove a contradiction. We can use the above CNF
result for the LHS.<br>

   ¬[[(Food ⇒ Party) ∨ (Drinks ⇒ Party)] ⇒ [(Food ∧ Drinks) ⇒ Party]]<br>
    [(Food ⇒ Party) ∨ (Drinks ⇒ Party)] ∧ ¬[(Food ∧ Drinks) ⇒ Party]<br>
    (¬Food ∨ ¬Drinks ∨ Party) ∧ Food ∧ Drinks ∧ ¬Party<br>
      
Each of the three unit clauses resolves in turn against the first clause, leaving an empty
clause
