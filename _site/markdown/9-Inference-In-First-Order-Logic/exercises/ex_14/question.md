[Exercise 9.14](ex_14/)

Suppose we put into a logical knowledge base a segment of the
U.S. census data listing the age, city of residence, date of birth, and
mother of every person, using social security numbers as identifying
constants for each person. Thus, George’s age is given by
${Age}(\mbox{{443}}-{65}-{1282}}, {56})$. Which of the following
indexing schemes S1–S5 enable an efficient solution for which of the
queries Q1–Q4 (assuming normal backward chaining)?

- **S1**: an index for each atom in each position.
- **S2**: an index for each first argument.
- **S3**: an index for each predicate atom.
- **S4**: an index for each *combination* of predicate and first argument.
- **S5**: an index for each *combination* of predicate and second argument and an index for each first argument.
- **Q1**: ${Age}(\mbox 443-44-4321,x)$
- **Q2**: ${ResidesIn}(x,{Houston})$
- **Q3**: ${Mother}(x,y)$
- **Q4**: ${Age}(x,{34}) \land {ResidesIn}(x,{TinyTownUSA})$
