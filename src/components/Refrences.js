import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
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
    <motion.div className="container" initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}>
      <h3 className="fs-6 text-success m-0">Commercial Work</h3>

    </motion.div>
      <motion.div className="container mb-3 d-flex justify-content-between" initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}>
        <h1 className="display-3 fw-medium">References</h1>
        <p className="ps-3 w-40">Trusted by leading businesses, we’ve successfully completed flooring projects for a variety of industries and clients.</p>
      </motion.div>

      {/* Top set of boxes (UNCHANGED) */}
      <div className="container d-flex justify-content-between align-items-center landing-flex gap-3 myh mb-3 user-select-none">
        {/* Box 1 */}
        <motion.div
          id="one"
          ref={sectionRef}
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 0 || hoveredIndex === null ? "50%" : "25%",
            transition: "width 1s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(0)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: .6 }}
        >
          <a href="https://www.google.com/maps/place/Grandview+Terrace/@33.6614534,-112.3778348,17.13z/data=!4m15!1m8!3m7!1s0x872b5b21906da6bd:0xcf1cce5e6e724700!2s14515+W+Granite+Valley+Dr,+Sun+City+West,+AZ+85375!3b1!8m2!3d33.6617441!4d-112.3757965!16s%2Fg%2F11c3q3dg1q!3m5!1s0x872b5b223d9cd8a7:0x24c7aea4d8fe02a6!8m2!3d33.6620131!4d-112.3758286!16s%2Fg%2F1tfrmt9s?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"><button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">Grandview Terrace</span>
            <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
          </button></a>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          id="two"
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 1 ? "50%" : "25%",
            transition: "width 1s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(1)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://www.google.com/maps/place/La+Loma+Village/@33.5119764,-112.3654067,16z/data=!4m15!1m8!3m7!1s0x872b471945d2fffd:0x72af7a23ac557e0b!2s14154+Denny+Blvd,+Litchfield+Park,+AZ+85340!3b1!8m2!3d33.5119167!4d-112.3627423!16s%2Fg%2F11cppwql5q!3m5!1s0x872b47191a476d43:0xbee2f1693f8bb9ea!8m2!3d33.5114025!4d-112.3621365!16s%2Fg%2F1tgfx2n1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"><button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">La Loma Village</span>
            <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
          </button></a>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          id="three"
          className="h-100 border rounded-4 position-relative"
          style={{
            width: hoveredIndex === 2 ? "50%" : "25%",
            transition: "width 1s ease-in-out",
          }}
          onHoverStart={() => setHoveredIndex(2)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="https://www.google.com/maps/place/The+Colonnade/@33.6577224,-112.3779429,17z/data=!3m1!4b1!4m6!3m5!1s0x872b5b270eb254b1:0x49bf1e5a67b13c74!8m2!3d33.6577224!4d-112.3779429!16s%2Fg%2F1v41_y5v?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"><button
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
            style={{ width: "97%" }}
          >
            <span className="me-2">The Colonnade</span>
            <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
          </button></a>
        </motion.div>
      </div>

      {/* Bottom set of boxes (Now Independent) */}
      <div className="container d-flex justify-content-between align-items-center landing-flex mb-5 gap-3 myh">
  {/* Box 4 */}
  <motion.div
    id="four"
    className="h-100 border rounded-4 position-relative"
    style={{
      width: hoveredIndexBottom === 0 ? "50%" : "25%",
      transition: "width 1s ease-in-out",
    }}
    
    onHoverStart={() => setHoveredIndexBottom(0)}
    onHoverEnd={() => setHoveredIndexBottom(null)}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.8 }}
  >
    <a href="https://www.google.com/maps/place/Diamond+Ridge+Development/@33.5600306,-112.2633949,16z/data=!3m1!4b1!4m6!3m5!1s0x872b41eae5997449:0xa6f361981dc48184!8m2!3d33.5600306!4d-112.26082!16s%2Fg%2F1tslk5l5?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"><button
      className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
      style={{ width: "97%" }}
    >
      <span className="me-2">Diamond Ridge Development</span>
      <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
    </button></a>
  </motion.div>

  {/* Box 5 */}
  <motion.div
    id="five"
    className="h-100 border rounded-4 position-relative"
    style={{
      width: hoveredIndexBottom === 1 ? "50%" : "25%",
      transition: "width 1s ease-in-out",
    }}
    onHoverStart={() => setHoveredIndexBottom(1)}
    onHoverEnd={() => setHoveredIndexBottom(null)}
    initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 2.2 }}
  >
    <a href="https://www.google.com/maps/place/Service+Maintenance+Inc/@33.4941787,-111.924354,18z/data=!3m1!4b1!4m6!3m5!1s0x872b0bbf6dad43bd:0x37def73d32f16184!8m2!3d33.4941787!4d-111.924354!16s%2Fg%2F1tglnc5s?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"><button
      className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
      style={{ width: "97%" }}
    >
      <span className="me-2">Service Maintenance Inc</span>
      <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
    </button></a>
  </motion.div>

  {/* Box 6 */}
  <motion.div
    id="six"
    className="h-100 border rounded-4 position-relative"
    style={{
      width: hoveredIndexBottom === 2 || hoveredIndexBottom === null ? "50%" : "25%",
      transition: "width 1s ease-in-out",
    }}
    onHoverStart={() => setHoveredIndexBottom(2)}
    onHoverEnd={() => setHoveredIndexBottom(null)}
    initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 2.6 }}
  >
    <a href="https://www.google.com/maps/place/Kowalski+Construction,+Inc./@33.6816213,-112.1073925,17z/data=!3m1!4b1!4m6!3m5!1s0x872b6f6fe2992ef7:0x5267f14b83491c5b!8m2!3d33.6816213!4d-112.1073925!16s%2Fg%2F1thmfw4x?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"><button
      className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-pill d-flex justify-content-between align-items-center"
      style={{ width: "97%" }}
    >
      <span className="me-2">Kowalski Construction, Inc.</span>
      <CiCircleInfo style={{ fontSize: "1.5rem", width: "auto", height: "auto" }} />
    </button></a>
  </motion.div>
</div>
    </>
  );
};

export default References;
