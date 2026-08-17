// This JS file will function as the main JS that's linked to the HTML. The script element in the HTML will need to have the attribute 'type="module"'.


// MODULE IMPORTS
/** 
 * Imports from the API JS modules.
 */
import { weatherButtonListener, clearData as clearWeatherForecast } from './weather_api.js';
import { dogButtonListener, clearData as clearDogImage } from './dog_api.js';
import { universityButtonListener, clearData as clearUniversityList } from './university_api.js';


// GLOBAL VARIABLES AND CONSTANTS
/** 
 * Global constants to hold HTML class and id references.
 */
let feature_containers_list = document.querySelectorAll(".feature-container");
let feature_btn_weather = document.querySelector("#feature-btn-weather");
let feature_btn_dog = document.querySelector("#feature-btn-dog");
let feature_btn_university = document.querySelector("#feature-btn-university");


// FUNCTIONS
/**
 * Function to hide all the feature containers
 */
function hideFeatureContainers() {
    feature_containers_list.forEach(function (feature_container) {
        feature_container.style.display = "none";
    })
}

/**
 * Function to check which button was pressed for the API buttons in the feature-chooser section. The appropriate assignment section is then shown.
 * 
 * @param {HTMLElement} button_element: Represents an HTMLElement that references a button
 */
function handleApiButton(button_element) {
    // Hide all feature containers first
    hideFeatureContainers();

    // Check to see which button was pressed
    if (button_element == feature_btn_weather) {
        // Clear anything that's showing already
        clearWeatherForecast(true);
        // Display the Weather Forecast section
        feature_containers_list[0].style.display = "";
    }
    else if (button_element == feature_btn_dog) {
        // Clear anything that's showing already
        clearDogImage();
        // Display the Doggie Image section
        feature_containers_list[1].style.display = "";
    }
    else if (button_element == feature_btn_university) {
        // Clear anything that's showing already
        clearUniversityList(true);
        // Display the Higher Institutions section
        feature_containers_list[2].style.display = "";
    }
}

/**
 * Function to set up the feature-chooser section
 */
function setupFeatureChooser() {
    // Add click listeners to the API buttons
    feature_btn_weather.addEventListener("click", function () {
        handleApiButton(feature_btn_weather);
    });
    feature_btn_dog.addEventListener("click", function () {
        handleApiButton(feature_btn_dog);
    });
    feature_btn_university.addEventListener("click", function () {
        handleApiButton(feature_btn_university);
    })
}

/** 
 * Call the imported event listener functions. 
 */
function setupImports() {
    weatherButtonListener();
    dogButtonListener();
    universityButtonListener();
}

// MAIN CODE
/** 
 * Call the main functions
 */
setupImports();
hideFeatureContainers();
setupFeatureChooser();