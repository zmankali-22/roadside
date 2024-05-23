import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=10"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  });

  return <></>;
}

export default App;
