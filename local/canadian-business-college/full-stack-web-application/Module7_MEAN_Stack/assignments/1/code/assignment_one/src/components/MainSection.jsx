/** This component will act as the main section for every page. It will basically be a wrapper for the specific pages.*/

/** Page component imports */
import HomePage from "../pages/HomePage";
import UserInfoFormPage from "../pages/UserInfoFormPage";
import UserListPage from "../pages/UserListPage";
import Error404NotFound from "../pages/Error404NotFound";

/**
 * This component function creates a main section with a specific page. Specifically, a div element with a main element nested inside. The specific page component to render will need to passed in through props.
 *
 * @param {Object} props - The component props.
 * @param {string} props.pageComponentName - The name of the page component to display.
 * @return {JSX.Element} The rendered main section with the correct page that should be rendered.
 */
function MainSection(props) {
	// An object to hold references to each page component
	const pageArray = {
		HomePage: <HomePage />,
		UserInfoFormPage: <UserInfoFormPage />,
		UserListPage: <UserListPage />,
		Error404NotFound: <Error404NotFound />,
	};

	/**
	 * This function determines which specific page component to render. It takes the prop pageComponentName (expected as string) and based on the pageArray, finds the correct component and returns it.
	 *
	 * @param {string} pageComponentName - The passed in prop that corresponds to the page component to display.
	 * @returns {JSX.Element} The specific page component that should be displayed
	 */
	const whichPage = (pageComponentName) => {
		/** Perform some safety checking - make sure pageComponentName is a string, has a value, and has a value that matches a known page component. */
		if (
			typeof pageComponentName !== "string" ||
			!pageComponentName ||
			!Object.hasOwn(pageArray, pageComponentName)
		) {
			if (!Object.hasOwn(pageArray, pageComponentName)) {
				console.log(
					`The passed in page component name is not in the list of known page components.\nThe name given is: ${pageComponentName}\nPlease check component "MainSection" and specifically the object "pageArray" to make sure the passed in name is properly known. Alternatively, please correct the passed in component name.`
				);
				return pageArray.Error404NotFound;
			} else {
				return pageArray.Error404NotFound;
			}
		}

		/** Loop through pageArray to match the page component and return it. */
		for (let page in pageArray) {
			if (page === pageComponentName) {
				return pageArray[page];
			}
		}
	};

	return <main className="main-section">{whichPage(props.pageComponentName)}</main>;
}

export default MainSection;
