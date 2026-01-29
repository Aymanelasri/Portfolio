import { useRef } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import useScrollReveal from "./useScrollReveal";
import Services from "./Services";

export default function Router() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useScrollReveal();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="single-page-container">
      <Nav 
        scrollToSection={scrollToSection}
        sectionRefs={{ homeRef, aboutRef, skillsRef, servicesRef, projectsRef, contactRef }}
      />
      <section ref={homeRef} id="home">
        <Home />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={skillsRef} id="skills">
        <Skills />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>
  );
}