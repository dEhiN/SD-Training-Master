/** Global object to represent the API call */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
};

/** Global object to represent each university */
let university_info = {
  name: "",
  state_province: "",
  domains: [],
};

/** Global variable to hold all the universities */
let uni_data_arr = [];

/**
 * Function to grab the country name that the user selected from the drop-down list
 * @returns The name of the country as a string
 */
function getCountryName() {
  const select_country = document.querySelector("#select-country");
  return select_country.value;
}

/**
 * Fetch function to make the API call and get the returned data.
 * @param {string} url: The url to use in the fetch command, passed in as a string
 */
async function fetchData(url) {
  let response_data;
  let university_list;

  try {
    response_data = await fetch(url);
    university_list = await response_data.json();

    processUniversities(university_list);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Function to process the returned universities
 * @param {object} university_list : an object that represents a list of universities from the API http://universities.hipolabs.com
 */
function processUniversities(university_list) {
  const section_uni_list = document.querySelector(".section-university-list");

  for (let university of university_list) {
    university_info.name = university["name"];
    university_info.state_province = university["state-province"];
    university_info.domains = university["domains"];
    uni_data_arr.push(university_info);
  }
}

let submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", function () {
  api_obj.country_name = getCountryName();
  const full_url = Object.values(api_obj).join("");
  fetchData(full_url);
});
