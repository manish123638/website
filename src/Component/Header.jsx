import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../images/background1.jpg';

const Header = () => {
  return (
    <header
      className="bg-blue-600 text-white bg-cover bg-center h-[100px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">
            eBookShop
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/categories" className="hover:text-blue-300">Categories</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="rounded-full px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
