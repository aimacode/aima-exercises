# Problem Formulations for AIMA Problems

## Problem 1: The Glass Boxes and the Banana

### Problem Description
There are six glass boxes in a row, each with a lock. Each of the first five boxes holds a key unlocking the next box in line; the last box holds a banana. You have the key to the first box, and you want the banana.

### Problem Formulation
- **State**: A tuple (b1, b2, b3, b4, b5, b6) where bi is either 'locked' or 'unlocked'.
- **Initial State**: ('unlocked', 'locked', 'locked', 'locked', 'locked', 'locked').
- **Actions**: Unlock the next box if you have the key.
  - `Unlock i+1`: If box i is 'unlocked', unlock box i+1.
- **Transition Model**: 
  - Result of `Unlock i+1` is to change the state of box i+1 from 'locked' to 'unlocked'.
- **Goal State**: (any configuration where b6 = 'unlocked').

### Example
1. Initial State: ('unlocked', 'locked', 'locked', 'locked', 'locked', 'locked')
2. Action: Unlock 2
3. New State: ('unlocked', 'unlocked', 'locked', 'locked', 'locked', 'locked')
4. Continue until state is ('unlocked', 'unlocked', 'unlocked', 'unlocked', 'unlocked', 'unlocked')

---

## Problem 2: Sequence Transformation

### Problem Description
You start with the sequence ABABAECCEC, or in general any sequence made from A, B, C, and E. You can transform this sequence using the following equalities: AC = E, AB = BC, BB = E, and E$x$ = x for any x. Your goal is to produce the sequence E.

### Problem Formulation
- **State**: A string composed of the characters A, B, C, and E.
- **Initial State**: Any given sequence, e.g., "ABABAECCEC".
- **Actions**: Apply one of the transformation rules.
  - `Transform "AC" to "E"`
  - `Transform "AB" to "BC"`
  - `Transform "BB" to "E"`
  - `Transform "E$x$" to "$x$"`
- **Transition Model**: 
  - Apply the corresponding transformation to obtain the new sequence.
- **Goal State**: The sequence "E".

### Example
1. Initial State: "ABABAECCEC"
2. Action: Transform "BB" to "E"
3. New State: "ABAECCEC"
4. Continue until state is "E"

---

## Problem 3: Painting a Grid

### Problem Description
There is an n×n grid of squares, each square initially being either unpainted floor or a bottomless pit. You start standing on an unpainted floor square, and can either paint the square under you or move onto an adjacent unpainted floor square. You want the whole floor painted.

### Problem Formulation
- **State**: A tuple (position, grid), where position is the current square (x, y) and grid is a 2D array representing the painted/unpainted state of each square and the presence of bottomless pits.
- **Initial State**: (starting_position, initial_grid) where initial_grid[x][y] = 0 if unpainted, 1 if painted, -1 if pit.
- **Actions**: 
  - `Paint`: Paint the current square if it is unpainted.
  - `Move (dx, dy)`: Move to an adjacent unpainted square (if not a pit).
- **Transition Model**: 
  - `Paint` results in the current square being painted.
  - `Move (dx, dy)` results in a change of position to (x+dx, y+dy).
- **Goal State**: All non-pit squares are painted.

### Example
1. Initial State: ((0, 0), [[0, 0], [0, -1]])
2. Action: Paint
3. New State: ((0, 0), [[1, 0], [0, -1]])
4. Continue until all non-pit squares are painted

---

## Problem 4: Unloading a Container Ship

### Problem Description
A container ship is in port, loaded high with containers. There are 13 rows of containers, each 13 containers wide and 5 containers tall. You control a crane that can move to any location above the ship, pick up the container under it, and move it onto the dock. You want the ship unloaded.

### Problem Formulation
- **State**: A 3D array representing the position of each container on the ship. A crane position (x, y) indicating the column and row of the crane.
- **Initial State**: A full 13x13x5 grid with all containers present and crane position at (0, 0).
- **Actions**: 
  - `Move (dx, dy)`: Move the crane to a different position.
  - `PickUp`: Pick up a container from the current position.
  - `Unload`: Unload the container onto the dock.
- **Transition Model**: 
  - `Move (dx, dy)` changes the crane position to (x+dx, y+dy).
  - `PickUp` removes a container from the current position in the grid.
  - `Unload` decreases the number of containers on the ship.
- **Goal State**: The 3D grid is empty, meaning all containers have been unloaded.

### Example
1. Initial State: Full 13x13x5 grid and crane at (0, 0)
2. Action: PickUp
3. New State: Grid with one less container at the picked position and crane still at (0, 0)
4. Continue until grid is empty

---
