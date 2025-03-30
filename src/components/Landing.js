import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css';
import ppl from '../styles/images/ppl.png';
import boxes from '../styles/images/Group 40.png';

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};
const fadeInSide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const Landing = () => {
  return (
    <>
    <motion.div 
      className='container d-flex justify-content-between align-items-center landing-flex vh-100 mb-5'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className='landing-head w-50'>
        <motion.h3 className='fs-6 text-success' {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
          -Portfolio
        </motion.h3>

        <motion.h1 className='display-1 w-100 fw-semibold' {...fadeInUp} transition={{ duration: 0.8, delay: 0.6 }}>
          Solutions Crafted For You <span className='fst-italic'>Bram Flooring</span>
        </motion.h1>

        <motion.p className='lead' {...fadeInUp} transition={{ duration: 0.8, delay: 0.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quasi adipisci laudantium. Quasi iure corrupti totam molestias accusamus. Ipsa, est.
        </motion.p>

        <motion.div className='d-flex align-items-center' {...fadeInUp} transition={{ duration: 0.8, delay: 1 }}>
          <motion.button 
            className='btn btn-success me-3 btn-lg p-4 w-33 rounded-pill fs-6' 
            {...fadeInUp} 
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            View Gallery
          </motion.button>
          <motion.img 
            src={ppl} 
            alt='Small Thumbnail' 
            className='img-fluid' 
            {...fadeInSide} 
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.div className='d-flex flex-column ms-3' {...fadeInSide} transition={{ duration: 0.8, delay: 1.6 }}>
            <p className='mb-1'>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i> 4.7
            </p>
            <p>
              <i className='bi bi-people-fill'></i> 100+ reviews
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className='landing-img w-45 text-end' 
        {...fadeInUp} 
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <img src={boxes} alt='Main Image' className='img-fluid' />
      </motion.div>
    </motion.div>

    {/* need to make seperate comp */}

      
    </>
  );
};

export default Landing;
