/** This component will act as the User Information Form page. */

/** React-specific import */
import { useState } from "react";

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";
import WelcomeCard from "../components/WelcomeCard";
import FormInputElement from "../components/FormInputElement";

/** Global variables */
/* An object that represents the props data needed to build a FormInputElement */
const formElementInput = {
	inputType: "",
	inputName: "",
	inputPlaceholder: "",
	id: "",
	labelText: "",
};

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
		birthDate: Date,
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

	return (
		<>
			<HeadingLevelOne text="User Information" />
			<WelcomeCard>
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
				</form>
			</WelcomeCard>
		</>
	);
}

export default UserInfoFormPage;
