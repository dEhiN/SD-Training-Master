/** Global object to represent the API call */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
};

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
    console.log(response_data);
    console.log(university_list);
  } catch (error) {
    console.log(error);
  }
}
/**
 * Function to grab the country name that the user selected from the drop-down list
 * @returns The name of the country as a string
 */
function getCountryName() {
  const select_country = document.querySelector("#select-country");
  return select_country.value;
}

let submit_btn = document.querySelector("#submit-btn");
submit_btn.addEventListener("click", function () {
  api_obj.country_name = getCountryName();
  const full_url = Object.values(api_obj).join("");
  fetchData(full_url);
});
