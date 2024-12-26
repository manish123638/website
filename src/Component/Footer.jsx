import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
            Manish Ebookstore
          </h3>
          <p className="text-lg font-semibold mt-2">Your Trusted Bookstore</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center space-y-3">
            <p className="text-lg font-medium">Email:</p>
            <a
              href="mailto:bistamanish@gmail.com"
              className="text-yellow-300 hover:text-yellow-200 transition duration-300"
            >
              bistamanish@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <p className="text-lg font-medium">Phone:</p>
            <p className="text-yellow-300 hover:text-yellow-200 transition duration-300">
              +977 9761683561
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <p className="text-lg font-medium">Location:</p>
            <p className="text-yellow-300 hover:text-yellow-200 transition duration-300">
              Chapagaun, Nepal
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2024 Manish Ebookstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
