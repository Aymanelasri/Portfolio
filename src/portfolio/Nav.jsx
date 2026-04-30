import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useLang } from "./LangContext";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 70) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with 80px navbar offset
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => a.addEventListener("click", handleAnchorClick));
    return () => anchors.forEach(a => a.removeEventListener("click", handleAnchorClick));
  }, []);

  const links = [
    { id: "home",     en: "Home",     fr: "Accueil"  },
    { id: "about",    en: "About",    fr: "À propos" },
    { id: "skills",   en: "Skills",   fr: "Compétences" },
    { id: "services", en: "Services", fr: "Services" },
    { id: "projects", en: "Projects", fr: "Projets"  },
    { id: "contact",  en: "Contact",  fr: "Contact"  },
  ];

  return (
    <nav className="d-flex align-items-center justify-content-between p-2 shadow-lg">
      <h2 className="d-sm-block" style={{ marginLeft: 70 }}>
        AYM<span style={{ color: "rgb(26, 201, 224)" }}>ANE</span>
      </h2>

      <button
        className="d-md-none border-0 bg-transparent text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="fs-4" style={{ fontSize: "24px", color: "#000" }}>
          {isMenuOpen ? "✕" : "☰"}
        </span>
      </button>

      <ul
        className={`nav justify-content-end flex-grow-1 ${isMenuOpen ? "mobile-open" : "mobile-closed"}`}
        style={{ marginRight: 350 }}
      >
        {links.map(({ id, en, fr }) => (
          <li key={id} className="nav-item menu">
            <a
              href={`#${id}`}
              className={`nav-link fs-5 underline-hover text-dark ${active === id ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(en, fr)}
            </a>
          </li>
        ))}
        <li className="nav-item d-flex align-items-center ms-2">
          <button id="lang-toggle" onClick={toggle}>
            {lang === "en" ? "FR" : "EN"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
