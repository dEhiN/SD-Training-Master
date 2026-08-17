// OG Function
// function my_column_component() {}

// Anonymous OG Function
// function() {}

// Arrow Function
// let my_column_component = () => {};

// Anonymous Arrow Function
// () => {}

// column.jsx

import "./column.css";

export let my_value_for_column = 100;

// create a function with first letter capital and one that returns HTML, thats called a component
function My_column_component(props) {
  return (
    <div>
      <h1>{props.my_column_heading}</h1>
      <p>{props.my_column_para}</p>
      <a href={props.my_column_anchor_url} target="_blank">
        {props.my_column_anchor_text}
      </a>
    </div>
  );
}

export function My_second_component() {
  return (
    <div>
      <h1 id="second_header">Hello from the second component</h1>
      <p className="second_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, natus explicabo vel unde
        nam placeat soluta aperiam nostrum. Libero assumenda impedit maxime consequatur
        necessitatibus temporibus distinctio labore. Quisquam, fugiat consequuntur!
      </p>
    </div>
  );
}

export default My_column_component;
