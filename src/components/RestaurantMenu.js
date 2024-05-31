import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    const restaurantInfo = useRestaurantMenu(resId);
    if (restaurantInfo === null) {
        return (
            <Shimmer />
        )
    }
    const { cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;
    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return (
      <div className='text-center mt-2'>
          <h1 className='font-bold text-2xl my-5'>{restaurantInfo?.cards[2]?.card?.card?.info?.name}</h1>
          <p className='text-lg'>{cuisines.join(', ')} - {costForTwoMessage}</p>
          {
              categories.map((catrgory, i) => (
                  <RestaurantCategory key={i} data={catrgory}
                      showItem={i === showIndex ? true : false}
                      setShowIndex={() => setShowIndex(i === showIndex ? null : i)}
                  />
              ))
          }
      </div>
  )
}

export default RestaurantMenu