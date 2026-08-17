// fetch method to make get request

let my_setup_para = document.getElementById("setup_para");
let my_punch_para = document.getElementById("punchline_para");
let my_button = document.getElementById("call_api");

async function call_dog_api() {
  try {
    // making get request to api
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    // converting API JSON response to Javascript object
    let my_result = await response.json();
    // using the content to populate para
    my_setup_para.textContent = my_result.setup;
    my_punch_para.textContent = my_result.punchline;
  } catch (error) {
    console.log("An error happened - " + error.message);
  }
}

my_button.addEventListener("click", call_dog_api);
