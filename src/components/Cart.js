import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../store/cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return <EmptyCart />
  }
  return (
    <div className='text-center m-5 p-5'>
      <span className='text-xl font-bold mx-2'>Cart</span>
      <span>
        <button className=' bg-purple-100 text-black p-2 rounded-lg' onClick={handleClearCart}>Clear Cart</button>
      </span>
      <div className='w-6/12 m-auto'>
        <ItemList dishes={cartItems} />
      </div>
      </div>
  )
}

export default Cart