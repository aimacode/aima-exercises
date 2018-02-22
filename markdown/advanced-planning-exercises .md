
# Advanced Planning Exercises



## 11.1: Time, Schedules, and Resources (1 exercises, 0 labelled)

Q.  The goals we have considered so far all ask the planner to make the world
    satisfy the goal at just one time step. Not all goals can be expressed this way: you
    do not achieve the goal of suspending a chandelier above the ground by
    throwing it in the air. More seriously, you wouldn't want your spacecraft
    life-support system to supply oxygen one day but not the next.
    A <b>maintenance goal</b> is achieved when the agent's plan causes a condition
    to hold continuously from a given state onward.  Describe how to
    extend the formalism of this chapter to support maintenance goals.
    (id=11.1 section=11.1)

## 11.2: Hierarchical Planning (4 exercises, 2 labelled)

Q.  <i>Nick Hay Question 1</i> :
    You have a number of trucks with which to deliver a set of packages.
    Each package starts at some location on a grid map, and has a
    destination somewhere else.  Each truck is directly controlled by
    moving forward and turning.  Construct a hierarchy of high-level
    actions for this problem.  What knowledge about the solution does your
    hierarchy encode?
    (id=11.2 section=11.2)

Q.  <i>[HLA-unique-exercise]</i> :
    Suppose that a high-level action has exactly one implementation as a
    sequence of primitive actions.  Give an algorithm for computing its
    preconditions and effects, given the complete refinement hierarchy and
    schemas for the primitive actions.
    (id=11.3 section=11.2)

Q. Suppose that the optimistic reachable set of a high-level plan is a
    superset of the goal set; can anything be concluded about whether the
    plan achieves the goal? What if the pessimistic reachable set doesn't
    intersect the goal set? Explain.
    (id=11.4 section=11.2)

Q.  <i>[HLA-progression-exercise]</i>
     Write an algorithm that takes an initial state (specified by a set of propositional literals)      and a sequence of HLAs (each defined by preconditions and angelic specifications of          optimistic and pessimistic reachable sets) and computes optimistic and pessimistic            descriptions of the reachable set of the sequence
     (id=11.5 section=11.2)


## 11.3: Planning and Acting in Nondeterministic Domains (10 exercises, 2 labelled)
.  

Q.  In the following figure : 
    ![down](https://image.ibb.co/iDdq5n/Screen_Shot_2018_02_18_at_2_14_48_PM.png)
    we showed how to
    describe actions in a scheduling problem by using separate fields for DURATION, USE, and CONSUME
      Now suppose we
     wanted to combine scheduling with nondeterministic planning, which
     requires nondeterministic and conditional
     effects.  Consider each of the three fields and explain if they should
     remain separate fields, or if they should become effects of the
     action. Give an example for each of the three.
     (id=11.0 section=11.3)



Q.  Some of the operations in standard programming languages can be
    modeled as actions that change the state of the world. For example,
    the assignment operation changes the contents of a memory location,
    and the print operation changes the state of the output stream.  A
    program consisting of these operations can also be considered as a
    plan, whose goal is given by the specification of the program.
    Therefore, planning algorithms can be used to construct programs that
    achieve a given specification.
    - Write an action schema for the assignment operator (assigning
      the value of one variable to another). Remember that the original value will be overwritten!
    - Show how object creation can be used by a planner to produce a
     plan for exchanging the values of two variables by using a temporary
     variable.
(id=11.6 section=11.3)
    


Q.  Consider the following argument: In a framework that allows uncertain
    initial states, <b>nondeterministic effects</b> are just a notational
    convenience, not a source of additional representational power.  For
    any action schema <b>a</b>with nondeterministic effect \(P \lor Q\), we could
    always replace it with the conditional effects $$ ({R}{P} \land
    {\lnot R}{Q} )$$, which in turn can be reduced to two regular
    actions.  The proposition <b>R</b> stands for a random proposition that is
    unknown in the initial state and for which there are no sensing
    actions.  Is this argument correct?  Consider separately two cases,
    one in which only one instance of action schema <b>a</b> is in the plan,
    the other in which more than one instance is.
    (id=11.7 section=11.3)

Q. <i>[conformant-flip-literal-exercise]</i> : 
 Suppose the <i>Flip</i> action always changes the truth value of variable <i>L</i>. Show how to define its effects by using an action schema with conditional effects. Show that, despite the use of conditional effects, a 1-CNF belief state representation remains in 1-CNF after a <i>Flip</i>
 (id=11.8 section=11.3.1)

Q. In the blocks world we were forced to introduce two action schemas <i>Move</i> and <i>MoveToTable</i> , in order to maintain the <i>Clear</i> predicate properly. Show how conditional effects can be used to represent both of these cases with a single action.
 (id=11.9 section=11.3.1)

Q. <i>[alt-vacuum-exercise]</i>
 Conditional effects were illustrated for the <i>Suck</i> action in the
 vacuum world---which square becomes clean depends on which square the
 robot is in. Can you think of a new set of propositional variables to
 define states of the vacuum world, such that <i>Suck</i> has an
 <b>unconditional</b> description? Write out the descriptions of <i>Suck</i>,
 <i>Left</i>, and <i>Right</i>, using your propositions, and demonstrate that they
 suffice to describe all possible states of the world.
 (id=11.10 section=11.3.1)

Q. Find a suitably dirty carpet, free of obstacles, and vacuum it.
 Draw the path taken by the vacuum cleaner as accurately as you can.
 Explain it, with reference to the forms of planning discussed in this
 chapter.
 (id=11.11 section=11.3)

Q. Consider the following problem: A patient arrives at the doctor's
 office with symptoms that could have been caused either by dehydration
 or by disease <i>D</i> (but not both).  There are two possible actions:
 <i>Drink</i>, which unconditionally cures dehydration, and
 <i>Medicate</i>, which cures disease <i>D</i> but has an undesirable side effect
 if taken when the patient is dehydrated.  Write the problem
 description, and diagram a sensorless plan that solves the
 problem, enumerating all relevant possible worlds.
 (id=11.13 section=11.3.1)

Q. To the medication problem in the previous exercise, add a <i>Test</i>
 action that has the conditional effect <i>CultureGrowth</i> when
 <i>Disease</i> is true and in any case has the perceptual effect
 <i>Known(CultureGrowth)</i>.  Diagram a conditional plan that solves the
 problem and minimizes the use of the <i>Medicate</i> action.
