$(document).ready(function() {
    $("#minimize").mouseenter(function() {
      $(this).children('img').attr("src", "images/gmail_icons/minimize_higlighted.png");
    });
    $("#minimize").mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/minimize.png");
    });

    $("#exit_full").mouseenter(function() {
        $(this).children('img').attr("src", "images/gmail_icons/exit_full_screen_highlighted.png");
    });
    $("#exit_full").mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/exit_full_screen.png");
    });

    $("#close").mouseenter(function() {
    $(this).children('img').attr("src", "images/gmail_icons/close_highlighted.png");
    });
    $("#close").mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/close.png");
    });
});