[Exercise 23.3](ex_3/)

Consider the following PCFG for simple verb phrases:

> 0.1: VP $\rightarrow$ Verb

> 0.2: VP $\rightarrow$ Copula Adjective

> 0.5: VP $\rightarrow$ Verb the Noun

> 0.2: VP $\rightarrow$ VP Adverb

> 0.5: Verb $\rightarrow$ is

> 0.5: Verb $\rightarrow$ shoots

> 0.8: Copula $\rightarrow$ is

> 0.2: Copula $\rightarrow$ seems

> 0.5: Adjective $\rightarrow$ **unwell**

> 0.5: Adjective $\rightarrow$ **well**

> 0.5: Adverb $\rightarrow$ **well**

> 0.5: Adverb $\rightarrow$ **badly**

> 0.6: Noun $\rightarrow$ **duck**

> 0.4: Noun $\rightarrow$ **well**

1.  Which of the following have a nonzero probability as a VP? (i)
    shoots the duck well well well(ii) seems the well well(iii) shoots
    the unwell well badly

2.  What is the probability of generating “is well well”?

3.  What types of ambiguity are exhibited by the phrase in (b)?

4.  Given any PCFG, is it possible to calculate the probability that the
    PCFG generates a string of exactly 10 words?
