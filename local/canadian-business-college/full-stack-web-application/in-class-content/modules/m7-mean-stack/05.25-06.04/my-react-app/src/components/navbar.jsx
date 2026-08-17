//navbar.jsx

import { Link } from "react-router";

function My_nav_bar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}

export default My_nav_bar;