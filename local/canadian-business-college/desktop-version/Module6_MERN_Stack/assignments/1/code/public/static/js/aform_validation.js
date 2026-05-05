/** JavaScript file to validate the form before sending it. This script will check every text field to ensure it is not blank and check that a file has been selected. It will then make sure the selected file is an image file based on the file extension. */

/** Global object to hold the user's submitted form data. Making this a global object rather than a local one for future scalability. */
const userData = {
    "u_name": "",
    "u_age": "",
    "u_car": "",
    "u_job": "",
    "u_image": "",
}

/** Global variable to help with user alert messages. It's an object where the keys are the same name as the fields in the form. The last key is a nested array since two possible scenarios exist for the image - the user not uploading a file and the user uploading a non-image file. */
const alertMsg = {
    "u_name": "Please enter your name...",
    "u_age": "Please enter your age...",
    "u_car": "Please enter the car you drive...",
    "u_job": "Please enter your job or occupation...",
    "u_image": [
        "Please choose a file to upload...",
        "Please upload an image file...",
        "Something went wrong trying to upload your file. Please try again..."
    ],
    "save_fail": "There was a problem with the server and your data could not be saved! Please wait 30 seconds and try again..."
}

/** Get a reference to the form */
const formSubmit = document.querySelector(".form-form-details");

/** Helper function to do the actual validation. This uses a FormData object to easily access all the form fields at once. 
 * 
 * @returns {boolean} True if all the data entered by the user is valid, false otherwise
 */
function validate() {
    /** Assume the data is valid by default */
    let isValid = true;

    /** Look through the userData object to validate each field */
    for (key in userData) {
        if (key != "u_image") {
            /** Confirm the field isn't empty */
            if (userData[key] == "") {
                /** Handle the text fields that are empty and alert the user to the issue */
                switch (key) {
                    case "u_name":
                        alertUser(alertMsg.u_name);
                        break;
                    case "u_age":
                        alertUser(alertMsg.u_age);
                        break;
                    case "u_car":
                        alertUser(alertMsg.u_car);
                        break;
                    case "u_job":
                        alertUser(alertMsg.u_job);
                        break;
                }

                isValid = false;
            }
        }
        else {
            /** Confirm we are working with a File object */
            const imageFile = userData[key];
            if (imageFile instanceof File) {
                /** Handle the file upload for the two scenarios of no file being uploaded or a non-image file being uploaded */
                if (imageFile.size === 0) {
                    alertUser(alertMsg.u_image[0]);
                    isValid = false;
                }
                else if (!imageFile.type.startsWith("image/")) {
                    alertUser(alertMsg.u_image[1]);
                    isValid = false;
                }
            }
            else {
                /** Catch-all just in case. While FormData should give a File object for input fields of type "file", it's preferable to alert the user if something goes wrong. */
                alertUser(alertMsg.u_image[2]);
                isValid = false;
            }
        }
    }

    return isValid;
}

/** Simple helper function that alerts the user to a message
 * 
 * @param {string} msg The string to show
 */
function alertUser(msg) {
    alert(msg);
}

/** Add an event listener for when the user "submits" the */
formSubmit.addEventListener("submit", async (event) => {
    /** Override the default action */
    event.preventDefault();

    /** Create a new FormData object to store the HTML form data */
    const formData = new FormData(event.target);

    /** Populate the userData object with the contents of the form */
    userData.u_name = formData.get("u_name")
    userData.u_age = formData.get("u_age")
    userData.u_car = formData.get("u_car")
    userData.u_job = formData.get("u_job")
    userData.u_image = formData.get("u_image")

    /** Validate the data */
    let validData = validate();

    /** If the validation failed, skip the rest of the function */
    if (!validData) {
        return;
    }

    /** Since validation passed, use the fetch method to send the form data */
    const serverResponse = await fetch("/assignment-form", {
        method: "POST",
        body: formData
    })

    /** Check the server response to know if the file saving operation failed or not. If not, let the user know and tell them to try again. If it did, clear the form so the user could send more data. */
    if (serverResponse.status === 500) {
        alertUser(alertMsg.save_fail);
    }
    else {
        event.target.reset();
    }
});