import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    onRest: () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, images]);

  return (
    <animated.div
      style={{
        ...fade,
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    ></animated.div>
  );
};

export default Slideshow;
