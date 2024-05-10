import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantInfo(json.data);
    }
    if (restaurantInfo === null) {
        return (
            <Shimmer />
        )
    }
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
      <div>
          <h1>{restaurantInfo?.cards[2]?.card?.card?.info?.name}</h1>
          <p>{restaurantInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} - {restaurantInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
          <h3>Menu</h3>
          <ul>
              {itemCards?.map((menu, index) => {
                  return (
                      <div key={index}>
                          <li>{menu?.card?.info?.name}</li>
                          <p>{menu?.card?.info?.price/100} Rs </p>
                      </div>)
              })}
          </ul>
    </div>
  )
}

export default RestaurantMenu