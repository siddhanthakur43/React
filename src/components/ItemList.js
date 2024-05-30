import React from 'react'
import { CDN_IMAGE_URL } from '../constant/constant';

const ItemList = ({ dishes }) => {
    return (
        <div>
            {dishes.map((items, i) => (
                <div className='m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between' key={i}>
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{items?.card?.info?.name}</span> <span>{items?.card?.info?.defaultPrice / 100 || items?.card?.info?.price / 100}</span>
                        </div>
                        <p className='text-xs'>{items?.card?.info?.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            <button className='bg-black text-white pt-1 pb-1 pl-2 pr-2'>Add</button>
                        </div>
                        <img className='w-full rounded-xl' alt='dish' src={CDN_IMAGE_URL + items?.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ItemList;