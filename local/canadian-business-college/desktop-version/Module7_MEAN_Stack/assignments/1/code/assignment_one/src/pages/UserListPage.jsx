/** This component will act as the User List page. */

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";

/**
 * This component function creates the User List page. That is, a page with a user's information shown in a list format. The data is fetched from an Express server that takes it from a database. This component acts as the counterpart to the UserInfoFormPage component.
 *
 * @return {JSX.Element} The full rendered User Information page.
 */
function UserListPage() {
	return <HeadingLevelOne text="User List" />;
}

export default UserListPage;
