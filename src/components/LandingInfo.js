import React, {useRef} from 'react';
import { motion, useInView  } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/landing.css';
import stock from '../styles/images/stock.png';

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
    <div><div ref={sectionRef} className='container d-flex justify-content-between align-items-start landing-flex mb-more'>
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
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className='m-0 fw-semibold'>Material</p>
              <p className='m-0 fw-normal text-secondary'>Oak Plank</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className='m-0 fw-semibold'>Size</p>
              <p className='m-0 fw-normal text-secondary'>6x12, 12x24</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={fadeInSide}
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
      <div ref={sectionRef2} className='container d-flex justify-content-between align-items-start landing-flex mb-more'>
        <div className='w-45'>
          <motion.h3 className='fs-6 text-success m-0' 
            initial="initial"
            animate={inView2 ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Showroom</motion.h3>

          <motion.h1 className='display-3 fw-medium' 
            initial="initial"
            animate={inView2 ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Hardwood</motion.h1>

          <motion.p className='mt-5 fs-6' 
            initial="initial"
            animate={inView2 ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illo laborum? Quibusdam consequuntur blanditiis iure laborum? Aperiam delectus aut impedit nostrum sit odit, tempore, doloremque eaque exercitationem numquam vitae possimus perspiciatis aliquid ea architecto reiciendis magni libero rerum eos minus tenetur. Autem sit nostrum minus.</motion.p>

          <div className='container d-flex justify-content-start align-items-start landing-flex mt-5 p-0'>
            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3' 
              initial="initial"
              animate={inView2 ? "animate" : "initial"}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className='m-0 fw-semibold'>Material</p>
              <p className='m-0 fw-normal text-secondary'>Oak Plank</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView2 ? "animate" : "initial"}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className='m-0 fw-semibold'>Size</p>
              <p className='m-0 fw-normal text-secondary'>6x12, 12x24</p>
            </motion.div>

            <motion.div className='d-flex align-items-start flex-column text-center border-end pe-3 ms-3' 
              initial="initial"
              animate={inView2 ? "animate" : "initial"}
              variants={fadeInSide}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className='m-0 fw-semibold'>Variants</p>
              <p className='m-0 fw-normal text-secondary'>Vinyl, Laminate, Tile</p>
            </motion.div>
          </div>
        </div>

        <motion.img className='landing-img w-40 text-end'
          initial="initial"
          animate={inView2 ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
          src={stock} 
          alt=""
        />
      </div></div>
  )
}
 export default LandingInfo