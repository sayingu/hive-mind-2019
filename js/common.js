$(document).ready(function () {
    $(".menu").on("click", function () {
        $(".wrap").hide();
        $(".mobile_menu").show();
    });
    $(".back").on("click", function () {
        $(".wrap").show();
        $(".mobile_menu").hide();
    });
});