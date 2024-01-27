import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/MockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.635009&lng=77.282939&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //   console.log(json);
    setListOfRestraunt(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // console.log(resList)
  if (listOfRestaurants.length === 0 && searchText.length===0) {
    return <Shimmer />;
  }
  else 
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              const searchList = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
              );
              setListOfRestraunt(searchList);
            }}
          >
            Search
          </button>
        </div>
        {console.log(searchText)}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {three ways to condiotional render 
        one is below
        one is using ternary operator as it restaurants
        one is using && to render } */}
      {(()=>{if(listOfRestaurants.length === 0 && searchText.length !== 0)  return(
            <div>No restaurants found</div>
          );})()}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
