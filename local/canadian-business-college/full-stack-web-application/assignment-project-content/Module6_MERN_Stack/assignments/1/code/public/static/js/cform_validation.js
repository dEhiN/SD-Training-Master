/** JavaScript file to validate the assignment form before sending it. This script will check the name and message fields aren't blank and the email field has a proper email address. The script will also alert the user of issues, whether due to leaving a field blank or a server issue returned via status code 500. If the server returns 200, the user is also alerted of the success.*/

/** Global object to hold the user's submitted contact data. Making this a global object rather than a local one for future scalability. */
const contactData = {
    c_name: "",
    c_email: "",
    c_message: ""
}

/** Global variable to help with user alert messages. */
const contactFormAlertMsg = {
    c_name: "Please enter your name...",
    c_email: "Please enter a valid email address...",
    c_message: "Please enter a message that's at least 20 characters...",
    send_fail: "There was a problem sending your email.\n\nHere is the message from the server:\n\n",
    send_success: "Your email was sent successfully!"
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
    for (key in contactData) {
        /** Confirm the field isn't empty */
        if (contactData[key] == "") {
            /** Handle the text fields that are empty and alert the user to the issue */
            switch (key) {
                case "c_name":
                    alertUser(contactFormAlertMsg.c_name);
                    break;
                case "c_email":
                    alertUser(contactFormAlertMsg.c_email);
                    break;
                case "c_message":
                    alertUser(contactFormAlertMsg.c_message);
                    break;
            }

            isValid = false;
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

    /** Populate the contactData object with the contents of the form */
    contactData.c_name = formData.get("c_name");
    contactData.c_email = formData.get("c_email");
    contactData.c_message = formData.get("c_message");

    /** Validate the data */
    let validData = validate();

    /** If the validation failed, skip the rest of the function */
    if (!validData) {
        return;
    }

    /** Since validation passed, use the fetch method to send the form data. But first, convert the form data to JSON data. */
    const contactJSONData = Object.fromEntries(formData.entries());
    const serverResponse = await fetch("/contact-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactJSONData)
    })

    const serverMessage = await serverResponse.json();

    /** Check the server response to know if the email was sent or not. If not, let the user know and tell them to try again. If it did, clear the contact form. */
    if (serverResponse.status === 500) {
        contactFormAlertMsg.send_fail += serverMessage.message;
        alertUser(contactFormAlertMsg.send_fail);
    }
    else {
        alertUser(contactFormAlertMsg.send_success);
        event.target.reset();
    }
});