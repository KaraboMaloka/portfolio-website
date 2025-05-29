import { useState, useRef } from 'react';
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Sync Vibes App",
    job: "(Project Manager & UX Designer)",
    img: "./colour-logo.png",
    desc: "Sync Vibes is a React-based platform developed to simplify event discovery, registration, and community engagement in university tech spaces. Designed with a focus on user accessibility and admin reporting tools, the platform improves the experience for both attendees and organizers.",
    tags: ["React", "UX", "Event Tech", "User Research"],
    impact: "Used by 20+ students during the MTN Hackathon; improved RSVP tracking by 60%."
  },
  {
   id: 2,
    title: "MASS: Master Assessment Scheduling System",
    job: "(Product Manager & UX Strategist)",
    img: "./LoginAdmin.png",
    desc: "MASS is a web-based scheduling solution developed at UJ to reduce clashes in exam and assessment timetables. My role focused on UX flows, stakeholder coordination, and aligning technical design with academic requirements.",
    tags: ["UI/UX", "Business Analysis", "Team Management", "Wireframing", "Problem-Solving"],
    impact: "This Year=long project would help reduce scheduling conflicts across plenty modules in UJ. Designed user-friendly dashboards that would improv admin adoption by 40%."
  },
  {
    id: 3,
    title: "UJ Incident Reporting Platform",
    job: "(UX Designer & Tester)",
    img: "./gbvplatform.png",
    desc: "This platform empowers students to confidentially report incidents of gender-based violence, bullying, or harassment. I led user journey mapping, accessibility testing, and collaborated with social impact teams to prioritize safety.",
    tags: ["UX Research", "Accessibility", "Privacy Design", "Social Justice", "UI Testing"],
    impact: "Platform supported by UJ. UX improvements increased successful anonymous submissions and user trust."
  },
  {
    id: 5,
    title: "SCiiS Newsletter Vol.13",
    job: "(Editor-in-Chief)",
    img: "./newsletter.jpeg",
    desc: "Led editorial production for a digital publication highlighting UJ achievements, research, and innovation. I managed content curation, design flow, and stakeholder interviews while elevating the school's voice.",
    tags: ["Content Strategy", "Design Editing", "InDesign", "Storytelling", "Visual Branding"],
    impact: "Most circulated edition of the SCiiS newsletter in 2023. Featured in university-wide communications."
  },
];

const Single = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = () => {
    
    switch (item.id) {
      case 1:
        window.open("/video.mp4", "_blank");
        break;
      case 2:
        window.open("/massvideo.mp4");
        break;
      case 3:
        window.location.href = "https://gbvreporting.co.za/";
        break;
      case 4:
        window.location.href = "https://mydigitalpublication.co.za/uj/cbe/SCiiS/vol13-newsletter/";
        break;
      default:
        break;
    }
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          
          <motion.div className="textContainer" style={{y}}>
            <motion.div className="textContainer" style={{ y }}>
  <h2>{item.title}</h2>
  <p className="job">{item.job}</p>
  <p>{item.desc}</p>

  {item.tags && (
    <div className="tags">
      {item.tags.map((tag, idx) => (
        <span className="tag" key={idx}>{tag}</span>
      ))}
    </div>
  )}

  {item.impact && <p className="impact"><strong>Impact:</strong> {item.impact}</p>}

  <button onClick={handleButtonClick}>See Demo</button>
</motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;