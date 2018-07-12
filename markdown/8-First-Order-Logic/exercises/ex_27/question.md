[Exercise 8.27](ex_27/)

For each of the following sentences in English, decide if the
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
