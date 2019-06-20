---
layout: exercise
title: Exercise 6.8
permalink: /csp-exercises/ex_8/
breadcrumb: 6-Constraint-Satisfaction-Problems
breadcrumb2: ex_8
breadcrumb3: 6constraintSatisfactionProblems
---

{% include mathjax_support %}

<div class="card">
    <div class="card-header p-2">
        <a href='#' class="p-2">Exercise 8
        </a>

        <a class="solve_question" id="solve_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Solve this Exercise" href="#" id="buttonsolve">
        <i id="ex6.8" class="fas fa-pen" style="color:white"></i>
        </button>
        </a>

        <a class="edit_question" id="editt_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Edit this Question" style="margin-left:10px; margin-right:10px;" onclick="edit('ex6.8');" href="#" id="buttonsolve">
        <i id="ex6.8" class="far fa-edit" style="color:white"></i>
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



                <a class="reqcomm" id="reqcomm" href="#">
                <button type="button" class="btn btn-dark float-right" title="Request for Community Solution" href="#" id="requestcommsol">
                <i class="fas fa-hands" style="color:white"></i>
                </button>
                </a>

                <a class="viewcommsolution" id="viewcommsolution" href="#">
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
        <button type="button" class="btn btn-dark float-right" title="Add answer/comment" href="#" id="addanswerorcomment2" onclick="myFunction()">
        <i class="fas fa-edit" style="color:white"></i>
        </button>
        </a>

        <a class="viewusersolution" id="viewusersolution" href="#">
        <button type="button" class="btn btn-dark float-right" title="View Answers" style="margin-left:10px; margin-right:10px;" id="viewanswers" onclick="myFunction4()" href="#" >
        <i class="fas fa-bars" style="color:white"></i>
        </button>
        </a>


</div>
<div class="card-body" id="hideandviewusersolution" markdown="1">
<div id="content">
<div class="hideit" id="link">https://api.github.com/repos/sachin10101998/aima-exercises/contents/markdown/6-Constraint-Satisfaction-Problems/exercises/ex_8/answers</div>

</div>
</div>
</div>