// button_1.jsx

import "./button_1.css";
// import state from react
import { useState } from "react";

function My_button_component() {
  // create a state for getting and setting  value
  let [isclick, set_isclick] = useState(true);

  // set the boolean value on each click
  return (
    <>
      <button
        id="click_button"
        onClick={function () {
          set_isclick(!isclick);
        }}
      >
        {" "}
        Click!{" "}
      </button>
      <p>{isclick ? "True" : "False"}</p>
    </>
  );
}

export default My_button_component;
