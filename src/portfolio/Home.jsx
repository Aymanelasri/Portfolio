import { useEffect, useRef } from 'react';
import './Home.css';
import { useLang } from './LangContext';

export default function Home() {
  const typedRef = useRef(null);
  const { lang, t } = useLang();

  useEffect(() => {
    const strings = lang === 'en'
      ? ['Full-Stack Developer', 'React Developer', 'Laravel Developer', 'UI/UX Enthusiast']
      : ['Développeur Full-Stack', 'Développeur React', 'Développeur Laravel', 'Passionné UI/UX'];

    const typed = new window.Typed(typedRef.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, [lang]);

  return (
    <div className="home-container reveal">
      <div className="container">
        <div className="row hero-section align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 hero-content mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              {t("Hi, I'm", "Salut, je suis")} <span className="span1">Aymane</span><br />
              <span className="span2">Elasri</span>
            </h1>
            <h4 className="h3 text-secondary fw-semibold mb-4"><span ref={typedRef}></span></h4>
            <p className="lead text-light fs-5">
              {t(
                "I create modern and powerful web applications designed to scale easily, delivering high performance with creativity and passion",
                "Je crée des applications web modernes et puissantes conçues pour évoluer facilement, offrant de hautes performances avec créativité et passion"
              )}
            </p>
            <div className="mb-4">
              <a href="/MyCv.pdf" download="Aymane_Elasri_CV.pdf" className="btn btn-primary me-3">
                {t("DOWNLOAD CV", "TÉLÉCHARGER CV")}
              </a>
              <a href="#projects">
                <button className="btn btn-outline-light">{t("View Projects", "Voir Projets")}</button>
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Aymanelasri" target="_blank" rel="noopener noreferrer" className="text-light me-4" title="GitHub">
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayman-elasri-745a8033b" target="_blank" rel="noopener noreferrer" className="text-light me-4" title="LinkedIn">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="https://www.facebook.com/share/1BzMUhQRa1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-light" title="Facebook">
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 hero-image d-flex justify-content-center align-items-center">
            <div className="photo-wrapper">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <img src="./profile.jpg" alt="Aymane Elasri" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
