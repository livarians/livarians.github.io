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

// width and height stuff
$("#btn0").click(function(){
        $("#box").animate({height: "25px", width: "25px"});
    });

    $("#btn1").click(function(){
        $("#box").animate({width: "250px"});
    });

    $("#btn2").click(function(){
        $("#box").animate({height: "250px"});
    });

    $("#btn3").click(function(){
        $("#box").animate({height: "250px", width: "250px"});
    });

    $("#btn4").click(function(){
        $("#box").animate({height: "50px"});
        $("#box").animate({width: "100px"});
        $("#box").animate({width: "500px"});
        $("#box").animate({height: "600px", width: "10px"});
        $("#box").animate({width: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px", height: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px", height: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px", height: "600px"});
        $("#box").animate({width: "10px", height: "10px"});
        $("#box").animate({width: "600px", height: "600px"});
        $("#box").animate({width: "300px"});
        $("#box").animate({height: "10px"});
        $("#box").animate({height: "500px"});
        $("#box").animate({width: "60px"});
        $("#box").animate({width: "25px", height: "25px"});
    });