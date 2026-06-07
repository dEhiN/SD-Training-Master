/** This component will act as the top navigation section for every page. */

/** CSS import */
import "./NavSection.css";

/** Use the NavButtonLink component */
import NavButtonLink from "./NavButtonLink";

/**
 * This component function creates the navigation bar as a section. The bar itself is a div element with a nav element nested inside. This allows for both styling and HTML semantics. Inside the nav element are the actual links formed from NavButtonLink components.
 *
 * @returns {JSX.Element} The rendered navigation bar complete with all links it should display.
 */
function NavSection() {
	return (
		<div>
			<nav className="nav-section">
				<NavButtonLink linkRoute="/" linkName="Home" />
				<NavButtonLink linkRoute="/userinfoform" linkName="User Information" />
				<NavButtonLink linkRoute="/userlist" linkName="User List" />
			</nav>
		</div>
	);
}

export default NavSection;
