*************** DAY 3 ***************

Polyfill:
    A piece of code which is the replacement for newer version of code
    Eg: Suppose Browser XYZ does not know Arrays.map()
        This code is converted into browser understandable code (by Babel)
        Babel uses "browserslist" in package.json for choosing which browser versions to opt for conversion.
        So, you need not write any Polyfill code. Thanks Babel.
        Babel is just a Javascript package.


Consider,
 "browserslist": [
    "last 10 Chrome versions" 
  ]
  Now, this can work on other browsers as well. But definitely will work on specified versions.


In package.json,
    "script": {
        "start": "parcel index.html",
        "build": "parcel build index.html",
    }
    
In console,
    npm run start (npm run === npx)
    npm start
    npm run build
    

About Console logs:
    console.logs are not removed directly by parcel !! (need to configure in the project)
    Babel Plugin Transform Remove Console => for removing console.logs()
    .babelrc => configuration file for babel


Warning: Each child in a list should have a unique "key" prop.
Give key to each child (passing it as a prop), else react has to re-render everything !! Help React yaar <3
Key should be unique
Render => updating something in the DOM

React.createElement() returns an object.
This object is converted into HTML (DOM)