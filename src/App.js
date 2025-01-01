import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Component/Header";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenrePage from "./Component/GenrePage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);
return(
  <div>

  <Header />
    <Categories/>
    <Footer/>
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/genre/:genreId" element={<GenrePage />} />
      </Routes>
    </Router>
</div>
)

}

export default App;