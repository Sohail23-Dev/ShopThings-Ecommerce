import React from "react";

const reviews = [
  {
    name: "Ayesha Khan",
    rating: 5,
    text: "Amazing service! My order arrived quickly and the quality was top-notch. Will definitely shop again!",
    date: "June 2025",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    text: "Great selection and easy checkout. Customer support was helpful when I had a question.",
    date: "May 2025",
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "Loved the fast delivery and the packaging was eco-friendly. Highly recommend NeoCommerce!",
    date: "April 2025",
  },
  {
    name: "Omar Alvi",
    rating: 4,
    text: "Good prices and a wide variety of products. Would like to see more payment options in the future.",
    date: "March 2025",
  },
  {
    name: "Sara Williams",
    rating: 5,
    text: "Excellent experience from start to finish. The website is easy to use and my items were exactly as described.",
    date: "February 2025",
  },
];

const Review = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 py-10">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
        Customer Reviews
      </h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 w-80 p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-lg text-blue-700">
                {review.name}
              </span>
              <span className="text-xs text-gray-400">({review.date})</span>
            </div>
            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-base mb-4 italic">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
