// button_1.jsx

import "./button_1.css";
// import state from react
import { useState } from "react";

function My_button_component() {
  // create a state for getting and setting  value
  let [get_value, set_value] = useState("bye");

  // set the value on button click and display as the body of the button
  return (
    <button
      id="click_button"
      onClick={function () {
        set_value("Hello from the button");
      }}
    >
      {" "}
      Click! {get_value}{" "}
    </button>
  );
}

export default My_button_component;
