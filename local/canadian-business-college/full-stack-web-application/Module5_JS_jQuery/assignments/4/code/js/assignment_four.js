/** Global constants to hold the API URLs. */
const dog_api_url = "https://dog.ceo/api/breeds/image/random";
const ruser_api_url = "https://randomuser.me/api/";

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
const fetch_api_attempt = "Attempting the fetch...";

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
 * If it's not successful, update the user.
 * @param {boolean} is_dog: A boolean variable to specify which API  call to make. If true, a call to the random dog API ("https://dog.ceo/api/breeds/image/random") is made. If false, a call to the random user API ("https://randomuser.me/api/") is made.
 */
function fetchAPIData(is_dog) {
	// Set the correct API url
	let api_url = "";
	if (is_dog) {
		api_url = dog_api_url;
	} else {
		api_url = ruser_api_url;
	}

	$.get(api_url, function (data) {
		processAPIData(is_dog, data);
	}).fail(function () {
		alert(fetch_api_err);
	});
}

/**
 *
 * @param {boolean} is_dog: A boolean variable to specify which API  data to work with. If true, the data is from the random dog API ("https://dog.ceo/api/breeds/image/random"). If false, the data is from the random user API ("https://randomuser.me/api/").
 * @param {object} api_data: An object representing API data.
 */
function processAPIData(is_dog, api_data) {
	console.log(`is_dog: ${is_dog}\napi_data:`);
	console.log(api_data);
}

/** Add a click event listener to the "Fetch Doggie" button. When the
 * user clicks the button, the associated function makes the API call.
 * The user is informed of this action. If the action is successful,
 * update the HTML page. If it's not successful, let the user.
 */
$(jq_submit_btn_dog).on("click", function () {
	updateUserOnAttempt();
	fetchAPIData(true);
});
