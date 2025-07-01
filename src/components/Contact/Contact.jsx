import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-2 sm:px-4 py-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-2 text-lg font-semibold text-black text-center">Service is more important than product</div>
        <h1 className="text-5xl font-extrabold text-black mb-4 text-center">Contact us</h1>
        <p className="text-lg text-black mb-16 text-center">Always happy to help</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" stroke="#000"/><path d="M3 7l9 6 9-6" stroke="#000"/></svg>
            </span>
            <h3 className="text-2xl font-bold text-black mb-2">Email</h3>
            <p className="text-base text-black mb-4">Reach out to us anytime via email for support, feedback, or inquiries. Our team responds within 24 hours.</p>
            <a href="mailto:care@ShopThings.com" className="text-base text-black underline">care@ShopThings.com</a>
          </div>
          {/* Live chat */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" stroke="#000"/><path d="M7 15h10M7 11h10" stroke="#000"/><path d="M7 19l4-4h6a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4z" stroke="#000"/></svg>
            </span>
            <h3 className="text-2xl font-bold text-black mb-2">Live chat</h3>
            <p className="text-base text-black mb-4">Chat with our support team in real time for instant help with your orders, products, or account.</p>
            <a href="#" className="text-base text-black underline">Start new chat</a>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0122 16.92z" stroke="#000" fill="#fff"/></svg>
            </span>
            <h3 className="text-2xl font-bold text-black mb-2">Phone</h3>
            <p className="text-base text-black mb-4">Call us for urgent queries, order assistance, or product information. Available 9am–7pm, Mon–Sat.</p>
            <a href="tel:+15550000000" className="text-base text-black underline">+1(555) 000-0000</a>
          </div>
          {/* Office */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" stroke="#000" fill="#fff"/></svg>
            </span>
            <h3 className="text-2xl font-bold text-black mb-2">Office</h3>
            <p className="text-base text-black mb-4">Visit our corporate office for business inquiries, partnerships, or in-person support during working hours.</p>
            <a href="#" className="text-base text-black underline">A-143, 6th Floor, Sovereign Corporate Tower, Sector-136, Noida</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
