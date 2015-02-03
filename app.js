$(document).ready(function(){
    $(".firstbutton").click(function (){
        $("h1").addClass('stylish');
    });
});

$(document).ready(function(){
    $(".secondbutton").click(function(){
        $("<p>HERE!</p>").appendTo("p")
    });
});