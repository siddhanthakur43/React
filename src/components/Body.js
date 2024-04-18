import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (restaurantList.length === 0) {
        return (<Shimmer />
        )
    };
    return <div className="body">
        <button className="filter-btn" onClick={() => {
            let filteredList = restaurantList.filter((res) => res?.info?.avgRating > 4.2);
            setRestaurantList(filteredList);
        }}>
            Top Rated Restaurant</button>
        <div className="res-container">
            {
                restaurantList?.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant} />)
            }

        </div>
    </div>
}

export default Body;