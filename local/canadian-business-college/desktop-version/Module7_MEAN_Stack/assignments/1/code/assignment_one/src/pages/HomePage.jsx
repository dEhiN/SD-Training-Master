/** This component will act as the Home page. */

/** Custom component imports */
import WelcomeCard from "../components/WelcomeCard";

/**
 * This component function creates the Home page
 *
 * @return {JSX.Element} The full rendered Home or main page.
 */
function HomePage() {
	return (
		<>
			<h1 className="fonts-google iosevka-charon-bold">Home</h1>
			<WelcomeCard />
		</>
	);
}

export default HomePage;
