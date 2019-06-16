[Exercise 8.10](ex_10/)

This exercise uses the function ${MapColor}$ and predicates
${In}(x,y)$, ${Borders}(x,y)$, and ${Country}(x)$, whose arguments
are geographical regions, along with constant symbols for various
regions. In each of the following we give an English sentence and a
number of candidate logical expressions. For each of the logical
expressions, state whether it (1) correctly expresses the English
sentence; (2) is syntactically invalid and therefore meaningless; or (3)
is syntactically valid but does not express the meaning of the English
sentence.

1.  Paris and Marseilles are both in France.

    1.  ${In}({Paris} \land {Marseilles}, {France})$.

    2.  ${In}({Paris},{France}) \land {In}({Marseilles},{France})$.

    3.  ${In}({Paris},{France}) \lor {In}({Marseilles},{France})$.

2.  There is a country that borders both Iraq and Pakistan.

    1.  ${\exists\,c\;\;}$
        ${Country}(c) \land {Border}(c,{Iraq}) \land {Border}(c,{Pakistan})$.

    2.  ${\exists\,c\;\;}$
        ${Country}(c) {\:\;{\Rightarrow}\:\;}[{Border}(c,{Iraq}) \land {Border}(c,{Pakistan})]$.

    3.  $[{\exists\,c\;\;}$
        ${Country}(c)] {\:\;{\Rightarrow}\:\;}[{Border}(c,{Iraq}) \land {Border}(c,{Pakistan})]$.

    4.  ${\exists\,c\;\;}$
        ${Border}({Country}(c),{Iraq} \land {Pakistan})$.

3.  All countries that border Ecuador are in South America.

    1.  ${\forall\,c\;\;}  Country(c) \land {Border}(c,{Ecuador}) {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})$.

    2.  ${\forall\,c\;\;}  {Country}(c) {\:\;{\Rightarrow}\:\;}[{Border}(c,{Ecuador}) {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})]$.

    3.  ${\forall\,c\;\;}  [{Country}(c) {\:\;{\Rightarrow}\:\;}{Border}(c,{Ecuador})] {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})$.

    4.  ${\forall\,c\;\;}  Country(c) \land {Border}(c,{Ecuador}) \land {In}(c,{SouthAmerica})$.

4.  No region in South America borders any region in Europe.

    1.  $\lnot [{\exists\,c,d\;\;}  {In}(c,{SouthAmerica}) \land {In}(d,{Europe}) \land {Borders}(c,d)]$.

    2.  ${\forall\,c,d\;\;}  [{In}(c,{SouthAmerica}) \land {In}(d,{Europe})] {\:\;{\Rightarrow}\:\;}\lnot {Borders}(c,d)]$.

    3.  $\lnot {\forall\,c\;\;}  {In}(c,{SouthAmerica}) {\:\;{\Rightarrow}\:\;}{\exists\,d\;\;} {In}(d,{Europe}) \land
        \lnot {Borders}(c,d)$.

    4.  ${\forall\,c\;\;} {In}(c,{SouthAmerica}) {\:\;{\Rightarrow}\:\;}{\forall\,d\;\;} {In}(d,{Europe}) {\:\;{\Rightarrow}\:\;}\lnot {Borders}(c,d)$.

5.  No two adjacent countries have the same map color.

    1.  ${\forall\,x,y\;\;} \lnot {Country}(x) \lor \lnot {Country}(y) \lor \lnot {Borders}(x,y) \lor {}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.

    2.  ${\forall\,x,y\;\;} ({Country}(x) \land {Country}(y) \land {Borders}(x,y) \land \lnot(x=y)) {\:\;{\Rightarrow}\:\;}{}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.

    3.  ${\forall\,x,y\;\;} {Country}(x) \land {Country}(y) \land {Borders}(x,y) \land {}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.

    4.  ${\forall\,x,y\;\;} ({Country}(x) \land {Country}(y) \land {Borders}(x,y) ) {\:\;{\Rightarrow}\:\;}{MapColor}(x\neq y)$.

