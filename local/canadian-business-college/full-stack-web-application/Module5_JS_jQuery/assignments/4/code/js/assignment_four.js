/** Global constants to hold the API URLs. */
const dog_api_url = "https://dog.ceo/api/breeds/image/random";
const ruser_api_url = "https://randomuser.me/api/";

/** Global constants to hold the necessary class and id names that will be referenced with jQuery. */
const jq_submit_btn_dog = "#submit-btn-dog";
const jq_submit_btn_human = "#submit-btn-human";
const jq_api_div_dog = "#api-data-dog";
const jq_api_div_human = "#api-data-human";
const jq_api_div_data = ".api-data";

/** Global constants to act as user alert messages */
const fetch_api_err = "The fetch call failed! Please try again...";
const fetch_api_attempt = "Attempting the fetch...";

/** Let the user know the "get" call is happening. This is helpful since a jQuery get call can take a few milliseconds or seconds to complete. */
function updateUserOnAttempt() {
	// Create new paragraph
	let user_para = $("<p></p>").text(fetch_api_attempt);
	$(jq_api_div_data).append(user_para);
}

/**
 *
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
