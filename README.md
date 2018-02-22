# `aima-exercises`

Exercises for the book *Artificial Intelligence: A Modern Approach.* The idea is that in the fourth edition of the book, exercises will be online only (they will not appear in the book). This site will showcase the exercises, and will be a platform for students and teachers to add new exercises.

The first step will be to translate the LaTeX exercises (in the [`latex`](https://github.com/aimacode/aima-exercises/tree/master/latex) subdirectory) into markdown. Note that in the files there, the use of the `\begin{uexercise}` and `\begin{iexercise}` macros. Those are for the US and International versions of the book, which are slightly different. For this online version, we will present all the exercises to all the users. Macros are defined in the [`aima3e.sty`](https://github.com/aimacode/aima-exercises/blob/master/latex/aima3e.sty) file and figures (pictures/diagrams) are in the [`figures`](https://github.com/aimacode/aima-exercises/tree/master/latex/figures) directory.

# Index of Files

Here is a table of the latex and markdown version of the exercise files for *Artificial Intelligence: A Modern Approach,* with their respository location. Unimplemented files and the *future exercises* file are a good place for new contributors to start.

| **Chapter** | **LaTex File** | **Status** | **Jupyter Notebook**|
|:------------|:---------------|:-----------|:-----------------|
| 1-Introduction| [`intro-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/intro-exercises.tex) | Implemented | [`intro-exercises.ipynb`](notebooks/intro-exercises.ipynb)|
| 2-Intelligent-Agents| [`agents-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/agents-exercises.tex) | Implemented | [`agents-exercises.ipynb`](notebooks/agents-exercises.ipynb)|
| 3-Solving-Problems-By-Searching| [`search-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/search-exercises.tex) | Implemented | [`search-exercises.ipynb`](notebooks/search-exercises.ipynb)|
| 4-Beyond-Classical-Search| [`advanced-search-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/advanced-search-exercises.tex) | Implemented | [`advanced-search-exercises.ipynb`](notebooks/advanced-search-exercises.ipynb)|
| 5-Adversarial-Search | [`game-playing-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/game-playing-exercises.tex) | Implemented | [`game-playing-exercises.ipynb`](notebooks/game-playing-exercises.ipynb)|
| 6-Constraint-Satisfaction-Problems | [`csp-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/csp-exercises.tex) | Implemented | [`csp-exercises.ipynb`](notebooks/csp-exercises.ipynb)|
| 7-Logical-Agents | [`knowledge+logic-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/knowledge%2Blogic-exercises.tex) | Implemented | [`knowledge+logic-exercises.ipynb`](notebooks/knowledge+logic-exercises.ipynb)|
| 8-First-Order-Logic | [`fol-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/fol-exercises.tex) | Implemented | [`fol-exercises.ipynb`](notebooks/fol-exercises.ipynb)|
| 9-Inference-In-First-Order-Logic | [`logical-inference-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/logical-inference-exercises.tex) | Implemented | [`logical-inference-exercises.ipynb`](notebooks/logical-inference-exercises.ipynb)|
| 10-Classical-Planning | [`planning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/planning-exercises.tex) | Implemented | [`planning-exercises.ipynb`](notebooks/planning-exercises.ipynb)|
| 11-Planning-And-Acting-In-The-Real-World | [`advanced-planning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/advanced-planning-exercises.tex) | Implemented | [`advanced-planning-exercises.ipynb`](notebooks/advanced-planning-exercises.ipynb)|
| 12-Knowledge-Representation | [`kr-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/kr-exercises.tex) | Implemented | [`kr-exercises.ipynb`](notebooks/kr-exercises.ipynb)|
| 13-Quantifying-Uncertainity | [`probability-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/probability-exercises.tex) | Implemented | [`probability-exercises.ipynb`](notebooks/probability-exercises.ipynb)|
| 14-Probabilistic-Reasoning | [`bayes-nets-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/bayes-nets-exercises.tex) | Implemented | [`bayes-nets-exercises.ipynb`](notebooks/bayes-nets-exercises.ipynb)|
| 15-Probabilistic-Reasoning-Over-Time | [`dbn-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/dbn-exercises.tex) | Implemented | [`dbn-exercises.ipynb`](notebooks/dbn-exercises.ipynb)|
| 16-Making-Simple-Decisions | [`decision-theory-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/decision-theory-exercises.tex) | Implemented | [`decision-theory-exercises.ipynb`](notebooks/decision-theory-exercises.ipynb)|
| 17-Making-Complex-Decisions| [`complex-decisions-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/complex-decisions-exercises.tex) | Implemented | [`complex-decisions-exercises.ipynb`](notebooks/complex-decisions-exercises.ipynb)|
| 18-Learning-From-Examples | [`concept-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/concept-learning-exercises.tex) | Implemented | [`concept-learning-exercises.ipynb`](notebooks/concept-learning-exercises.ipynb)|
| 19-Knowledge-In-Learning | [`ilp-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/ilp-exercises.tex) | Implemented | [`ilp-exercises.ipynb`](notebooks/ilp-exercises.ipynb)|
| 20-Learning-Probabilistic-Models | [`bayesian-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/bayesian-learning-exercises.tex) | Implemented | [`bayesian-learning-exercises.ipynb`](notebooks/bayesian-learning-exercises.ipynb)|
| 21-Reinforcement-Learning | [`reinforcement-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/reinforcement-learning-exercises.tex) | Implemented | [`reinforcement-learning-exercises.ipynb`](notebooks/reinforcement-learning-exercises.ipynb)|
| 22-Natural-Language-Processing | [`nlp-communicating-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/nlp-communicating-exercises.tex) | Implemented | [`nlp-communicating-exercises.ipynb`](notebooks/nlp-communicating-exercises.ipynb)|
| 23-Natural-Language-For-Communication | [`nlp-english-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/nlp-english-exercises.tex) | Implemented | [`nlp-english-exercises.ipynb`](notebooks/nlp-english-exercises.ipynb)|
| 24-Perception | [`perception-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/perception-exercises.tex) | Implemented | [`perception-exercises.ipynb`](notebooks/perception-exercises.ipynb)|
| 25-Robotics | [`robotics-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/robotics-exercises.tex) | Implemented | [`robotics-exercises.ipynb`](notebooks/robotics-exercises.ipynb)|
| 26-Philosophical-Foundations | [`philosophy-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/philosophy-exercises.tex) | Implemented | [`philosophy-exercises.ipynb`](notebooks/philosophy-exercises.ipynb)|
| 27-AI-The-Present-And-Future |  |  | |
| Future Exercises | [`future-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/future-exercises.tex)| Implemented | [`future-exercises.ipynb`](notebooks/future-exercises.ipynb)|
