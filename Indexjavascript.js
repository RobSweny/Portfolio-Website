// Default
var country = "IE";
var city = "Dublin";

function onLoadWeather(){
    retrieveUserCountryInformation(); 

    // get current time and format to 24 hours
    var formattedTime = getTwentyFourHourTime(new Date().toLocaleTimeString());
    
    var time = new Date().toLocaleTimeString();   
    
    // hour of the day
    var hour = time.slice(0, 1);
    
    // timeOfDay will show AM/PM
    // var timeOfDay = time.slice(time.length-2, time.length)
    changeWebsiteBasedOnTime(formattedTime, hour);
}

function weatherBalloon( cityID ) {
    var key = 'd177090656c6d0c21d1b6ac056ca2d12';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
        console.log('Error retrieving information from openweathermap');
    });
  }

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 

    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = data.name;
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
    }

    function riseAndFall(){
        sun.style.bottom = verticialPositions[formattedTime-postitionChange] + "px";
        sun.style.left = horizontalPositions[formattedTime-postitionChange] + "px";
        glow.style.bottom = verticialPositions[formattedTime-postitionChange] + "px";
        glow.style.left = horizontalPositions[formattedTime-postitionChange] + "px";
    }
}