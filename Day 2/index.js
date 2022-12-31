import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Hot Module Reload
 * File Watcher Algorithm (written in C++)
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production build
 * Super fast
 * Image optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev ---https
 * port number
 * zero config
 */

const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1 from Parcel"
);

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

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
