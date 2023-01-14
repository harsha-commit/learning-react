import React from "react";
import ReactDOM from "react-dom/client";
// Named Import -> not destructuring, but extracting
// import { Header, Title } from "./components/Header.js";
// The above can be written as import * as XYZ from "./components/Header.js";
// access by XYZ.Title and XYZ.Header

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// React is faster, because of Reconciliation (one of the expensive operations is DOM manipulation)
// because it doesn't need to re-render the whole page.

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// for functional component, this is the syntax
root.render(<AppLayout />);
