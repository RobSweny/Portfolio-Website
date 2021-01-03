// Default
var country = "IE";
var city = "Dublin";


function ShowMeOnHover() { 
    var weatherSizeIncrease = document.getElementById("weather");
    var arrow = document.getElementById("arrow_down");
    var location_group = document.getElementById("location_group");
    
    weatherSizeIncrease.style.width="200px";
    weatherSizeIncrease.style.height="220px";

    location_group.style.display="block";
    arrow.style.rotate="180deg";
    arrow.style.marginLeft="170px";
    arrow.style.marginTop="190px";
} 

function onLoadWeather() {
    // if storagesession is null, retrieve from IP
    if(sessionStorage.getItem('userLocation') === null){
        retrieveUserCountryInformation(); 

        // get current time and format to 24 hours
        var formattedTime = getTwentyFourHourTime(new Date().toLocaleTimeString());
        
        var time = new Date().toLocaleTimeString();
        
        // hour of the day
        var hour = time.slice(0, 1);
        
        // timeOfDay will show AM/PM
        // var timeOfDay = time.slice(time.length-2, time.length)
        changeWebsiteBasedOnTime(formattedTime, hour);
    } else {
        weatherBalloon(sessionStorage.getItem('userLocation'));
    }

}

function weatherBalloon(cityID) {
    var key = 'd177090656c6d0c21d1b6ac056ca2d12';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)
    // Convert data to json 
    .then(function(resp) {
        if (!resp.ok) {
            throw Error(response.statusText);
        }
        return resp.json()}) 
    .then(function(data) {
        retrievedata(data);
    })
    .catch(function() {
        console.log('Error retrieving information from openweathermap');
        console.log('Reverting to IP');
        if (sessionStorage.getItem('userLocation') !== null){
            Swal.fire("Unfortunately, we can't find that location, reverting to default")
            weatherBalloon(city + "," + country)
        }
        retrieveUserCountryInformation(); 
    });
}



