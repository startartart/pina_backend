$(document).ready(function() {
    $("#openModalPop1").click(function() {
        $("#banner_online1").slideDown();
        $("#modal1").show();
    });

    $("#openModalPop2").click(function() {
        $("#banner_online2").slideDown();
        $("#modal2").show();
    });

    $("#openModalPop3").click(function() {
        $("#banner_online3").slideDown();
        $("#modal3").show();
    });


    $("#close_button1").click(function(){
        $("#banner_online1").slideUp();
        $("#modal1").hide();
    });

    $("#close_button2").click(function(){
        $("#banner_online2").slideUp();
        $("#modal2").hide();
    });

    $("#close_button3").click(function(){
        $("#banner_online3").slideUp();
        $("#modal3").hide();
    });

    $("#complete_button1").click(function(){
        $("#banner_online1").slideUp();
        $("#modal1").hide();
    });

    $("#complete_button2").click(function(){
        $("#banner_online2").slideUp();
        $("#modal2").hide();
    });

    $("#complete_button3").click(function(){
        $("#banner_online3").slideUp();
        $("#modal3").hide();
    });
});