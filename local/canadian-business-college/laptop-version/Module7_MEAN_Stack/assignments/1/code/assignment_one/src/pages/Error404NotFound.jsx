/** This component will act as default page for any 404 errors. */

/** CSS import */
import "./Error404NotFound.css";

/** Custom component imports */
import HeadingLevelOne from "../components/HeadingLevelOne";

/**
 * This component function creates a 404 error page to display.
 *
 * @return {JSX.Element} The full rendered error page.
 */
function Error404NotFound() {
	return (
		<>
			<HeadingLevelOne text="404: Page Not Found" />
			<p className="fonts-google iosevka-charon-regular">
				Uh-oh, the dreaded <span className="html-error-code">404</span> error!
			</p>
			<p className="fonts-google iosevka-charon-regular">
				You must have wandered off the yellow brick road into the forest...
			</p>
			<p className="fonts-google iosevka-charon-regular">
				Please use the navigation links at the top to make your way safely back to the
				yellow brick road!
			</p>
		</>
	);
}

export default Error404NotFound;
