// This JS file will be for the logic related to the weather API call

// GLOBAL VARIABLES AND CONSTANTS
/**
 * Global constant to represent the API call. From all of its properties, the full API URL can be created.
 */
const api_obj = {
  // Base URL for the Weather API
  base_url: "https://api.weatherapi.com/v1/",
  // Specific reference to the weather forecast endpoint
  endpoint: "forecast.json",
  // Special search characters such as "?" and "=" that are needed to build the full API call
  s_keywords: {
    question_mark: "?",
    ampersand: "&",
    equal_sign: "=",
  },
  /** Object to store the various search parameters. Each property of this object will represent a search parameter in the API call and will itself be an object. Each search parameter object will contain properties for the name and value of that parameter. */
  parameters: {
    // Represents the API key to use in the API call
    key: {
      param_name: "key",
      param_value: "",
    },
    // Represents the city to use when fetching the forecast data
    city: {
      param_name: "q",
      param_value: "",
    },
    // Represents the number of days to use for the forecast
    days: {
      param_name: "days",
      param_value: "3",
    },
    // Represents whether to enable/disable air quality data
    air_quality: {
      param_name: "aqi",
      param_value: "no",
    },
  },
};

/**
 * Global variable to hold the weather data returned from the API call.
 */
let api_data_obj = {};

/** Global enum for use with determining which temperature unit to use on the page. */
const TUnit = {
  CELSIUS: "celsius",
  FAHRENHEIT: "fahrenheit",
  DEG_CELSIUS: "°C",
  DEG_FAHRENHEIT: "°F"
}

/**
 * Global constant to represent the processed weather data returned from the API call. This includes the current day and all forecast days.
 */
const weather_data = {
  location_name: "",
  current_day: {
    date: "",
    time: "",
    temp_celsius: "",
    temp_fahrenheit: "",
    temp_feels_celsius: "",
    temp_feels_fahrenheit: "",
    weather_description: {
      condition: "",
      icon_url: ""
    }
  },
  forecast_data: [],
  /** This property will be to determine which temperature unit to use for display. Acceptable values are only those from the enum TUnit.  */
  temp_unit: ""
};

/**
 * Global constant to represent the processed weather data for a single forecast day.
 */
const forecast_day_data = {
  date: "",
  temp_max_celsius: "",
  temp_max_fahrenheit: "",
  temp_min_celsius: "",
  temp_min_fahrenheit: "",
  weather_description: {
    condition: "",
    icon_url: ""
  }
}

/**
 * Global constants to hold HTML class and id references.
 */
const submit_btn_weather = document.querySelector("#submit-btn-weather");
const input_weather_api_key = document.querySelector("#weather-api-key");
const input_search_city = document.querySelector("#search-city");
const input_forecast_days = document.querySelector("#forecast-days");
const header_forecast_results = document.querySelector(".forecast-results");
const section_forecast = document.querySelector(".section-forecast");

/** Global constants to store user alert messages and other static strings */
const fill_all_fields = "Please fill in all 3 fields!";
const invalid_number_days = "The number of days to forecast can only be between 1 and 5!";
const results_text = "Here is the forecast for today and ";
const curr_day_labels = [
  "Date",
  "Time",
  "Real Temperature",
  "Feels Like Temperature",
  "Weather Condition"
]

// FUNCTIONS
/**
 * Function to clear any existing API data from a previous call.
 *
 * @param { boolean } all_data: A boolean to specify if all the existing data should be cleared or only some of it.
 */
export function clearData(all_data) {
  section_forecast.replaceChildren();

  // Check if the input fields need to be cleared
  if (all_data) {
    input_weather_api_key.value = "";
    input_search_city.value = "";
    input_forecast_days.value = "";
  }
}

/**
 * Function to validate the input fields to make sure the user provided valid input.
 *
 * @returns Boolean value specifying whether the user input was valid or not.
 */
function validateUserInput() {
  /** Get the values of each input field. */
  let api_key = input_weather_api_key.value;
  let city = input_search_city.value;
  let days = input_forecast_days.value;

  // ADDING TEMPORARY VALUES FOR TESTING PURPOSES
  // city = "Barrie";
  // days = "3";

  /** Boolean to store whether the user input is fully valid or not. Assume true as default. */
  let input_is_valid = true;

  /** Check to make sure none of the fields are blank. If any are, let the user know. */
  if (!api_key || !city || !days) {
    alert(fill_all_fields);
    input_is_valid = false;
  }

  /** Check the number of days inputted to make sure it's between 1 and 5. First, convert the days string to a number. The check also makes sure input_is_valid is true, otherwise the user has already been alerted and shouldn't be alerted twice. */
  let days_num = Number(days);
  if ((days_num < 1 || days_num > 5) && input_is_valid) {
    alert(invalid_number_days);
    input_is_valid = false;
  }

  /** If the input is not valid, clear the input fields plus any existing API results. If it is valid, update the inputIsValid variable.*/
  if (!input_is_valid) {
    clearData(true);
  }

  /** The input is valid, so build the api_obj object. */
  api_obj.parameters.key.param_value = api_key;
  api_obj.parameters.city.param_value = city;

  /** Because the returned API data lists the current day as a forecast day, increase the number of days requested by the user by one. In other words, if the user wants 1 day of forecast, fetch 2 days of forecast from the API because the array that contains each forecast day will hold the current day at index 0. */
  days_num++;
  days = `${days_num}`;
  api_obj.parameters.days.param_value = days;

  return input_is_valid;
}