function retrievedata(data) {
    try {
        var celcius = Math.round(parseFloat(data.main.temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
        var weatherDescription = data.weather[0].description;
        if (weatherDescription === 'snow' || weatherDescription === 'light snow'){ 
            var snow = document.getElementById("snow");
            snow.style.display = "block";
            letItSnow(15);
        } else if (weatherDescription === 'heavy snow'){ 
            alert('heavy');
            var snow = document.getElementById("snow");
            snow.style.display = "block";
            letItSnow(100);
        }

        if(weatherDescription = "rain"){
            makeItRain();
        }

        document.getElementById('description').innerHTML = data.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('location').innerHTML = data.name;

        if (sessionStorage.getItem('userLocation') !== null){
            var loc = data.coord.lat + "," + data.coord.lon;
            var targetDate = new Date();
            var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
            var apikey = 'AIzaSyC3tkoVRMTN9OAsbfL_s4dWkryvLGbJ6YA';
            var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apikey;
    
            var xhr = new XMLHttpRequest() // create new XMLHttpRequest2 object
            xhr.open('GET', apicall) // open GET request
            xhr.onload = function(){
                if (xhr.status === 200){ 
                    var output = JSON.parse(xhr.responseText)
                    console.log(output.status)
                    if (output.status == 'OK') { 
                        var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
                        var localdate = new Date(timestamp * 1000 + offsets);
                        changeWebsiteBasedOnTime(getTwentyFourHourTime(localdate.toLocaleString().slice(9,22)));
                    }
                } else {
                    console.log('Request failed.  Returned status of ' + xhr.status)
                }
            }
            xhr.send() // send request
        }
    } catch (err){
        console.log(err);
        console.log("Error retrieve information from data object");
    }

}

// Based on the users IP address, get their city and country
function retrieveUserCountryInformation(){
    $.get("http://ipinfo.io", function(response) {
        weatherBalloon(response.city + ',' + response.country);
    }, "jsonp");
}

// Convert 12 hour clock to 24
function getTwentyFourHourTime(amPmString) { 
    var d = new Date("1/1/2013 " + amPmString); 
    return d.getHours(); 
}

function changeWebsiteBasedOnTime(formattedTime, hour) {
    var sun = document.getElementById("sun");
    var glow = document.getElementById("element");
    var weatherIcon = document.getElementById("weather");
    var clearfix_a_index = document.getElementById("clearfix_a_index");
    var clearfix_a_blog = document.getElementById("clearfix_a_blog");
    var clearfix_a_contact = document.getElementById("clearfix_a_contact");
    var clearfix_a_portfolio = document.getElementById("clearfix_a_portfolio");
    
    var widthSlice = screen.width/12-10;
    var heightSlice = screen.height/12;
    
    var verticialPositions = [heightSlice * 6, heightSlice * 5, heightSlice * 4, heightSlice * 3, heightSlice * 2, heightSlice * 1, 0, heightSlice * 1, heightSlice * 2, heightSlice * 3, heightSlice * 4, heightSlice * 5, heightSlice * 6, heightSlice * 5, heightSlice * 4, heightSlice * 3, heightSlice * 2, heightSlice * 1, 0, 0, heightSlice * 1, heightSlice * 2, heightSlice * 3, heightSlice * 4, heightSlice * 5]; 
    var horizontalPositions = [widthSlice * 7, widthSlice * 8, widthSlice * 9, widthSlice * 10, widthSlice * 11, widthSlice * 12, 0, widthSlice * 1, widthSlice * 2, widthSlice * 3, widthSlice * 4, widthSlice * 5, widthSlice * 6, widthSlice * 7, widthSlice * 8, widthSlice * 9, widthSlice * 10, widthSlice * 11, widthSlice * 12, 0, widthSlice * 1, widthSlice * 2, widthSlice * 3, widthSlice * 4, widthSlice * 5, widthSlice * 6]; 

    if (formattedTime == 0){
        postitionChange = 0;
    } else {
        postitionChange = 1;
    }
    riseAndFall();
    weatherIcon.style.boxShadow = '6px 12px #yellow'

    // Change background colour based on time of day
    if (formattedTime >= 20 || formattedTime < 5){
        /* Change sun to moon */
        sun.style.backgroundColor = "#FEFCD7";

        /* Midnight Blue */
        document.body.style.backgroundColor = ('rgb(36, 77, 78)');
        weatherIcon.style.boxShadow = '6px 12px rgb(65, 113, 115)';

        /* Change nav bar text to light blue */
        clearfix_a_index.style.color = "#FEFCD7";
        clearfix_a_blog.style.color = "#FEFCD7";
        clearfix_a_contact.style.color = "#FEFCD7";
        clearfix_a_portfolio.style.color = "#FEFCD7";
    } else if (formattedTime >= 16) {
        /* Evening Blue */
        document.body.style.backgroundColor = ('rgb(96, 157, 159)');
    } else if (formattedTime >= 10) {
        /* Morning Blue */
        document.body.style.backgroundColor = ('rgb(194, 222, 226)');
    
        
    } else if (formattedTime >= 7) {
        /* Change moon to sun */
        sun.style.backgroundColor = "fff347";

        /* Morning Blue */
        document.body.style.backgroundColor = ('rgb(167, 214, 216)');
    } else if (formattedTime >= 5) {
        /* Morning Blue */
        document.body.style.backgroundColor = ('rgb(96, 157, 159)');

        /* Change nav bar text back to black */
        clearfix_a_index.style.color = "#black";
        clearfix_a_blog.style.color = "#black";
        clearfix_a_contact.style.color = "#black";
        clearfix_a_portfolio.style.color = "#black";
    }

    function riseAndFall(){
        sun.style.bottom = verticialPositions[formattedTime-postitionChange] + "px";
        sun.style.left = horizontalPositions[formattedTime-postitionChange] + "px";
        glow.style.bottom = verticialPositions[formattedTime-postitionChange] + "px";
        glow.style.left = horizontalPositions[formattedTime-postitionChange] + "px";
    }
}

function userRequestLocation(){
    try {
        var userLocation = document.getElementById("location_input").value
        weatherBalloon(userLocation);
        // save user location data
        sessionStorage.setItem('userLocation', userLocation); 
    } catch (err) {
        Swal.fire("Unfortunately, we can't find that location")
    }
}

function letItSnow(snowQuantity){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": snowQuantity,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
}

function makeItRain(){
    
}
    
