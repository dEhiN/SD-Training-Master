// GLOBAL VARIABLES AND CONSTANTS
/** Global constants to hold the API URLs. */
const dog_api_url = "https://dog.ceo/api/breeds/image/random";
const ruser_api_url = "https://randomuser.me/api/";

/** 
 * Global variable that will be used to determine which API call 
 * and data to use. 
 * 
 * If true, the random dog API (dog_api_url) will be used.
 * If false, the random user API (ruser_api_url) will be used.
 */
let is_dog;

/** 
 * Global constants to hold HTML class and id references.
 * This allows for easier use with jQuery.
 */
const jq_submit_btn_dog = "#submit-btn-dog";
const jq_submit_btn_human = "#submit-btn-human";
const jq_api_div_dog = "#api-data-dog";
const jq_api_div_human = "#api-data-human";
const jq_api_div_data = ".api-data";

/** Global constants to act as user alert messages */
const fetch_api_err = "The fetch call failed! Please try again...";
const fetch_api_attempt = "Attempting to fetch the requested data...";
const fetch_api_err_2 = "There was a problem with the returned data...";


// FUNCTIONS
/**
 * Add the person, or user, data to the correct HTML section.
 * 
 * @param {object} api_data: An object representing the API data returned from a call to "https://randomuser.me/api/".
 */
function addHumanData(api_data) {
	console.log(api_data);
}

/**
 * Take the full image url returned from the random dog API and extract * just the dog breed data
 * 
 * @param {string} dog_img_string: A string representing the full URL 
 * given in the random dog image API
 * 
 * @returns A string with the dog breed name is proper human readable 
 * format
 */
function getDogBreed(dog_img_string) {
	// Variable to store the breed name for captioning
	// Default is blank.
	let full_breed_name = "";

	// Extract the dog breed from the URL
	let dog_img_arr = dog_img_string.split("/");
	let dog_breed_name = dog_img_arr[dog_img_arr.length - 2];

	// Split the extracted dog breed using the hyphen
	let dog_breed_arr = dog_breed_name.split("-");

	// Check the length of the returned array
	if (dog_breed_arr.length == 1) {
		// The breed is only one word
		// Capitalize just the first letter
		full_breed_name = dog_breed_arr[0].charAt(0).toUpperCase() + dog_breed_arr[0].slice(1);
	} else if (dog_breed_arr.length == 2) {
		// The breed is composed of two words
		// Capitalize just the first letter of both words
		// The API lists the breed backwards, so flip things around
		full_breed_name = `${dog_breed_arr[1].charAt(0).toUpperCase() + dog_breed_arr[1].slice(1)} ${dog_breed_arr[0].charAt(0).toUpperCase() + dog_breed_arr[0].slice(1)}`;
	}

	return full_breed_name;
}

/**
 * Add the dog data to the correct HTML section.
 * 
 * @param {object} api_data: An object representing the API data returned from a call to "https://dog.ceo/api/breeds/image/random".
 */
function addDogData(api_data) {
	console.log(api_data);

	// Get the URL for the dog image
	let dog_img_url = api_data.message;

	let dog_breed = getDogBreed(dog_img_url);

	console.log(dog_breed);
}

/**
 * Process the API data and call another function to add the data to 
 * the HTML page.
 * 
 * @param {object} api_data: An object representing API data.
 */
function processAPIData(api_data) {
	// Determine which function to call based on the is_dog variable
	if (is_dog) {
		addDogData(api_data);
	}
	else {
		addHumanData(api_data);
	}
}

/**
 * Call the correct API using the jQuery $.get() method. If the action 
 * is successful, call another function to process the API data.
 * If it's not successful, alert the user.
 */
function fetchAPIData() {
	// Set the correct API url
	let api_url = "";
	if (is_dog) {
		api_url = dog_api_url;
	}
	else {
		api_url = ruser_api_url;
	}

	// Get the API data
	$.get(api_url, function (data) {
		// Clear any messages showing in the api-data div.
		updateUserOnAttempt(false);
		processAPIData(data);
	}).fail(function () {
		alert(fetch_api_err);
	});
}

/** 
 * Update the user on what is happening. This function will add a
 * paragraph element to the api-data div that lets the user know
 * the API data is being fetch. This function can also clear that
 * paragraph by calling the jQuery empty() method on the div.
 * 
 * This dual functionality allows for one function to be used to 
 * update the user. When the API call is being made, since there 
 * can be a delay in fetching the data, the user is informed of this.
 * When the data has been received and is ready to be presented to 
 * the user, the div for presenting the data can be emptied.
 * 
 * @param {boolean} show_para: A boolean variable that indicates whether to show or remove the paragraph informing the user. 
*/
function updateUserOnAttempt(show_para) {
	// Create local variable reference to api-data div
	let data_div;

	// Specify which section of document to update based on API call
	if (is_dog) {
		data_div = $(jq_api_div_dog);
	} else {
		data_div = $(jq_api_div_human);
	}

	// Update or empty the api-data div as appropriate
	if (show_para) {
		// Create new paragraph
		let user_para = $("<p></p>").text(fetch_api_attempt);
		data_div.append(user_para);
	}
	else {
		// Clear all child elements
		data_div.empty();
	}
}

// MAIN CODE
/** Add a click event listener to the "Fetch Doggie" button. When the
 * user clicks the button, the is_dog variable is set to use the random 
 * dog API, the user is updated of the fetch action happening, and the 
 * function to fetch the actual API data is called.
 */
$(jq_submit_btn_dog).on("click", function () {
	is_dog = true;
	updateUserOnAttempt(true);
	fetchAPIData(true);
});

/** Add a click event listener to the "Fetch Human" button. When the
 * user clicks the button, the is_dog variable is set to use the random 
 * user API, the user is updated of the fetch action happening, and the 
 * function to fetch the actual API data is called.
 */
$(jq_submit_btn_human).on("click", function () {
	is_dog = false;
	updateUserOnAttempt(true);
	fetchAPIData(true);
});
