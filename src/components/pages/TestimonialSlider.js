import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import Download from './Download';

const testimonials = [
  {
    name: 'John Doe',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-1.jpg', // Replace with actual image URLs
    text: 'This online banking service has transformed the way I manage my finances!',
  },
  {
    name: 'Jane Smith',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-1.jpg',
    text: 'Fast, secure, and easy to use. Highly recommended!',
  },
  {
    name: 'Alice Johnson',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-1.jpg',
    text: 'The customer support is top-notch and always available to help.',
  },
  {
    name: 'Robert Brown',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-2.jpg',
    text: 'A reliable banking platform with great features.',
  },
  {
    name: 'Emily Davis',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-2.jpg',
    text: 'I love how easy it is to track my spending and save for my goals.',
  },
  {
    name: 'Michael Wilson',
    image: 'https://templates.envytheme.com/leve/default/assets/img/customer/customer-2.jpg',
    text: 'The best banking experience I’ve ever had!',
  },
];

function TestimonialsSlider() {
  const { theme } = useContext(ThemeContext); // Move useContext inside the component

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  return (
    <>
    <section className={`p-6 ${themeStyles[theme]}`}>
      <h2 className="text-3xl font-bold text-center mb-6">What People Say About Us</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={`p-6 rounded-lg shadow-lg flex flex-col items-center ${themeStyles[theme]}`}>
              <img
                src={testimonial.image}
                alt={`${testimonial.name}, satisfied customer`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-center mb-4">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <Download />
    </>
  );
}

export default TestimonialsSlider;
