/** Global object to represent the API call */
const api_obj = {
  base_url: "http://universities.hipolabs.com/",
  s_keyword: "search?",
  country_property: "country=",
  country_name: "",
};

/**
 * Fetch function to make the API call and get the returned data.
 * @param {string} country_name: A valid country name passed in as a string
 */
async function fetchData(country_name) {
  api_obj.country_name = country_name;
  const full_url = Object.values(api_obj).join("");
}

let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", function () {
  fetchData("Canada");
});
