[Exercise 3.19 \[brio-exercise\]](ex_19/)

A basic wooden railway set contains the pieces shown in Figure [wooded railway set](#brio)
. The task is to connect these pieces into a railway that has no
overlapping tracks and no loose ends where a train could run off onto
the floor.

1.  Suppose that the pieces fit together *exactly* with no
    slack. Give a precise formulation of the task as a search problem.

2.  Identify a suitable uninformed search algorithm for this task and
    explain your choice.

3.  Explain why removing any one of the “fork” pieces makes the
    problem unsolvable.

4.  Give an upper bound on the total size of the state space defined by
    your formulation. (*Hint*: think about the maximum
    branching factor for the construction process and the maximum depth,
    ignoring the problem of overlapping pieces and loose ends. Begin by
    pretending that every piece is unique.)
<br>
<b id='brio'> Figure </b> The track pieced in a wooden railway set; each is labeled with the number of copies in the set. Note that curved pieces and "fork" pieces ("switches" or "points") can be flipped over so they can curve in either direction. Each curve sustends 45 degrees.

![wooded railway set](http://nalinc.github.io/aima-exercises/Jupyter%20notebook/figures/brio.svg)