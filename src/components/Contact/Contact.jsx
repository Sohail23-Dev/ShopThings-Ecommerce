import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-transparent px-2 sm:px-4">
      <div className="card flex flex-col bg-gradient-to-br from-sky-300 via-blue-200 to-purple-200 h-auto w-full max-w-lg shadow-xl text-center rounded-3xl my-8 mx-2 sm:mx-4 hover:scale-105 transition-transform duration-300 border-2 border-blue-200 hover:border-purple-400 p-4 sm:p-8">
        <h2 className="text-2xl font-extrabold text-blue-900 mb-4">Contact Us</h2>
        <input type="text" placeholder="Name" className="mb-3 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200" />
        <input type="number" placeholder="Number" className="mb-3 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200" />
        <input type="email" placeholder="Email" className="mb-3 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200" />
        <input type="text" placeholder="Subject" className="mb-3 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200" />
        <textarea placeholder="Message" rows={4} className="mb-4 px-4 py-2 rounded-xl border-2 border-blue-200 focus:border-purple-400 outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-200 resize-none" />
        <button className="btn bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-blue-400 hover:to-purple-400 hover:scale-105 transition-transform duration-200 font-semibold tracking-wide mt-2">Send</button>
      </div>
    </div>
  );
};

export default Contact;
