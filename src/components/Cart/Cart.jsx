import React from "react";
import { useSelector, useDispatch } from "react-redux";
import notav from "../../assets/notav.webp";
import {
  decreaseValue,
  increaseValue,
  removeFromCart,
} from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };
  const handleBuyNow = () => {
    alert(`Payment Completed for the Products`);
    dispatch(removeFromCart());
    navigate("/");
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
        <>
          <div className="space-y-6 mb-8">
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
                      ${item.price * item.quantity}
                    </span>
                    <div className="flex absolute right-[30vw] items-center gap-2 bg-gray-100 px-2 py-1 rounded-full shadow-inner">
                      <button
                        onClick={() => {
                          dispatch(decreaseValue({ id: item.id }));
                        }}
                        className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg transition"
                      >
                        -
                      </button>
                      <span className="text-base font-semibold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          dispatch(increaseValue({ id: item.id }));
                        }}
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-lg transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1 flex flex-col justify-between bg-white rounded-2xl shadow-xl p-6 h-fit border border-blue-100 absolute right-[7vw] top-[20vh]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="flex flex-col gap-2 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700 text-sm"
                >
                  <span>{item.title.split(" ").slice(0, 3).join(" ")}...</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center border-t pt-4 mb-6">
              <span className="font-bold text-lg text-blue-700">Total</span>
              <span className="font-extrabold text-2xl text-blue-700">
                ${total}
              </span>
            </div>
            <button
              onClick={handleBuyNow}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95"
            >
              Buy Now
            </button>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Cart;
