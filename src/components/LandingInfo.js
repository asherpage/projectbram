import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/landing.css';
import stock from '../styles/images/stock.png';
import info1 from '../styles/images/Gallery/Commercial8.jpg';
import info2 from '../styles/images/Commercial10.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInSide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const LandingInfo = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-200px' });
  const sectionRef2 = useRef(null);
  const inView2 = useInView(sectionRef2, { once: true, margin: '-200px' });

  return (
    <div>
      <div
        ref={sectionRef}
        className='container d-flex flex-column flex-md-row justify-content-between align-items-start landing-flex mb-more'
      >
        <div className='col-12 col-md-6'>
          <motion.h3
            className='fs-6 text-success m-0'
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showroom
          </motion.h3>

          <motion.h1
            className='display-3 fw-medium'
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Carpet & Carpet Squares
          </motion.h1>

          <motion.p
            className='mt-5 fs-6'
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our commercial carpet and carpet squares are proudly made in the USA and designed to meet the demands of high-traffic environments. Combining durability, easy maintenance, and modern design, they’re an ideal choice for corporate offices, government buildings, educational institutions, healthcare facilities, hospitality spaces, and retail settings. With a wide range of colors and textures, our carpet solutions offer both performance and style, helping you create welcoming, professional spaces that stand the test of time.
          </motion.p>

          <div className='container d-flex justify-content-start align-items-start landing-flex mt-5 p-0'>
            <motion.div
              className='d-flex align-items-start flex-column text-center border-end pe-3'
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className='m-0 fw-normal text-secondary'>American made</p>
            </motion.div>

            <motion.div
              className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3'
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className='m-0 fw-normal text-secondary'>Lifetime warranty</p>
            </motion.div>

            <motion.div
              className='d-flex align-items-start flex-column text-center pe-3 ms-3'
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className='m-0 fw-normal text-secondary'>Hasslefree installation</p>
            </motion.div>
          </div>
        </div>

        <motion.img
          className='landing-img col-12 col-md-5 mt-4 mt-md-0 my-radius user-select-none'
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
          src={info2}
          alt=""
        />
      </div>

      <div
        ref={sectionRef2}
        className='container d-flex flex-column flex-md-row justify-content-between align-items-start landing-flex mb-more'
      >
        <div className='col-12 col-md-6'>
          <motion.h3
            className='fs-6 text-success m-0'
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showroom
          </motion.h3>

          <motion.h1
            className='display-3 fw-medium'
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LVP
          </motion.h1>

          <motion.p
            className='mt-5 fs-6'
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our commercial-grade luxury vinyl plank (LVP) is built to perform in the most demanding environments. Approved for heavy foot traffic and rolling loads, it's waterproof, worry-free, and requires no polish or wax to maintain its sleek appearance. With industry-leading resistance to staining and abrasion, this durable flooring solution is perfect for high-traffic spaces like offices, healthcare, education, hospitality, and retail—delivering lasting performance without sacrificing style.
          </motion.p>

          <div className='container d-flex justify-content-start align-items-start landing-flex mt-5 p-0'>
            <motion.div
              className='d-flex align-items-start flex-column text-center border-end pe-3'
              initial="initial"
              animate={inView2 ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className='m-0 fw-normal text-secondary'>easy to maintain</p>
            </motion.div>

            <motion.div
              className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3'
              initial="initial"
              animate={inView2 ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className='m-0 fw-normal text-secondary'>100% waterproof</p>
            </motion.div>

            <motion.div
              className='d-flex align-items-start flex-column text-center pe-3 ms-3'
              initial="initial"
              animate={inView2 ? 'animate' : 'initial'}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className='m-0 fw-normal text-secondary'>Improved acoustics</p>
            </motion.div>
          </div>
        </div>

        <motion.img
          className='landing-img col-12 col-md-5 mt-4 mt-md-0 my-radius user-select-none'
          initial="initial"
          animate={inView2 ? 'animate' : 'initial'}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
          src={info1}
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingInfo;
