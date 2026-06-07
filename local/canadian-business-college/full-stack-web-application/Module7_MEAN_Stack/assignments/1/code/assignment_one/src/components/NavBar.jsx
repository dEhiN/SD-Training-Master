/** This component will act as the top navigation section for every page */

/** Use the NavButtonLink component */
import NavButtonLink from "./NavButtonLink";

/** This component function creates a navigation bar. The bar itself is a div component with a nav component nested inside. This allows for both styling and HTML semantics.
 *
 * @returns {JSX.Element} The rendered navigation bar complete with all links it should display
 */
function NavBar() {
	return (
		<div className="nav-section">
			<nav>
				<NavButtonLink linkRoute="/" linkName="Home" />
				<NavButtonLink linkRoute="/userinfoform" linkName="User Information" />
				<NavButtonLink linkRoute="/userlist" linkName="User List" />
			</nav>
		</div>
	);
}

export default NavBar;
