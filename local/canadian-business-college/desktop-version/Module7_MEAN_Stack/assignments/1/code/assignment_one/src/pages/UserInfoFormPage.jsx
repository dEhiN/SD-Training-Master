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
			<form>
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="text"
						inputName="firstName"
						inputPlaceholder=""
						id="firstName"
						labelText="Please enter your first name: "
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
						labelText="Please enter your last name: "
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
						labelText="Please enter your email address: "
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
						labelText="Please enter what company your work for: "
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
								? `Please enter your role at ${userInfo.company}: `
								: "Please enter your job title: "
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
						labelText="Please enter your age: "
						inputValue={userInfo.age ? userInfo.age : ""}
						changeFunction={updateValues}
					/>
				</WelcomeCard>
			</form>
		</>
	);
}

export default UserInfoFormPage;
