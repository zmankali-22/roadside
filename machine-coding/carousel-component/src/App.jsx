import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Carousel 
      images={[]} 
      isLoading={loading}
      // imagesPerSlide ={}
      // imageLimit ={}
      // customPrevBUtton ={}
      // customNextButton 
      />
    </>
  );
}

export default App;
