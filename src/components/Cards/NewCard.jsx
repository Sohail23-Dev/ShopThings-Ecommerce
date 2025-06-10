import React, { useState } from "react";
import notav from "../../assets/notav.webp";
const NewCard = ({ ObjProd }) => {
  let { image, title, category, rating, price } = ObjProd;
  const [quantity, setQuantity] = useState(0);
  const [isCartActive, setIsCartActive] = useState(false);

  // Handler for image error
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };

  const handleAddToCart = () => {
    setIsCartActive(true);
    setQuantity((prev) => prev + 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => {
      if (prev >= 10) {
        return 10;
      } else {
        return prev + 1;
      }
    });
  };

  const handleDecrease = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
        setIsCartActive(false);
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="card flex flex-col bg-gradient-to-br from-sky-300 via-blue-200 to-purple-200 h-96 w-72 shadow-xl text-center rounded-3xl my-8 mx-4 hover:scale-105 transition-transform duration-300 border-2 border-blue-200 hover:border-purple-400">
      <figure className="flex justify-center -mt-8">
        <img
          className="h-40 w-40 rounded-2xl shadow-lg object-cover border-4 border-white"
          src={image}
          alt={title}
          onError={handleImgError}
        />
      </figure>
      <div className="card-body flex flex-col flex-1 justify-between p-4">
        <div>
          <h2 className="card-title text-blue-900 font-bold text-lg mb-2 truncate">
            {title}
          </h2>
          <p>
            <span className="badge bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full shadow-md text-xs font-semibold mb-2 inline-block">
              {category}
            </span>
          </p>
          <p className="text-gray-700 text-sm mb-1">
            Rating:{" "}
            <span className="font-semibold text-yellow-500">★ {rating}</span>
          </p>
          <p className="text-2xl font-extrabold text-purple-700 mb-2">
            ${price}
          </p>
        </div>
        <div className="card-actions mt-auto flex justify-center">
          {!isCartActive ? (
            <button
              onClick={handleAddToCart}
              className="buttonrm btn bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-400 hover:to-purple-400 hover:scale-105 transition-transform duration-200 font-semibold tracking-wide"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-row items-center gap-2 bg-white/80 rounded-full px-3 py-1 shadow-inner">
              <button
                onClick={handleIncrease}
                className="relative right-15 bg-blue-400 hover:bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg"
              >
                +
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                readOnly
                className="w-8 text-center font-semibold text-blue-900 bg-transparent border-none focus:ring-0"
              />
              <button
                onClick={handleDecrease}
                className="relative left-15 bg-purple-400 hover:bg-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg"
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewCard;
