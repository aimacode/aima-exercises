[Exercise 13.28 \[naive-bayes-retrieval-exercise\]](ex_28/)

Text categorization is the task of
assigning a given document to one of a fixed set of categories on the
basis of the text it contains. Naive Bayes models are often used for
this task. In these models, the query variable is the document category,
and the “effect” variables are the presence or absence of each word in
the language; the assumption is that words occur independently in
documents, with frequencies determined by the document category.

1.  Explain precisely how such a model can be constructed, given as
    “training data” a set of documents that have been assigned
    to categories.

2.  Explain precisely how to categorize a new document.

3.  Is the conditional independence assumption reasonable? Discuss.
