import React, {useRef} from 'react';
import { motion, useInView  } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/landing.css';
import ppl from '../styles/images/ppl.png';
import boxes from '../styles/images/Group 40.png';
import stock from '../styles/images/stock.png';

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export const Landing = () => {
    const sectionRef = useRef(null);
const inView = useInView(sectionRef, { once: true, margin: '-100px' });

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
            {...fadeInUp} 
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.div className='d-flex flex-column ms-3' {...fadeInUp} transition={{ duration: 0.8, delay: 1.6 }}>
            <p className='mb-1'>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i>
              <i className='bi bi-star-fill text-warning'></i> 4.7
            </p>
            <p>
              <i className='bi bi-people-fill'></i> 1000+ reviews
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
<div ref={sectionRef} className='container d-flex justify-content-between align-items-start landing-flex mb-more'>
        <div className='w-45'>
          <motion.h3 className='fs-6 text-success m-0' 
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Showroom</motion.h3>

          <motion.h1 className='display-3 fw-medium' 
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Hardwood</motion.h1>

          <motion.p className='mt-5 fs-6' 
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illo laborum? Quibusdam consequuntur blanditiis iure laborum? Aperiam delectus aut impedit nostrum sit odit, tempore, doloremque eaque exercitationem numquam vitae possimus perspiciatis aliquid ea architecto reiciendis magni libero rerum eos minus tenetur. Autem sit nostrum minus.</motion.p>

          <div className='container d-flex justify-content-start align-items-start landing-flex mt-5 p-0'>
            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3' 
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className='m-0 fw-semibold'>Material</p>
              <p className='m-0 fw-normal text-secondary'>Oak Plank</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className='m-0 fw-semibold'>Size</p>
              <p className='m-0 fw-normal text-secondary'>6x12, 12x24</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className='m-0 fw-semibold'>Variants</p>
              <p className='m-0 fw-normal text-secondary'>Vinyl, Laminate, Tile</p>
            </motion.div>
          </div>
        </div>

        <motion.img className='landing-img w-40 text-end'
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
          src={stock} 
          alt=""
        />
      </div>
    </>
  );
};

export default Landing;
