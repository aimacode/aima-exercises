

Suppose we put into a logical knowledge base a segment of the
U.S. census data listing the age, city of residence, date of birth, and
mother of every person, using social security numbers as identifying
constants for each person. Thus, George’s age is given by
${Age}(443-65-1282, 56)$. Which of the following
indexing schemes S1–S5 enable an efficient solution for which of the
queries Q1–Q4 (assuming normal backward chaining)?<br>
<br>
- <b>S1</b>: an index for each atom in each position.<br>
- <b>S2</b>: an index for each first argument.<br>
- <b>S3</b>: an index for each predicate atom.<br>
- <b>S4</b>: an index for each <i>combination</i> of predicate and first argument.<br>
- <b>S5</b>: an index for each <i>combination</i> of predicate and second argument and an index for each first argument.<br>
- <b>Q1</b>: ${Age}(\mbox 443-44-4321,x)$<br>
- <b>Q2</b>: ${ResidesIn}(x,{Houston})$<br>
- <b>Q3</b>: ${Mother}(x,y)$<br>
- <b>Q4</b>: ${Age}(x,{34}) \land {ResidesIn}(x,{TinyTownUSA})$<br>
