import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductSlider.css";

const ProductSlider: React.FC<{ photos: string[] }> = ({ photos }) => {
  return (
    <>
      <h1 className="text">Bestseller of T-Shorts !</h1>
      <Carousel>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Photo ${index}`} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductSlider;