/**
 * Function to get the full URL of the API call from the constant api_obj. This is done using both the Object.values() method and the Array.join() method.
 *
 * @returns A string representing the full URL of the API call using all the properties of the api_obj object.
 */
function buildApiUrl() {
  /** Create a temporary variable to build the full API URL and initially populate it with the base_url from api_obj. */
  let api_url = api_obj.base_url;

  /** Add the endpoint. */
  api_url += api_obj.endpoint;
  api_url += api_obj.s_keywords.question_mark;

  /** Add the key parameter */
  api_url += api_obj.parameters.key.param_name;
  api_url += api_obj.s_keywords.equal_sign;
  api_url += api_obj.parameters.key.param_value;

  /** Add the city name parameter. */
  api_url += api_obj.s_keywords.ampersand;
  api_url += api_obj.parameters.city.param_name;
  api_url += api_obj.s_keywords.equal_sign;
  api_url += api_obj.parameters.city.param_value;

  /** Add the days parameter. */
  api_url += api_obj.s_keywords.ampersand;
  api_url += api_obj.parameters.days.param_name;
  api_url += api_obj.s_keywords.equal_sign;
  api_url += api_obj.parameters.days.param_value;

  return api_url;
}

/**
 * Function to add the processed weather information for a future day to the HTML page
 * 
 * @param {object} day : A single forecast day taken from the weather_data object.
 */
function addFutureDayData(day) {
  let html_content = "";

  html_content += "<br>"
  html_content += `<p>Forecast Date: ${day.date}</p>`;
  html_content += `<p>Maximum Temperature (Celsius): ${day.temp_max_celsius}</p>`;
  html_content += `<p>Maximum Temperature (Fahrenheit): ${day.temp_max_fahrenheit}</p>`;
  html_content += `<p>Minimum Temperature (Celsius): ${day.temp_min_celsius}</p>`;
  html_content += `<p>Minimum Temperature (Fahrenheit): ${day.temp_min__fahrenheit}</p>`;
  html_content += `<p>Current Conditions: ${day.weather_description.condition}</p>`;
  html_content += `<p>Current Conditions Picture: ${day.weather_description.icon_url}</p>`;
  html_content += `<p>Current Conditions Picture: <img src="${day.weather_description.icon_url}"></p>`;

  /** Need to append the data so it doesn't overwrite what's there. */
  section_forecast.innerHTML += html_content;
}

/**
 * Function to go through the processed forecast data to add it to the HTML page.
 */
function addForecastData() {
  for (let day of weather_data.forecast_data) {
    addFutureDayData(day);
  }
}

/**
 * Function to add the processed weather information for the current day to the HTML page
 */
function addCurrentDayData() {
  let new_div;
  let new_para;
  let weather_content = "";

  /** Loop through the current day details. */
  for (let i = 0; i < curr_day_labels.length; i++) {
    /** Switch statement to handle each property differently*/
    switch (i) {
      case 0:
        weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.date} (Today)`;
        break;
      case 1:
        weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.time}`;
        break;
      case 2:
        /** Determine which temperature unit to use. */
        if (weather_data.temp_unit == TUnit.CELSIUS) {
          weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.temp_celsius}${TUnit.DEG_CELSIUS}`;
        }
        else if (weather_data.temp_unit == TUnit.FAHRENHEIT) {
          weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.temp_fahrenheit}${TUnit.DEG_FAHRENHEIT}`;
        }
        break;
      case 3:
        /** Determine which temperature unit to use. */
        if (weather_data.temp_unit == TUnit.CELSIUS) {
          weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.temp_feels_celsius}${TUnit.DEG_CELSIUS}`;
        }
        else if (weather_data.temp_unit == TUnit.FAHRENHEIT) {
          weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.temp_feels_fahrenheit}${TUnit.DEG_FAHRENHEIT}`;
        }
        break;
      // case 4:
      //   weather_content += `${curr_day_labels[i]}: ${weather_data.current_day.date}`;
      //   break;
    }

    /** Add a line break for all properties except the last one. */
    if (i < curr_day_labels.length - 1) {
      weather_content += "<br>";
    }
  }

  /** Build up the current day div. */
  new_para = document.createElement("p");
  new_div = document.createElement("div");

  new_para.innerHTML = weather_content;
  new_div.appendChild(new_para);

  /** Add the new div to .section-forecast */
  section_forecast.appendChild(new_div);
}

