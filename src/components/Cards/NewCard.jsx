import React from "react";
import notav from "../../assets/notav.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  decreaseValue,
  increaseValue,
} from "../../features/cartSlice";
const NewCard = ({ ObjProd }) => {
  let { id, image, title, category, price, color } = ObjProd;
  const dispatch = useDispatch();

  // Get the current quantity for this product from Redux
  const cartItem = useSelector((state) =>
    state.cart.find((item) => item.id === id)
  );
  const quantity = cartItem ? cartItem.quantity : 0;
  const isCartActive = quantity > 0;

  // Handler for image error
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addtoCart({ ...ObjProd }));
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    if (cartItem.quantity >= 10) {
      return;
    } else {
      dispatch(increaseValue({ id }));
    }
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    dispatch(decreaseValue({ id }));
  };

  return (
    <div className="card flex flex-col bg-white w-70 shadow-xl border border-gray-200 text-left rounded-2xl my-6 mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <figure className="flex justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 w-full aspect-square rounded-t-2xl">
        {image ? (
          <img
            className="h-44 w-44 object-contain rounded-xl shadow-sm border border-gray-100 bg-white"
            src={image}
            alt={title}
            onError={handleImgError}
          />
        ) : (
          <span className="flex items-center justify-center w-full h-full">
            <svg
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 24 24"
              className="mx-auto text-gray-400"
            >
              <rect width="24" height="24" rx="4" fill="#e5e7eb" />
              <path d="M8 16l3-4 2 3 3-4 4 5H4l4-5z" fill="#c7d2fe" />
              <circle cx="9" cy="9" r="2" fill="#c7d2fe" />
            </svg>
          </span>
        )}
      </figure>
      <div className="p-4 flex flex-col gap-1 flex-1 justify-between">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-bold text-lg text-gray-900 truncate">{title}</h2>
          <span className="font-bold text-xl text-blue-700">${price}</span>
        </div>
        <div className="text-sm text-gray-600 mb-1">
          {color || (
            <span className="text-gray-400">Variant</span>
          )}
        </div>
        <div className="text-xs text-blue-500 mb-4 font-medium">{category}</div>
        <div className="mt-auto">
          {!isCartActive ? (
            <button
              onClick={handleAddToCart}
              className="w-full border border-blue-500 py-2 text-blue-700 font-semibold rounded-xl bg-white hover:bg-blue-50 transition"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex flex-row items-center justify-center gap-2 w-full">
              <button
                onClick={handleDecrease}
                className="border border-blue-400 w-10 h-10 flex items-center justify-center text-lg text-blue-700 bg-white hover:bg-blue-100 rounded-xl relative right-8"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                readOnly
                className="w-10 text-center font-semibold text-blue-700 bg-transparent border-none focus:ring-0"
              />
              <button
                onClick={handleIncrease}
                className="border border-blue-600 w-10 h-10 flex items-center justify-center text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-xl relative left-8"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NewCard;
