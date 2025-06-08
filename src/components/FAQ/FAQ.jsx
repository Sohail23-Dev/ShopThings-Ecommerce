import React, { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via email and SMS. You can also track your order in your account dashboard.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 7-day return/exchange policy on most products. Please check our Return Policy page for details.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via the Contact page, email, or our 24/7 chat support.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 py-10 px-2 sm:px-4">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow border border-blue-100"
          >
            <button
              className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left text-lg font-semibold text-blue-800 focus:outline-none hover:bg-blue-50 transition-colors rounded-xl"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <span
                className={`ml-4 transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 sm:px-6 pb-4 text-gray-700 text-base animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;