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

    $("#contact_div").mouseenter(function() {
        $(this).css("background-color","#f2f2f2");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    $("#player_div").mouseenter(function() {
        $(this).css("background-color","#f2f2f2");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    $("#google_email").mousedown(function() {
        $(this).css('z-index', '2');
        $("#player").css('z-index', '1');
    })

    $("#player").mousedown(function() {
        $(this).css('z-index', '2');
        $("#google_email").css('z-index', '1');
    })

    $("#contact_div").mousedown(function() {
        $("#google_email").css('z-index', '2');
        $("#player").css('z-index', '1');
    })

    $("#player_div").mousedown(function() {
        $("#player").css('z-index', '2');
        $("#google_email").css('z-index', '1');
    })

    var volHolder;
    $("#volume_icon").mousedown(function() {
        if (document.getElementById('volume').value != 0){
            volHolder = document.getElementById('volume').value;
        }
        if (document.getElementById('volume').value != 0){
            document.getElementById('volume').value = 0;
        } else {
            document.getElementById('volume').value = volHolder;
        }
    })

    var slider = document.getElementById('volume')

    function onChange(event) {
        var x = event.target.value
        if (x ==0) {
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon_muted.png)');
        } else {
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon.png)');
        }
    }

    document.getElementById('volume').addEventListener('input', onChange)
    
    

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


