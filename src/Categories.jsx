import React from "react";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from "./images/img10.webp";
import img11 from "./images/img11.webp";
import img12 from "./images/img12.webp";
import backgroundImage from './images/background2.jpg'; 

const Categories = () => {
  const categories = [
    { id: 1, title: "Romance", image: img1 },
    { id: 2, title: "Action & Adventure", image: img2 },
    { id: 3, title: "Mystery & Thriller", image: img3 },
    { id: 4, title: "Biographies & History", image: img4 },
    { id: 5, title: "Children's", image: img5 },
    { id: 6, title: "Young Adult", image: img6 },
    { id: 7, title: "Fantasy", image: img7 },
    { id: 8, title: "Historical Fiction", image: img8 },
    { id: 9, title: "Horror", image: img9 },
    { id: 10, title: "Literary Fiction", image: img10 },
    { id: 11, title: "Non-Fiction", image: img11 },
    { id: 12, title: "Science Fiction", image: img12 },
  ];

  return (
    <section
      className="bg-white py-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-rose-100">Browse Genres</h2>
          <p className="mt-2 text-rose-100">Explore the categories of books available in our collection</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group rounded-lg overflow-hidden shadow-xl transition-all duration-300">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-md transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <h3 className="text-white text-2xl font-semibold text-shadow-lg group-hover:text-yellow-300 transition-all duration-300">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
