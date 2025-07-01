import React, { useState } from "react";

const faqs = [
	{
		question: "How do I place an order?",
		answer:
			"Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.",
	},
	{
		question: "What payment methods are accepted?",
		answer:
			"We accept all major credit/debit cards, UPI, net banking, and popular wallets.",
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
		answer:
			"You can reach us via the Contact page, email, or our 24/7 chat support.",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);
	return (
		<div className="min-h-[80vh] flex flex-col items-center bg-gray-50 py-10 px-2 sm:px-4">
			<h2 className="text-4xl font-bold text-black mb-2 text-left w-full max-w-4xl mx-auto">
				FAQs
			</h2>
			<p className="text-gray-700 text-base mb-8 w-full max-w-4xl mx-auto text-left">
				Here are some common questions we receive from our customers.
			</p>
			<div className="w-full max-w-4xl mx-auto divide-y divide-gray-300 bg-transparent">
				{faqs.map((faq, idx) => (
					<div key={idx}>
						<button
							className="w-full flex justify-between items-center py-5 text-left text-[16px] font-bold text-black focus:outline-none hover:bg-[#e7e4f5] transition-colors"
							onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
						>
							<span>{faq.question}</span>
							<span
								className={`ml-4 transition-transform duration-200 ${
									openIndex === idx ? "rotate-180" : ""
								}`}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									className="inline-block"
								>
									<path
										d="M6 8l4 4 4-4"
										stroke="#22223b"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</button>
						{openIndex === idx && (
							<div className="pl-1 pb-5 pr-2 text-gray-800 text-[15px] animate-fade-in">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
			<div className="w-full max-w-4xl mx-auto mt-16 bg-transparent">
				<h3 className="text-2xl font-semibold text-black mb-1">
					Still have questions?
				</h3>
				<p className="text-gray-700 mb-4">We're here to help you!</p>
				<a
					href="/contact"
					className="inline-block px-5 py-2 border border-black rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition"
				>
					Contact
				</a>
			</div>
		</div>
	);
};

export default FAQ;