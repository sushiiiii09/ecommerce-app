import React,{useContext} from 'react';
import "./Cart.css";

import { ShopContext } from '../../context/shop-context';
const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data || {};
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);


  if (!props.data || !id || !productName || !price || !productImage) {
    return (
      <div className='cartItem'>
        <p>Error: Invalid product data</p>
      </div>
    );
  }

  return (
    <div className='cartItem'>
      <img src={productImage} alt='some product' />
      <div className='description'>
        <p>
          <b>{productName}</b>          
        </p>
       <h6 className='price'> ₹{price}</h6>
        <div className='countHandler'>
            <button onClick={()=> removeFromCart(id)}> - </button>
            <input
            value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;