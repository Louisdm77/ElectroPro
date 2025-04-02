import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          <Link to="/">ElectroPro</Link>
        </h1>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-6 flex flex-col space-y-6">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;