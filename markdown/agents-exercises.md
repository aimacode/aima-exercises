
# 2. Intelligent Agents

**2.1** Suppose that the performance measure is concerned with just the first
$T$ time steps of the environment and ignores everything thereafter.
Show that a rational agent’s action may depend not just on the state of
the environment but also on the time step it has reached.

**2.2** \[vacuum-rationality-exercise\]Let us examine the rationality of various
vacuum-cleaner agent functions.
1.  Show that the simple vacuum-cleaner agent function described in
    Figure [vacuum-agent-function-table](#/) is indeed
    rational under the assumptions listed on page [vacuum-rationality-page](#/).

2.  Describe a rational agent function for the case in which each
    movement costs one point. Does the corresponding agent program
    require internal state?

3.  Discuss possible agent designs for the cases in which clean squares
    can become dirty and the geography of the environment is unknown.
    Does it make sense for the agent to learn from its experience in
    these cases? If so, what should it learn? If not, why not?

**2.3** Write an essay on the relationship between evolution and one or more of
autonomy, intelligence, and learning.

**2.4** For each of the following assertions, say whether it is true or false
and support your answer with examples or counterexamples where
appropriate.

1.  An agent that senses only partial information about the state cannot
    be perfectly rational.

2.  There exist task environments in which no pure reflex agent can
    behave rationally.

3.  There exists a task environment in which every agent is rational.

4.  The input to an agent program is the same as the input to the
    agent function.

5.  Every agent function is implementable by some
    program/machine combination.

6.  Suppose an agent selects its action uniformly at random from the set
    of possible actions. There exists a deterministic task environment
    in which this agent is rational.

7.  It is possible for a given agent to be perfectly rational in two
    distinct task environments.

8.  Every agent is rational in an unobservable environment.

9.  A perfectly rational poker-playing agent never loses.

**2.4** \[PEAS-exercise\] For each of the following activities, give a PEAS
description of the task environment and characterize it in terms of the
properties listed in Section [env-properties-subsection](#/).

-   Playing soccer.

-   Exploring the subsurface oceans of Titan.

-   Shopping for used AI books on the Internet.

-   Playing a tennis match.

-   Practicing tennis against a wall.

-   Performing a high jump.

-   Knitting a sweater.

-   Bidding on an item at an auction.

**2.5** \[PEAS-exercise\] For each of the following activities, give a PEAS
description of the task environment and characterize it in terms of the
properties listed in Section [env-properties-subsection](#/).

-   Performing a gymnastics floor routine.

-   Exploring the subsurface oceans of Titan.

-   Playing soccer.

-   Shopping for used AI books on the Internet.

-   Practicing tennis against a wall.

-   Performing a high jump.

-   Bidding on an item at an auction.

**2.6** Define in your own words the following terms: agent, agent function,
agent program, rationality, autonomy, reflex agent, model-based agent,
goal-based agent, utility-based agent, learning agent.

**2.7** \[agent-fn-prog-exercise\]This exercise explores the differences between
agent functions and agent programs.

1.  Can there be more than one agent program that implements a given
    agent function? Give an example, or show why one is not possible.

2.  Are there agent functions that cannot be implemented by any agent
    program?

3.  Given a fixed machine architecture, does each agent program
    implement exactly one agent function?

4.  Given an architecture with $n$ bits of storage, how many different
    possible agent programs are there?

5.  Suppose we keep the agent program fixed but speed up the machine by
    a factor of two. Does that change the agent function?

**2.8** Write pseudocode agent programs for the goal-based and utility-based
agents.

**2.9** Consider a simple thermostat that turns on a furnace when the
temperature is at least 3 degrees below the setting, and turns off a
furnace when the temperature is at least 3 degrees above the setting. Is
a thermostat an instance of a simple reflex agent, a model-based reflex
agent, or a goal-based agent?

---

The following exercises all concern the implementation of environments
and agents for the vacuum-cleaner world.

**2.10** \[vacuum-start-exercise\]Implement a performance-measuring environment
simulator for the vacuum-cleaner world depicted in
Figure [vacuum-world-figure](#/) and specified on
page [vacuum-rationality-page](#/). Your implementation should be modular so that the
sensors, actuators, and environment characteristics (size, shape, dirt
placement, etc.) can be changed easily. (*Note:* for some
choices of programming language and operating system there are already
implementations in the online code repository.)

**2.11** Implement a simple reflex agent for the vacuum environment in
Exercise [vacuum-start-exercise](#/). Run the environment
with this agent for all possible initial dirt configurations and agent
locations. Record the performance score for each configuration and the
overall average score.

**2.12** \[vacuum-motion-penalty-exercise\]Consider a modified version of the
vacuum environment in Exercise [vacuum-start-exercise](#/),
in which the agent is penalized one point for each movement.

1.  Can a simple reflex agent be perfectly rational for this
    environment? Explain.

2.  What about a reflex agent with state? Design such an agent.

3.  How do your answers to **1** and **2**
    change if the agent’s percepts give it the clean/dirty status of
    every square in the environment?

**2.13** \[vacuum-unknown-geog-exercise\]_onsi_r a modified version of the
vacuum environment in Exercise [vacuum-start-exercise](#/),
in which the geography of the environment—its extent, boundaries, and
obstacles—is unknown, as is the initial dirt configuration. (The agent
can go *Up* and *Down* as well as *Left* and *Right*.)

1.  Can a simple reflex agent be perfectly rational for this
    environment? Explain.

2.  Can a simple reflex agent with a *randomized* agent
    function outperform a simple reflex agent? Design such an agent and
    measure its performance on several environments.

3.  Can you design an environment in which your randomized agent will
    perform poorly? Show your results.

4.  Can a reflex agent with state outperform a simple reflex agent?
    Design such an agent and measure its performance on several
    environments. Can you design a rational agent of this type?

**2.14** \[vacuum-bump-exercise\] Repeat
Exercise [vacuum-unknown-geog-exercise](#/) for the case in
which the location sensor is replaced with a “bump” sensor that detects
the agent’s attempts to move into an obstacle or to cross the boundaries
of the environment. Suppose the bump sensor stops working; how should
the agent behave?

**2.15** \[vacuum-finish-exercise\]The vacuum environments in the preceding
exercises have all been deterministic. Discuss possible agent programs
for each of the following stochastic versions:

1.  Murphy’s law: twenty-five percent of the time, the *Suck* action
    fails to clean the floor if it is dirty and deposits dirt onto the
    floor if the floor is clean. How is your agent program affected if
    the dirt sensor gives the wrong answer 10% of the time?

2.  Small children: At each time step, each clean square has a 10%
    chance of becoming dirty. Can you come up with a rational agent
    design for this case?



