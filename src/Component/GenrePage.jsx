import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../images/1.jpg";
import img2 from "../images/1.jpg";
import img3 from "../images/1.jpg";
import img4 from "../images/1.jpg";

// All books dataset
const allBooks = [
 // Romance
 { id: 1, title: "The Favourite Child", price: "Rs. 689", genre: "Romance", image: "https://allnovel.net/images/always-and-forever-lara-jean-to-all-the-boys-i-ve-loved-before-3.jpg" },
 { id: 2, title: "Virgin Earth", price: "Rs. 918", genre: "Romance", image: "https://allnovel.net/images/the-wedding-date.jpg" },
 { id: 3, title: "Resurrectionist", price: "Rs. 632", genre: "Romance", image: "https://allnovel.net/images/blood-fury-black-dagger-legacy-3.jpg" },
 { id: 4, title: "Texas", price: "Rs. 798", genre: "Romance", image: "https://allnovel.net/images/blood-vow-black-dagger-legacy-2.jpg" },
 { id: 5, title: "10 Billion", price: "Rs. 560", genre: "Romance", image: img1 },
 { id: 6, title: "Sonia Under Scrutiny", price: "Rs. 160", genre: "Romance", image: img2 },
 { id: 7, title: "The Other Boleyn Girl", price: "Rs. 600", genre: "Romance", image: img3 },
 { id: 8, title: "Mission Overseas", price: "Rs. 478", genre: "Romance", image: img4 },
 

 // Action & Adventure
 { id: 11, title: "The Favourite Child", price: "Rs. 689", genre: "Action & Adventure", image: img1 },
 { id: 12, title: "Virgin Earth", price: "Rs. 918", genre: "Action & Adventure", image: img2 },
 { id: 13, title: "Resurrectionist", price: "Rs. 632", genre: "Action & Adventure", image: img3 },
 { id: 14, title: "Texas", price: "Rs. 798", genre: "Action & Adventure", image: img4 },
 { id: 15, title: "10 Billion", price: "Rs. 560", genre: "Action & Adventure", image: img1 },
 { id: 16, title: "Sonia Under Scrutiny", price: "Rs. 160", genre: "Action & Adventure", image: img2 },
 { id: 17, title: "The Other Boleyn Girl", price: "Rs. 600", genre: "Action & Adventure", image: img3 },
 { id: 18, title: "Mission Overseas", price: "Rs. 478", genre: "Action & Adventure", image: img4 },
 

 // Mystery & Thriller
 { id: 21, title: "Mystery Book 1", price: "Rs. 780", genre: "Mystery & Thriller", image: img1 },
 { id: 22, title: "Thriller Book 2", price: "Rs. 890", genre: "Mystery & Thriller", image: img2 },
 { id: 23, title: "Suspense Book 3", price: "Rs. 750", genre: "Mystery & Thriller", image: img3 },
 { id: 24, title: "Crime Novel", price: "Rs. 670", genre: "Mystery & Thriller", image: img4 },
 { id: 25, title: "Mystery of the Island", price: "Rs. 820", genre: "Mystery & Thriller", image: img1 },
 { id: 26, title: "Locked Room Mystery", price: "Rs. 930", genre: "Mystery & Thriller", image: img2 },
 { id: 27, title: "The Silent Witness", price: "Rs. 580", genre: "Mystery & Thriller", image: img3 },
 { id: 28, title: "Detective Series 1", price: "Rs. 450", genre: "Mystery & Thriller", image: img4 },
 

 // Biographies & History
 { id: 31, title: "Historical Biography 1", price: "Rs. 870", genre: "Biographies & History", image: img3 },
 { id: 32, title: "Life of Leaders", price: "Rs. 910", genre: "Biographies & History", image: img4 },
 { id: 33, title: "World History Book", price: "Rs. 620", genre: "Biographies & History", image: img1 },
 { id: 34, title: "The Great Rulers", price: "Rs. 780", genre: "Biographies & History", image: img2 },
 { id: 35, title: "Moments in History", price: "Rs. 640", genre: "Biographies & History", image: img3 },
 { id: 36, title: "Historical Events", price: "Rs. 850", genre: "Biographies & History", image: img4 },
 { id: 37, title: "Unveiling the Past", price: "Rs. 730", genre: "Biographies & History", image: img1 },
 { id: 38, title: "Biography of Legends", price: "Rs. 970", genre: "Biographies & History", image: img2 },
 

 // Children's
 { id: 41, title: "The Magical Adventure", price: "Rs. 450", genre: "Children's", image: img1 },
 { id: 42, title: "Whimsical World", price: "Rs. 300", genre: "Children's", image: img2 },
 { id: 43, title: "Little Explorers", price: "Rs. 350", genre: "Children's", image: img3 },
 { id: 44, title: "Under the Stars", price: "Rs. 400", genre: "Children's", image: img4 },
 { id: 45, title: "The Secret Garden", price: "Rs. 500", genre: "Children's", image: img1 },
 { id: 46, title: "Imagination Unleashed", price: "Rs. 450", genre: "Children's", image: img2 },
 { id: 47, title: "The Fairy Tale", price: "Rs. 450", genre: "Children's", image: img3 },
 { id: 48, title: "The Adventure Begins", price: "Rs. 500", genre: "Children's", image: img4 },


 // Young Adult
 { id: 51, title: "Journey of Dreams", price: "Rs. 520", genre: "Young Adult", image: img2 },
 { id: 52, title: "Breaking Boundaries", price: "Rs. 600", genre: "Young Adult", image: img3 },
 { id: 53, title: "Unwritten Path", price: "Rs. 550", genre: "Young Adult", image: img4 },
 { id: 54, title: "The Silent Voice", price: "Rs. 580", genre: "Young Adult", image: img1 },
 { id: 55, title: "New Horizons", price: "Rs. 480", genre: "Young Adult", image: img2 },
 { id: 56, title: "The Lost Kingdom", price: "Rs. 650", genre: "Young Adult", image: img3 },
 { id: 57, title: "The Phoenix Rising", price: "Rs. 700", genre: "Young Adult", image: img4 },
 { id: 58, title: "The Road Less Traveled", price: "Rs. 450", genre: "Young Adult", image: img1 },
 

 // Fantasy
 { id: 61, title: "The Enchanted Realm", price: "Rs. 890", genre: "Fantasy", image: img3 },
 { id: 62, title: "Dragons of the North", price: "Rs. 950", genre: "Fantasy", image: img4 },
 { id: 63, title: "The Kingdom of Magic", price: "Rs. 880", genre: "Fantasy", image: img1 },
 { id: 64, title: "The Crystal Sword", price: "Rs. 780", genre: "Fantasy", image: img2 },
 { id: 65, title: "Wizards and Witches", price: "Rs. 820", genre: "Fantasy", image: img3 },
 { id: 66, title: "Legends of the Sky", price: "Rs. 850", genre: "Fantasy", image: img4 },
 { id: 67, title: "The Dark Sorcerer", price: "Rs. 900", genre: "Fantasy", image: img1 },
 { id: 68, title: "The Lost City", price: "Rs. 950", genre: "Fantasy", image: img2 },
 

 // Historical Fiction
 { id: 71, title: "The Time Traveler", price: "Rs. 650", genre: "Historical Fiction", image: img4 },
 { id: 72, title: "Kings and Queens", price: "Rs. 700", genre: "Historical Fiction", image: img1 },
 { id: 73, title: "The Age of Heroes", price: "Rs. 750", genre: "Historical Fiction", image: img2 },
 { id: 74, title: "The Fallen Empire", price: "Rs. 800", genre: "Historical Fiction", image: img3 },
 { id: 75, title: "The Great War", price: "Rs. 820", genre: "Historical Fiction", image: img4 },
 { id: 76, title: "Victory of Nations", price: "Rs. 850", genre: "Historical Fiction", image: img1 },
 { id: 77, title: "The Noble Knights", price: "Rs. 900", genre: "Historical Fiction", image: img2 },
 { id: 78, title: "Reign of Power", price: "Rs. 930", genre: "Historical Fiction", image: img3 },
 
 // Horror
 { id: 81, title: "Ghostly Tales", price: "Rs. 480", genre: "Horror", image: img1 },
 { id: 82, title: "Nightmare Chronicles", price: "Rs. 520", genre: "Horror", image: img2 },
 { id: 83, title: "The Haunted House", price: "Rs. 600", genre: "Horror", image: img3 },
 { id: 84, title: "The Dark Shadows", price: "Rs. 650", genre: "Horror", image: img4 },
 { id: 85, title: "Creepy Stories", price: "Rs. 570", genre: "Horror", image: img1 },
 { id: 86, title: "The Whispering Ghost", price: "Rs. 550", genre: "Horror", image: img2 },
 { id: 87, title: "The Demon Beneath", price: "Rs. 600", genre: "Horror", image: img3 },
 { id: 88, title: "The Blood Moon", price: "Rs. 650", genre: "Horror", image: img4 },


 // Literary Fiction
 { id: 91, title: "The Literary Masterpiece", price: "Rs. 700", genre: "Literary Fiction", image: img2 },
 { id: 92, title: "Classic Masterpieces", price: "Rs. 750", genre: "Literary Fiction", image: img3 },
 { id: 93, title: "Deep Reflections", price: "Rs. 800", genre: "Literary Fiction", image: img4 },
 { id: 94, title: "Words of Wisdom", price: "Rs. 850", genre: "Literary Fiction", image: img1 },
 { id: 95, title: "The Power of Stories", price: "Rs. 900", genre: "Literary Fiction", image: img2 },
 { id: 96, title: "The Art of Writing", price: "Rs. 950", genre: "Literary Fiction", image: img3 },
 { id: 97, title: "Timeless Tales", price: "Rs. 920", genre: "Literary Fiction", image: img4 },
 { id: 98, title: "The Human Condition", price: "Rs. 970", genre: "Literary Fiction", image: img1 },


 // Non-Fiction
 { id: 101, title: "Unlocking Knowledge", price: "Rs. 800", genre: "Non-Fiction", image: img3 },
 { id: 102, title: "The Power of Truth", price: "Rs. 850", genre: "Non-Fiction", image: img4 },
 { id: 103, title: "Understanding the World", price: "Rs. 780", genre: "Non-Fiction", image: img1 },
 { id: 104, title: "The Real Story", price: "Rs. 700", genre: "Non-Fiction", image: img2 },
 { id: 105, title: "Fact or Fiction", price: "Rs. 650", genre: "Non-Fiction", image: img3 },
 { id: 106, title: "Exploring History", price: "Rs. 690", genre: "Non-Fiction", image: img4 },
 { id: 107, title: "The World We Live In", price: "Rs. 730", genre: "Non-Fiction", image: img1 },
 { id: 108, title: "The Evolution of Ideas", price: "Rs. 760", genre: "Non-Fiction", image: img2 },


 // Science Fiction
 { id: 111, title: "The Future Chronicles", price: "Rs. 750", genre: "Science Fiction", image: img4 },
 { id: 112, title: "Into the Unknown", price: "Rs. 800", genre: "Science Fiction", image: img1 },
 { id: 113, title: "Exploring New Worlds", price: "Rs. 850", genre: "Science Fiction", image: img2 },
 { id: 114, title: "The Robot Revolution", price: "Rs. 900", genre: "Science Fiction", image: img3 },
 { id: 115, title: "Intergalactic Journey", price: "Rs. 950", genre: "Science Fiction", image: img4 },
 { id: 116, title: "Virtual Reality", price: "Rs. 980", genre: "Science Fiction", image: img1 },
 { id: 117, title: "The Quantum Leap", price: "Rs. 1000", genre: "Science Fiction", image: img2 },
 { id: 118, title: "The Space Odyssey", price: "Rs. 1050", genre: "Science Fiction", image: img3 },
];

const GenrePage = ({ addToCart }) => {
  const { genreId } = useParams();

  // Filter books based on genreId
  const filteredBooks = allBooks.filter(
    (book) => book.genre.toLowerCase() === genreId.toLowerCase()
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          {genreId} Books
        </h2>
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-5 gap-8">
            {filteredBooks.slice(0, 10).map((book) => (
              <div
                key={book.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 mb-4">{book.price}</p>
                  <button
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={() => addToCart(book)} // Add to cart on button click
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No books found for this genre.
          </p>
        )}
      </div>
    </section>
  );
};

export default GenrePage;
