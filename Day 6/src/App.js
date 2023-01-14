import React from "react";
import ReactDOM from "react-dom/client";
// Named Import -> not destructuring, but extracting
// import { Header, Title } from "./components/Header.js";
// The above can be written as import * as XYZ from "./components/Header.js";
// access by XYZ.Title and XYZ.Header

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// you can write Header.jsx, but some external libraries track the extensions, os it might break, be careful

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
