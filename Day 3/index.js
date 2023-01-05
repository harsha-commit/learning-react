import ReactDOM from "react-dom/client";

// HTML
/* <div class="header">
  <h1>Namaste React</h1>
  <ul>
    <li>About Us</li>
    <li>Contact</li>
  </ul>
</div> */

// Coding without JSX 🥲
// const container = createElement("div", { className: "headings" }, [
//   createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h1",
//     },
//     "Namaste React"
//   ),
//   createElement("ul", {}, [
//     createElement("li", {}, "About Us"),
//     createElement("li", {}, "Contact"),
//   ]),
// ]);

// HERE COMES JSX 🥳
// This is NOT HTML inside JS, the below code is HTML-like syntax
// babel understands JSX
// JSX uses React.createElement => Object => HTML(DOM)
// parcel gives you babel
// This is a React Element
const heading = (
  <h1 id="title" key="h1" className="namaste">
    Namaste React
  </h1>
);

const Title = () => (
  <h1 id="title" key="t1" className="namaste">
    Hello I'm the Title
  </h1>
);

const Footer = () => (
  <h1 id="title" key="f1" className="namaste">
    Hello I'm the Footer
  </h1>
);

// 34-38 => JSX Expression

// React Component
// - Functional Component - NEW
// - Class Based Component

// Functional Component (a JS Function that returns JSX)
// All component names should start with a capital letter (convention)
// does sanitization, so don't worry about hackers
// <Title/> is known as Component Composition (Component in a component)
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <Title />
      {Footer()}
      {console.log("Wait, What ??")}
      <h2>Namaste from Functional Component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// for functional component, this is the syntax
root.render(<HeaderComponent />);
