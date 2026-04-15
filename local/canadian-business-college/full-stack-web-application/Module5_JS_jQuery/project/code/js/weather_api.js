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

    /** Boolean to store whether the user input is fully valid or not. Assume false as default. */
    let input_is_valid = false;

    /** Check to make sure none of the fields are blank. If any are, let the user know. */
    if (!api_key || !city || !days) {
        alert(fill_all_fields);
    }

    /** Check the number of days inputted to make sure it's between 1 and 5. First, convert the days string to a number. */
    let days_num = Number(days);
    if (days_num < 1 || days_num > 5) {
        alert(invalid_number_days)
    }

    /** If the input is not valid, clear the input fields plus any existing API results. If it is valid, update the inputIsValid variable.*/
    if (!input_is_valid) {
        clearData(true);
    }
    else {
        input_is_valid = true;
    }

    /** The input is valid, so build the api_obj object. */
    api_obj.parameters.key.param_value = api_key;
    api_obj.parameters.city.param_value = city;
    api_obj.parameters.days.param_value = days;

    return input_is_valid;
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
        }
    })
};