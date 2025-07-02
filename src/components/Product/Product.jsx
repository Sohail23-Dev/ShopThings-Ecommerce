import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(location.state?.product || null);
    const totalQuantity = useSelector((state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0)
    );
const dispatch = useDispatch();
const navigate = useNavigate();
const handleBuyNow = () => {
  dispatch(addtoCart({ ...product, quantity: 1 }));
  navigate("/Cart");
}

  useEffect(() => {
    if (!product && id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data));
    }
  }, [id, product]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="hover:underline">
              Shop all
            </a>
          </li>
          <li>
            <span className="mx-2">&gt;</span>
          </li>
          <li>
            <Link to={`/Shop`} className="hover:underline">
              {product?.category}
            </Link>
          </li>
          <li>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="text-black">{product?.title}</li>
        </ol>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-80 md:h-[400px]">
          <div className="col-span-2 row-span-2 bg-gray-200 flex items-center justify-center">
            <span className="text-5xl text-gray-400">
              <img src={product?.image} alt="Product" className="h-100"></img>
            </span>
          </div>
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
              <span className="text-3xl font-bold text-blue-600">{product?.price}$</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-black mr-2">★★★★☆</span>
              <span className="text-xs text-gray-600">
                ({product?.rating?.rate}) • 10 reviews
              </span>
            </div>
            <p className="mb-4 text-gray-700">
              {product?.description}
            </p>
          
            <div className="flex space-x-2 mb-4">
              <button className="px-4 py-2 border border-black bg-black text-white font-semibold">
                {product?.category}
              </button>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Quantity</label>
              <input
                type="number"
                min="1"
                value={totalQuantity > 0 ? totalQuantity : 1}
                className="w-16 border border-gray-400 rounded px-2 py-1"
                readOnly
              />
            </div>
            <button className="w-full bg-black text-white py-3 font-semibold mb-2 cursor-pointer" onClick={() => dispatch(addtoCart(product))}>
              Add to cart
            </button>
            <button className="w-full border border-black py-3 font-semibold mb-2 cursor-pointer" onClick={handleBuyNow}>
              Buy now
            </button>
            <div className="text-center text-xs text-gray-600">
              Free shipping over $50
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex space-x-8 border-b border-gray-300 mb-4">
          <button className="pb-2 border-b-2 border-black font-semibold">
            Details
          </button>
          <button className="pb-2 text-gray-500">Shipping</button>
          <button className="pb-2 text-gray-500">Returns</button>
        </div>
        <div className="text-gray-700">
          {product?.description}
        </div>
      </div>
    </div>
  );
};

export default Product;
