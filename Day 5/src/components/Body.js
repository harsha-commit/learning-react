import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// React uses ONE-WAY DATA BINDING
// In two way data binding, it might get difficult where the variable is getting modified
// Also not for optimisation
const Body = () => {
  // every component in React maintains a state, you can put all the variables into state
  // local variable, we use state for this
  // let searchText = "KFC"; => This won't work

  // useState()
  // to create state variable
  // returns an array, we destruct for first element
  // searchText is a Local State Variable
  // the parameter is optional and is the Initial value of the variable
  // cannot directly modify the variable - React , only using 2nd array element (a function)
  // good practice to write setVariableName
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  // const [searchClicked, setSearchClicked] = useState("false");

  function filterData(searchText) {
    const rest = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return rest;
  }

  // Hooks are basically a function,
  // normal variable => change in value == change in DOM / UI ? No. (no tracking)
  // so state variables was introduced
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search...."
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in the input
            // to update the variable
            setSearchText(e.target.value);
          }}
        />

        {/* <h1>Two Way Data Binding - {searchText}</h1>
        <h1>Clicked? - {searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // update the state
            const data = filterData(searchText);
            console.log(data);
            setRestaurants(data);
          }}
        >
          Searching: {searchText}
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

// console.log(true);

export default Body;
