
import React, { useContext } from "react";
import { useCart } from "../Context/CartContext"; // Change CartContext to useCart

const AddToCartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Use the custom hook

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default AddToCartPage;
