import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import GenrePage from "./Component/GenrePage";
import CartPage from "./Component/CartPage";
import Contact from "./Component/Contact";

function App() {
  const [message, setMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div>
        <Header cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route
            path="/genre/:genreId"
            element={<GenrePage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
