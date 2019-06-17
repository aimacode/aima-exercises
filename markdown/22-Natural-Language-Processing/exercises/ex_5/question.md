

(Adapted from @Jurafsky+Martin:2000.) In this exercise you will develop a classifier for
authorship: given a text, the classifier predicts which of two candidate
authors wrote the text. Obtain samples of text from two different
authors. Separate them into training and test sets. Now train a language
model on the training set. You can choose what features to use;
$n$-grams of words or letters are the easiest, but you can add
additional features that you think may help. Then compute the
probability of the text under each language model and chose the most
probable model. Assess the accuracy of this technique. How does accuracy
change as you alter the set of features? This subfield of linguistics is
called <b>stylometry</b>; its successes include the identification of the author of the
disputed <i>Federalist Papers</i> @Mosteller+Wallace:1964 and
some disputed works of Shakespeare @Hope:1994. @Khmelev+Tweedie:2001 produce good results with
a simple letter bigram model.
