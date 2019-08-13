# `Aima-Exercises`

Exercises for the book [*Artificial Intelligence: A Modern Approach.*](http://aima.cs.berkeley.edu/) The idea is that in the fourth edition of the book, exercises will be online only (they will not appear in the book). This site will showcase the exercises, and will be a platform for students and teachers to submit answers and have discussions about the exercises.

The present version of AIMA-Exercises uses Jekyll 3 and ruby 2.5.
**To run the project locally**:
1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler gems](https://jekyllrb.com/docs/ruby-101/#bundler)
3. Installation Guides:
  - [MacOS](https://jekyllrb.com/docs/installation/macos/)
  - [Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)
  - [Windows](https://jekyllrb.com/docs/installation/windows/)
4. Clone the project locally.
5. Go to the folder directory where you cloned the project in terminal.
6. `gem install jekyll bundler `
7. `bundle exec jekyll serve`

**The directory structure is as follows:**
* `_includes` - The include tag allows you to include the content from another file stored in the `_includes` folder and contains reusable files like `staticman_comments.html` which is the form used for submitting answers. Sidebar templates, head.html and breadcrumb.
* `_layouts` - They allow you to have the source code for project template in one place so you don’t have to repeat things like your navigation and footer on every page. The layouts folder has default layout, homepage layout, exercise layout, answersubmitted layout and others.
* `_site` - This is where the generated site is placed (by default) once Jekyll is done transforming it. While contributing, don't change files in the `_site` directory as Github Pages is compatible with Jekyll and `_site` folder is updated everytime the root directory folders are changed.
* `figures` - The figures folder contains figures for all the exercises.
* `js` - The JS folder contains the javascript codes for all the features. answer.js, bookmark.js , search.js , commsol.js, forms.js.
* `latex` - Latex folder contains latex files for all the exercises.
* `markdown` - `Markdown` folder contains markdown format of all the exercises along with the index.md files for generating the exercises pages and the answers folder (if any answer is present for that particular exercise). Each exercise has it's own `answers` folder.
* `public` - Public folder contains css files and fonts for the project.
* `search` - Search folder contains index.md file for rendering search results. 
* `404.html` - 404 page when a person reaches a page which is not present in the directory.
* `Gemfile` - A Gemfile is a file we create which is used for describing gem dependencies for Ruby programs.The Gemfile is where you specify which gems you want to use, and lets you specify which versions.
* `Gemfile.lock` - The `Gemfile.lock` file is where Bundler records the exact versions that were installed. This way, when the same library/project is loaded on another machine, running bundle install will look at the Gemfile.lock and install the exact same versions, rather than just using the Gemfile and installing the most recent versions.
* `.jekyll-metadata` - Incremental regeneration helps shorten build times by only generating documents and pages that were updated since the previous build. It does this by keeping track of both file modification times and inter-document dependencies in the `.jekyll-metadata` file.
* `LICENSE.md` - License file for aima exercises project. It is released under standard MIT License.
* `README.md` - Readme file for the project.
* `_config.yml` - Configuration file used by jekyll for building the site.
* `index.html`- The front page of the aima exercises project.
* `search_data.json` - Search data used by lunr.js for searching through the exercises. It's a script which takes into account all the exercises.
* `staticman.yml` - Staticman configuration file for sending automated Pull requests whenever a user submits an answer.

**Contributions to the project can be made in following ways:**
1. *Contribution towards building features for the project.*
  - There are several features that still require attention.
    - Improving the User interface of submitted answers.
    - Fixing Cross References.
    - Feature to upvote/like an exercise or answer.
    - Feature to extract a few questions in PDF format/Latex or markdown format.
2. *Submitting answers to various exercises.*
 - Answer submission through the website itself.
   - Fill the form on various exercise layout pages.
   - ![Screenshot from 2019-08-13 05-11-53](https://user-images.githubusercontent.com/34926285/62905620-f1b6c600-bd88-11e9-8421-c0aa4c0b2570.png)
   - Filling the form will automatically send a Pull Request using @staticmanaima and if merged the answer would be visible under User answers column.
   - `Community answer` is the answer provided by admin/moderators and is a verified solution. Community solution can be requested through the the exercise layout page and will be made available under special cases only.
 - Answer submission through Github:
   - Go to the exercise folder of the exercise which you are interested in submitting an answer for.
   - Suppose you want to submit an answer to `Exercise 1` of Chapter 1 - `Introduction`.
   - The exercises folders are present inside the `markdown` folder in root directory.
   - Go to `markdown->1-Introduction->ex_1`
   - If there is an answers folder present already in the exercise folder , go inside that folder. Else click on the Create New file .
    ![Screenshot from 2019-08-13 05-21-44](https://user-images.githubusercontent.com/34926285/62905952-49096600-bd8a-11e9-8eb5-18e32a3c9501.png)
   - Type `answers/` in the Create new file box.
   - This will create a folder named `answers` inside the `ex_1` folder as shown.
    ![Screenshot from 2019-08-13 05-24-27](https://user-images.githubusercontent.com/34926285/62906033-a9000c80-bd8a-11e9-89c7-49cf56b5cd27.png)
   - Name your file as answer-{Your-Github-Username{}.md. For example 
   - ![Screenshot from 2019-08-13 05-27-21](https://user-images.githubusercontent.com/34926285/62906136-0c8a3a00-bd8b-11e9-9630-f175d9a0eeaa.png)
   - Note: If you are submitting a second answer through github make sure to add the answer number along with your Github username to avoid duplicate name files.
   - For example, if I am submitting a second answer to same question my file name would be `answer-sachin10101998-2.md`.
   - Your answer must have a specific template as mentioned below to get merged. make sure to follow the template while submitting the answer.
    ![Screenshot from 2019-08-13 05-33-00](https://user-images.githubusercontent.com/34926285/62906352-da2d0c80-bd8b-11e9-8e5d-cdeb3912f3ae.png)
   - The template is as follows:
      `---`
      `Name: Your name`
      `Email: Your email`
      `---`
     `Your answer here.`

If you still have any qeries/doubts regarding the project, feel free to join our [Gitter channel](https://gitter.im/aimacode/Lobby).
Feel free to create a new issue if you find any bugs in the project that requires our attention or you may even send a Pull Request for fixing it. :)







