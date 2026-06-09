/** This component will act as the User Information Form page. */

/** CSS import */
import "./UserInfoFormPage.css";

/** React-specific import */
import { useState } from "react";

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";
import WelcomeCard from "../components/WelcomeCard";
import FormInputElement from "../components/FormInputElement";

/**
 * This component function creates the User Information form page. That is, a page with a form for users to fill out. The data is then validated and sent to an Express server for storage in a database. This component acts as the counterpart to the UserListPage component.
 *
 * @return {JSX.Element} The full rendered User Information page.
 */
function UserInfoFormPage() {
	// An object to store the form data
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		role: "",
		age: 0,
	});

	// API POST route to use for sending the user data
	const apiPostRoute = "";

	/**
	 * This function updates the values for the userInfo object every time a user enters data into one of the form fields.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The React event that called this function. Specifically, it's expected that this event will be a change event on an HTML input element.
	 */
	const updateValues = (event) => {
		console.log(userInfo.firstName);
		setUserInfo({
			...userInfo,
			[event.target.name]: event.target.value,
		});
	};

	/**
	 * This function sends the saved userInfo object representing user data to the backend server using the API route ??
	 *
	 * @param {React.SubmitEvent<HTMLButtonElement>} event - The React event that called this function. Specifically, it's expected that this event will be a click event from an HTML button or input type submit element.
	 */
	async function sendData(event) {
		// Stop the form from reloading the whole page
		event.preventDefault();

		// Check to make sure all fields have been filled out
		for (let data in userInfo) {
			if (!userInfo[data]) {
				alert("Please fill out all fields before trying to save your information...");
				return;
			}
		}

		// Check the email address

		// Check to make sure there's a proper endpoint to send to
		if (!apiPostRoute || apiPostRoute === "") {
			alert(
				"Your data could not be sent because the web developer forgot to tell me where to send it!\n\nPlease get in touch with them to resolve this issue!"
			);
		}

		let apiPostResponse = await fetch(apiPostRoute, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userInfo),
		});

		console.log(apiPostResponse);
	}

	return (
		<>
			<HeadingLevelOne text="User Information" />
			<form className="form-container">
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="text"
						inputName="firstName"
						inputPlaceholder=""
						id="firstName"
						labelText={`What should we call you\n(first name)?`}
						inputValue={userInfo.firstName}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={2}>
					<FormInputElement
						inputType="text"
						inputName="lastName"
						inputPlaceholder=""
						id="lastName"
						labelText={`What is your family name\n(last name)?`}
						inputValue={userInfo.lastName}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="email"
						inputName="email"
						inputPlaceholder=""
						id="email"
						labelText={`How can we reach you\n(email address)?`}
						inputValue={userInfo.email}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={2}>
					<FormInputElement
						inputType="text"
						inputName="company"
						inputPlaceholder=""
						id="company"
						labelText={`Where do you work\n(company name)?`}
						inputValue={userInfo.company}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="text"
						inputName="role"
						inputPlaceholder=""
						id="role"
						labelText={
							userInfo.company
								? `What is your role at ${userInfo.company}?`
								: `What do you do for work\n(job title)?`
						}
						inputValue={userInfo.role}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={2}>
					<FormInputElement
						inputType="number"
						inputName="age"
						inputPlaceholder=""
						id="age"
						labelText={`How many times have you been around the sun\n(age)?`}
						inputValue={userInfo.age ? userInfo.age : ""}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="submit"
						inputValue={"Send my info off to the cloud..."}
						submitFunction={sendData}
					/>
				</WelcomeCard>
			</form>
		</>
	);
}

export default UserInfoFormPage;
