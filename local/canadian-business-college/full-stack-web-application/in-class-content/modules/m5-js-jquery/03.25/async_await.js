// fetch method to make get request

let my_img = document.getElementById("dog_img");
let my_button = document.getElementById("call_api");

async function call_dog_api() {
  try {
    // making get request to api
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    // converting API JSON response to Javascript object
    let my_result = await response.json();
    // using the response as src of the image
    my_img.setAttribute("src", my_result.message);
  } catch (error) {
    console.log("An error happened - " + error.message);
  }
}

my_button.addEventListener("click", call_dog_api);
