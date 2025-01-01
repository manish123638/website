import React from "react";

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Cart
        </h2>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-12">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-lg mr-6" // Increased size of image
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">{item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default CartPage;
