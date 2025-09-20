// AboutMe.js

import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.scss';

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
const AboutMe = () => {
  const scrollToContact = () => {
    document.getElementById('Contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="about-me-page">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="about-me-container"
            >
            <div className='Abouttitle'>
                <h1>About Me</h1>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src="./Karabo.jpg"
                        alt="Karabo Maloka"
                        className="profile-image"
                    />
                </div>
                <div className='text-container'>
                    <p>
                      Hello there. I’m Karabo Maloka, a Junior Software Developer with a focus in UX Design, currently pursuing a BCom Honours in Information Systems at the University of Johannesburg with the Department of Applied Information Systems. 
                      Blend human-centred design, front-end fundamentals, and product thinking to ship usable, accessible web experiences.
                      Comfortable moving from discovery and wireframing to Jira stories, release notes and development of the product.
                    </p>
            

                    <p>Currently working as a Junior Developer at Paycorp, a leading fintech company delivering secure and innovative payment technologies across South Africa. 
                      I contribute to the development of digital platforms that support financial inclusion and seamless transactions, with a growing focus on user-driven functionality and system scalability.
                      </p>
                    <p>
                      I’m passionate about building digital experiences that are functional, inclusive, and future-ready. Additionally, I thrive in spaces where creativity meets systems thinking.
                    </p>

                </div>
            </div>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants} onClick={scrollToContact} >
                  Contact Me
                </motion.button>              
              
              <a href="./KaraboMaloka_Resume.pdf" download="KaraboMaloka_Resume.pdf">
                <motion.button variants={textVariants} >
                    Download CV
                </motion.button>
              </a>
            </motion.div>
        </motion.div>
        

        
    </div>
    
  );
};

export default AboutMe;
