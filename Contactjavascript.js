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

    $("#profile_div").mouseenter(function() {
        $(this).css("background-color","rgba(255, 255, 255, 0.2)");
    }).mouseout(function() {
        $(this).css("background-color","");
    });

    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
    Distribute(slides.item(i));
    }



    // $("#google_email").mousedown(function() {
    //     $(this).css('z-index', '2');
    //     $("#player").css('z-index', '1');
    //     $("#profile").css('z-index', '1');
    // })

    // $("#trash_icon").mousedown(function() {
    //     $("#folder").css('z-index', '2');
    //     $("#player").css('z-index', '1');
    //     $("#google_email").css('z-index', '1');
    // })

    // $("#player").mousedown(function() {
    //     $(this).css('z-index', '2');
    //     $("#google_email").css('z-index', '1');
    //     $("#profile").css('z-index', '1');
    // })

    // $("#profile").mousedown(function() {
    //     $(this).css('z-index', '2');
    //     $("#google_email").css('z-index', '1');
    //     $("#player").css('z-index', '1');
    // })

    // $("#profile_div").mousedown(function() {
    //     $("#profile").css('z-index', '2');
    //     $("#player").css('z-index', '1');
    //     $("#google_email").css('z-index', '1');
    // })

    // $("#contact_div").mousedown(function() {
    //     $("#google_email").css('z-index', '2');
    //     $("#player").css('z-index', '1');
    //     $("#profile").css('z-index', '1');
    // })

    // $("#player_div").mousedown(function() {
    //     $("#player").css('z-index', '2');
    //     $("#google_email").css('z-index', '1');
    //     $("#profile").css('z-index', '1');
    // })

    // $("#folder").mousedown(function() {
    //     $("#folder").css('z-index', '2');
    //     $("#player").css('z-index', '1');
    //     $("#google_email").css('z-index', '1');
    //     $("#profile").css('z-index', '1');
    // })

    

    var volHolder;
    $("#volume_icon").mousedown(function() {
        var audioobject = document.getElementsByTagName("audio")[0]
        if (document.getElementById('volume').value != 0){
            volHolder = document.getElementById('volume').value;
        }
        if (document.getElementById('volume').value != 0){
            document.getElementById('volume').value = 0;
            audioobject.volume = 0 / 100;
        } else {
            document.getElementById('volume').value = volHolder;
            audioobject.volume = volHolder / 100;
        }
    })

    
    // Capturing slider change
    var slider = document.getElementById('volume')
    function onChange(event) {
        var x = event.target.value
        var audioobject = document.getElementsByTagName("audio")[0];
        // Ensure x can't be greater or less than slider value
        if (x < 0){
            x = 1;
        } else if (x > 100){
            x = 99;
        }
        audioobject.volume = x / 100;

        if (x == 0) {
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon_muted.png)');
        } else {
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon.png)');
        }
    }
    document.getElementById('volume').addEventListener('input', onChange)

    var audioSlider = document.getElementsByTagName("audio")[0];
    audioSlider.onvolumechange = function() {
        slider.value = audioSlider.volume * 100;
        if (audioSlider.volume * 100 == 0){
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon_muted.png)');
        } else {
            $('.volume_icon').css('background-image', 'url(images/icons/volume_icon.png)');
        }
    };

    audioSlider.addEventListener('volumechange',function(e){
        if(this.muted)
            slider.value = 0;
    }, false);
      
        


});


function mouseDown(evn) {
    var temp = document.getElementById(evn);
    temp.style.zIndex = "2";
    var slides = document.getElementsByClassName("icon");
    for (var i = 0; i < slides.length; i++) {
        if (slides.item(i).id !== temp.id) {
            temp = document.getElementById(slides.item(i));
            alert(temp.id);
            temp.style.zIndex = "1";
        }
    }
}


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

/* https://app.mailersend.com/domains */
/* DOCUMENTATION */
/* https://github.com/mailersend/mailersend-nodejs */
function send_message(){
    const Recipient = require("mailersend").Recipient;
    const EmailParams = require("mailersend").EmailParams;
    const MailerSend = require("mailersend");
    
    const mailersend = new MailerSend({
        api_key: "key",
    });
    
    const recipients = [
      new Recipient("your@client.com", "Your Client")
    ];
    
    const emailParams = new EmailParams()
          .setFrom("your@domain.com")
          .setFromName("Your Name")
          .setRecipients(recipients)
          .setSubject("Subject")
          .setHtml("This is the HTML content")
          .setText("This is the text content");
    
    mailersend.send(emailParams);
}

function launchProfile(){
    var compose = document.getElementById('profile');
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


