// button_1.jsx

import "./button_1.css";
// import state from react
import { useState } from "react";

function My_button_component() {
  // create a state for getting and setting  value
  let [value, set_value] = useState("");

  // function input_update(event){
  //     set_value(event.target.value);
  // }

  // get user input value on each change
  // display value in para
  return (
    <>
      {/* <input type='text' onChange={input_update} ></input> */}
      <input
        type="text"
        onChange={(e) => {
          set_value(e.target.value);
        }}
      ></input>
      <p>{value}</p>
    </>
  );
}

export default My_button_component;
