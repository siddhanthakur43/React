import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data }) => {
    const [showItem, setShowItem] = useState(false);
    const dishes = data.card.card.itemCards;
    const handleClick = () => {
        setShowItem(!showItem);
    }
  return (
      <div className='w-6/12 mx-auto m-4 bg-slate-100 p-4 shadow-lg'>
          <div className='flex justify-between cursor-pointer' onClick={handleClick} >
          <span className='font-bold text-md'>
              {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
          </span>
          <span>{showItem ?"⬆" : "⬇"}</span>
          </div>

              {
                  showItem && <ItemList dishes={dishes} />
              }
      </div>
  )
}

export default RestaurantCategory