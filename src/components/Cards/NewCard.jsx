import React from "react";
import notav from "../../assets/notav.webp";
const NewCard = ({ ObjProd }) => {
  let { image, title, category, rating, price } = ObjProd;
  // Handler for image error
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };
  return (
    <div className="card flex flex-col bg-gradient-to-br from-sky-300 via-blue-200 to-purple-200 h-96 w-72 shadow-xl text-center rounded-3xl my-8 mx-4 hover:scale-105 transition-transform duration-300 border-2 border-blue-200 hover:border-purple-400">
      <figure className="flex justify-center -mt-8">
        <img className="h-40 w-40 rounded-2xl shadow-lg object-cover border-4 border-white" src={image} alt={title} onError={handleImgError} />
      </figure>
      <div className="card-body flex flex-col flex-1 justify-between p-4">
        <div>
          <h2 className="card-title text-blue-900 font-bold text-lg mb-2 truncate">{title}</h2>
          <p>
            <span className="badge bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full shadow-md text-xs font-semibold mb-2 inline-block">{category}</span>
          </p>
          <p className="text-gray-700 text-sm mb-1">Rating: <span className="font-semibold text-yellow-500">★ {rating}</span></p>
          <p className="text-2xl font-extrabold text-purple-700 mb-2">${price}</p>
        </div>
        <div className="card-actions mt-auto flex justify-center">
          <button className="btn bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-400 hover:to-purple-400 hover:scale-105 transition-transform duration-200 font-semibold tracking-wide">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
