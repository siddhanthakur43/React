import React from "react";
import { resList } from "../constant/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [ restaurantList, setRestaurantList ] = useState(resList)

    return <div className="body">
        <button className="filter-btn" onClick={() => {
            let filteredList = restaurantList.filter((res) => res?.info?.avgRating > 4.2);
            setRestaurantList(filteredList);
        }}>
            Top Rated Restaurant</button>
        <div className="res-container">
            {
                restaurantList.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant} />)
            }

        </div>
    </div>
}

export default Body;