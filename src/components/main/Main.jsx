import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
];

const Main = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-[89vh] w-full flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${heroImages[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.13,
        }}
      />
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Discover a World of Unique<br />Products Just a Click Away!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop now and experience seamless browsing with our advanced eCommerce features.
          </p>
          <div className="flex gap-4">
            <Link to="/shop" className="px-6 py-2 bg-[#d3d0ec] text-black font-semibold rounded-full shadow hover:bg-green-300 transition">Shop Now</Link>
            <a href="#" className="px-6 py-2 border border-black text-black font-semibold rounded-full hover:bg-gray-100 transition">Learn More</a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden w-full max-w-[520px] min-w-[320px] aspect-[16/10] bg-gray-200 shadow-lg">
            <img
              src={heroImages[bgIndex]}
              alt="Shopping online"
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main