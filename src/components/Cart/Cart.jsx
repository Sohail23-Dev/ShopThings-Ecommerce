import React from "react";
import { useSelector } from "react-redux";
import notav from "../../assets/notav.webp";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 border-b pb-2">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-16 text-lg font-semibold bg-gray-50 rounded-xl shadow-inner">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-4 gap-4 border border-gray-100 hover:border-blue-300 transition"
            >
              <img
                onError={handleImgError}
                src={item.image}
                alt={item.title}
                className="h-32 w-32 object-cover rounded-xl border border-gray-200 shadow-sm"
              />
              <div className="flex-1 flex flex-col items-center sm:items-start">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  {item.color && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      {item.color}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xl font-bold text-blue-700">
                    ${item.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    Qty:{" "}
                    <span className="font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
