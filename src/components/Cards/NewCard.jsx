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

  const handleAddToCart = () => {
    dispatch(addtoCart({ ...ObjProd }));
  };

  const handleIncrease = () => {
    if (cartItem.quantity >= 10) {
      return;
    } else {
      dispatch(increaseValue({ id }));
    }
  };

  const handleDecrease = () => {
    dispatch(decreaseValue({ id }));
  };

  return (
    <div className="card flex flex-col bg-white h-96 w-72 shadow-2xl text-center rounded-3xl my-8 mx-4 hover:scale-105 transition-transform duration-300 border border-gray-200 hover:border-blue-400">
      <figure className="flex justify-center -mt-8">
        <img
          className="h-40 w-40 rounded-2xl shadow-md object-cover border-2 border-gray-100"
          src={image}
          alt={title}
          onError={handleImgError}
        />
      </figure>
      <div className="card-body flex flex-col flex-1 justify-between p-4">
        <div>
          <h2 className="card-title text-gray-900 font-bold text-lg mb-2 truncate">
            {title}
          </h2>
          <p>
            <span className="badge bg-blue-100 text-blue-700 px-3 py-1 rounded-full shadow-sm text-xs font-semibold mb-2 inline-block">
              {category}
            </span>
          </p>
          <p className="text-gray-600 text-sm mb-1 flex items-center justify-center gap-1">
            <span className="font-semibold text-yellow-500">★★★</span>
          </p>
          <p className="text-m font-extrabold text-gray-500 mb-2">{color}</p>
          <p className="text-2xl font-extrabold text-gray-900 mb-2">${price}</p>
        </div>
        <div className="card-actions mt-auto flex justify-center">
          {!isCartActive ? (
            <button
              onClick={handleAddToCart}
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition-colors duration-200 font-semibold tracking-wide"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-row items-center gap-2 bg-gray-100 rounded-full px-3 py-1 shadow-inner">
              <button
                onClick={handleDecrease}
                className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center text-lg relative -left-15"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                readOnly
                className="w-8 text-center font-semibold text-blue-900 bg-transparent border-none focus:ring-0"
              />
              <button
                onClick={handleIncrease}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center text-lg relative -right-15"
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
