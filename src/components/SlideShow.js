import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css';
import image1 from '../styles/images/Gallery/Commercial1.jpg';// Larger image
import image2 from '../styles/images/Gallery/Commercial2.jpg'; 
import image3 from '../styles/images/Gallery/Commercial3.jpg';
import image4 from '../styles/images/Gallery/Commercial4.jpg';// Larger image
import image5 from '../styles/images/Gallery/Commercial5.jpg';
import image6 from '../styles/images/Gallery/Commercial6.jpg';
import image7 from '../styles/images/Gallery/Commercial7.jpg';
import image8 from '../styles/images/Gallery/Commercial8.jpg';// Larger image
import image9 from '../styles/images/Gallery/Commercial9.jpg';
import image10 from '../styles/images/Gallery/Commercial10.jpg';
import image11 from '../styles/images/Gallery/Commercial11.jpg';// larger image
import image12 from '../styles/images/Gallery/Commercial12.jpg';
import image13 from '../styles/images/Gallery/Commercial13.jpg';
import image14 from '../styles/images/Gallery/Commercial14.jpg';
import image15 from '../styles/images/Gallery/Commercial15.jpg';

const Slideshow = () => {
  const slides = [
    { id: 1, imageUrl: image1, title: 'Slide 1' },
    { id: 2, imageUrl: image2, title: 'Slide 2' },
    { id: 3, imageUrl: image3, title: 'Slide 3' },
    { id: 4, imageUrl: image4, title: 'Slide 4' },
    { id: 5, imageUrl: image5, title: 'Slide 5' },
    { id: 6, imageUrl: image6, title: 'Slide 6' },
    { id: 7, imageUrl: image7, title: 'Slide 7' },
    { id: 8, imageUrl: image8, title: 'Slide 8' },
    { id: 9, imageUrl: image9, title: 'Slide 9' },
    { id: 10, imageUrl: image10, title: 'Slide 10' },
    { id: 11, imageUrl: image11, title: 'Slide 11' },
    { id: 12, imageUrl: image12, title: 'Slide 12' },
    { id: 13, imageUrl: image13, title: 'Slide 13' },
    { id: 14, imageUrl: image14, title: 'Slide 14' },
    { id: 15, imageUrl: image15, title: 'Slide 15' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

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

  //open fullscreen view
  const openFullscreen = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  //close fullscreen view
  const closeFullscreen = () => {
    setFullscreenImage(null);
  };
  const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};
const sectionRef = useRef(null);
const inView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <div className="container mt-5">
      <motion.div
        className="container mb-3"
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.4 }}
        ref={sectionRef}
        >
  <h3 className="fs-6 text-success m-0">Our Work</h3>
  <h1 className="display-3 fw-medium">Gallery</h1>
</motion.div>

      <motion.div className="row justify-content-center user-select-none"
      initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.8 }}
        ref={sectionRef}
        >
        <div className="col-12">
          <div className="position-relative">
            <motion.div
              className="d-flex justify-content-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              {getVisibleSlides().map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.8, 0.25, 1], 
                  }}
                  className="d-flex justify-content-center align-items-center position-relative p-2"
                  style={{
                    width: slide.id === 1 || slide.id === 4 || slide.id === 8|| slide.id === 11 ? '48%' : '24%',
                    height: '350px', 
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-100 h-100 rounded-3"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
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
                    <i className="bi bi-arrow-up-right" style={{ color: '#333' }}></i>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            
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
      </motion.div>
      {fullscreenImage && (
        <div
          className="fullscreen-modal position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          onClick={closeFullscreen}
        >
          <div
            className="position-relative rounded"
            style={{
              maxWidth: '70%',
              maxHeight: '70%', 
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="w-100 h-100 rounded-3"
              style={{
                objectFit: 'contain', 
                width: '100%', 
                height: '100%', 
              }}
            />
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
