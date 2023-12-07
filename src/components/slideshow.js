import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, images]);

  return (
    <div style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', height: '100vh' }}></div>
  );
};

export default Slideshow;
