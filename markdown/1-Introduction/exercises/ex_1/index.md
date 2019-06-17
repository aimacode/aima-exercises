---
layout: exercise
title: Exercise 1.1
permalink: /intro-exercises/ex_1/
breadcrumb: 1-Introduction
breadcrumb2: ex_1
breadcrumb3: 1introduction
---

{% include mathjax_support %}




<div class="card">
    <div class="card-header p-2">
        <a href='#' class="p-2">Exercise 1</a>

        <a class="solve_question" id="solve_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Solve this Exercise" href="#" id="buttonsolve">
        <i id="ex1.1" class="fas fa-pen" style="color:white"></i>
        </button>
        </a>

        <a class="edit_question" id="editt_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Edit this Question" style="margin-left:10px; margin-right:10px;" onclick="edit('ex1.1');" href="#" id="buttonsolve">
        <i id="ex1.1" class="far fa-edit" style="color:white"></i>
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

{% include_relative answers/useranswers.yaml %}

</div>
</div>
