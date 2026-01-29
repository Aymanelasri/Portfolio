import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // offset for sticky nav
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "services", "projects", "contact"];

  return (
    <nav className="d-flex align-items-center justify-content-between p-2 shadow-lg">
      <h2 className=" d-sm-block" style={{ marginLeft: 70 }}>
        AYM<span style={{ color: "rgb(26, 201, 224)" }}>ANE</span>
      </h2>
      
      <button 
        className="d-md-none border-0 bg-transparent text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`fs-4`} style={{fontSize: '24px', color: '#000'}}>
          {isMenuOpen ? '✕' : '☰'}
        </span>
      </button>

      <ul className={`nav justify-content-end flex-grow-1 ${isMenuOpen ? 'mobile-open' : 'mobile-closed'}`} style={{ marginRight: 350 }}>
        {links.map((section) => (
          <li key={section} className="nav-item menu">
            <a
              href={`#${section}`}
              className={`nav-link fs-5 underline-hover text-dark ${active === section ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
       
      </ul>
    </nav>
  );
}
