import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  // Add a null/undefined check for all_product
  if (!all_product) {
    return null; // or handle the case where all_product is not defined
  }

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        console.log('Index:', index);
        console.log('e:', e);

        // Additional checks to prevent accessing properties of undefined
        if (CartItems && CartItems[e.id] !== undefined && CartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      {/* Rest of the component... */}
    </div>
  );
}

export default CartItems;
