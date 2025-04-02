import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">ElectroPro</h3>
          <p className="text-gray-400 text-sm">
            Innovating the world of electronics since 2015. We design and deliver cutting-edge solutions for a connected future.
          </p>
        </div>

     
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:support@electropro.com"
              className="hover:text-blue-400 transition duration-300"
            >
              support@electropro.com
            </a>
            <br />
            Phone: +1 (800) 555-1234<br />
            Address: 123 Tech Lane, San Francisco, CA 94105
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.4 3.6 8 8.1 8.9v-6.3h-2.4v-2.6h2.4v-2c0-2.4 1.5-3.7 3.7-3.7 1 0 1.9.2 2.2.3v2.5h-1.5c-1.2 0-1.5.6-1.5 1.5v1.9h2.9l-.4 2.6h-2.5v6.3c4.5-.9 8.1-4.5 8.1-8.9 0-5.5-4.5-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe for the latest news and exclusive offers.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="mt-12 text-center text-sm border-t border-gray-800 pt-6">
        <p>© 2025 ElectroPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;