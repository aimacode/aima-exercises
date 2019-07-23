// bookmark.js
window.onload = function(){
    console.log("Bookmarks");
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        bookmark(key);
        console.log(key);
    }
};


function bookmark(exercise){
    var btn = document.getElementById(exercise);
    var btnColor = btn.style.color;
    if(btnColor == 'white'){
        localStorage.setItem(exercise, 'gold');
        btn.style.color=localStorage.getItem(exercise);
    }else{
        localStorage.removeItem(exercise);
        btn.style.color= 'white';
    }
};

function myFunction() {
var x = document.getElementById("hideandviewanswers");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
};

function myFunction2() {
var y = document.getElementById("hideandviewcommunitysolution");
if (y.style.display === "none") {
  y.style.display = "block";
} else {
  y.style.display = "none";
}
};
function myFunction4()  {
  var z = document.getElementById("hideandviewusersolution");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
};

