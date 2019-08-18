

(Adapted from [<a class="paperRef" title="" href="">Knight:1999</a>].) Our translation model assumes that, after the phrase
translation model selects phrases and the distortion model permutes
them, the language model can unscramble the permutation. This exercise
investigates how sensible that assumption is. Try to unscramble these
proposed lists of phrases into the correct order:<br>

1.  have, programming, a, seen, never, I, language, better<br>

2.  loves, john, mary<br>

3.  is the, communication, exchange of, intentional, information
    brought, by, about, the production, perception of, and signs, from,
    drawn, a, of, system, signs, conventional, shared<br>

4.  created, that, we hold these, to be, all men, truths, are, equal,
    self-evident<br>

Which ones could you do? What type of knowledge did you draw upon? Train
a bigram model from a training corpus, and use it to find the
highest-probability permutation of some sentences from a test corpus.
Report on the accuracy of this model.
