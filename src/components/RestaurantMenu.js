import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    if (restaurantInfo === null) {
        return (
            <Shimmer />
        )
    }
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(restaurantInfo);
  return (
      <div>
          <h1>{restaurantInfo?.cards[2]?.card?.card?.info?.name}</h1>
          <p>{restaurantInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} - {restaurantInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
          <h3>Menu</h3>
          <ul>
              {itemCards?.map((menu, index) => {
                  return (
                      <div key={index}>
                          <li>{menu?.card?.info?.name}- {menu?.card?.info?.defaultPrice/100 || menu?.card?.info?.price/100} Rs</li>
                      </div>)
              })}
          </ul>
    </div>
  )
}

export default RestaurantMenu