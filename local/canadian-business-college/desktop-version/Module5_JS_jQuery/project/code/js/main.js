// This JS file will function as the main JS that's linked to the HTML. The script element in the HTML will need to have the attribute 'type="module"'.


/** 
 * Imports from the API JS modules.
 */
import { } from './weather_api.js';
import { dogButtonListener } from './dog_api.js';
import { universityButtonListener } from './university_api.js';

/** 
 * Call the imported functions. 
 */
dogButtonListener();
universityButtonListener();

let feature_containers_list = document.querySelectorAll(".feature-container");

feature_containers_list.forEach(function (feature_container) {
    feature_container.style.display = "none";
})