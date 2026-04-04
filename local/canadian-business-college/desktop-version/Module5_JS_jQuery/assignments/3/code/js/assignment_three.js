/** Global object to represent the API call */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
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
    addUnisToPage();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Function to process the returned universities
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
 * Function to add each university in the uni_data_arr array to the HTML page.
 */
function addUnisToPage() {
  const section_uni_list = document.querySelector(".section-university-list");
  let new_para;
  let uni_data = "";

  for (let university of uni_data_arr) {
    uni_data = `Name: ${university.name}<br>`;
    uni_data += `State/Province: ${university.state_province}<br>`;
    uni_data += `Domain(s): ${university.domains.join(", ")}`;

    new_para = document.createElement("p");
    new_para.innerHTML = uni_data;
    section_uni_list.appendChild(new_para);
  }
}

let submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", function () {
  api_obj.country_name = getCountryName();
  const full_url = Object.values(api_obj).join("");
  fetchData(full_url);
});
