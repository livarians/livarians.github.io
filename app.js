$(document).ready(function(){
    $("#1").click(function (){
        $("h1").addClass('stylish');
    });
});

$(document).ready(function(){
    $("#2").click(function(){
        $("<h1>HERE!</h1>").appendTo("p")
    });
});

$(document).ready(function(){
    $("#3").click(function(){
        alert("color = " + $("span").css("color"));
    });
});

$(document).ready(function(){
    $("#4").click(function(){
        alert($("h1").hasClass("stylish"));
    });
});