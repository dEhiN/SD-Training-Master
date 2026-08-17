// This JS file will be for the logic related to the university API call


// GLOBAL VARIABLES AND CONSTANTS
/** 
 * Global object to represent the API call.
 */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
};

/** 
 * Global variable to hold all the universities.
 */
let uni_data_arr = [];

/** 
 * Global constants to hold HTML class and id references.
 */
const select_country = document.querySelector("#select-country");
const submit_btn_university = document.querySelector("#submit-btn-university");
const header_university_total = document.querySelector(".university-total");
const section_university_list = document.querySelector(".section-university-list");


// FUNCTIONS
/**
 * Function to clear any existing API data from a previous call.
 * 
 * @param { boolean } all_data: A boolean to specify if all the existing data should be cleared or only some of it.
 */
export function clearData(all_data) {
  /** Check to see if there's an existing university list that's displayed and if so:
   * 
   * - remove all the child elements
   * - reinitialize the uni_data_arr array
   * - set the drop-down list in the HTML back to the default, blank option (depending on the value of all_data)
   * - set the totals amount in the HTML to blank (depending on the value of all_data)
   */
  if (uni_data_arr.length > 0) {
    uni_data_arr = [];
    section_university_list.replaceChildren();

    if (all_data) {
      select_country.value = "";
      header_university_total.textContent = "";
    }
  }
}

/**
 * Function to grab the country name that the user selected from the drop-down list.
 * 
 * @returns The name of the country as a string.
 */
function getCountryName() {
  // Get the user's choice from the drop-down list
  let user_choice = select_country.value;

  // Validate the choice - make sure the user selected a country
  if (!user_choice) {
    alert("You didn't make a valid country choice! Defaulting to Canada...");
    select_country.value = "Canada";
    user_choice = "Canada";
  }

  return user_choice;
}

/**
 * Function to get the full URL of the API call from the constant api_obj. This is done using both the Object.values() method and the Array.join() method.
 * 
 * @returns A string representing the full URL of the API call using all the properties of the api_obj object.
 */
function buildApiUrl() {
  return Object.values(api_obj).join("");
}

/**
 * Function to add each university in the uni_data_arr array to the HTML page. The total number of universities is also added.
 */
function addUnisToPage() {
  /** Display the total number of results returned by the API call */
  header_university_total.textContent = `Total: ${uni_data_arr.length}`;

  let new_div;
  let new_para;
  let uni_data = "";
  let alt_card = false;

  for (let university of uni_data_arr) {
    uni_data = `Name: ${university.name}<br>`;
    if (university.state_province) {
      uni_data += `State/Province: ${university.state_province}<br>`;
    }
    uni_data += `Domain(s): ${university.domains.join(", ")}`;

    new_div = document.createElement("div");
    new_div.className = "university-card";

    if (alt_card) {
      new_div.className += " blue-card";
    } else {
      new_div.className += " green-card";
    }

    alt_card = !alt_card;

    new_para = document.createElement("p");
    new_para.innerHTML = uni_data;

    new_div.appendChild(new_para);
    section_university_list.appendChild(new_div);
  }
}

/**
 * Function to process the returned universities
 * 
 * @param {object} university_list : an object that represents a list of universities from the API http://universities.hipolabs.com
 */
function processUniversities(university_list) {
  for (let university of university_list) {
    let university_info = {
      name: university["name"],
      state_province: university["state-province"],
      domains: university["domains"],
    };
    uni_data_arr.push(university_info);
  }
}

/**
 * Fetch function to make the API call and get the returned data.
 * 
 * @param {string} url: The url to use in the fetch command, passed in as a string.
 */
async function fetchData(url) {
  /** Local variables to help with the fetch call. */
  let response_data;
  let university_list;

  /** Clear existing data, but not all of it. */
  clearData(false);

  try {
    response_data = await fetch(url);
    university_list = await response_data.json();

    processUniversities(university_list);
    addUnisToPage();
  }
  catch (error) {
    alert(error);
  }
}


// MAIN CODE
/**
 * Add a click event listener to the "Fetch Schools List" button. When the user clicks the button, the country name that the user selected is grabbed, the full API URL is then created and finally the function to fetch the data and process the API results is called.
 */
export function universityButtonListener() {
  submit_btn_university.addEventListener("click", function () {
    api_obj.country_name = getCountryName();
    const full_url = buildApiUrl();
    fetchData(full_url);
  })
};
