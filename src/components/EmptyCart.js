import React from 'react'

const EmptyCart = () => {
  return (
      <div className='m-4 p-4'>
          <div className='w-6/12 m-auto'>
          <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'></img>
          </div>
          <div className='text-center m-4 p-4'>
          <p className='mr-10 text-xl'>Your cart is empty</p>
          <p className='mr-10 text-sm text-gray-400 m-4' >You can go to home page to view more restaurants</p>
          </div>
          
    </div>
  )
}

export default EmptyCart