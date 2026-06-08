/** This component will act as the Home page. */

/** CSS import */
import "./HomePage.css";

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
				<p className="fonts-google caveat-semibold font-size-bg">
					Welcome to my first React app!
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					It is a 3 page site that functions like a Single Page Application.
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					The 3 pages correspond to the nav links at the top of the page:
				</p>
				<ul>
					<li className="fonts-google caveat-medium font-size-md">Home</li>
					<li className="fonts-google caveat-medium font-size-md">User Information</li>
					<li className="fonts-google caveat-medium font-size-md">User List</li>
				</ul>
			</WelcomeCard>
			<WelcomeCard wcVersion={2}>
				<p className="fonts-google caveat-semibold font-size-bg">
					What does this app do? Well, this app does two things:
				</p>
				<ol>
					<li className="fonts-google caveat-medium font-size-md">
						Collect user information through a form and save that information.
					</li>
					<li className="fonts-google caveat-medium font-size-md">
						Show all saved user information in the form of a list.
					</li>
				</ol>
			</WelcomeCard>
			<WelcomeCard wcVersion={1}>
				<p className="fonts-google caveat-semibold font-size-bg">
					What is a Single Page Application?
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					A Single Page Application (also called SPA) is a website that functions like an
					application, or program, and only has 1 page to the site.
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					A good example of an SPA site is Facebook. In fact, any social media site is an
					SPA. While there are buttons to click and there's interaction with the site, the
					entire site or page never reloads or refreshes.
				</p>
			</WelcomeCard>
			<WelcomeCard wcVersion={2}>
				<p className="fonts-google caveat-semibold font-size-bg">
					Aren't all websites the same? Actually, no.
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					When the Internet was first created, and when websites were first developed,
					they only existed to show or serve information. The information on a site stayed
					the same, so you could visit the site every day for a month and you would read
					the same text.
				</p>
				<p className="fonts-google caveat-medium font-size-md">
					As the Internet, and websites, developed, the information served evolved to
					become dynamic. That is, the information could change every time the site was
					viewed. Eventually, websites evolved more to become interactive in the same way
					as a mobile app or laptop software program.
				</p>
			</WelcomeCard>
		</>
	);
}

export default HomePage;
