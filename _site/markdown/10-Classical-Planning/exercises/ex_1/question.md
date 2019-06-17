

Consider a robot whose operation is described by the following PDDL
operators:<br>

$$
Op({Go(x,y)},{At(Robot,x)},{\lnot At(Robot,x) \land At(Robot,y)})
$$
$$
Op({Pick(o)},{At(Robot,x)\land At(o,x)},{\lnot At(o,x) \land Holding(o)})
$$
$$
Op({Drop(o)},{At(Robot,x)\land Holding(o)},{At(o,x) \land \lnot Holding(o)}
$$

1.  The operators allow the robot to hold more than one object. Show how
    to modify them with an $EmptyHand$ predicate for a robot that can
    hold only one object.<br>

2.  Assuming that these are the only actions in the world, write a
    successor-state axiom for $EmptyHand$.<br>
