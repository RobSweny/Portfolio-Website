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
            var holder = document.getElementById(slides.item(i).id);
            holder.style.zIndex = "1";
        }
    }
}

function navIconHighLight(evn) {
    var temp = document.getElementById(evn);
    temp.style.backgroundColor === "" ? temp.style.backgroundColor = "rgba(255, 255, 255, 0.2)" : temp.style.backgroundColor = "";
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

function rightclick() {
    var rightclick;
    var e = window.event;
    if (e.which) rightclick = (e.which == 3);
    else if (e.button) rightclick = (e.button == 2);
    alert(rightclick); // true or false, you can trap right click here by if comparison
}

function launchApp(evn){
    var temp = document.getElementById(evn);
    /*
        Call mousedown to intialize the correct z-indexing of apps/folders
    */
   mouseDown(temp.id.slice(0, -4));
    /*
        All apps in nav bar have classname x_div
        when we call with this.id we can slice the '_div' off to get the id of the app
    */
    var compose = document.getElementById(temp.id.slice(0, -4));
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


function animateLoad(evn){
    /*
        For all files in folder,
        we match against the class name 'app' or 'trash'
        we hide or show based on this
    */
    var clearFolder = document.getElementsByClassName("old_index");
    var temp = document.getElementById(evn);
    for (var i = 0; i < clearFolder.length; i++) {
        if (clearFolder.item(i).className.split(' ')[1] === temp.id) {
            clearFolder.item(i).style.display = "block";
        } else {
            clearFolder.item(i).style.display = "none";
        }
    }

    var compose = document.getElementById("folder");
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

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function scrollTo(evn) {
    var temp = document.getElementById(evn.id);
    temp.scrollIntoView();
}