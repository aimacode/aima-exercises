

The monkey-and-bananas problem is faced by a monkey in a laboratory with
some bananas hanging out of reach from the ceiling. A box is available
that will enable the monkey to reach the bananas if he climbs on it.
Initially, the monkey is at $A$, the bananas at $B$, and the box at $C$.
The monkey and box have height ${Low}$, but if the monkey climbs onto
the box he will have height ${High}$, the same as the bananas. The
actions available to the monkey include ${Go}$ from one place to
another, ${Push}$ an object from one place to another, ${ClimbUp}$
onto or ${ClimbDown}$ from an object, and ${Grasp}$ or ${Ungrasp}$
an object. The result of a ${Grasp}$ is that the monkey holds the
object if the monkey and object are in the same place at the same
height.<br>

1.  Write down the initial state description.<br>

2.  Write the six action schemas.<br>

3.  Suppose the monkey wants to fool the scientists, who are off to tea,
    by grabbing the bananas, but leaving the box in its original place.
    Write this as a general goal (i.e., not assuming that the box is
    necessarily at C) in the language of situation calculus. Can this
    goal be solved by a classical planning system?<br>

4.  Your schema for pushing is probably incorrect, because if the object
    is too heavy, its position will remain the same when the ${Push}$
    schema is applied. Fix your action schema to account for
    heavy objects.<br>
