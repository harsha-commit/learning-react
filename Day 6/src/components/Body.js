import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// state variable => tracked by  React
// upon change in state => Whole component is rendered

// Where to call fetch() ?
// Approach 1: load page => call API (300ms) => render page(500ms)
// Approach 2: loads => render page(100ms) => call API (300ms) => Render page(500ms)

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  function filterData(searchText) {
    const rest = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return rest;
  }

  // callback function => called when useEffect wants to call
  // useEffect() is a hook
  // called at once on startup, after initial render, by default
  // for [searchText] => once after initial render + for every state change in searchText

  // Homework - Shimmer UI

  useEffect(() => {
    // API Call
    console.log("Hello");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.674005&lng=78.102038&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");

  // Early return
  if (!restaurants) {
    return null;
  }

  // H.w first shimmer, show or no-restaurants matching, search should be there

  // Conditional Rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search...."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText);
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

export default Body;
