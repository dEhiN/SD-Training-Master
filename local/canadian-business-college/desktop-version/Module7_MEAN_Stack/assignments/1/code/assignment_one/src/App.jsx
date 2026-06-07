/** This is the main React app */

/** React-specific component imports */
import { BrowserRouter, Routes, Route } from "react-router";

/** App-specific (custom) component imports */
import NavBar from "./components/NavBar";

/** This is the main App component function. It is configured to just set up the routes and the navigation bar.
 *
 * @returns {JSX.Element} The full app complete with navigation bar, the browser router and the page routes configured.
 */
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element="" />
				<Route path="/userinfoform" element="" />
				<Route path="/userlist" element="" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
