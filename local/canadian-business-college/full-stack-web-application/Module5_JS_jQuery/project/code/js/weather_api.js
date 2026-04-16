// This JS file will be for the logic related to the weather API call


// GLOBAL VARIABLES AND CONSTANTS
/** 
 * Global object to represent the API call.
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
        equal_sign: "="
    },
    /** Object to store the various search parameters. Each property of this object will represent a search parameter in the API call and will itself be an object. Each search parameter object will contain properties for the name and value of that parameter. */
    parameters: {
        // Represents the API key to use in the API call
        key: {
            param_name: "key",
            param_value: ""
        },
        // Represents the city to use when fetching the forecast data
        city: {
            param_name: "q",
            param_value: "",
        },
        // Represents the number of days to use for the forecast
        days: {
            param_name: "days",
            param_value: "3"
        },
        // Represents whether to enable/disable air quality data
        air_quality: {
            param_name: "aqi",
            param_value: "no"
        }
    }
};

/** 
 * Global variable to hold the weather data.
 */
let weather_data = {};

/** 
 * Global constants to hold HTML class and id references.
 */
const submit_btn_weather = document.querySelector("#submit-btn-weather");
const input_weather_api_key = document.querySelector("#weather-api-key");
const input_search_city = document.querySelector("#search-city");
const input_forecast_days = document.querySelector("#forecast-days");

/** Global constants to store user alert messages */
const fill_all_fields = "Please fill in all 3 fields!";
const invalid_number_days = "The number of days to forecast can only be between 1 and 5!";


// FUNCTIONS
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
    city = "Toronto";
    days = "1";

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

        weather_data = weather_results;
        processWeatherData();
    }
    catch (error) {
        alert(error);
    }
}

/**
 * Function to process the weather data. This function assumes the global object weather_data contains the full weather data returned from the API call.
 */
function processWeatherData() {
    console.log(weather_data);
}

/**
 * Function to clear any existing API data from a previous call.
 * 
 * @param { boolean } all_data: A boolean to specify if all the existing data should be cleared or only some of it.
 */
export function clearData(all_data) {
    // Check if the input fields need to be cleared
    if (all_data) {
        input_weather_api_key.value = "";
        input_search_city.value = "";
        input_forecast_days.value = "";
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
    })
};