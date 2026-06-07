/** This is the main React app */

/** React-specific component imports */
import { BrowserRouter, Routes, Route } from "react-router";

/** App-specific (custom) component imports */
import NavSection from "./components/NavSection";
import MainSection from "./components/MainSection";

/** This is the main App component function. It is configured to just set up the routes and the navigation bar.
 *
 * @returns {JSX.Element} The full app complete with navigation bar, the browser router and the page routes configured.
 */
function App() {
	// An array to keep track of the pages and their component names
	const pages = ["HomePage", "UserInfoFormPage", "UserListPage", "Error404NotFound"];

	return (
		<BrowserRouter>
			<NavSection />
			<Routes>
				<Route path="/" element={<MainSection pageComponentName={pages[0]} />} />
				<Route
					path="/userinfoform"
					element={<MainSection pageComponentName={pages[1]} />}
				/>
				<Route path="/userlist" element={<MainSection pageComponentName={pages[2]} />} />
				<Route
					path="*"
					element={<MainSection pageComponentName={pages[pages.length - 1]} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
