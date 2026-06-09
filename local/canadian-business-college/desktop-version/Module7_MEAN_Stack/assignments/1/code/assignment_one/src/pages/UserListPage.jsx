/** This component will act as the User List page. */

/** CSS import */
import "./UserListPage.css";

/** React imports */
import { useState } from "react";

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";
import WelcomeCard from "../components/WelcomeCard";
import FormInputElement from "../components/FormInputElement";

/**
 * This component function creates the User List page. That is, a page with a user's information shown in a list format. The data is fetched from an Express server that takes it from a database. This component acts as the counterpart to the UserInfoFormPage component.
 *
 * @return {JSX.Element} The full rendered User Information page.
 */
function UserListPage() {
	// An array to store the user data retrieved from the database
	const [users, setUsers] = useState([]);

	// Simple boolean variable for the state of the "Fetch all users" button
	const [isButtonPressed, setIsButtonPressed] = useState(false);

	// API GET route to use for sending the user data
	const apiGetRoute = "/api/get-user";

	// Variable to count the number of users
	let userCount = 0;

	/**
	 * This function retrieves the actual user data from the server GET route. It then calls the set state function to add that data to the users array
	 *
	 */
	const getUsers = async () => {
		let apiResponse = await fetch(apiGetRoute);
		let userData = await apiResponse.json();
		setUsers(userData.results);
		buttonPressed();
	};

	const buttonPressed = () => {
		setIsButtonPressed(!isButtonPressed);
	};

	return (
		<>
			<HeadingLevelOne text="Users List" />
			{!isButtonPressed && (
				<WelcomeCard wcVersion={3}>
					<FormInputElement
						inputType="submit"
						inputValue={"Fetch all users! "}
						submitFunction={getUsers}
					/>
				</WelcomeCard>
			)}
			<div className="user-list-container">
				{users &&
					users.map(
						(user) => (
							userCount++,
							(
								<WelcomeCard wcVersion={2}>
									<p className="user-list-header">User {userCount}</p>
									<ul className="user-list-list">
										<li>
											Name: {user.firstName} {user.lastName}
										</li>
										<li>Age: {user.age}</li>
										<li>Company: {user.company}</li>
										<li>Position: {user.role}</li>
										<li>Email: {user.email}</li>
									</ul>
								</WelcomeCard>
							)
						)
					)}
			</div>
		</>
	);
}

export default UserListPage;
