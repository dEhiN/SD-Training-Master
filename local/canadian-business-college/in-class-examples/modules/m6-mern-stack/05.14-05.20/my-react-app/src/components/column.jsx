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
function My_column_component() {
  return (
    <div>
      <h1>Hello from the my column component {my_value_for_column}</h1>
      <p>
        {100 + 10 - 20} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor rem
        consequatur! Asperiores dolore dolorem, amet ad officia nobis quisquam dolorum sunt nulla,
        omnis veritatis ipsum optio. Saepe, cupiditate quae.
      </p>
      <a href="https://google.com" target="_blank">
        Go to google
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
