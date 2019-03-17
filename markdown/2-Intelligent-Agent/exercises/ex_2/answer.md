Notice that for our simple environmental assumptions we need not worry about quantitative uncertainty.<br>
**a)** It suffices to show that for all possible actual environments (i.e., all dirt distributions and
initial locations), this agent cleans the squares at least as fast as any other agent. This is
trivially true when there is no dirt. When there is dirt in the initial location and none in
the other location, the world is clean after one step; no agent can do better. When there
is no dirt in the initial location but dirt in the other, the world is clean after two steps; no
agent can do better. When there is dirt in both locations, the world is clean after three
steps; no agent can do better. (Note: in general, the condition stated in the first sentence
of this answer is much stricter than necessary for an agent to be rational.)<br>
**b)** The agent in (a) keeps moving backwards and forwards even after the world is clean.
It is better to do NoOp once the world is clean (the chapter says this). Now, since
the agent’s percept doesn’t say whether the other square is clean, it would seem that
the agent must have some memory to say whether the other square has already been
cleaned. To make this argument rigorous is more difficult—for example, could the
agent arrange things so that it would only be in a clean left square when the right square
was already clean? As a general strategy, an agent can use the environment itself as
a form of external memory—a common technique for humans who use things like
appointment calendars and knots in handkerchiefs. In this particular case, however, that
is not possible. Consider the reflex actions for [A, Clean] and [B, Clean]. If either of
these is NoOp, then the agent will fail in the case where that is the initial percept but
the other square is dirty; hence, neither can be NoOp and therefore the simple reflex
agent is doomed to keep moving. In general, the problem with reflex agents is that they
have to do the same thing in situations that look the same, even when the situations
are actually quite different. In the vacuum world this is a big liability, because every
interior square (except home) looks either like a square with dirt or a square without
dirt.<br>
**c)** If we consider asymptotically long lifetimes, then it is clear that learning a map (in
some form) confers an advantage because it means that the agent can avoid bumping
into walls. It can also learn where dirt is most likely to accumulate and can devise
an optimal inspection strategy.
