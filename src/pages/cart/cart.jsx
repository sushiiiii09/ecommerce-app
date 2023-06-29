import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';

const Cart = () => {
  const { cartItems , getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <React.Fragment key={product.id}>
                <CartItem data={product} />
                {/* <p>Quantity: {cartItems[product.id]}</p> */}
              </React.Fragment>
            );
          }
          return null;
        })}

      </div>
      <div className='checkout'>
        SubTotal: ₹ {totalAmount}
        
        <button>CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;