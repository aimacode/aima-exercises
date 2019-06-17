

In each of the following we give an English sentence and a number of
candidate logical expressions. For each of the logical expressions,
state whether it (1) correctly expresses the English sentence; (2) is
syntactically invalid and therefore meaningless; or (3) is syntactically
valid but does not express the meaning of the English sentence.<br>

1.  Every cat loves its mother or father.<br>

    1.  ${\forall\,x\;\;} {Cat}(x) {\:\;{\Rightarrow}\:\;}{Loves}(x,{Mother}(x)\lor {Father}(x))$.<br>

    2.  ${\forall\,x\;\;} \lnot {Cat}(x) \lor {Loves}(x,{Mother}(x)) \lor {Loves}(x,{Father}(x))$.<br>

    3.  ${\forall\,x\;\;} {Cat}(x) \land ({Loves}(x,{Mother}(x))\lor {Loves}(x,{Father}(x)))$.<br>

2.  Every dog who loves one of its brothers is happy.<br>

    1.  ${\forall\,x\;\;} {Dog}(x) \land (\exists y\ {Brother}(y,x) \land {Loves}(x,y)) {\:\;{\Rightarrow}\:\;}{Happy}(x)$.<br>

    2.  ${\forall\,x,y\;\;} {Dog}(x) \land {Brother}(y,x) \land {Loves}(x,y) {\:\;{\Rightarrow}\:\;}{Happy}(x)$.<br>

    3.  ${\forall\,x\;\;} {Dog}(x) \land [{\forall\,y\;\;} {Brother}(y,x) {\;\;{\Leftrightarrow}\;\;}{Loves}(x,y)] {\:\;{\Rightarrow}\:\;}{Happy}(x)$.<br>

3.  No dog bites a child of its owner.<br>

    1.  ${\forall\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}\lnot {Bites}(x,{Child}({Owner}(x)))$.<br>

    2.  $\lnot {\exists\,x,y\;\;} {Dog}(x) \land {Child}(y,{Owner}(x)) \land {Bites}(x,y)$.<br>

    3.  ${\forall\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}({\forall\,y\;\;} {Child}(y,{Owner}(x)) {\:\;{\Rightarrow}\:\;}\lnot {Bites}(x,y))$.<br>

    4.  $\lnot {\exists\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}({\exists\,y\;\;} {Child}(y,{Owner}(x)) \land {Bites}(x,y))$.<br>

4.  Everyone’s zip code within a state has the same first digit.<br>

    1.  ${\forall\,x,s,z_1\;\;} [{State}(s) \land {LivesIn}(x,s) \land {Zip}(x){{\,=\,}}z_1] {\:\;{\Rightarrow}\:\;}{}$\
        $[{\forall\,y,z_2\;\;} {LivesIn}(y,s) \land {Zip}(y){{\,=\,}}z_2 {\:\;{\Rightarrow}\:\;}{Digit}(1,z_1) {{\,=\,}}{Digit}(1,z_2) ]$.<br>

    2.  ${\forall\,x,s\;\;} [{State}(s) \land {LivesIn}(x,s) \land {\exists\,z_1\;\;} {Zip}(x){{\,=\,}}z_1] {\:\;{\Rightarrow}\:\;}{}$\
        $ [{\forall\,y,z_2\;\;} {LivesIn}(y,s) \land {Zip}(y){{\,=\,}}z_2 \land {Digit}(1,z_1) {{\,=\,}}{Digit}(1,z_2) ]$.<br>

    3.  ${\forall\,x,y,s\;\;} {State}(s) \land {LivesIn}(x,s) \land {LivesIn}(y,s) {\:\;{\Rightarrow}\:\;}{Digit}(1,{Zip}(x){{\,=\,}}{Zip}(y))$.<br>

    4.  ${\forall\,x,y,s\;\;} {State}(s) \land {LivesIn}(x,s) \land {LivesIn}(y,s) {\:\;{\Rightarrow}\:\;}{}$\
        ${Digit}(1,{Zip}(x)) {{\,=\,}}{Digit}(1,{Zip}(y))$.
<br>
