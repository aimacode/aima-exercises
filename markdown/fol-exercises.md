
# 8. First Order Logic

**8.1** A logical knowledge base represents the world using a set of sentences
with no explicit structure. An **analogical**
representation, on the other hand, has physical structure that
corresponds directly to the structure of the thing represented. Consider
a road map of your country as an analogical representation of facts
about the country—it represents facts with a map language. The
two-dimensional structure of the map corresponds to the two-dimensional
surface of the area.

1.  Give five examples of *symbols* in the map language.

2.  An *explicit* sentence is a sentence that the creator
    of the representation actually writes down. An
    *implicit* sentence is a sentence that results from
    explicit sentences because of properties of the analogical
    representation. Give three examples each of *implicit*
    and *explicit* sentences in the map language.

3.  Give three examples of facts about the physical structure of your
    country that cannot be represented in the map language.

4.  Give two examples of facts that are much easier to express in the
    map language than in first-order logic.

5.  Give two other examples of useful analogical representations. What
    are the advantages and disadvantages of each of these languages?

**8.2** Consider a knowledge base containing just two sentences: $P(a)$ and
$P(b)$. Does this knowledge base entail $\forall\,x\ P(x)$? Explain your
answer in terms of models.

**8.3** Is the sentence ${\exists\,x,y\;\;} x{{\,=\,}}y$ valid? Explain.

**8.4** Write down a logical sentence such that every world in which it is true
contains exactly one object.

**8.5** Write down a logical sentence such that every world in which it is true
contains exactly two objects.

**8.6** \[fol-model-count-exercise\] Consider a symbol vocabulary that contains
$c$ constant symbols, $p_k$ predicate symbols of each arity $k$, and
$f_k$ function symbols of each arity $k$, where $1\leq k\leq A$. Let the
domain size be fixed at $D$. For any given model, each predicate or
function symbol is mapped onto a relation or function, respectively, of
the same arity. You may assume that the functions in the model allow
some input tuples to have no value for the function (i.e., the value is
the invisible object). Derive a formula for the number of possible
models for a domain with $D$ elements. Don’t worry about eliminating
redundant combinations.

**8.7** Which of the following are valid (necessarily true) sentences?

1.  $(\exists x\ x{{\,=\,}}x) {\:\;{\Rightarrow}\:\;}({\forall\,y\;\;} \exists z\ y{{\,=\,}}z)$.

2.  ${\forall\,x\;\;} P(x) \lor \lnot P(x)$.

3.  ${\forall\,x\;\;} {Smart}(x) \lor (x{{\,=\,}}x)$.

**8.8** \[empty-universe-exercise\] Consider a version of the semantics for
first-order logic in which models with empty domains are allowed. Give
at least two examples of sentences that are valid according to the
standard semantics but not according to the new semantics. Discuss which
outcome makes more intuitive sense for your examples.

**8.9** \[hillary-exercise\]Does the fact
$\lnot {Spouse}({George},{Laura})$ follow from the facts
${Jim}\neq {George}$ and ${Spouse}({Jim},{Laura})$? If so,
give a proof; if not, supply additional axioms as needed. What happens
if we use ${Spouse}$ as a unary function symbol instead of a binary
predicate?

**8.10** This exercise uses the function ${MapColor}$ and predicates
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

**8.11** Consider a vocabulary with the following symbols:

> ${Occupation}(p,o)$: Predicate. Person $p$ has occupation $o$.

> ${Customer}(p1,p2)$: Predicate. Person $p1$ is a customer of person $p2$.

> ${Boss}(p1,p2)$: Predicate. Person $p1$ is a boss of person $p2$.

> ${Doctor}$, $ {Surgeon}$, $ {Lawyer}$, $ {Actor}$: Constants denoting occupations.

> ${Emily}$, $ {Joe}$: Constants denoting people.

Use these symbols to write the following assertions in first-order
logic:

1.  Emily is either a surgeon or a lawyer.

2.  Joe is an actor, but he also holds another job.

3.  All surgeons are doctors.

4.  Joe does not have a lawyer (i.e., is not a customer of any lawyer).

5.  Emily has a boss who is a lawyer.

6.  There exists a lawyer all of whose customers are doctors.

7.  Every surgeon has a lawyer.

**8.12** In each of the following we give an English sentence and a number of
candidate logical expressions. For each of the logical expressions,
state whether it (1) correctly expresses the English sentence; (2) is
syntactically invalid and therefore meaningless; or (3) is syntactically
valid but does not express the meaning of the English sentence.

