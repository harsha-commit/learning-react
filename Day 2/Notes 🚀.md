******\*\*\******* DAY 2 ******\*\*\*******

To be production ready, the app should be:
Minified
Optimization
Free of console.logs (Clean Console)
Bundled
Deployed with a server

Bundlers:
https://www.youtube.com/watch?v=5IG4UmULyoA&ab_channel=Fireship
In create-react-app, it uses webpack by default
To get this package, we need a package manager

Using npm (NOT Node Package Manager):
npm init -y // initializes npm and adds package.json
npm install -D parcel // only for developer machine, not for production, so -D (dev dependency)
npm install --save-dev parcel // same as above, adds package-lock.json and node_modules
npm install react
npm install react react-dom
npx parcel index.html // creates development build and hosts on a server
npx parcel build index.html // creates production build, pushes to dist (delete main in package.json)/

    // npx => execute using npm
    // (don't forget to import React in index.js file and add type="module" for script tag)
    // Only modules can import and export

Parcel Features:
Hot Module Reload (same as live-server) using File Watcher Algorithm
Bundling
Minification
Cleaning our Code
Dev and Production build
Super Fast Build Algorithm
Image Optimization
Caching while Development
Compression
Compatible with older version of browsers
HTTPS on dev (npx parcel index.html --https)
Manages Port number
Consistent Hashing Algorithm
Zero Config
Tree Shaking - Removing unwanted code (only keep which is used)

Understanding caret:
"parcel": "^2.8.2" // auto upgrade if newer versions are available

Understanding package.json:
Configuration used to manage dependencies
use "browserslist" to manage browser compatible versions

Understanding package-lock.json
Keeps track of exact versions used in the application

Transitive Dependencies:
One dependency depends on many dependencies and they further depends on many others.
