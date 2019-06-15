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
    var btnColor = btn.style.color;
    if(btnColor == 'white'){
        localStorage.setItem(exercise, 'gold');
        btn.style.color=localStorage.getItem(exercise);
    }else{
        localStorage.removeItem(exercise);
        btn.style.color= 'white';
    }
}