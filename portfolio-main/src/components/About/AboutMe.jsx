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
                      Hello there. I’m Karabo Maloka, a dynamic Coordinator and Creative Designer currently pursuing a BCom Honours in Information Systems at the University of Johannesburg with the Department of Applied Information Systems. My journey blends business strategy, digital storytelling, and human-centred design.
                    </p>

                    <p>
                      With a foundation in both Business Information Technology and Journalism, I bring a hybrid skillset to every project. From developing mobile and web platforms to coordinating university-wide events and designing user interfaces that connect with real people. 
                    </p>

                    <p>
                      As the current Marketing Coordinator for the School of Consumer Intelligence and Information Systems (SCiiS), and former UX Design Lead at the UJ Technopreneurship Centre, I’ve led communications for major tech events, co-developed platforms like the GBV Reporting Tool, and actively champion student innovation. 
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
