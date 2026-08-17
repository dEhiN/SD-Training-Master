/* eslint-disable no-unused-vars */
// column.jsx

import './column.css'
import { useState } from 'react'

export let my_value_for_column = 100;

export let another_var = 200;

// create a function with first letter capital and one that returns HTML, thats called a component
function My_column_component(props) {

  return (
    <div>
      <h1>{props.my_column_heading}</h1>
      <p>{props.my_column_para}</p>
      <a href={props.my_column_anchor_url} target="_blank">{props.my_column_anchor_text}</a>
    </div>
  );
}

// a function that takes parameters
function mouse_enter_para(event, text_one, text_two) {
  console.log(event);
  console.log("Mouse enter " + text_one)
}

export function My_second_component(props) {
  let [isClicked, set_isClicked] = useState(true);

  // if condition from plain javascript to return another html based on evaluation
  if (isClicked == false) {
    return (
      <>
        <h1>Nothing to see here as isClicked value is false</h1>
      </>
    )
  }

  return (
    <div>
      <h1 id='second_header'>{props.my_s_heading}</h1>
      <p className='second_para'>{props.my_s_para}</p>
      <a href={props.my_s_anchor_href}>{props.my_s_anchor_text}</a>
      {/* calling a function that takes parameters and the default event as well */}
      <p onMouseEnter={() => (mouse_enter_para(event, "hello", "World"))}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse omnis quidem obcaecati? Ut repellat perferendis quam! Fuga, amet. Voluptatibus, sint qui molestiae quia est soluta iste fugit doloremque impedit?</p>

      {/* on based of value of isclicked show different content */}
      {isClicked ? <p>Is Clicked is True</p> : <p>Is clicked is false</p>}

      {/* on click of buttpn change the value of isclicked */}
      <button onClick={() => set_isClicked(!isClicked)}>Click</button>

      {/* && operator to show content when conditional evaluation is true */}
      {isClicked && (<h2>Hello from the && display if the value is true</h2>)}
    </div>
  )
}

export default My_column_component;