import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "Développement Web Full-Stack",
      icon: "bi-code-slash",
      points: [
        "Conception et développement complet",
        "API et bases de données",
        "Frontend & Backend",
        "Optimisation SEO"
      ]
    },
    {
      title: "Développement Frontend",
      icon: "bi-pencil-square",
      points: [
        "UI/UX Design",
        "Applications web",
        "React.js & JS",
        "Intégration de maquettes"
      ]
    },
    {
      title: "Développement Backend",
      icon: "bi-server",
      points: [
        "API REST",
        "Bases de données",
        "Gestion des serveurs",
        "Sécurité et backend"
      ]
    },
    {
      title: "Expérience Digitale Optimale",
      icon: "bi-arrow-repeat",
      points: [
        "Sites modernes",
        "Responsive design",
        "Animations & effets",
        "Optimisé SEO"
      ]
    },
    {
      title: "Boutiques E-Commerce",
      icon: "bi-cart",
      points: [
        "Systèmes de paiement",
        "Gestion des produits",
        "CRM & marketing",
        "Interfaces conviviales"
      ]
    },
    {
      title: "Gestion de Code & Déploiement",
      icon: "bi-lightbulb",
      points: [
        "Git & GitHub",
        "CI/CD pipelines",
        "Déploiement cloud",
        "Support technique"
      ]
    }
  ];

  return (
    <div className="services-container reveal">
      <div className="container">
        <h2 className="services-header">My <span className="accent">Services</span></h2>
        <p>Some of the services I provide to my clients</p>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5 className="service-title">{service.title}</h5>
                <ul className="service-points">
                  {service.points.map((point, i) => (
                    <li key={i}>
                      <i className="bi bi-check2-circle"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
