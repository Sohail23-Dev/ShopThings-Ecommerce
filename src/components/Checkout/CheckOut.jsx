import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';
// Create a test account or replace with real credentials.


const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3004"}/Checkout/mail/send-Order-confirmation/${form.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          cart: cartItems,
          total,
        }),
      });
      if (response.ok) {
        setOrderPlaced(true);
        dispatch(removeFromCart());
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (e) {
      alert(`An error occurred. Please try again. ${e}`);
    }
  };

  // Remove handlePlaceOrder, now handled in handleSubmit
  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you for your order!</h2>
        <p className="text-gray-700 mb-2">Your order has been placed successfully.</p>
        <p className="text-gray-500">A confirmation will be sent to <span className="font-semibold">{form.email}</span>.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <input
            className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200 resize-none"
            placeholder="Shipping Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            rows={3}
          />
          <div className="flex flex-col gap-2 mt-2">
            <label className="font-semibold text-gray-700">Payment Method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === 'cod'}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === 'card'}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Credit/Debit Card
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Order Summary</h2>
          <div className="bg-gray-50 rounded-xl p-4 shadow-inner flex-1">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-2 flex justify-between items-center">
                    <span className="font-medium text-gray-700">{item.title}</span>
                    <span className="text-blue-700 font-bold">x{item.quantity}</span>
                    <span className="text-gray-800">${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="font-bold text-lg text-blue-700">Total</span>
              <span className="font-extrabold text-2xl text-blue-700">${total}</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;