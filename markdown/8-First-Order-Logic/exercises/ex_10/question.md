

This exercise uses the function ${MapColor}$ and predicates
${In}(x,y)$, ${Borders}(x,y)$, and ${Country}(x)$, whose arguments
are geographical regions, along with constant symbols for various
regions. In each of the following we give an English sentence and a
number of candidate logical expressions. For each of the logical
expressions, state whether it (1) correctly expresses the English
sentence; (2) is syntactically invalid and therefore meaningless; or (3)
is syntactically valid but does not express the meaning of the English
sentence.<br>

1.  Paris and Marseilles are both in France.<br>

    1.  ${In}({Paris} \land {Marseilles}, {France})$.<br>

    2.  ${In}({Paris},{France}) \land {In}({Marseilles},{France})$.<br>

    3.  ${In}({Paris},{France}) \lor {In}({Marseilles},{France})$.<br>

2.  There is a country that borders both Iraq and Pakistan.<br>

    1.  ${\exists\,c\;\;}$
        ${Country}(c) \land {Border}(c,{Iraq}) \land {Border}(c,{Pakistan})$.<br>

    2.  ${\exists\,c\;\;}$
        ${Country}(c) {\:\;{\Rightarrow}\:\;}[{Border}(c,{Iraq}) \land {Border}(c,{Pakistan})]$.<br>

    3.  $[{\exists\,c\;\;}$
        ${Country}(c)] {\:\;{\Rightarrow}\:\;}[{Border}(c,{Iraq}) \land {Border}(c,{Pakistan})]$.<br>

    4.  ${\exists\,c\;\;}$
        ${Border}({Country}(c),{Iraq} \land {Pakistan})$.<br>

3.  All countries that border Ecuador are in South America.<br>

    1.  ${\forall\,c\;\;}  Country(c) \land {Border}(c,{Ecuador}) {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})$.<br>

    2.  ${\forall\,c\;\;}  {Country}(c) {\:\;{\Rightarrow}\:\;}[{Border}(c,{Ecuador}) {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})]$.<br>

    3.  ${\forall\,c\;\;}  [{Country}(c) {\:\;{\Rightarrow}\:\;}{Border}(c,{Ecuador})] {\:\;{\Rightarrow}\:\;}{In}(c,{SouthAmerica})$.<br>

    4.  ${\forall\,c\;\;}  Country(c) \land {Border}(c,{Ecuador}) \land {In}(c,{SouthAmerica})$.<br>

4.  No region in South America borders any region in Europe.<br>

    1.  $\lnot [{\exists\,c,d\;\;}  {In}(c,{SouthAmerica}) \land {In}(d,{Europe}) \land {Borders}(c,d)]$.<br>

    2.  ${\forall\,c,d\;\;}  [{In}(c,{SouthAmerica}) \land {In}(d,{Europe})] {\:\;{\Rightarrow}\:\;}\lnot {Borders}(c,d)]$.<br>

    3.  $\lnot {\forall\,c\;\;}  {In}(c,{SouthAmerica}) {\:\;{\Rightarrow}\:\;}{\exists\,d\;\;} {In}(d,{Europe}) \land<br>
        \lnot {Borders}(c,d)$.

    4.  ${\forall\,c\;\;} {In}(c,{SouthAmerica}) {\:\;{\Rightarrow}\:\;}{\forall\,d\;\;} {In}(d,{Europe}) {\:\;{\Rightarrow}\:\;}\lnot {Borders}(c,d)$.<br>

5.  No two adjacent countries have the same map color.<br>

    1.  ${\forall\,x,y\;\;} \lnot {Country}(x) \lor \lnot {Country}(y) \lor \lnot {Borders}(x,y) \lor {}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.<br>

    2.  ${\forall\,x,y\;\;} ({Country}(x) \land {Country}(y) \land {Borders}(x,y) \land \lnot(x=y)) {\:\;{\Rightarrow}\:\;}{}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.<br>

    3.  ${\forall\,x,y\;\;} {Country}(x) \land {Country}(y) \land {Borders}(x,y) \land {}$\
        $\lnot ({MapColor}(x) = {MapColor}(y))$.<br>

    4.  ${\forall\,x,y\;\;} ({Country}(x) \land {Country}(y) \land {Borders}(x,y) ) {\:\;{\Rightarrow}\:\;}{MapColor}(x\neq y)$.
<br>
