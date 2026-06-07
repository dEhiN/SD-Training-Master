/** This component will act as the User Information Form page. */

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";

/**
 * This component function creates the User Information form page. That is, a page with a form for users to fill out. The data is then validated and sent to an Express server for storage in a database. This component acts as the counterpart to the UserListPage component.
 *
 * @return {JSX.Element} The full rendered User Information page.
 */
function UserInfoFormPage() {
	return <HeadingLevelOne text="User Information" />;
}

export default UserInfoFormPage;
