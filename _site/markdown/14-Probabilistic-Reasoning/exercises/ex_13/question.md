

In your local nuclear power station, there is an alarm that senses when
a temperature gauge exceeds a given threshold. The gauge measures the
temperature of the core. Consider the Boolean variables $A$ (alarm
sounds), $F_A$ (alarm is faulty), and $F_G$ (gauge is faulty) and the
multivalued nodes $G$ (gauge reading) and $T$ (actual core temperature).<br>

1.  Draw a Bayesian network for this domain, given that the gauge is
    more likely to fail when the core temperature gets too high.<br>

2.  Is your network a polytree? Why or why not?<br>

3.  Suppose there are just two possible actual and measured
    temperatures, normal and high; the probability that the gauge gives
    the correct temperature is $x$ when it is working, but $y$ when it
    is faulty. Give the conditional probability table associated with
    $G$.<br>

4.  Suppose the alarm works correctly unless it is faulty, in which case
    it never sounds. Give the conditional probability table associated
    with $A$.<br>

5.  Suppose the alarm and gauge are working and the alarm sounds.
    Calculate an expression for the probability that the temperature of
    the core is too high, in terms of the various conditional
    probabilities in the network.<br>
