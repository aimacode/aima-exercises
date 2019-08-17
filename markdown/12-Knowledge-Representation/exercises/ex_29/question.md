

A complete solution to the problem of
inexact matches to the buyer’s description in shopping is very difficult
and requires a full array of natural language processing and information
retrieval techniques. (See Chapters <a class="chapterRef" title="" href="{{site.baseurl}}/nlp1-exercises/">nlp1-chapter</a>
and <a class="chapterRef" title="" href="{{site.baseurl}}/nlp-communicating-exercises/">nlp-english-chapter</a>.) One small step is to allow the user to
specify minimum and maximum values for various attributes. The buyer
must use the following grammar for product descriptions:<br>

$$
Description \rightarrow Category \space [Connector \space Modifier]*
$$
$$
Connector \rightarrow "with" \space | "and" | ","
$$
$$
Modifier \rightarrow Attribute \space |\space Attribute \space Op \space Value
$$
$$
Op \rightarrow "=" | "\gt" | "\lt"
$$

Here, ${Category}$ names a product category, ${Attribute}$ is some
feature such as “CPU” or “price,” and ${Value}$ is the target value
for the attribute. So the query “computer with at least a 2.5 GHz CPU
for under 500” must be re-expressed as “computer with CPU $>$ 2.5 GHz
and price $<$ 500.” Implement a shopping agent that accepts descriptions
in this language.
