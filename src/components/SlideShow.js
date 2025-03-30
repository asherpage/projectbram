import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css';

// Import images directly
import image1 from '../styles/images/Commercial9.jpg';
import image2 from '../styles/images/Commercial10.jpg'; // Larger image
import image3 from '../styles/images/Commercial9.jpg';
import image4 from '../styles/images/Commercial9.jpg';
import image5 from '../styles/images/Commercial9.jpg';
import image6 from '../styles/images/Commercial9.jpg';

const Slideshow = () => {
  const slides = [
    { id: 1, imageUrl: image1, title: 'Slide 1' },
    { id: 2, imageUrl: image2, title: 'Slide 2' }, // Larger image
    { id: 3, imageUrl: image3, title: 'Slide 3' },
    { id: 4, imageUrl: image4, title: 'Slide 4' },
    { id: 5, imageUrl: image5, title: 'Slide 5' },
    { id: 6, imageUrl: image6, title: 'Slide 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null); // State to manage fullscreen image

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const getVisibleSlides = () => {
    return [
      slides[(currentIndex + 0) % slides.length],
      slides[(currentIndex + 1) % slides.length],
      slides[(currentIndex + 2) % slides.length],
      slides[(currentIndex + 3) % slides.length],
    ];
  };

  // Function to open fullscreen view
  const openFullscreen = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  // Function to close fullscreen view
  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="container mt-5">
      <div className="container mb-3">
        <h3 className="fs-6 text-success m-0">Our Work</h3>
        <h1 className="display-3 fw-medium">Gallery</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="position-relative">
            {/* Container for the four images */}
            <motion.div
              className="d-flex justify-content-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8, // Increased duration for smoother transitions
                ease: [0.25, 0.8, 0.25, 1], // Ease-in-out for smoother feel
              }}
            >
              {getVisibleSlides().map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.8, // Increased duration
                    ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out
                  }}
                  className="d-flex justify-content-center align-items-center position-relative p-2"
                  style={{
                    width: slide.id === 2 || slide.id === 3 ? '48%' : '24%', // Double width for Slide 2 and Slide 3
                    height: '350px', // Increased height for the images
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-100 h-100 rounded-3"
                    style={{
                      objectFit: 'cover', // Ensures images cover the container and maintain aspect ratio
                    }}
                  />
                  {/* Circle Button to trigger fullscreen */}
                  <button
                    onClick={() => openFullscreen(slide.imageUrl)}
                    className="btn btn-light rounded-circle position-absolute p-2 m-2 arrow-btn"
                    style={{
                      top: '10px',
                      right: '10px',
                      width: '35px',
                      height: '35px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '18px',
                      padding: 0,
                    }}
                  >
                    <i className="bi bi-arrow-up-right" style={{ color: '#333' }}></i> {/* Slim arrow */}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Buttons below images */}
            <div className="d-flex justify-content-center mt-3">
              <button
                onClick={prevSlide}
                className="btn btn-light rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: '30px',
                  height: '30px',
                  fontSize: '16px',
                }}
              >
                <i className="bi bi-arrow-left" style={{ color: '#333' }}></i>
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-light rounded-circle d-flex justify-content-center align-items-center ms-2"
                style={{
                  width: '30px',
                  height: '30px',
                  fontSize: '16px',
                }}
              >
                <i className="bi bi-arrow-right" style={{ color: '#333' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fullscreen-modal position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          onClick={closeFullscreen}
        >
          <div
            className="position-relative rounded"
            style={{
              maxWidth: '70%', // Adjusted width to make it more reasonable
              maxHeight: '70%', // Adjusted height to avoid being too large
              overflow: 'hidden', // Prevent overflow
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="w-100 h-100 rounded-3"
              style={{
                objectFit: 'contain', // Keep the image aspect ratio intact
                width: '100%', // Ensure the image doesn't exceed the container width
                height: '100%', // Ensure the image doesn't exceed the container height
              }}
            />
            {/* X Button to close fullscreen */}
            <button
              onClick={closeFullscreen}
              className="btn btn-light rounded-circle position-absolute"
              style={{
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <i className="bi bi-x" style={{ color: '#333' }}></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
