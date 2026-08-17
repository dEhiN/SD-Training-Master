// Jquery methods

$("#fetch_weather").click(function () {

    let my_api = "";
    let the_city = $("#city_name").val();
    let weather_url = "https://api.weatherapi.com/v1/forecast.json?key=" + my_api + "&q=" + the_city + "&days=5&aqi=no";

    $.get(weather_url, function (data, message, xhr) {
        console.log(data.current);
        console.log(data.forecast);
        console.log(data.location);
        $("#output_para").text("The current weather in " + the_city + " is - " + data.current.temp_c + "c");
    });

});