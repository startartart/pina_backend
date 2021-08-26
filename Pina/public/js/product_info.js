var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(document).ready(function() {
    $("#openModalPop").click(function() {
        $("#banner_online").slideDown();
        $("#modal").show();
    });

    $("#close_button").click(function(){
        $("#banner_online").slideUp();
        $("#modal").hide();
    });

    $("#complete_button").click(function(){
        $("#banner_online").slideUp();
        $("#modal").hide();
    });
});