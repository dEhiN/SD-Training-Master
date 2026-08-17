/* eslint-disable no-unused-vars */
// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { useState } from 'react'
import './App.css'
import My_home_page from "./pages/home";
import My_contact_page from "./pages/contact-us";
import My_about_page from "./pages/about-us";
import My_not_found_page from "./pages/not-found";
import My_nav_bar from "./components/navbar";

import { my_value_for_column } from './components/column'

function App() {
  return (
    <BrowserRouter>

      <My_nav_bar />

      <Routes>
        {/* serve component based on the path */}
        <Route path="/" element={<My_home_page />} />
        <Route path="/contact" element={<My_contact_page />} />
        <Route path="/about" element={<My_about_page />} />

        <Route path="*" element={<My_not_found_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
