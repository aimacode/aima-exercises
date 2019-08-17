

Imagine that, in Exercise <a class="exerciseRef" href="{{ site.baseurl }}/search-exercises/ex_5/">two-friends-exercise</a>, one of
the friends wants to avoid the other. The problem then becomes a
two-player game. We assume now that the players take turns moving. The
game ends only when the players are on the same node; the terminal
payoff to the pursuer is minus the total time taken. (The evader “wins”
by never losing.) An example is shown in Figure.
<a href="#pursuit-evasion-game-figure">pursuit-evasion-game-figure</a><br>


1.  Copy the game tree and mark the values of the terminal nodes.<br>

2.  Next to each internal node, write the strongest fact you can infer
    about its value (a number, one or more inequalities such as
    “$\geq 14$”, or a “?”).<br>

3.  Beneath each question mark, write the name of the node reached by
    that branch.<br>

4.  Explain how a bound on the value of the nodes in (c) can be derived
    from consideration of shortest-path lengths on the map, and derive
    such bounds for these nodes. Remember the cost to get to each leaf
    as well as the cost to solve it.<br>

5.  Now suppose that the tree as given, with the leaf bounds from (d),
    is evaluated from left to right. Circle those “?” nodes that would
    <i>not</i> need to be expanded further, given the bounds
    from part (d), and cross out those that need not be considered
    at all.<br>

6.  Can you prove anything in general about who wins the game on a map
    that is a tree?<br>
