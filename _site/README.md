

# AIMA Exercises
AIMA exercises is an interactive and collaborative platform for digitalizing the exercises of the book Artificial Intelligence: A Modern Approach by Stuart J. Russell and Peter Norvig.<br>
Exercises for the book [*Artificial Intelligence: A Modern Approach.*](http://aima.cs.berkeley.edu/) The idea is that in the fourth edition of the book, exercises will be online only (they will not appear in the book). This site will showcase the exercises, and will be a platform for students and teachers to add new exercises.
<br>
The present version of AIMA-Exercises uses Jekyll 3 and Ruby 2.5.
**To run the project locally**:
1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler gems](https://jekyllrb.com/docs/ruby-101/#bundler)
3. Installation Guides:
  - [MacOS](https://jekyllrb.com/docs/installation/macos/)
  - [Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)
  - [Windows](https://jekyllrb.com/docs/installation/windows/)
4. Clone the project locally.
5. Go to the folder directory where you cloned the project in the terminal.
6. `gem install Jekyll bundler `
7. `bundle exec Jekyll serve`

**The directory structure is as follows:**
* `_includes` - The include tag allows you to include the content from another file stored in the `_includes` folder and contains reusable files like `staticman_comments.html` which is the form used for submitting answers. Sidebar templates, head.html, and breadcrumb.
* `_layouts` - They allow you to have the source code for project template in one place so you don’t have to repeat things like your navigation and footer on every page. The layouts folder has default layout, homepage layout, exercise layout, answer submitted layout and others.
* `_site` - This is where the generated site is placed (by default) once Jekyll is done transforming it. While contributing, don't change files in the `_site` directory as Github Pages is compatible with Jekyll and `_site` folder is updated every time the root directory folders are changed.
* `figures` - The figures folder contains figures for all the exercises.
* `js` - The JS folder contains the javascript codes for all the features. answer.js, bookmark.js , search.js , commsol.js, forms.js.
* `latex` - Latex folder contains latex files for all the exercises.
* `markdown` - `Markdown` folder contains markdown format of all the exercises along with the index.MD files for generating the exercises pages and the answers folder (if an answer is present for that particular exercise). Each exercise has it's own `answers` folder.
* `public` - Public folder contains CSS files and fonts for the project.
* `search` - Search folder contains index.MD file for rendering search results. 
* `404.html` - 404 page when a person reaches a page which is not present in the directory.
* `Gemfile` - A Gemfile is a file we create which is used for describing gem dependencies for Ruby programs. The Gemfile is where you specify which gems you want to use, and lets you specify which versions.
* `Gemfile.lock` - The `Gemfile.lock` file is where Bundler records the exact versions that were installed. This way, when the same library/project is loaded on another machine, running bundle install will look at the Gemfile.lock and install the exact same versions, rather than just using the Gemfile and installing the most recent versions.
* `.jekyll-metadata` - Incremental regeneration helps shorten build times by only generating documents and pages that were updated since the previous build. It does this by keeping track of both file modification times and inter-document dependencies in the `.jekyll-metadata` file.
* `LICENSE.md` - License file for aima exercises project. It is released under standard MIT License.
* `README.md` - Readme file for the project.
* `_config.yml` - Configuration file used by jekyll for building the site.
* `index.html`- The front page of the aima exercises project.
* `search_data.json` - Search data used by lunr.js for searching through the exercises. It's a script which takes into account all the exercises.
* `staticman.yml` - Staticman configuration file for sending automated Pull requests whenever a user submits an answer.

4th Edition of Artificial Intelligence: A Modern Approach will not have exercises. In fact, the exercises will be available online on this platform for students to solve.

| Chapter                                  | LaTex File                                                                                                                                  | Status        | Markdown                                                                                        |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------|
| 1-Introduction                           | [`intro-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/intro-exercises.tex)                                   | Implemented   | [`intro-exercises.md`](markdown/1-Introduction/README.md)                                       |
| 2-Intelligent-Agents                     | [`agents-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/agents-exercises.tex)                                 | Implemented   | [`agents-exercises.md`](markdown/2-Intelligent-Agent/README.md)                                 |
| 3-Solving-Problems-By-Searching          | [`search-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/search-exercises.tex)                                 | Implemented   | [`search-exercises.md`](markdown/3-Solving-Problems-By-Searching/README.md)                     |
| 4-Beyond-Classical-Search                | [`advanced-search-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/advanced-search-exercises.tex)               | Implemented   | [`advanced-search-exercises.md`](markdown/4-Beyond-Classical-Search/README.md)                  |
| 5-Adversarial-Search                     | [`game-playing-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/game-playing-exercises.tex)                     | Implemented   | [`game-playing-exercises.md`](markdown/5-Adversarial-Search/README.md)                          |
| 6-Constraint-Satisfaction-Problems       | [`csp-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/csp-exercises.tex)                                       | Implemented   | [`csp-exercises.md`](markdown/6-Constraint-Satisfaction-Problems/README.md)                     |
| 7-Logical-Agents                         | [`knowledge+logic-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/knowledge%2Blogic-exercises.tex)             | Implemented   | [`knowledge-logic-exercises.md`](markdown/7-Logical-Agents/README.md)                           |
| 8-First-Order-Logic                      | [`fol-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/fol-exercises.tex)                                       | Implemented   | [`fol-exercises.md`](markdown/8-First-Order-Logic/README.md)                                    |
| 9-Inference-In-First-Order-Logic         | [`logical-inference-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/logical-inference-exercises.tex)           | Implemented   | [`logical-inference-exercises.md`](markdown/9-Inference-In-First-Order-Logic/README.md)         |
| 10-Classical-Planning                    | [`planning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/planning-exercises.tex)                             | Implemented   | [`planning-exercises.md`](markdown/10-Classical-Planning/README.md)                             |
| 11-Planning-And-Acting-In-The-Real-World | [`advanced-planning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/advanced-planning-exercises.tex)           | Implemented   | [`advanced-planning-exercises.md`](markdown/11-Planning-And-Acting-In-The-Real-World/README.md) |
| 12-Knowledge-Representation              | [`kr-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/kr-exercises.tex)                                         | Implemented   | [`kr-exercises.md`](markdown/12-Knowledge-Representation/README.md)                             |
| 13-Quantifying-Uncertainity              | [`probability-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/probability-exercises.tex)                       | Implemented   | [`probability-exercises.md`](markdown/13-Quantifying-Uncertainity/README.md)                    |
| 14-Probabilistic-Reasoning               | [`bayes-nets-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/bayes-nets-exercises.tex)                         | Implemented   | [`bayes-nets-exercises.md`](markdown/14-Probabilistic-Reasoning/README.md)                      |
| 15-Probabilistic-Reasoning-Over-Time     | [`dbn-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/dbn-exercises.tex)                                       | Implemented   | [`dbn-exercises.md`](markdown/15-Probabilistic-Reasoning-Over-Time/README.md)                   |
| 16-Making-Simple-Decisions               | [`decision-theory-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/decision-theory-exercises.tex)               | Implemented   | [`decision-theory-exercises.md`](markdown/16-Making-Simple-Decisions/README.md)                 |
| 17-Making-Complex-Decisions              | [`complex-decisions-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/complex-decisions-exercises.tex)           | Implemented   | [`complex-decisions-exercises.md`](markdown/17-Making-Complex-Decisions/README.md)              |
| 18-Learning-From-Examples                | [`concept-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/concept-learning-exercises.tex)             | Implemented   | [`concept-learning-exercises.md`](markdown/18-Learning-From-Examples/README.md)                 |
| 19-Knowledge-In-Learning                 | [`ilp-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/ilp-exercises.tex)                                       | Implemented   | [`ilp-exercises.md`](markdown/19-Knowledge-In-Learning/README.md)                               |
| 20-Learning-Probabilistic-Models         | [`bayesian-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/bayesian-learning-exercises.tex)           | Implemented   | [`bayesian-learning-exercises.md`](markdown/20-Learning-Probabilistic-Models/README.md)         |
| 21-Reinforcement-Learning                | [`reinforcement-learning-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/reinforcement-learning-exercises.tex) | Implemented   | [`reinforcement-learning-exercises.md`](markdown/21-Reinforcement-Learning/README.md)           |
| 22-Natural-Language-Processing           | [`nlp-communicating-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/nlp-communicating-exercises.tex)           | Implemented   | [`nlp-communicating-exercises.md`](markdown/22-Natural-Language-Processing/README.md)           |
| 23-Natural-Language-For-Communication    | [`nlp-english-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/nlp-english-exercises.tex)                       | Implemented   | [`nlp-english-exercises.md`](markdown/23-Natural-Language-For-Communication/README.md)          |
| 24-Perception                            | [`perception-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/perception-exercises.tex)                         | Implemented   | [`perception-exercises.md`](markdown/24-Perception/README.md)                                   |
| 25-Robotics                              | [`robotics-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/robotics-exercises.tex)                             | Implemented   | [`robotics-exercises.md`](markdown/25-Robotics/README.md)                                       |
| 26-Philosophical-Foundations             | [`philosophy-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/philosophy-exercises.tex)                         | Implemented   | [`philosophy-exercises.md`](markdown/26-Philosophical-Foundations/README.md)                    |
| 27-AI-The-Present-And-Future             |                                                                                                                                             |               |                                                                                                 |
|  Future Exercises                        | [`future-exercises.tex`](https://github.com/aimacode/aima-exercises/blob/master/latex/future-exercises.tex)                                 | Unimplemented | [`future-exercises.md`](markdown/Future%20Exercises/README.md)                                  |

