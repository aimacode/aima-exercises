

Develop a representational system for reasoning
about windows in a window-based computer interface. In particular, your
representation should be able to describe:<br>


-   The state of a window: minimized, displayed, or nonexistent.<br>

-   Which window (if any) is the active window.<br>

-   The position of every window at a given time.<br>

-   The order (front to back) of overlapping windows.<br>

-   The actions of creating, destroying, resizing, and moving windows;
    changing the state of a window; and bringing a window to the front.
    Treat these actions as atomic; that is, do not deal with the issue
    of relating them to mouse actions. Give axioms describing the
    effects of actions on fluents. You may use either event or
    situation calculus.<br>

Assume an ontology containing <i>situations,</i>
<i>actions,</i> <i>integers</i> (for $x$ and $y$
coordinates) and <i>windows</i>. Define a language over this
ontology; that is, a list of constants, function symbols, and predicates
with an English description of each. If you need to add more categories
to the ontology (e.g., pixels), you may do so, but be sure to specify
these in your write-up. You may (and should) use symbols defined in the
text, but be sure to list these explicitly.
