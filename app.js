$(document).ready(function(){
    $("#0").click(function(){
		document.getElementById('title').style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
});

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
    $("#html").click(function(){
        $("#copy").html('It copies the text!');
    });
    $("#remove").click(function(){
        $("li:last").remove();
    })
});


