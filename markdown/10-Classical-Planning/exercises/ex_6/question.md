

A finite Turing machine has a finite one-dimensional tape of cells, each
cell containing one of a finite number of symbols. One cell has a read
and write head above it. There is a finite set of states the machine can
be in, one of which is the accept state. At each time step, depending on
the symbol on the cell under the head and the machine’s current state,
there are a set of actions we can choose from. Each action involves
writing a symbol to the cell under the head, transitioning the machine
to a state, and optionally moving the head left or right. The mapping
that determines which actions are allowed is the Turing machine’s
program. Your goal is to control the machine into the accept state.<br>
<br>
Represent the Turing machine acceptance problem as a planning problem.
If you can do this, it demonstrates that determining whether a planning
problem has a solution is at least as hard as the Turing acceptance
problem, which is PSPACE-hard.<br>
