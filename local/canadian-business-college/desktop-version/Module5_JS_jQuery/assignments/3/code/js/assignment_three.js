// Global variables

const api_url = "http://universities.hipolabs.com/search";
let country = "";

async function fetchData(country_name) {
  country = country_name;
  const full_url = (api_url, "?", "country=", country);
  console.log(full_url);
}
