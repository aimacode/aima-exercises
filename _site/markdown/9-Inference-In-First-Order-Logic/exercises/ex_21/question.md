

This exercise looks at the recursive
application of rewrite rules, using logic programming. A rewrite rule
(or <b>demodulator</b> in terminology) is an
equation with a specified direction. For example, the rewrite rule
$x+0 \rightarrow x$ suggests replacing any expression that matches $x+0$
with the expression $x$. Rewrite rules are a key component of equational
reasoning systems. Use the predicate rewrite(X,Y) to
represent rewrite rules. For example, the earlier rewrite rule is
written as rewrite(X+0,X). Some terms are
<i>primitive</i> and cannot be further simplified; thus, we
write primitive(0) to say that 0 is a primitive term.<br>

1.  Write a definition of a predicate simplify(X,Y), that
    is true when Y is a simplified version of
    X—that is, when no further rewrite rules apply to any
    subexpression of Y.<br>

2.  Write a collection of rules for the simplification of expressions
    involving arithmetic operators, and apply your simplification
    algorithm to some sample expressions.<br>

3.  Write a collection of rewrite rules for symbolic differentiation,
    and use them along with your simplification rules to differentiate
    and simplify expressions involving arithmetic expressions,
    including exponentiation.<br>
