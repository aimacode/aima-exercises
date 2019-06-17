

Consider the family of generalized tic-tac-toe games, defined as
follows. Each particular game is specified by a set $\mathcal S$ of
<i>squares</i> and a collection $\mathcal W$ of <i>winning
positions.</i> Each winning position is a subset of $\mathcal S$.
For example, in standard tic-tac-toe, $\mathcal S$ is a set of 9 squares
and $\mathcal W$ is a collection of 8 subsets of $\cal W$: the three
rows, the three columns, and the two diagonals. In other respects, the
game is identical to standard tic-tac-toe. Starting from an empty board,
players alternate placing their marks on an empty square. A player who
marks every square in a winning position wins the game. It is a tie if
all squares are marked and neither player has won.<br>

1.  Let $N= |{\mathcal S}|$, the number of squares. Give an upper bound
    on the number of nodes in the complete game tree for generalized
    tic-tac-toe as a function of $N$.<br>

2.  Give a lower bound on the size of the game tree for the worst case,
    where ${\mathcal W} = {\{\,\}}$.<br>

3.  Propose a plausible evaluation function that can be used for any
    instance of generalized tic-tac-toe. The function may depend on
    $\mathcal S$ and $\mathcal W$.<br>

4.  Assume that it is possible to generate a new board and check whether
    it is a winning position in 100$N$ machine instructions and assume a
    2 gigahertz processor. Ignore memory limitations. Using your
    estimate in (a), roughly how large a game tree can be completely
    solved by alpha–beta in a second of CPU time? a minute? an hour?
