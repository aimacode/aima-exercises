

Suppose one writes a logic program that carries
out a resolution inference step. That is, let ${Resolve}(c_1,c_2,c)$
succeed if $c$ is the result of resolving $c_1$ and $c_2$. Normally,
${Resolve}$ would be used as part of a theorem prover by calling it
with $c_1$ and $c_2$ instantiated to particular clauses, thereby
generating the resolvent $c$. Now suppose instead that we call it with
$c$ instantiated and $c_1$ and $c_2$ uninstantiated. Will this succeed
in generating the appropriate results of an inverse resolution step?
Would you need any special modifications to the logic programming system
for this to work?
