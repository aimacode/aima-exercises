

This exercise analyzes in more detail the
persistent-failure model for the battery sensor in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/battery-persistence-figure.png">battery-persistence-figure</a>(a)
(page <a class="pageRef" title="" href="#">battery-persistence-figure</a>).<br>

1.  Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/battery-persistence-figure.png">battery-persistence-figure</a>(b) stops at
    $t=32$. Describe qualitatively what should happen as
    $t\to\infty$ if the sensor continues to read 0.<br>

2.  Suppose that the external temperature affects the battery sensor in
    such a way that transient failures become more likely as
    temperature increases. Show how to augment the DBN structure in
    Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/battery-persistence-figure.png">battery-persistence-figure</a>(a), and explain
    any required changes to the CPTs.<br>

3.  Given the new network structure, can battery readings be used by the
    robot to infer the current temperature?<br>
