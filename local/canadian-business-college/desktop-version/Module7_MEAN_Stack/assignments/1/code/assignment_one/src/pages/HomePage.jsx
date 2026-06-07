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
			<WelcomeCard />
		</>
	);
}

export default HomePage;
