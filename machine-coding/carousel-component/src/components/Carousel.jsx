import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
export default function Carousel({
  images = [],
  isLoading = false,
  imageLimit = images.length,
  customPrevButton,
  customNextButton,
  onImgClick = () => {},
  imagePerSlide = 2,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLimit - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLimit - 1  ? 0 : prevIndex + 1
    );
  };

  console.log(imageRef?.current?.offsetWidth);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      className="carousel"
      style={{ width: imagePerSlide * imageWidth }}
    >
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * imageWidth}px)`,
        }}
      >
        {images
          .slice(
            0,
            imageLimit > images.length ? images.length : imageLimit
          )
          .map((image, index) => (
            <img
              onLoad={() =>
                setImageWidth(imageRef?.current?.offsetWidth)
              }
              ref={imageRef}
              key={image.id}
              src={image.url}
              alt={image.title}
              onClick={() => onImgClick(image, index)}
              className="image"
            />
          ))}
      </div>
      {customPrevButton instanceof Function ? (
        customPrevButton(goPrev)
      ) : (
        <button className="btn prev" onClick={goPrev}>
          Prev
        </button>
      )}
      {customNextButton instanceof Function ? (
        customNextButton(goNext)
      ) : (
        <button className="btn next" onClick={goNext}>
          Next
        </button>
      )}
    </div>
  );
}
