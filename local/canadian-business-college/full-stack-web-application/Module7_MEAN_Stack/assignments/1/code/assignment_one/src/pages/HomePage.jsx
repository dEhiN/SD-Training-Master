/** This component will act as the Home page. */

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";
import WelcomeCard from "../components/WelcomeCard";

/**
 * This component function creates the Home page
 *
 * @return {JSX.Element} The full rendered Home or main page.
 */
function HomePage() {
	return (
		<>
			<HeadingLevelOne text="Home" />
			<WelcomeCard wcVersion={1}>
				<p className="fonts-google caveat-semibold wc-size-big">
					Welcome to my first React app! It is a 3 page site that functions like a Single
					Page Application. The 3 pages correspond to the nav links at the top of the
					page:
				</p>
				<ul>
					<li className="fonts-google caveat-medium wc-size-md">Home</li>
					<li className="fonts-google caveat-medium wc-size-md">User Information</li>
					<li className="fonts-google caveat-medium wc-size-md">User List</li>
				</ul>
			</WelcomeCard>
		</>
	);
}

export default HomePage;
