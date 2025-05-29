import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const scrollToContact = () => {
    document.getElementById('Portfolio').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{color:"orange"}}>Digital </motion.b> Capabilities
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button onClick={scrollToContact}>See Portfolio</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="listContainer" variants={variants}>
          <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Web & App Development</h2>
            <p>
              Skilled in HTML, CSS, React Native, and Ionic. I build responsive, user-friendly interfaces and ensure smooth experiences across platforms, aligned to user needs and business goals.
            </p>
          </motion.div>

          <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>UX Research & Design</h2>
            <p>
              Proficient in user research, usability testing, and iterative design. I use tools like Figma to prototype and validate solutions that solve real-world problems.
            </p>
          </motion.div>

          <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Visual & Multimedia Content</h2>
            <p>
              Experience creating brand-aligned visuals with Adobe Creative Suite and Canva. From posters and videos to digital campaigns, I craft assets that communicate with impact.
            </p>
          </motion.div>

          <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Business & Data Analysis</h2>
            <p>
              Strong foundation in business strategy tools like SWOT, process mapping, and data modelling. I bring analytical insight into every tech and marketing decision.
            </p>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;