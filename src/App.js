import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";

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
</div>
)

}

export default App;