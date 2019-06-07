

Recall that inheritance information in semantic networks can be captured
logically by suitable implication sentences. This exercise investigates
the efficiency of using such sentences for inheritance.<br>

1.  Consider the information in a used-car catalog such as Kelly’s Blue
    Book—for example, that 1973 Dodge vans are (or perhaps were once)
    worth 575. Suppose all this information (for 11,000 models) is
    encoded as logical sentences, as suggested in the chapter. Write
    down three such sentences, including that for 1973 Dodge vans. How
    would you use the sentences to find the value of a
    <i>particular</i> car, given a backward-chaining theorem
    prover such as Prolog?<br>

2.  Compare the time efficiency of the backward-chaining method for
    solving this problem with the inheritance method used in
    semantic nets.<br>

3.  Explain how forward chaining allows a logic-based system to solve
    the same problem efficiently, assuming that the KB contains only the
    11,000 sentences about prices.<br>

4.  Describe a situation in which neither forward nor backward chaining
    on the sentences will allow the price query for an individual car to
    be handled efficiently.<br>

5.  Can you suggest a solution enabling this type of query to be solved
    efficiently in all cases in logic systems? <i>Hint:</i>
    Remember that two cars of the same year and model have the
    same price.)
