import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";

const books = [
  { id: 1, title: "Book 1", price: "$10", image: img1 },
  { id: 2, title: "Book 2", price: "$15", image: img2 },
  { id: 3, title: "Book 3", price: "$20", image: img3 },
  { id: 4, title: "Book 4", price: "$25", image: img4 },
  
];

const GenrePage = () => {
  const { genreId } = useParams();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          {genreId} Books
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {book.title}
                </h3>
                <p className="text-gray-500">{book.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenrePage;
