$(document).ready(function(){
    $("#0").click(function(){
		document.getElementById('title').style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
    $("#1").click(function (){
        $("h1").addClass('stylish');
    });
    $("#2").click(function(){
        $("<h1>HERE!</h1>").appendTo("p")
    });
    $("#3").click(function(){
        alert("color = " + $("span").css("color"));
    });
    $("#4").click(function(){
        alert($("h1").hasClass("stylish"));
    });
    $("#html").click(function(){
        $("#copy").html('It copies the text!');
    });
    $("#remove").click(function(){
        $("li:last").remove();
    });
    
    $('#move').click(function(){
	$('div').animate({left:'140px'});
    });
    
});


$(function() {
    $("#animationButton").click(function() {
        $("#effect").animate({
          backgroundColor: "#15e9e9",
          color: "#fff",
        });
        $("#effect").animate({
          backgroundColor: "#eed938",
        });
        $("#effect").animate({
          backgroundColor: "#9b47f0",
        });
        $("#effect").animate({
          backgroundColor: "#f57e0f",
        });
        $("#effect").animate({
          backgroundColor: "##35f50f",
        });
        $("#effect").animate({
          backgroundColor: "#2f322e",
            color: "white"
        });
    });
});

