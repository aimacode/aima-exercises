First thing's first, let's convert the statements above into Propositional Logic:

- If the unicorn is mythical, then it is immortal
  - Mythical ⇒ Immortal
- If the unicorn is not mythical, then it is a mortal mammal
    - Can read this as "If the unicorn is not mythical, then it is mortal AND mammal" 
    - ¬Mythical ⇒ (Mortal ∧ Mammal)
- If the unicorn is either immortal or a mammal, then it is horned
    - (Immortal ∨ Mammal) ⇒ Horned
- The unicorn is magical if it is horned
    - Horned ⇒ Magical
 
 
Now that everything is converted to Propositional Logic, we now need to convert these statements to Conjunctive Normal Form (CNF):

- Mythical ⇒ Immortal
  - Replace α ⇒ β with α ∨ β everywhere
    - ¬Mythical ∨ Immortal
- ¬Mythical ⇒ (Mortal ∧ Mammal)
  - Replace α ⇒ β with α ∨ β everywhere
    - Mythical ∨ (Mortal ∧ Mammal)
  - Rewrite α ∨ (β ∧ γ) as (α ∨ β) ∧ (α ∨ γ)
    - (Mythical ∨ Mortal) ∧ (Mythical ∨ Mammal)
- (Immortal ∨ Mammal) ⇒ Horned
  - Replace α ⇒ β with α ∨ β everywhere
    - ¬(Immortal ∨ Mammal) ∨ Horned
  - Replace ¬(α ∨ β) with ¬α ∧ ¬β
    - ¬Immortal ∧ ¬Mammal ∨ Horned
- Horned ⇒ Magical
  - Replace α ⇒ β with α ∨ β everywhere
    - ¬Horned ∨ Magical
 

Dope, now we can move on to the Resolution Phase! Remember, we must negate our goals before performing resolution. So since our goals are proving that unicorns are Mythical, Magical, and Horned, we will be using ¬Mythical, ¬Magical, and ¬Horned respectively in our 3 proofs:

 
Proof that Unicorns are Mythical:

1. ¬Mythical ∨ Immortal
2. (Mythical ∨ Mortal)
3. (Mythical ∨ Mammal)
4. ¬Immortal
5. ¬Mammal ∨ Horned
6. ¬Horned ∨ Magical
7. ¬Mythical
8. Mammal [ 3, 7 ]
9. Mortal [ 2, 7 ]
10. Horned [ 5, 8 ]
11. Magical [ 6, 10 ]
And that's about as far as you can get with this one. Since it (at least it seems) is impossible to resolve these statements to the empty clause, we cannot prove that Unicorns are Mythical.

Proof that Unicorns are Magical:

1. ¬Mythical ∨ Immortal
2. (Mythical ∨ Mortal)
3. (Mythical ∨ Mammal)
4. ¬Immortal
5. ¬Mammal ∨ Horned
6. ¬Horned ∨ Magical
7. ¬Magical
8. ¬Horned [ 6, 7 ]
9. ¬Mammal [ 5, 8 ]
10. Mythical [ 3, 9 ]
11. Immortal [ 1, 10 ]
( ) [ 4, 11 ]
 

Proof that Unicorns are Horned:

1. ¬Mythical ∨ Immortal
2. (Mythical ∨ Mortal)
3. (Mythical ∨ Mammal)
4. ¬Immortal
5. ¬Mammal ∨ Horned
6. ¬Horned ∨ Magical
7. ¬Horned
8. ¬Mammal [ 5, 7 ]
9. Mythical [ 3, 8 ]
10. Immortal [ 1, 9 ]
11. ( ) [ 4, 10]
 
 And since we got the empty clause for all three, we now have proof that Unicorns are indeed Magical and Horned. But we cannot say that Unicorns are Mythical 👀🦄
