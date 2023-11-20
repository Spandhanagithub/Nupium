import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Query from './Query'; // Import your Query component

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="slideshow" style={backgroundImageStyle}>
      {/* Slideshow content */}
      <div className="query-overlay">
        <Query
          imageSrc={process.env.PUBLIC_URL + images[currentImageIndex]}
        />
      </div>
    </div>
  );
};

export default Slideshow;
