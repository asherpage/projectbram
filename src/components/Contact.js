import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_fm0tt8m', 'template_mmb0tzx', form.current, 'HAzGnEfG61Cf4zDiR')
      .then(() => {
        alert('Your message has been successfully sent.');
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        alert('Error sending message. Try again later.');
      });
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="p-4" variants={fadeInDown}>
        <h3 className="fs-6 text-success m-0 mt-4">Talk to us!</h3>
        <h1 className="display-3 fw-medium">Contact</h1>
      </motion.div>

      <div className="row">
        {/* Contact Form Section */}
        <motion.div className="col-md-6 col-12" variants={fadeInDown}>
          <form ref={form} onSubmit={sendEmail} className="p-4 rounded">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input id="firstName" name="user_firstName" type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input id="lastName" name="user_lastName" type="text" className="form-control" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="user_email" type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input id="phone" name="user_phone" type="tel" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-control" rows="6" required></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">Submit</button>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div className="col-md-6 col-12" variants={fadeInDown}>
          <div className="p-4">
            <div className="mb-4">
              <h3>Contact Us <IoCall /></h3>
              <p>Speak to our helpful team</p>
              <p className="text-success">+1 (623) 806-8543</p>
              <p className="text-success">sales@bramflooring.com</p>
            </div>

            <div className="mb-4">
              <h3>Visit Us <FaLocationDot /></h3>
              <p>We&#39;re open 8-3 Monday - Friday And 8-2 Saturday</p>
              <p className="text-success">18700 N 107th Ave, Sun City, AZ 85373</p>
            </div>

            <div className="mb-4">
              <h3>License</h3>
              <p>ROC 325008, CR-48</p>
              <p>ROC 316404, CR-8</p>
              <p>W9 Upon Request</p>
            </div>

            <div>
              <h3>Socials</h3>
              <p>
                <a href="https://www.facebook.com/BramFlooring/" className="text-decoration-none text-success">Facebook</a> | 
                <a href="https://twitter.com/bramflooring" className="text-decoration-none text-success">Twitter</a> | 
                <a href="https://www.instagram.com/bram.flooring/" className="text-decoration-none text-success">Instagram</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div className="d-flex justify-content-center" variants={fadeInDown}>
        <iframe
          className="w-100 pb-4 rounded map"
          title="Work Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1403507742593!2d-112.29308432450134!3d33.65352507330969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b432be04e03cf%3A0x3b84b25de826e40!2sBram%20Flooring!5e0!3m2!1sen!2sus!4v1736439162110!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
