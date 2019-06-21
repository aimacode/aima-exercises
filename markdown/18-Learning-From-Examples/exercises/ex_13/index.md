---
layout: exercise
title: Exercise 18.13
permalink: /concept-learning-exercises/ex_13/
breadcrumb: 18-Learning-From-Examples
breadcrumb2: ex_13
breadcrumb3: 18learningFromExamples
---

{% include mathjax_support %}

<div class="card">
    <div class="card-header p-2">
        <a href='#' class="p-2">Exercise 13
        </a>

        <a class="solve_question" id="solve_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Solve this Exercise" href="#" id="buttonsolve">
        <i id="ex18.13" class="fas fa-pen" style="color:white"></i>
        </button>
        </a>

        <a class="edit_question" id="editt_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Edit this Question" style="margin-left:10px; margin-right:10px;" onclick="edit('ex18.13');" href="#" id="buttonsolve">
        <i id="ex18.13" class="far fa-edit" style="color:white"></i>
        </button>
        </a>

    </div>
    <div class="card-body">
        <p class="card-text">{% include_relative question.md %}</p>
    </div>
</div>

<br>
<div class="card">
    <div class="card-header p-2">
        <a href="#" class="p-2">Community Solution</a>
                <a href="#" class="reqcomm" id="reqcomm">
                <button type="button" class="btn btn-dark float-right" title="Request for Community Solution" href="#" id="requestcommsol">
                <i class="fas fa-hands" style="color:white"></i>
                </button>
                </a>
                <a class="viewcommsolution" id="viewcommsolution">
                <button type="button" class="btn btn-dark float-right" title="View Community solution" style="margin-left:10px; margin-right:10px;" onclick="myFunction2()" href="#" id="viewsol">
                <i class="fas fa-bars" style="color:white"></i>
                </button>
                </a>
          </div>
          <div class="card-body" id="hideandviewcommunitysolution">
          <p class="card-text">
          {% include_relative answers/communityanswer.md %}
          </p>
          </div>
          </div>
<br>
<div class="card" id="borderbottom">
    <div class="card-header p-2">
        <a href="#" class="p-2">Student Answers</a>

        <a class="addanswerorcomment" id="addanswerorcomment" href="#">
        <button type="button" class="btn btn-dark float-right" title="Add answer/comment" style="margin-top:30px; " href="#" id="addanswerorcomment2" onclick="myFunction()">
        <i class="fas fa-edit" style="color:white"></i>
        </button>
        </a>

        <div class="viewusersolution" id="viewusersolution" >
        <button type="button" class="btn btn-dark float-right" title="Double Click to View Answers" style="margin-left:10px; margin-right:10px; margin-top:0px; paddin-top:0px;" id="viewanswers" onclick="myFunction4()" href="#" >
        <i class="fas fa-bars" style="color:white"></i>
        </button>
        </div>


</div>
<div class="card-body" id="hideandviewusersolution" markdown="1">
<div id="content">
<div class="hideit" id="link">https://api.github.com/repos/sachin10101998/aima-exercises/contents/markdown/18-Learning-From-Examples/exercises/ex_13/answers</div>
</div>
</div>
</div>