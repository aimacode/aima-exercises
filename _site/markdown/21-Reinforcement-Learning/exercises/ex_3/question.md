

Starting with the passive ADP agent,
modify it to use an approximate ADP algorithm as discussed in the text.
Do this in two steps:<br>

1.  Implement a priority queue for adjustments to the utility estimates.
    Whenever a state is adjusted, all of its predecessors also become
    candidates for adjustment and should be added to the queue. The
    queue is initialized with the state from which the most recent
    transition took place. Allow only a fixed number of adjustments.<br>

2.  Experiment with various heuristics for ordering the priority queue,
    examining their effect on learning rates and computation time.
