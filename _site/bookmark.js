$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    });


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
    var btn2 = key.slice(1 , key.length);
    var btn3 = key.getElementById(btn2);
    console.log(btn3);
    console.log(btn2);
    var btnColor = btn.style.color;
    if(btnColor == 'white'){
        localStorage.setItem(exercise, btn3.innerHTML);
        btn.style.color='gold';
    }else{
        localStorage.removeItem(exercise);
        btn.style.color= 'white';
    }
}