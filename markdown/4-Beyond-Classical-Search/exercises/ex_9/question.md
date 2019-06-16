
On page <a href="#">multivalued-sensorless-page</a> it was assumed
that a given action would have the same cost when executed in any
physical state within a given belief state. (This leads to a
belief-state search problem with well-defined step costs.) Now consider
what happens when the assumption does not hold. Does the notion of
optimality still make sense in this context, or does it require
modification? Consider also various possible definitions of the “cost”
of executing an action in a belief state; for example, we could use the
*minimum* of the physical costs; or the
*maximum*; or a cost *interval* with the lower
bound being the minimum cost and the upper bound being the maximum; or
just keep the set of all possible costs for that action. For each of
these, explore whether A* (with modifications if necessary) can return
optimal solutions.
