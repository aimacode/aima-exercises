# Solution Exercise 7.17
**a)** Correct representations of “a person who is radical is electable if he/she is conservative,but otherwise is not electable”:<br>
1)(R ∧ E) ⇐⇒ C<br> No; this sentence asserts, among other things, that all conservatives are radical,which is not what was stated.
<br>2)R ⇒ (E ⇐⇒ C)<br>Yes, this says that if a person is a radical then they are electable if and only if theyare conservative.<br>
3)R ⇒ ((C ⇒ E) ∨ ¬E)<br>No, this is equivalent to ¬R ∨ ¬C ∨ E ∨ ¬E which is a tautology, true under anyassignment.<br><br>
**b)** Horn form:<br>
1)Yes<br>(R ∧ E) ⇐⇒ C ≡ ((R ∧ E) ⇒ C) ∧ (C ⇒ (R ∧ E))≡ ((R ∧ E) ⇒ C) ∧ (C ⇒ R) ∧ (C ⇒ E)<br>
2)Yes<br>R ⇒ (E ⇐⇒ C) ≡ R ⇒ ((E ⇒ C) ∧ (C ⇒ E))≡ ¬R ∨ ((¬E ∨ C) ∧ (¬C ∨ E))≡ (¬R ∨ ¬E ∨ C) ∧ (¬R ∨ ¬C ∨ E)<br>
3)Yes<br> e.g., T rue ⇒ T rue
