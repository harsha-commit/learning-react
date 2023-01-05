import React from "react";
import ReactDOM from "react-dom/client";

/* <div class="header">
  <h1>Namaste React</h1>
  <ul>
    <li>About Us</li>
    <li>Contact</li>
  </ul>
</div> */

// Damn, this became a MESS !! WE WANT JSX !!
const container = React.createElement("div", { className: "headings" }, [
  React.createElement(
    "h1",
    {
      id: "title",
      key: "h1",
    },
    "Namaste React"
  ),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "About Us"),
    React.createElement("li", {}, "Contact"),
  ]),
]);

// Here comes JSX 🥳

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
