

Chapter <a class="chapterRef" href="{{site.baseurl}}/concept-decisions-exercise/">complex-decisions-chapter</a> defined a
<b>proper policy</b> for an MDP as one that is
guaranteed to reach a terminal state. Show that it is possible for a
passive ADP agent to learn a transition model for which its policy $\pi$
is improper even if $\pi$ is proper for the true MDP; with such models,
the POLICY-EVALUATION step may fail if $\gamma{{\,=\,}}1$. Show that this problem cannot
arise if POLICY-EVALUATION is applied to the learned model only at the end of a trial.
