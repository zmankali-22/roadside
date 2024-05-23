import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  // https://jsonplaceholder.typicode.com/photos?_limit=8

  const fetchImages = async (imgLimit) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.group("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        images={images}
        isLoading={loading}
        imagePerSlide={2}
        imageLimit={4}
        onImgClick={(image, index) => {
          console.log("Image clicked:", image, "at index:", index);
        }}
        customPrevButton={(onClick) => (
          <button
            className="btn prev"
            style={{ background: "red" }}
            onClick={onClick}
          >
            Prev
          </button>
        )}
        customNextButton={(onClick) => (
          <button
            className="btn next"
            style={{ background: "blue" }}
            onClick={onClick}
          >
            Next
          </button>
        )}
      />
    </div>
  );
}

export default App;
