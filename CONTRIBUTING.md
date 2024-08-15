# Aima-Exercises

Exercises for the book [Artificial Intelligence: A Modern Approach.](http://aima.cs.berkeley.edu/) The idea is that in the fourth edition of the book, exercises will be online only (they will not appear in the book). This site will showcase the exercises, and will be a platform for students and teachers to submit answers and have discussions about the exercises.

The present version of AIMA-Exercises uses Jekyll 3 and Ruby 2.5.
*To run the project locally*:
1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler gems](https://jekyllrb.com/docs/ruby-101/#bundler)
3. Installation Guides:
  - [MacOS](https://jekyllrb.com/docs/installation/macos/)
  - [Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)
  - [Windows](https://jekyllrb.com/docs/installation/windows/)
4. Clone the project locally.
5. Go to the folder directory where you cloned the project in terminal.
6. gem install jekyll bundler
7. bundle exec jekyll serve

*The directory structure is as follows:*
* _includes - Contains reusable files like staticman_comments.html for submitting answers, sidebar templates, head.html, and breadcrumb.
* _layouts - Project templates that include navigation and footer elements. Contains default, homepage, exercise, and answer submission layouts.
* _site - Generated site directory; do not modify directly.
* figures - Contains figures for all exercises.
* js - JavaScript files for features like answer submission and search.
* latex - LaTeX files for exercises.
* markdown - Markdown files for exercises and answers. Each exercise has an answers folder.
* public - Contains CSS files and fonts.
* search - Search index file.
* 404.html - Page for non-existent URLs.
* Gemfile - Defines gem dependencies for the project.
* Gemfile.lock - Records exact gem versions installed.
* .jekyll-metadata - Tracks file changes for incremental builds.
* LICENSE.md - MIT License for the project.
* README.md - Project documentation.
* _config.yml - Jekyll configuration file.
* index.html - Homepage of the project.
* search_data.json - Search index data for lunr.js.
* staticman.yml - Configuration file for Staticman.

*Contribution Guidelines:*

1. Building Features:
   - *UI Improvement:* Enhance the design of submitted answers.
   - *Fix Cross References:* Correct broken or inaccurate links.
   - *Add Upvote/Like Feature:* Implement functionality for users to upvote or like content.
   - *Export Questions:* Develop a feature to extract questions in PDF, LaTeX, or markdown formats.

2. Submitting Answers:
   - *Via Website:* Fill out the form on exercise pages. Submissions will use Staticman as configured in staticman.yml.
   - *Via GitHub:*
     - Navigate to the exercise folder (e.g., markdown/1-Introduction/ex_1).
     - Create or go to the answers folder.
     - Add a file named answer-{Your-Github-Username}.md. For multiple answers, add a number to the filename (e.g., answer-username-2.md).
     - Use the template:
       
       ---
       Name: Your name
       Email: Your email
       ---
       Your answer here.
       

For queries or issues, join our [Gitter channel](https://gitter.im/aimacode/Lobby) or create an issue on GitHub. Feel free to submit Pull Requests for bug fixes or feature enhancements.
