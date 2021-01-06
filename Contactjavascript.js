$(document).ready(function() {
    $("#minimize").mouseenter(function() {
      $(this).children('img').attr("src", "images/gmail_icons/minimize_higlighted.png");
    }).mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/minimize.png");
    });

    $("#exit_full").mouseenter(function() {
        $(this).children('img').attr("src", "images/gmail_icons/exit_full_screen_highlighted.png");
    }).mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/exit_full_screen.png");
    });

    $("#close").mouseenter(function() {
        $(this).children('img').attr("src", "images/gmail_icons/close_highlighted.png");
    }).mouseout(function() {
        $(this).children('img').attr("src", "images/gmail_icons/close.png");
    });

    $("#nav_div").mouseenter(function() {
        $(this).css("background-color","#f2f2f2");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    $("#player_div").mouseenter(function() {
        $(this).css("background-color","#f2f2f2");
    }).mouseout(function() {
        $(this).css("background-color","");
    });
});

function composeMessage(){
    var compose = document.getElementById('google_email');
    if (compose.style.display == "none"){
        compose.style.display = "block";
    } else {
        compose.style.display = "none";
    }
}

function launchMusicPlayer(){
    var compose = document.getElementById('player');
    if (compose.style.display == "none"){
        compose.style.display = "block";
    } else {
        compose.style.display = "none";
    }
}

