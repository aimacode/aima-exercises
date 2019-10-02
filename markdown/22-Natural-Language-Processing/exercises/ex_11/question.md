

Consider the problem of trying to evaluate the quality of an IR system
that returns a ranked list of answers (like most Web search engines).
The appropriate measure of quality depends on the presumed model of what
the searcher is trying to achieve, and what strategy she employs. For
each of the following models, propose a corresponding numeric measure.<br>

1.  The searcher will look at the first twenty answers returned, with
    the objective of getting as much relevant information as possible.<br>

2.  The searcher needs only one relevant document, and will go down the
    list until she finds the first one.<br>

3.  The searcher has a fairly narrow query and is able to examine all
    the answers retrieved. She wants to be sure that she has seen
    everything in the document collection that is relevant to her query.
    (E.g., a lawyer wants to be sure that she has found
    <i>all</i> relevant precedents, and is willing to spend
    considerable resources on that.)<br>

4.  The searcher needs just one document relevant to the query, and can
    afford to pay a research assistant for an hour’s work looking
    through the results. The assistant can look through 100 retrieved
    documents in an hour. The assistant will charge the searcher for the
    full hour regardless of whether he finds it immediately or at the
    end of the hour.<br>

5.  The searcher will look through all the answers. Examining a document
    has cost \$ A; finding a relevant document has value \$ B; failing
    to find a relevant document has cost \$ C for each relevant
    document not found.<br>

6.  The searcher wants to collect as many relevant documents as
    possible, but needs steady encouragement. She looks through the
    documents in order. If the documents she has looked at so far are
    mostly good, she will continue; otherwise, she will stop.
