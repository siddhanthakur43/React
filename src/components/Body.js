import React, { useEffect } from "react";
import RestaurantCard, { DiscountRestaurant } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [search, setSearch] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();
    const RestaurantCardDiscount = DiscountRestaurant(RestaurantCard)

    console.log(restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    //Conditional Rendering

    if (!onlineStatus) {
        return (
            <h1>
                You are offline check your internet Connection!!
            </h1>
        )
    }
    return filteredRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex">
                <div className="m-4 p-4">
                    <input
                        type='text'
                        className="border border-solid border-black"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}>
                    </input>
                    <button
                        className="m-4 bg-blue-400 px-4 py-0.5 rounded-none"
                        onClick={() => {
                            const filteredRes = restaurantList.filter((res) => res?.info?.name.toLowerCase().includes(search.toLowerCase()));
                            setFilteredRestaurant(filteredRes);
                        }}>Search
                    </button>
                </div>
                <div className="m-4 p-4">
                    <button className="m-4 bg-green-400 px-4 py-0.5 rounded-md" onClick={() => {
                        let filteredList = restaurantList.filter((res) => res?.info?.avgRating > 4.2);
                        setFilteredRestaurant(filteredList);
                    }}>
                        Top Rated Restaurant</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant?.map((restaurant) =>
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardDiscount resData={restaurant}/> : <RestaurantCard resData={restaurant} />
                            }
                        </Link>)
                }

            </div>
        </div>)
}

export default Body;