1.  Every cat loves its mother or father.

    1.  ${\forall\,x\;\;} {Cat}(x) {\:\;{\Rightarrow}\:\;}{Loves}(x,{Mother}(x)\lor {Father}(x))$.

    2.  ${\forall\,x\;\;} \lnot {Cat}(x) \lor {Loves}(x,{Mother}(x)) \lor {Loves}(x,{Father}(x))$.

    3.  ${\forall\,x\;\;} {Cat}(x) \land ({Loves}(x,{Mother}(x))\lor {Loves}(x,{Father}(x)))$.

2.  Every dog who loves one of its brothers is happy.

    1.  ${\forall\,x\;\;} {Dog}(x) \land (\exists y\ {Brother}(y,x) \land {Loves}(x,y)) {\:\;{\Rightarrow}\:\;}{Happy}(x)$.

    2.  ${\forall\,x,y\;\;} {Dog}(x) \land {Brother}(y,x) \land {Loves}(x,y) {\:\;{\Rightarrow}\:\;}{Happy}(x)$.

    3.  ${\forall\,x\;\;} {Dog}(x) \land [{\forall\,y\;\;} {Brother}(y,x) {\;\;{\Leftrightarrow}\;\;}{Loves}(x,y)] {\:\;{\Rightarrow}\:\;}{Happy}(x)$.

3.  No dog bites a child of its owner.

    1.  ${\forall\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}\lnot {Bites}(x,{Child}({Owner}(x)))$.

    2.  $\lnot {\exists\,x,y\;\;} {Dog}(x) \land {Child}(y,{Owner}(x)) \land {Bites}(x,y)$.

    3.  ${\forall\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}({\forall\,y\;\;} {Child}(y,{Owner}(x)) {\:\;{\Rightarrow}\:\;}\lnot {Bites}(x,y))$.

    4.  $\lnot {\exists\,x\;\;} {Dog}(x) {\:\;{\Rightarrow}\:\;}({\exists\,y\;\;} {Child}(y,{Owner}(x)) \land {Bites}(x,y))$.

4.  Everyone’s zip code within a state has the same first digit.

    1.  ${\forall\,x,s,z_1\;\;} [{State}(s) \land {LivesIn}(x,s) \land {Zip}(x){{\,=\,}}z_1] {\:\;{\Rightarrow}\:\;}{}$\
        $[{\forall\,y,z_2\;\;} {LivesIn}(y,s) \land {Zip}(y){{\,=\,}}z_2 {\:\;{\Rightarrow}\:\;}{Digit}(1,z_1) {{\,=\,}}{Digit}(1,z_2) ]$.

    2.  ${\forall\,x,s\;\;} [{State}(s) \land {LivesIn}(x,s) \land {\exists\,z_1\;\;} {Zip}(x){{\,=\,}}z_1] {\:\;{\Rightarrow}\:\;}{}$\
        $ [{\forall\,y,z_2\;\;} {LivesIn}(y,s) \land {Zip}(y){{\,=\,}}z_2 \land {Digit}(1,z_1) {{\,=\,}}{Digit}(1,z_2) ]$.

    3.  ${\forall\,x,y,s\;\;} {State}(s) \land {LivesIn}(x,s) \land {LivesIn}(y,s) {\:\;{\Rightarrow}\:\;}{Digit}(1,{Zip}(x){{\,=\,}}{Zip}(y))$.

    4.  ${\forall\,x,y,s\;\;} {State}(s) \land {LivesIn}(x,s) \land {LivesIn}(y,s) {\:\;{\Rightarrow}\:\;}{}$\
        ${Digit}(1,{Zip}(x)) {{\,=\,}}{Digit}(1,{Zip}(y))$.

**8.13** \[language-determination-exercise\] Complete the following exercises
about logical sentences:

1.  Translate into *good, natural* English (no $x$s or $y$s!):

$$
{\forall\,x,y,l\;\;} SpeaksLanguage(x, l) \land SpeaksLanguage(y, l)
    \implies Understands(x, y) \land Understands(y,x).
$$

2.  Explain why this sentence is entailed by the sentence

$$
{\forall\,x,y,l\;\;} SpeaksLanguage(x, l) \land SpeaksLanguage(y, l)
    \implies Understands(x, y).
$$

3.  Translate into first-order logic the following sentences:

    1.  Understanding leads to friendship.

    2.  Friendship is transitive.

    Remember to define all predicates, functions, and constants you use.

**8.14** True or false? Explain.

1.  ${\exists\,x\;\;} x{{\,=\,}}{Rumpelstiltskin}$ is a valid
    (necessarily true) sentence of first-order logic.

