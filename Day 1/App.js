// Creating a React element
// {id: "title"} => <h1 id="title">Namaste from React </h1>
const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1"
);

// React.createElement(tag, attribute, content)
const heading2 = React.createElement(
  "h1",
  {
    id: "title2",
  },
  "Heading 2"
);

const container = React.createElement("div", { className: "headings" }, [
  heading1,
  heading2,
]);

// React element is a JS object !!
console.log(container);

// Creating a Root (a single point of origin (for building) kind of thing)
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a React element inside the root
root.render(container);
