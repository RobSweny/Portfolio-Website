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
        $(this).css("background-color","rgba(255, 255, 255, 0.2)");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    $("#player_div").mouseenter(function() {
        $(this).css("background-color","rgba(255, 255, 255, 0.2)");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    $("#google_email").mousedown(function() {
        $(this).css('z-index', '2');
        $("#player").css('z-index', '1');
    })

    $("#trash_icon").mousedown(function() {
        $("#folder").css('z-index', '2');
        $("#player").css('z-index', '1');
        $("#google_email").css('z-index', '1');
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

    $("#folder").mousedown(function() {
        $("#folder").css('z-index', '2');
        $("#player").css('z-index', '1');
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
        compose.classList.replace('animate__fadeOutDownBig', 'animate__backInUp');
        compose.style.display = "block";
    } else {
        compose.classList.replace('animate__backInUp', 'animate__fadeOutDownBig');
        var delayInMilliseconds = 500; //1 second

        setTimeout(function() {
            compose.style.display = "none";
        }, delayInMilliseconds);
    }
}

function launchMusicPlayer(){
    var compose = document.getElementById('player');
    if (compose.style.display == "none"){
        compose.classList.replace('animate__fadeOutDownBig', 'animate__backInUp');
        compose.style.display = "block";
    } else {
        compose.classList.replace('animate__backInUp', 'animate__fadeOutDownBig');
        var delayInMilliseconds = 500; //1 second

        setTimeout(function() {
            compose.style.display = "none";
        }, delayInMilliseconds);
    }
}

function animateLoad(){
    var compose = document.getElementById('folder');
    if (compose.style.display == "none"){
        compose.classList.replace('animate__bounceOutLeft', 'animate__bounceInLeft');
        compose.style.display = "block";
    } else {
        compose.classList.replace('animate__bounceInLeft', 'animate__bounceOutLeft');
        var delayInMilliseconds = 500; //1 second

        setTimeout(function() {
            compose.style.display = "none";
        }, delayInMilliseconds);
    }
}


