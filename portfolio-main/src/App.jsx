import "./app.scss"

import AboutMe from "./components/About/AboutMe";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import DesignGallery from "./components/design/DesignGallery";


const App = () => {
  return (
    <div>
        <Cursor />
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="About">
          <AboutMe />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
          <Portfolio />
        <section id="Design Gallery">
          <DesignGallery />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
  )
};

export default App;