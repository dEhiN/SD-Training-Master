// button_1.jsx

import "./button_1.css";
// import state from react
import { useState } from "react";

function My_button_component() {
  // create a state for getting and setting  value
  let [name, set_name] = useState("");
  let [age, set_age] = useState("");

  // get user input value on each change
  // display value in para
  return (
    <>
      <input
        type="text"
        onChange={function (e) {
          set_name(e.target.value);
        }}
        placeholder="User Name"
      ></input>
      <input
        type="number"
        onChange={function (e) {
          set_age(e.target.value);
        }}
        placeholder="User Age"
      ></input>
      <p>The name of the User is - {name}</p>
      <p>The age of the User is - {age}</p>
      {age ? <p>In 10 years you will be - {parseInt(age) + 10}</p> : <p></p>}
    </>
  );
}

export default My_button_component;