/**
 * Function to add the processed weather information to the HTML page.
 */
function addWeatherToPage() {
  /** Create a results header. Account for the fact that the api_obj object has 1 added to the number of days to forecast. Add the header to HTML page.*/
  let header_text = results_text;
  if (api_obj.parameters.days.param_value > 2) {
    header_text += `the next ${api_obj.parameters.days.param_value - 1} days`;
  }
  else {
    header_text += " tomorrow"
  }
  header_text += ` for ${weather_data.location_name}:`;
  header_forecast_results.textContent = header_text;

  /** Set the default temperature unit to be Celsius */
  weather_data.temp_unit = TUnit.CELSIUS;

  /** Call the helper functions to add the actual processed weather data. */
  addCurrentDayData();
  // addForecastData();
}

/**
 * Extract the details for a single future day from the returned API data and store it in the forecast_day_data object.
 * 
 * @param {object} forecast_day : An object representing a single forecast day from the returned weather API data. This function performs no error checking while processing the data, so the parameter needs to container properly formatted content.
 */
function processFutureDayData(forecast_day) {
  /** Extract the day details object for better readability. */
  let day_details = forecast_day.day;

  /** Get the date of the forecast day. */
  forecast_day_data.date = forecast_day.date;

  /** Get the max and min temperatures. */
  forecast_day_data.temp_max_celsius = day_details.maxtemp_c;
  forecast_day_data.temp_max_fahrenheit = day_details.maxtemp_f;
  forecast_day_data.temp_min_celsius = day_details.mintemp_c;
  forecast_day_data.temp_min_fahrenheit = day_details.mintemp_f;

  /** Get the current conditions. */
  forecast_day_data.weather_description.condition = day_details.condition.text;
  forecast_day_data.weather_description.icon_url = day_details.condition.icon;
}

/**
 * Extract the forecast details from the returned API data and store it in the weather_data object.
 */
function processForecastData() {
  /** Grab the actual array holding each forecast day. */
  let forecast_days_arr = api_data_obj.forecast.forecastday;

  /** Loop through the array */
  for (let day of forecast_days_arr) {
    /** Only process future days. */
    if (day.date != weather_data.current_day.date) {
      processFutureDayData(day);

      /** Create a new local object copy of the forecast_day_data object using JSON.parse and JSON.stringify. This ensures the same global constant can be used over and over but the actual stored data will be different. */
      let temp_day_data = JSON.parse(JSON.stringify(forecast_day_data));
      weather_data.forecast_data.push(temp_day_data);
    }
  }
}

/**
 * Extract the current day details from the returned API data and store it in the weather_data object.
 */
function processCurrentDayData() {
  /** Since the returned API data stores both the date and time as a single string with a space in between, use the split method to separate both aspects. */
  let date_time = api_data_obj.current.last_updated.split(" ");
  weather_data.current_day.date = date_time[0];
  weather_data.current_day.time = date_time[1];

  /** Get the actual temperatures. */
  weather_data.current_day.temp_celsius = api_data_obj.current.temp_c;
  weather_data.current_day.temp_fahrenheit = api_data_obj.current.temp_f;

  /** Get the feels like temperatures. */
  weather_data.current_day.temp_feels_celsius = api_data_obj.current.feelslike_c;
  weather_data.current_day.temp_feels_fahrenheit = api_data_obj.current.feelslike_f;

  /** Get the current conditions. */
  weather_data.current_day.weather_description.condition = api_data_obj.current.condition.text;
  weather_data.current_day.weather_description.icon_url = api_data_obj.current.condition.icon;
}

/**
 * Function to process the weather data. This function assumes the global object api_data contains the full weather data returned from the API call.
 */
function processWeatherData() {
  /** Get the location name from the returned API data. */
  weather_data.location_name = api_data_obj.location.name;

  processCurrentDayData();
  processForecastData();
}

/**
 * Fetch function to make the API call and get the returned data.
 *
 * @param {string} url: The url to use in the fetch command, passed in as a string.
 */
async function fetchData(url) {
  /** Local variables to help with the fetch call. */
  let response_data;
  let weather_results;

  /** Clear existing data, but not all of it. */
  clearData(false);

  try {
    response_data = await fetch(url);
    weather_results = await response_data.json();

    api_data_obj = weather_results;
    processWeatherData();
    addWeatherToPage();
  } catch (error) {
    alert(error);
  }
}


// MAIN CODE
/**
 * Add a click event listener to the "Fetch Daily Forecast" button. When the user clicks the button ...
 */
export function weatherButtonListener() {
  submit_btn_weather.addEventListener("click", function () {
    /** Validate the user input before proceeding. */
    let valid_user_input = validateUserInput();

    /** If the user input is valid, build the API url, fetch the API data, and process it. */
    if (valid_user_input) {
      const full_url = buildApiUrl();
      fetchData(full_url);
    }
  });
}
