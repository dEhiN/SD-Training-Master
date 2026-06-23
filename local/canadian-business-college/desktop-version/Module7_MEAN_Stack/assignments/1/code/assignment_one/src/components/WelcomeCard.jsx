/** This component will act as a welcome card that can be featured in the hero section of the main page. */

/** CSS import */
import "./WelcomeCard.css";

/**
 * This component function creates a welcome card that can be displayed as the "hero" section of the main or Home page. The card text itself shares some information about the site and the author (or developer). In the CSS, 3 different card "versions" have been created which differ only in the background colour of the card. The card that's created uses the props value to specify which background colour to use and to inject any children.
 *
 * @param {Object} props - The component props.
 * @param {number} props.wcVersion - A number between 1 and 3 representing which version of the Welcome Card to display. This affects the background colour. See WelcomeCard.css for more information.
 * @param {ReactNode} props.children - A ReactNode representing JSX elements or code to insert as children of the div element
 * @return {JSX.Element} The rendered component as a div parent with the contents as children.
 */
function WelcomeCard(props) {
	// An object to allow different version of the welcome card
	const welcomeCardVersions = {
		1: "wc-version1",
		2: "wc-version2",
		3: "wc-version3",
	};

	// Set the welcome card version based on the props value or a default as a safety backup
	const wcVersion = welcomeCardVersions[props.wcVersion] || welcomeCardVersions[1];

	return <div className={`welcome-card ${wcVersion}`}>{props.children}</div>;
}

export default WelcomeCard;
