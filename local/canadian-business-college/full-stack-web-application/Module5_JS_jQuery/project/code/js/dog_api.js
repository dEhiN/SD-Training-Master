// This JS file will be for the logic related to the random dog API call


// GLOBAL VARIABLES AND CONSTANTS
/**
 *  Global constant to hold the API URL. 
 */
const api_url = "https://dog.ceo/api/breeds/image/random";

/** 
 * Global constants to hold HTML class and id references.
 */
const jq_submit_btn_dog = $("#submit-btn-dog");
const jq_section_dog_image = $(".section-dog-image");

/** Global constants to act as user alert messages */
const fetch_api_err = "The fetch call failed! Please try again...";
const alt_txt_dog_img = "A random image of a dog taken from \"https://dog.ceo/api/breeds/image/random\""


// FUNCTIONS
/**
 * Take the full image url returned from the random dog API and extract just the dog breed data
 * 
 * @param {string} dog_img_string: A string representing the full URL given in the random dog image API
 * 
 * @returns A string with the dog breed name is proper human readable format
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
function processDogData(api_data) {
	// Get the URL for the dog image and then extract the dog breed
	let dog_img_url = api_data.message;
	let dog_breed = getDogBreed(dog_img_url);

	// Create an image element for the dog picture
	let dog_image = $("<img>");
	dog_image.attr({
		"src": dog_img_url,
		"alt": alt_txt_dog_img,
		"class": "img-dog"
	});

	// Create a figure container so an image caption can be added to the image
	let dog_figure = $("<figure></figure>");
	dog_figure.attr({
		"class": "figure-dog"
	})

	// Create the image caption
	let dog_caption = $("<figcaption></figcaption>");
	let caption = "This is ";
	// Minor check to account for the breed name starting with a vowel
	if (/^[aeiou]/i.test(dog_breed[0])) {
		caption += "an ";
	}
	else {
		caption += "a ";
	}
	caption += dog_breed;
	dog_caption.text(caption);

	// Build everything up
	dog_figure.append(dog_image);
	dog_figure.append(dog_caption);
	jq_section_dog_image.append(dog_figure);
}

/**
 * Function to clear any existing API data from a previous call.
 */
export function clearData() {
	jq_section_dog_image.empty();
}

/**
 * Call the correct API using the jQuery $.get() method. If the action is successful, call another function to process the API data. If it's not successful, alert the user.
 */
function fetchAPIData() {
	// Get the API data
	$.get(api_url, function (data) {
		// Clear any thing showing in the dog image div
		clearData();
		processDogData(data);
	}).fail(function () {
		alert(fetch_api_err);
	});
}


// MAIN CODE
/** 
 * Add a click event listener to the "Fetch Doggie Image" button. When the user clicks the button, the function to fetch the actual API data is called.
 */
export function dogButtonListener() {
	jq_submit_btn_dog.on("click", function () {
		fetchAPIData();
	})
};
