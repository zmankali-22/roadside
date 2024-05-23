import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Carousel({
  images = [],
  isLoading = false,
  imageLimit = images.length,
  customPrevButton,
  customNextButton,
  imagePerSlide = 1,
}) {

  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(currentIndex)

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0)
    }
  },[images])

  const goPrev = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? images.length -1 : prevIndex - 1)
  }

  const goNext = () => {
    setCurrentIndex(prevIndex => prevIndex === images.length -1 ? 0 : prevIndex + 1 )
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="carousel">
      <div className="image-container">
        {images
          .slice(
            0,
            imageLimit > images.length ? images.length : imageLimit
          )
          .map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.title}
              className="image"
            />
          ))}
      </div>
      <button className="btn prev" onClick={goPrev}>Prev</button>
      <button className="btn next" onClick={goNext}>Next</button>
    </div>
  );
}
