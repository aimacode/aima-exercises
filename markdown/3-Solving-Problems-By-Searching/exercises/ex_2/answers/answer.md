If we want to give a complete problem formulation of a problem we need to remember what a problem formulation consist of (from section 3.1): 

##### PROBLEM FORMULATION: The agent devises a description of the states and actions necessary to reach the goal—an abstract model of the relevant part of the world…”

Section 3.1.1 describes more in depth what is required to define a search problem. We want a state space, an initial state, a set of goal states, a set of actions, a transition model and an action cost function. And as stated in section 3.1.2 we should formulate a problem with the right level of abstraction, so that we only have the important details.


#### 1. *There are six glass boxes in a row, each with a lock. Each of the first five boxes holds a key unlocking the next box in line; the last box holds a banana. You have the key to the first box, and you want the banana.*

> **States**: A state of the world is saying which boxes are locked and which are opened. All boxes except for the last contains a key that fits the following box. The last box contains a banana. You can have a single object on you and that is either a key or a banana (a key is gone when you unlock a box with it). For the problem with 6 boxes we have 7 states, 1 where all boxes are locked and 1 for when each box has been unlocked where you have the item that it contained. 

> **Initial state**: You have the key for the first box. 

> **Actions**: There should be one action called unlock. 

> **Transition Model**: Unlock will unlock the left most locked box in the row with the key you have in your hand. You will also get the item in the unlocked box. 

> **Goal states**: When you have the banana. 

> **Action cost**: Each action cost 1. <br> 


#### 2. *You start with the sequence ABABAECCEC, or in general any sequence made from A, B, C, and E. You can transform this sequence using the following equalities: AC = E, AB = BC, BB = E, and Ex = x for any x. For example, ABBC can be transformed into AEC, and then AC, and then E. Your goal is to produce the sequence E.*

> **States**: A state can be any sequence of the letters A, B, C and E.The length of the sequence is greater or equal to 1. 

> **Initial state**: Any state can be the initial state. 

> **Actions**: We have 4 different actions: ACtoE, ABtoBC, BBtoE, EXtoX. The action is only applicable if a correct subsequence exist in the state. E.g. ACtoE is only applicable in state s if the sequence of state s contains the subsequence “AC”. Therefore, it’s not all the actions that are applicable in any state. 

> **Transition model**: Performing an applicable action in a state s will provide a new state s’ where the sequence has been changed. E.g. performing the (applicable) action ABtoBC in state s will transform the sequence of state s so that every place that the subsequence “AB” will be changed to “BC”. The same pattern is true for the other actions, where X is seen as any letter. 

> **Goal State**: The state with the sequence “E” 

> **Action cost**: An action cost 1. 


#### 3. *There is an n×n grid of squares, each square initially being either unpainted floor or a bottomless pit. You start standing on an unpainted floor square, and can either paint the square under you or move onto an adjacent unpainted floor square. You want the whole floor painted*.

> **States**: A state description describes the location of each square and the property of the squares; painted floor, unpainted floor or a bottomless pit and also which square you are standing on. You cannot stand on the squares that are bottomless. 

> **Initial state**: As long as n > 1 and there are at least 1 unpainted square that you are standing on any variation can be the initial state. 

> **Actions**: There are the 4 movement actions; Up, Left, Right, Down these are only applicable if you end up on a square that is unpainted. Then there is the Paint action that is applicable if you are standing on a square that is unpainted. 

> **Transition Model**: The movement action will moves you to a new square. E.g. Up will move you to the adjacent square above your current position. Paint will make the unpainted square you stand on to a painted square. 

> **Goal state**: There are no unpainted squares.

> **Action cost**: Each action cost 1. 


#### 4. *A container ship is in port, loaded high with containers. There are 13 rows of containers, each 13 containers wide and 5 containers tall. You control a crane that can move to any location above the ship, pick up the container under it, and move it onto the dock. You want the ship unloaded.*


> **States**: A state description specifies the current amount of containers at all the locations. E.g There are 4 containers at row 1 column 1. 

> **Initial state**: There are 13 rows of containers, each 13 containers wide and 5 containers tall. 

> **Actions**: There is a PicknDock action that will pick up a container at a given location and move it to the dock, this action is only applicable if there is a container at the given location. 

> **Transition model**: The resulting state from the PicknDock action will have one less container at the location. 

> **Goal state**: There are no containers at any location on the ship. 

> **Action Cost**: Combination of the cost of the resources it takes to have the crane running and time. 



