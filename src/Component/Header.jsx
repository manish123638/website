import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/background1.jpg";

const Header = ({ cartCount }) => {
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
          <Link to="/cart" className="hover:text-blue-300">Add to Cart</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
<Link to="/cart" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = ({ cartCount }) => {
//   return (
//     <header className="bg-blue-500 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Book Store</h1>
//         <nav>
//           <Link to="/" className="mr-4">
//             Home
//           </Link>
//           <Link to="/contact" className="mr-4">
//             Contact
//           </Link>
//           <Link to="/cart" className="relative">
//             Cart
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;