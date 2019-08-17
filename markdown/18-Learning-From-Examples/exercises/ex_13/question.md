

In
Section <a class="sectionRef" title="" href="#">broadening-decision-tree-section</a>, we noted that
attributes with many different possible values can cause problems with
the gain measure. Such attributes tend to split the examples into
numerous small classes or even singleton classes, thereby appearing to
be highly relevant according to the gain measure. The
<b>gain-ratio</b> criterion selects attributes
according to the ratio between their gain and their intrinsic
information content—that is, the amount of information contained in the
answer to the question, “What is the value of this attribute?” The
gain-ratio criterion therefore tries to measure how efficiently an
attribute provides information on the correct classification of an
example. Write a mathematical expression for the information content of
an attribute, and implement the gain ratio criterion in DECISION-TREE-LEARNING.
