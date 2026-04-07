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
	const data_div = $(jq_api_div_data);

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
		processAPIData(is_dog, data);
	}).fail(function () {
		alert(fetch_api_err);
	});
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
 * Add the dog data to the correct HTML section.
 * 
 * @param {object} api_data: An object representing the API data returned from a call to "https://dog.ceo/api/breeds/image/random".
 */
function addDogData(api_data) {
	console.log(api_data);
}

/**
 * Add the person, or user, data to the correct HTML section.
 * 
 * @param {object} api_data: An object representing the API data returned from a call to "https://randomuser.me/api/".
 */
function addHumanData(api_data) {
	console.log(api_data);
}

/** Add a click event listener to the "Fetch Doggie" button. When the
 * user clicks the button, the is_dog variable is set to use the random 
 * dog API, user is updated of the fetch action happening, and the 
 * function to fetch the actual API data is called.
 */
$(jq_submit_btn_dog).on("click", function () {
	is_dog = true;
	updateUserOnAttempt(true);
	fetchAPIData(true);
});
