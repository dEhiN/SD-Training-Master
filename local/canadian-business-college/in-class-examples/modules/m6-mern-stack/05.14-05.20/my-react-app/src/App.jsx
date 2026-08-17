/* eslint-disable no-unused-vars */
// App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import My_column_component from "./components/column_3";
import { my_value_for_column, My_second_component } from "./components/column";
import My_button_component from "./components/button_4";

function App() {
  console.log(my_value_for_column);
  const [count, setCount] = useState(0);

  return (
    <>
      <My_column_component
        my_column_heading="Hello my column"
        my_column_para="Hello para"
        my_column_anchor_url="https://www.google.com"
        my_column_anchor_text="Go to Google!"
      />
      <My_column_component
        my_column_heading="Hello from the same component"
        my_column_para="This para is to show a demo"
        my_column_anchor_url="https://www.yahoo.com"
        my_column_anchor_text="Go to Yahoo!"
      />
      <My_button_component />
      <My_second_component />
      {/* <My_column_component />
      <My_button_component />
      <My_second_component />
      <My_button_component />
      <My_button_component /> */}
    </>
  );
}

export default App;