2.  Every existentially quantified sentence in first-order logic is true
    in any model that contains exactly one object.

3.  ${\forall\,x,y\;\;} x{{\,=\,}}y$is satisfiable.

**8.15** \[Peano-completion-exercise\] Rewrite the first two Peano axioms in
Section [Peano-section](#/) as a single axiom that defines
${NatNum}(x)$ so as to exclude the possibility of natural numbers
except for those generated by the successor function.

**8.16** \[wumpus-diagnostic-exercise\]
Equation ([pit-biconditional-equation](#/)) on
page [pit-biconditional-equation](#/) defines the conditions under which a square is
breezy. Here we consider two other ways to describe this aspect of the
wumpus world.

1.  We can write [diagnostic rule] leading from observed effects to hidden causes. For
    finding pits, the obvious diagnostic rules say that if a square is
    breezy, some adjacent square must contain a pit; and if a square is
    not breezy, then no adjacent square contains a pit. Write these two
    rules in first-order logic and show that their conjunction is
    logically equivalent to
    Equation ([pit-biconditional-equation](#/)).

2.  We can write [causal rule] leading from cause to effect. One obvious causal rule
    is that a pit causes all adjacent squares to be breezy. Write this
    rule in first-order logic, explain why it is incomplete compared to
    Equation ([pit-biconditional-equation](#/)), and supply
    the missing axiom.

**8.17** \[kinship-exercise\]Write axioms describing the predicates
${Grandchild}$, ${Greatgrandparent}$, ${Ancestor}$, ${Brother}$,
${Sister}$, ${Daughter}$, ${Son}$, ${FirstCousin}$,
${BrotherInLaw}$, ${SisterInLaw}$, ${Aunt}$, and ${Uncle}$. Find
out the proper definition of $m$th cousin $n$ times removed, and write
the definition in first-order logic. Now write down the basic facts
depicted in the family tree in Figure [family1-figure](#family1-figure).
Using a suitable logical reasoning system, it all the sentences you have
written down, and it who are Elizabeth’s grandchildren, Diana’s
brothers-in-law, Zara’s great-grandparents, and Eugenie’s ancestors.

<center>
<b id="family1-figure">Figure [family1-figure]</b> A typical family tree. The symbol $\bowtie$ connects spouses and arrows point to children.
</center>

![family1-figure](https://cdn.rawgit.com/Nalinc/aima-exercises/notebooks/Jupyter%20notebook/figures/family1.svg)

**8.18** Write down a sentence asserting that + is a commutative function. Does
your sentence follow from the Peano axioms? If so, explain why; if not,
give a model in which the axioms are true and your sentence is false.

**8.19** Explain what is wrong with the following proposed definition of the set
membership predicate ${{\,\in\,}}$

$$
{\forall\,x,s\;\;} x \in \{x|s\}
$$
$$
{\forall\,x,s\;\;} x \in s \implies {\forall\,y\;\;} x \in \{y|s\}
$$

**8.20** \[list-representation-exercise\]Using the set axioms as examples, write
axioms for the list domain, including all the constants, functions, and
predicates mentioned in the chapter.

**8.21** \[adjacency-exercise\]Explain what is wrong with the following proposed
definition of adjacent squares in the wumpus world:
$${\forall\,x,y\;\;} {Adjacent}([x,y], [x+1, y]) \land {Adjacent}([x,y], [x, y+1])\ .$$

**8.22** Write out the axioms required for reasoning about the wumpus’s location,
using a constant symbol ${Wumpus}$ and a binary predicate
${At}({Wumpus}, {Location})$. Remember that there is only one
wumpus.

**8.23** Assuming predicates ${Parent}(p,q)$ and ${Female}(p)$ and constants
${Joan}$ and ${Kevin}$, with the obvious meanings, express each of
the following sentences in first-order logic. (You may use the
abbreviation $\exists^{1}$ to mean “there exists exactly one.”)

1.  Joan has a daughter (possibly more than one, and possibly sons
    as well).

2.  Joan has exactly one daughter (but may have sons as well).

3.  Joan has exactly one child, a daughter.

4.  Joan and Kevin have exactly one child together.

5.  Joan has at least one child with Kevin, and no children with
    anyone else.

**8.24** Arithmetic assertions can be written in first-order logic with the
predicate symbol $<$, the function symbols ${+}$ and ${\times}$, and the
constant symbols 0 and 1. Additional predicates can also be defined with
biconditionals.

1.  Represent the property “$x$ is an even number.”

2.  Represent the property “$x$ is prime.”

3.  Goldbach’s conjecture is the conjecture (unproven as yet) that every
    even number is equal to the sum of two primes. Represent this
    conjecture as a logical sentence.

**8.25** In Chapter [csp-chapter](#/), we used equality to indicate
the relation between a variable and its value. For instance, we wrote
${WA}{{\,=\,}}{red}$ to mean that Western Australia is colored
red. Representing this in first-order logic, we must write more
verbosely ${ColorOf}({WA}){{\,=\,}}{red}$. What incorrect
inference could be drawn if we wrote sentences such as
${WA}{{\,=\,}}{red}$ directly as logical assertions?

**8.26** Write in first-order logic the assertion that every key and at least one
of every pair of socks will eventually be lost forever, using only the
following vocabulary: ${Key}(x)$, $x$ is a key; ${Sock}(x)$, $x$ is
a sock; ${Pair}(x,y)$, $x$ and $y$ are a pair; ${Now}$, the current
time; ${Before}(t_1,t_2)$, time $t_1$ comes before time $t_2$;
${Lost}(x,t)$, object $x$ is lost at time $t$.

**8.27** For each of the following sentences in English, decide if the
accompanying first-order logic sentence is a good translation. If not,
explain why not and correct it. (Some sentences may have more than one
error!)

1.  No two people have the same social security number.
    $$\lnot {\exists\,x,y,n\;\;} {Person}(x) \land {Person}(y) {\:\;{\Rightarrow}\:\;}[{HasSS}\#(x,n) \land {HasSS}\#(y,n)].$$

2.  John’s social security number is the same as Mary’s.
    $${\exists\,n\;\;} {HasSS}\#({John},n) \land {HasSS}\#({Mary},n).$$

3.  Everyone’s social security number has nine digits.
    $${\forall\,x,n\;\;} {Person}(x) {\:\;{\Rightarrow}\:\;}[{HasSS}\#(x,n) \land {Digits}(n,9)].$$

4.  Rewrite each of the above (uncorrected) sentences using a function
    symbol ${SS}\#$ instead of the predicate ${HasSS}\#$.

**8.28** Translate into first-order logic the sentence “Everyone’s DNA is unique
and is derived from their parents’ DNA.” You must specify the precise
intended meaning of your vocabulary terms. (*Hint*: Do not
use the predicate ${Unique}(x)$, since uniqueness is not really a
property of an object in itself!)

**8.29** For each of the following sentences in English, decide if the
accompanying first-order logic sentence is a good translation. If not,
explain why not and correct it.

1.  Any apartment in London has lower rent than some apartments
    in Paris.

$$
\forall {x} [{Apt}(x) \land {In}(x,{London})]
\implies \exists {y} ([{Apt}(y) \land {In}(y,{Paris})] \implies ({Rent}(x) < {Rent}(y)))
$$

2.  There is exactly one apartment in Paris with rent below \$1000.

$$
\exists {x} {Apt}(x) \land {In}(x,{Paris}) \land \forall{y} [{Apt}(y) \land {In}(y,{Paris}) \land ({Rent}(y) < {Dollars}(1000))] \implies (y = x)
$$

3.  If an apartment is more expensive than all apartments in London, it
    must be in Moscow.

$$
\forall{x} {Apt}(x) \land [\forall{y} {Apt}(y) \land {In}(y,{London}) \land ({Rent}(x) > {Rent}(y))] \implies
{In}(x,{Moscow}).
$$

**8.30** Represent the following sentences in first-order logic, using a
consistent vocabulary (which you must define):

1.  Some students took French in spring 2001.

2.  Every student who takes French passes it.

3.  Only one student took Greek in spring 2001.

4.  The best score in Greek is always higher than the best score
    in French.

5.  Every person who buys a policy is smart.

6.  No person buys an expensive policy.

7.  There is an agent who sells policies only to people who are
    not insured.

8.  There is a barber who shaves all men in town who do not
    shave themselves.

9.  A person born in the UK, each of whose parents is a UK citizen or a
    UK resident, is a UK citizen by birth.

10. A person born outside the UK, one of whose parents is a UK citizen
    by birth, is a UK citizen by descent.

11. Politicians can fool some of the people all of the time, and they
    can fool all of the people some of the time, but they can’t fool all
    of the people all of the time.

12. All Greeks speak the same language. (Use ${Speaks}(x,l)$ to mean
    that person $x$ speaks language $l$.)

**8.31** Represent the following sentences in first-order logic, using a
consistent vocabulary (which you must define):

1.  Some students took French in spring 2009.

2.  Every student who takes French passes it.

3.  Only one student took Greek in spring 2009.

4.  The best score in Greek is always lower than the best score
    in French.

5.  Every person who buys a policy is smart.

6.  There is an agent who sells policies only to people who are
    not insured.

7.  There is a barber who shaves all men in town who do not
    shave themselves.

8.  A person born in the UK, each of whose parents is a UK citizen or a
    UK resident, is a UK citizen by birth.

9.  A person born outside the UK, one of whose parents is a UK citizen
    by birth, is a UK citizen by descent.

10. Politicians can fool some of the people all of the time, and they
    can fool all of the people some of the time, but they can’t fool all
    of the people all of the time.

11. All Greeks speak the same language. (Use ${Speaks}(x,l)$ to mean
    that person $x$ speaks language $l$.)

**8.32** Write a general set of facts and axioms to represent the assertion
“Wellington heard about Napoleon’s death” and to correctly answer the
question “Did Napoleon hear about Wellington’s death?”

**8.33** \[4bit-adder-exercise\]Extend the vocabulary from
Section [circuits-section](#/) to define addition for $n$-bit
binary numbers. Then encode the description of the four-bit adder in
Figure [4bit-adder-figure](#adder-figure), and pose the queries needed
to verify that it is in fact correct.

<center>
<b id="adder-figure">Figure [adder-figure]</b> A four-bit adder. Each ${Ad}_i$ is a one-bit adder, as in figure [adder-figure](#adder-figure) on page [adder-figure](#/)
</center>

![adder-figure](https://cdn.rawgit.com/Nalinc/aima-exercises/notebooks/Jupyter%20notebook/figures/4bit-adder.svg)

**8.34** The circuit representation in the chapter is more detailed than
necessary if we care only about circuit functionality. A simpler
formulation describes any $m$-input, $n$-output gate or circuit using a
predicate with $m+n$ arguments, such that the predicate is true exactly
when the inputs and outputs are consistent. For example, NOT gates are
described by the binary predicate ${NOT}(i,o)$, for which
${NOT}(0,1)$ and ${NOT}(1,0)$ are known. Compositions of gates are
defined by conjunctions of gate predicates in which shared variables
indicate direct connections. For example, a NAND circuit can be composed
from ${AND}$s and ${NOT}$s:
$${\forall\,i_1,i_2,o_a,o\;\;} {AND}(i_1,i_2,o_a) \land {NOT}(o_a,o) {\:\;{\Rightarrow}\:\;}{NAND}(i_1,i_2,o)\ .$$
Using this representation, define the one-bit adder in
Figure [adder-figure](#adder-figure) and the four-bit adder in
Figure [4bit-adder-figure](#adder-figure), and explain what queries you
would use to verify the designs. What kinds of queries are
*not* supported by this representation that
*are* supported by the representation in
Section [circuits-section](#/)?

**8.35** Obtain a passport application for your country, identify the rules
determining eligibility for a passport, and translate them into
first-order logic, following the steps outlined in
Section [circuits-section](#/).

**8.36** Consider a first-order logical knowledge base that describes worlds
containing people, songs, albums (e.g., “Meet the Beatles”) and disks
(i.e., particular physical instances of CDs). The vocabulary contains
the following symbols:

> ${CopyOf}(d,a)$: Predicate. Disk $d$ is a copy of album $a$.

> ${Owns}(p,d)$: Predicate. Person $p$ owns disk $d$.

> ${Sings}(p,s,a)$: Album $a$ includes a recording of song $s$ sung by person $p$.

> ${Wrote}(p,s)$: Person $p$ wrote song $s$.

> ${McCartney}$, ${Gershwin}$, ${BHoliday}$, ${Joe}$, ${EleanorRigby}$, ${TheManILove}$, ${Revolver}$: Constants with the obvious meanings.

Express the following statements in first-order logic:

1.  Gershwin wrote “The Man I Love.”

2.  Gershwin did not write “Eleanor Rigby.”

3.  Either Gershwin or McCartney wrote “The Man I Love.”

4.  Joe has written at least one song.

5.  Joe owns a copy of *Revolver*.

6.  Every song that McCartney sings on *Revolver* was
    written by McCartney.

7.  Gershwin did not write any of the songs on *Revolver*.

8.  Every song that Gershwin wrote has been recorded on some album.
    (Possibly different songs are recorded on different albums.)

9.  There is a single album that contains every song that Joe
    has written.

10. Joe owns a copy of an album that has Billie Holiday singing “The Man
    I Love.”

11. Joe owns a copy of every album that has a song sung by McCartney.
    (Of course, each different album is instantiated in a different
    physical CD.)

12. Joe owns a copy of every album on which all the songs are sung by
    Billie Holiday.
