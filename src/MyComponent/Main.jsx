// src/components/RamCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div className="carousel-container">
      <Carousel fade indicators={true} interval={3000} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="/slider1.png"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="/shilpa.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="/jaymaharastra.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
