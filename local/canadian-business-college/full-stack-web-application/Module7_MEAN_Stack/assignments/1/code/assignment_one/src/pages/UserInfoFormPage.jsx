/** This component will act as the User Information Form page. */

/** CSS import */
import "./HomePage.css";

/** React-specific import */
import { useState, useEffect } from "react";

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

	/**
	 * This function updates the values for the userInfo object every time a user enters data into one of the form fields.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The React event that called this function. Specifically, it's expected that this even will be a change event on an HTML input element.
	 */
	const updateValues = (event) => {
		console.log(userInfo.firstName);
		setUserInfo({
			...userInfo,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		console.log(userInfo);
	}, [userInfo]);

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
						labelText="What should we call you (first name)?"
						// labelText={`What should we call you (first name)?`}
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
						labelText="What is your family name (last name)?"
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
						labelText="How can we reach you (email address)?"
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
						labelText="Where do you work (company name)?"
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
								: "What do you do for work (job title)?"
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
						labelText="How old are you (age)?"
						inputValue={userInfo.age ? userInfo.age : ""}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
			</form>
		</>
	);
}

export default UserInfoFormPage;
