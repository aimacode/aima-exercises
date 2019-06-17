

Consider a student who has the choice to buy or not buy a textbook for a
course. We’ll model this as a decision problem with one Boolean decision
node, $B$, indicating whether the agent chooses to buy the book, and two
Boolean chance nodes, $M$, indicating whether the student has mastered
the material in the book, and $P$, indicating whether the student passes
the course. Of course, there is also a utility node, $U$. A certain
student, Sam, has an additive utility function: 0 for not buying the
book and -\$100 for buying it; and \$2000 for passing the course and 0
for not passing. Sam’s conditional probability estimates are as follows:
$$\begin{array}{ll}
P(p|b,m) = 0.9              & P(m|b) = 0.9       \\
P(p|b, \lnot m) = 0.5       & P(m|\lnot b) = 0.7 \\
P(p|\lnot b, m) = 0.8       & \\
P(p|\lnot b, \lnot m) = 0.3 & \\
\end{array}$$<br>

You might think that $P$ would be independent of $B$ given
$M$, But this course has an open-book final—so having the book helps.<br>

1.  Draw the decision network for this problem.<br>

2.  Compute the expected utility of buying the book and of not
    buying it.
<br>
3.  What should Sam do?
