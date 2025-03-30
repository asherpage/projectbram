import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const References = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexBottom, setHoveredIndexBottom] = useState(null); // Separate state for bottom row
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <>
      <motion.div className="container mb-3" initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}>
        <h3 className="fs-6 text-success m-0">Commercial Work</h3>
        <h1 className="display-3 fw-medium">References</h1>
      </motion.div>

      {/* Top set of boxes (UNCHANGED) */}
      <div className="container d-flex justify-content-between align-items-center landing-flex gap-3 myh mb-3">
        {/* Box 1 */}
        <motion.div
          id="one"
          ref={sectionRef}
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 0 || hoveredIndex === null ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(0)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: .6 }}
        >
          <button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">Click Me</span>
            <FaArrowUp style={{ fontSize: "1rem", width: "auto", height: "auto" }} />
          </button>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          id="two"
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 1 ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(1)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">Click Me</span>
            <FaArrowUp style={{ fontSize: "1rem", width: "auto", height: "auto" }} />
          </button>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          id="three"
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 2 ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(2)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">Click Me</span>
            <FaArrowUp style={{ fontSize: "1rem", width: "auto", height: "auto" }} />
          </button>
        </motion.div>
      </div>

      {/* Bottom set of boxes (Now Independent) */}
      {/* <div  className="container d-flex justify-content-between align-items-center landing-flex mb-5 gap-3 myh">
        <motion.div
        id="four"
          className="h-100 border rounded-4"
          style={{
            width: hoveredIndexBottom === 0 ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndexBottom(0)}
          onHoverEnd={() => setHoveredIndexBottom(null)}
        ></motion.div>

        <motion.div
        id="five"
          className="h-100 border rounded-4"
          style={{
            width: hoveredIndexBottom === 1 ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndexBottom(1)}
          onHoverEnd={() => setHoveredIndexBottom(null)}
        ></motion.div>

        <motion.div
        id="six"
          className="h-100 border rounded-4"
          style={{
            width: hoveredIndexBottom === 2 || hoveredIndexBottom === null ? "50%" : "25%",
            transition: "width 0.6s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndexBottom(2)}
          onHoverEnd={() => setHoveredIndexBottom(null)}
        ></motion.div>
      </div> */}
    </>
  );
};

export default References;
