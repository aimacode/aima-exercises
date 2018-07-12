[Exercise 25.11 \[subsumption-exercise\]](ex_11/)

In Figure [Fig5](#/)(b) on
page [Fig5](#/), we encountered an augmented finite state machine for
the control of a single leg of a hexapod robot. In this exercise, the
aim is to design an AFSM that, when combined with six copies of the
individual leg controllers, results in efficient, stable locomotion. For
this purpose, you have to augment the individual leg controller to pass
messages to your new AFSM and to wait until other messages arrive. Argue
why your controller is efficient, in that it does not unnecessarily
waste energy (e.g., by sliding legs), and in that it propels the robot
at reasonably high speeds. Prove that your controller satisfies the
dynamic stability condition given on page [polygon-stability-condition-page](#/).
