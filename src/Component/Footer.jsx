import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">ABOUT BOOKS</h3>
            <p className="text-sm mt-2">
              Our ebookshop offers a diverse collection of books, catering to readers of all interests and ages. We strive to provide quality content at affordable prices, ensuring a delightful reading experience for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-white hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/payments" className="text-white hover:underline">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white hover:underline">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/contact" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs">&copy; 2024 - Manish Bista's Ebookstore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
