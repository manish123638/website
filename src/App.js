import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Component/Header";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenrePage from "./Component/GenrePage";

function App() {
  // eslint-disable-next-line
const [message, setMessage] = useState("");

useEffect(() => {
  axios.get("http://localhost:5000")
    .then((response) => setMessage(response.data))
    .catch((error) => console.error(error));
}, []);

  
    return (
      <Router>
        <div>
          <Header />
          <Categories />
          <Footer />
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/genre/:genreId" element={<GenrePage />} /> 
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;