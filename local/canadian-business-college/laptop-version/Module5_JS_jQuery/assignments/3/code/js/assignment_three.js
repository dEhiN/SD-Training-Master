/** Global object to represent the API call */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
};

/** Global variable to hold all the universities */
let uni_data_arr = [];

/** Global variable to hold the div container for the university list data */
const section_uni_list = document.querySelector(".section-university-list");

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

  /** Check to see if there's an existing university list that's displayed and if so, remove all the child elements as well as reinitialize the uni_data_arr array. */
  if (uni_data_arr.length > 0) {
    uni_data_arr = [];
    section_uni_list.replaceChildren();
  }

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
 * Function to add each university in the uni_data_arr array to the HTML page. The total number of universities is also added.
 */
function addUnisToPage() {
  let span_uni_total = document.querySelector(".university-total");
  span_uni_total.textContent = `Total: ${uni_data_arr.length}`;

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
    section_uni_list.appendChild(new_div);
  }
}

/**
 * Add the click event listener to the submit button. When it's clicked, get the country name selected, use the Object.values() and Array.join() methods to create the full API URL, and then call fetchData() to get and process the API results.
 */
let submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", function () {
  api_obj.country_name = getCountryName();
  const full_url = Object.values(api_obj).join("");
  fetchData(full_url);
});
