/** This component will act as a welcome card that can be featured in the hero section of the main page. */

/** CSS import */
import "./WelcomeCard.css";

/**
 * This component function creates a welcome card that can be displayed as the "hero" section of the main or Home page. The card text itself shares some information about the site and the author (or developer). It will also use the React props feature but the author hasn't figured out how yet.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered component as a div parent with the contents as children.
 */
function WelcomeCard(props) {
	return (
		<div>
			<p className="fonts-google caveat-semibold wc-size-big">
				Welcome to my first React app! It is a 3 page site that functions like a Single Page
				Application. The 3 pages correspond to the nav links at the top of the page:
			</p>
			<ul>
				<li className="fonts-google caveat-medium wc-size-md">Home</li>
				<li className="fonts-google caveat-medium wc-size-md">User Information</li>
				<li className="fonts-google caveat-medium wc-size-md">User List</li>
			</ul>
		</div>
	);
}

export default WelcomeCard;
