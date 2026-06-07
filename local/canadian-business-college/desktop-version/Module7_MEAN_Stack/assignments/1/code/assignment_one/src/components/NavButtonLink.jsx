/** This component will act as a single navigation link shown in the form of a button. This means that every navigation link will actually be wrapped in a button element. This will allow for finer styling of each navigation link. */

/** CSS import */
import "./NavButtonLink.css";

/** Use the Link component from the react-router package */
import { Link } from "react-router";

/**
 * This component function creates a navigation section link in the form of a button. The react-router Link element is used for the actual link rather than a standard HTML anchor element. This allows for dynamic routing in a React app.
 *
 * @param {Object} props - The component props.
 * @param {string} props.linkRoute - The route that the link should point to (recommended to make sure the route matches a <Route> component specified elsewhere in the app).
 * @param {string} props.linkName - The name that should be displayed to the user for the route/link. This would be equivalent to what goes between the opening and closing tags of an HTML anchor element.
 * @returns {JSX.Element} The rendered link wrapped in a button element.
 */
function NavButtonLink(props) {
	return (
		<button className="nav-button">
			<Link
				to={props.linkRoute}
				className="fonts-google iosevka-charon-regular nav-button-link"
			>
				{props.linkName}
			</Link>
		</button>
	);
}

export default NavButtonLink;
