import { useEffect, useRef, useState } from 'react';
import './About.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useLang } from './LangContext';



function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}



export default function About() {
  const { t } = useLang();
  return (
    <div className="about-container reveal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-4 about-header">
              {t('About', 'À propos')} <span className="accent">{t('Me', 'de Moi')}</span>
            </h2>
          </div>
        </div>

        <div className="row align-items-start justify-content-center">
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="about-card p-4">
              <h4 className="card-title">{t('Full-Stack Developer', 'Développeur Full-Stack')}</h4>
              <p className="card-text">
                {t(
                  "I'm a passionate and continuously improving Full-Stack Developer, specializing in React, Laravel, and MySQL. I build modern, fast, and fully responsive web applications with a strong focus on user experience.",
                  "Je suis un Développeur Full-Stack passionné et en constante amélioration, spécialisé en React, Laravel et MySQL. Je crée des applications web modernes, rapides et entièrement responsives avec un fort accent sur l'expérience utilisateur."
                )}
              </p>
              <p className="card-text">
                {t(
                  "I care deeply about writing clean, maintainable code, designing scalable architectures, and delivering high-performance solutions. I enjoy working on real-world projects, collaborating with teams, and constantly learning to turn ideas into impactful digital products.",
                  "Je me soucie profondément d'écrire un code propre et maintenable, de concevoir des architectures évolutives et de livrer des solutions performantes. J'aime travailler sur des projets réels, collaborer avec des équipes et apprendre constamment pour transformer des idées en produits numériques impactants."
                )}
              </p>

             

              <div className="row text-start mb-3">
                <div className="col-6"><strong>{t('Name:', 'Nom :')}</strong> <p>Aymane Elasri</p></div>
                <div className="col-6"><strong>{t('Email:', 'Email :')}</strong> <p style={{ wordBreak: 'break-all' }}>Aymanelasri100@gmail.com</p></div>
              </div>
              <div className="row text-start mb-3">
                <div className="col-6"><strong>{t('Location:', 'Localisation :')}</strong> Morocco, Casablanca</div>
                <div className="col-6"><strong>{t('Availability:', 'Disponibilité :')}</strong><span className="text-success">{t('Available', 'Disponible')}</span></div>
              </div>

              <a href="/CV.pdf" className="btn btn-gradient w-100">{t('Download CV', 'Télécharger CV')}</a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon"><FaGraduationCap /></div>
                <div className="timeline-body">
                  <div className="timeline-year">2023 - 2024</div>
                  <h5>{t("Bachelor's Degree - Physical Sciences", "Baccalauréat - Sciences Physiques")}</h5>
                  <p className="small text-muted">
                    {t(
                      "Completed a scientific high school diploma specializing in Physical Sciences.",
                      "Obtention d'un baccalauréat scientifique spécialisé en Sciences Physiques."
                    )}
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"><FaBriefcase /></div>
                <div className="timeline-body">
                  <div className="timeline-year">2024 - {t('Present', 'Présent')}</div>
                  <h5>OFPPT - {t('Digital Development', 'Développement Digital')}</h5>
                  <p className="small text-muted">
                    {t(
                      "Pursuing hands-on learning in digital development, gaining practical skills through coursework and real-world projects, and continuously expanding knowledge in web technologies and best practices.",
                      "Formation pratique en développement digital, acquisition de compétences à travers des cours et des projets réels, et élargissement continu des connaissances en technologies web et bonnes pratiques."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
