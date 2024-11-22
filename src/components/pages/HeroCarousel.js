import React, { useState, useEffect } from 'react';
import 'animate.css';

const images = [
  {
    src: 'https://i.pinimg.com/736x/65/6b/3c/656b3c3673ad499b373824b674e5ea35.jpg',
    heading: 'Secure Banking',
    text: 'Your safety is our priority. Enjoy banking with the highest security standards.'
  },
  {
    src: 'https://i.pinimg.com/736x/85/d5/d4/85d5d4ca86e36cd83c493b5b50c154c2.jpg',
    heading: 'Fast Transactions',
    text: 'Experience seamless and lightning-fast online banking transactions.'
  },
  {
    src: 'https://i.pinimg.com/236x/26/d3/63/26d36319beffe7ebfe1e0c6fa0fc2c40.jpg',
    heading: '24/7 Customer Support',
    text: 'We’re here for you anytime, anywhere. Get assistance whenever you need it.'
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="absolute bottom-10 left-5 md:bottom-20 md:left-10 text-white max-w-md md:max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 opacity-90">{image.heading}</h1>
            <p className="text-lg md:text-2xl opacity-80">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
