$(document).ready(function () {

    // creates click function for the search button
    $('#searchBtn').on('click', function (event) {
        // stops the page from refreshing automatically
        event.preventDefault();
        // grabs the information that the user types in 

        var city = $("#search").val();
        weatherSearch(city);
        console.log(city)
    })

    // $('#pastChoices').on('click', 'li', function() {
    //     weatherSearch($(this).text())
    // })

    // function searchList(text) {
    //     var li = $("<li>").addClass("list-group-item").text(text);
    //     $('#pastChoices').append(li)
    // }

    //  creates the function to pull from the API's
    function weatherSearch(city) {
        // pulls for current forecast for the city
        var current = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a79d617ab561e3c9a8b7bb39631d26eb";
        // pulls for 5 day forecast for the city
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=a79d617ab561e3c9a8b7bb39631d26eb";

        //  the ajax that actually pulls the API information
        $.ajax({ url: current, method: 'GET' })
            .done(function (response) {
                localStorage.setItem("CurrentSearch", city);
                var list = localStorage.getItem("CurrentSearch", city);
                $("#citySearch").append(list);


                console.log(response);
                // pulls the specific information and creates an element to be able to put it on the HTML page
                var nameDate = $("<h1>").text(response.name + "(" + new Date().toLocaleDateString() + ")");
                var temp = $('<p>').text("Temperature: " + response.main.temp + "degrees");
                var humidity = $('<p>').text("Humidity: " + response.main.humidity + "%");
                var windSpeed = $('<p>').text("Wind Speed: " + response.wind.speed + " MPH");

                //    this is where the information for the current forecast will go. 
                var bodyCard = $("<div>").addClass("card-body");


                bodyCard.addClass(".currentForecast")

                //    puts information onto the "bodyCard"
                bodyCard.append(nameDate);
                bodyCard.append(humidity);
                bodyCard.append(temp);
                bodyCard.append(windSpeed);

                // actually appends the information onto the page for the user to see 
                $('#currentWeather').prepend(bodyCard);
            })

        // this is for the 5 day forecast
        $.ajax({ url: queryURL, method: 'GET' })
            .then(function (forecast) {
                console.log(forecast);

                // attempts to pull the information
                var dayOne = $("<p>").text(forecast.list[0].main.temp_max);
                var dayTwo = $('<p>').text(forecast.list[1].main.temp_max);
                var dayThre = $('<p>').text(forecast.list[2].main.temp_max);
                var dayFou = $('<p>').text(forecast.list[3].main.temp_max);
                var dayFiv = $('<p>').text(forecast.list[4].main.temp_max);
                var img = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + forecast.list[0].weather[0].icon + ".png");
                var imgOne = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + forecast.list[1].weather[0].icon + ".png");
                var imgTwo = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + forecast.list[2].weather[0].icon + ".png");
                var imgThre = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + forecast.list[3].weather[0].icon + ".png");
                var imgFou = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + forecast.list[4].weather[0].icon + ".png");


                // creates a place where the information will go.
                var display = $("<div>").addClass("card-body")

                // appends the information onto the "display"
                display.append(img);
                display.append(imgOne);
                display.append(imgTwo);
                display.append(imgThre);
                display.append(imgFou);
                display.append(dayOne);
                display.append(dayTwo);
                display.append(dayThre);
                display.append(dayFou);
                display.append(dayFiv);

                // actually appends the information onto the page for the user to see 
                $('#fiveDay').append(display)

            })
    }


})

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