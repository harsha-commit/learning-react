# Chapter 03 - Laying the Foundation

## 1. What is a Polyfill ?
 A piece of code which is the replacement for newer version of code.
 
 Suppose Browser XYZ does not understand Arrays.map() code, this is converted into browser understandable code by Babel (a JS Package).
 
 Babel uses "browserslist" in package.json for choosing which browser versions to opt for conversion. Thus, you need not write any Polyfill code. Thanks Babel ❤️.
 

## 2. Note about "browserslist" in package.json
Consider, 
```
 "browserslist": [
    "last 10 Chrome versions" 
  ]
```
  Now, this can work on other browsers as well. But definitely will work on specified versions.


## 3. Using "script" in package.json
In package.json,
```
    "script": {
        "start": "parcel index.html",
        "build": "parcel build index.html",
    }
```    
In console,
```
    npm run start (npm run === npx)
    npm start
    npm run build
``` 


## 4. About Console logs:
console.logs are not removed directly by parcel !! (need to configure in the project)

Babel Plugin Transform Remove Console => for removing console.logs()

.babelrc => configuration file for babel


## 5. A warning to be considered
`Warning: Each child in a list should have a unique "key" prop.`

Give key to each child (passing it as a prop), else react has to re-render everything !! Help React yaar <3
Key should be unique.
Render => updating something in the DOM

React.createElement() returns an object.
This object is converted into HTML (DOM)
