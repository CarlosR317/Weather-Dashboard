$(document).ready(function () {

    $('#searchBtn').on('click', function (event) {
        event.preventDefault();
        var city = $("#search").val();
        weatherSearch(city);
        console.log(city)
    })

    // 5 day weather 
    function weatherSearch(city) {
        var current = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a79d617ab561e3c9a8b7bb39631d26eb";
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=a79d617ab561e3c9a8b7bb39631d26eb";

     
        $.ajax({ url: current, method: 'GET' })
            .done(function (response) {
                // insert local storage here

                console.log(response);

                var nameDate = $("<h1>").text(response.name + "(" + new Date().toLocaleDateString() + ")");
                var temp = $('<p>').text("Temperature: " + response.main.temp + "degrees");
                var humidity = $('<p>').text("Humidity: " + response.main.humidity);
                var windSpeed = $('<p>').text("Wind Speed: " + response.wind.speed + " MPH");
                var bodyCard = $("<div>").addClass("card-body");
                
                bodyCard.addClass("currentForecast")

                bodyCard.append(nameDate);
                bodyCard.append(humidity);
                bodyCard.append(temp);
                bodyCard.append(windSpeed);

                $('#currentWeather').append(bodyCard);
            })
      
            $.ajax({ url: queryURL, method: 'GET' })
            .then(function (forecast) {
                console.log(forecast);

                var dayOne = $("<p>").text(forecast.list[0]);
               
                var display = $("<div>").addClass("card-body")

                display.append(dayOne);
                
                $('#fiveDay').append(display)

            })
    }

    // var windSpeed = $("<p>").addClass("xxx").text("Wind Speed: " + response.wind.speed + "MPH")
})

// // <img id="currWeatherLogo"> and from my weather js file: //WEATHER LOGO FOR THE CURRENT WEATHER 
// var CurrLogo = weatherData.current.weather[0].icon;
// // console.log("Current Weather Logo:" + CurrLogo);
// // $("#currWeatherLogo").attr("src", "http://openweathermap.org/img/wn/" + CurrLogo + "@2x.png");

// store var where item from localstorage = history getitem()
// // GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast