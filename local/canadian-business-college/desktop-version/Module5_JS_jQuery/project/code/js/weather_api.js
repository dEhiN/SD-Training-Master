/** Global object to represent the API call */
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