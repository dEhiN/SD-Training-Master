/** This component will act as the User Information Form page. */

/** React-specific import */
import { useState } from "react";

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";
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
		birthDate: Date,
		age: 0,
	});

	/**
	 * This function updates the values for the userInfo object every time a user enters data into one of the form fields.
	 *
	 * @param {React.BaseSyntheticEvent} event - The React event that called this function
	 */
	const updateValues = (event) => {
		console.log(userInfo.first_name);
		setUserInfo({
			...userInfo,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<>
			<HeadingLevelOne text="User Information" />
			<form>
				<FormInputElement
					inputType="text"
					inputName="firstName"
					inputPlaceholder=""
					id="firstName"
					labelText="Please enter your first name: "
				/>
			</form>
		</>
	);
}

export default UserInfoFormPage;
