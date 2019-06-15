---
layout: exercise
title: Exercise 2.2
permalink: /agents-exercises/ex_2/
breadcrumb: 2-Intelligent-Agent
breadcrumb2: ex_2
breadcrumb3: 2intelligentAgent
---

{% include mathjax_support %}

<div class="card">
    <div class="card-header p-2">
        <a href='#' class="p-2">Exercise 2</a>

        <a class="solve_question" id="solve_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Solve this Exercise" href="#" id="buttonsolve">
        <i id="ex2.2" class="fas fa-pen" style="color:white"></i>
        </button>
        </a>

        <a class="edit_question" id="editt_question" href="#">
        <button type="button" class="btn btn-dark float-right" title="Edit this Question" style="margin-left:10px; margin-right:10px;" onclick="edit('ex2.2');" href="#" id="buttonsolve">
        <i id="ex2.2" class="far fa-edit" style="color:white"></i>
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
          {% for item2 in site.data.answers.2intelligentAgent.ex_2.communityanswer.solutions %}
          
          {% for entry2 in item2.answers %}
          {{entry2.answer}}
          {% endfor %}
          {% endfor %}
          </p>
          </div>
          </div>
<br>
<div class="card">
    <div class="card-header p-2">
        <a href="#" class="p-2">Answers</a>


        <button type="button" class="btn btn-dark float-right" title="View Answers" id="viewanswers" onclick="myFunction()">
        <i id="view_answers1" class="fas fa-bars" style="color:white"></i>
        </button>

</div>
<div class="card-body" id="hideandviewanswers" markdown="1">

{% for item in site.data.answers.2intelligentAgent.ex_2.useranswers.solutions %}

<a href="https://www.github.com/{{item.username}}">Author: {{item.username}}
<span>
{% for entry2 in item.answers %}
<span>{{entry2.answer}}


{% endfor %}

{% endfor %}


</div>
