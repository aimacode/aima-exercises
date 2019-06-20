### **1**) 
The simple vaccum-cleaner agent described is indeed a rational one as rationality at any given point depends on  

*a*) The performance measure that defines the criterion of success. The performance measure for our agent is clean squares at the end of every time step and since our agent can suck dirt from the square it is in, our agent is capable of achieving the performance measure.

*b*) The agent's prior knowledge of the environment. The agent can not only percieve the square it is in but can also percieve whether that square contains dirt or not. This prior knowledge dictates our agent whether to suck dirt or not thus making a rational decision.

*c*) The actions the agents can perform. Our agent can move left and right and can suck the dirt from the square it is in. A rational agent if finds out that the current square it is present in is clean, it would move to next square to check if it is also clean or not.
Worst case scenario for our environment is this percept sequence, [A,dirty],[B,dirty] for which our agent will perform the actions in order, *Suck* *Right* *Suck*. The environment is clean under three steps thus maximising the performance measure which is the definition of a rational agent.


### **2**)
If each movement costs one point for the rational agent, it can not check the adjacent squares for dirt endlessly. Now the agent should do nothing once it is sure that all the squares are clean. To achieve this the agent does require an internal state to remember it's percept sequence: Like memory to remember what all squares are cleaned and the squares that are left to check, if any.

### **3**) 
In cases when clean squares can become dirty again and the geography of the environment is unknown, It makes sense for the agent to learn from it's previous experiences to make rational  decisions in future. Since after experience the agent will know which geographical part of the environment it should avoid and can also predict which square is most likely to get dirty by analysing the percept sequence.
