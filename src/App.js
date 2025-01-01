import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import GenrePage from "./Component/GenrePage";
import AddToCartPage from "./Component/AddtoCart";
import Contact from "./Component/Contact";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/genre/:genreId" element={<GenrePage />} />
            <Route path="/cart" element={<AddToCartPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
