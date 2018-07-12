[Exercise 8.36](ex_36/)

Consider a first-order logical knowledge base that describes worlds
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
