import React from 'react';
import './Services.css';
import { useLang } from './LangContext';

export default function Services() {
  const { t } = useLang();

  const services = [
    {
      en: 'Full-Stack Web Development', fr: 'Développement Web Full-Stack',
      icon: 'bi-code-slash',
      points: [
        { en: 'Complete design and development', fr: 'Conception et développement complet' },
        { en: 'API and database integration',    fr: 'Intégration API et bases de données' },
        { en: 'Frontend & Backend',              fr: 'Frontend & Backend' },
        { en: 'SEO Optimization',                fr: 'Optimisation SEO' },
      ]
    },
    {
      en: 'Frontend Development', fr: 'Développement Frontend',
      icon: 'bi-pencil-square',
      points: [
        { en: 'UI/UX Design',        fr: 'Design UI/UX' },
        { en: 'Web applications',    fr: 'Applications web' },
        { en: 'React.js & JavaScript', fr: 'React.js & JavaScript' },
        { en: 'Mockup integration',  fr: 'Intégration de maquettes' },
      ]
    },
    {
      en: 'Backend Development', fr: 'Développement Backend',
      icon: 'bi-server',
      points: [
        { en: 'REST API',          fr: 'API REST' },
        { en: 'Databases',         fr: 'Bases de données' },
        { en: 'Server management', fr: 'Gestion des serveurs' },
        { en: 'Security & backend', fr: 'Sécurité & backend' },
      ]
    },
    {
      en: 'Optimal Digital Experience', fr: 'Expérience Digitale Optimale',
      icon: 'bi-arrow-repeat',
      points: [
        { en: 'Modern websites',     fr: 'Sites modernes' },
        { en: 'Responsive design',   fr: 'Design responsive' },
        { en: 'Animations & effects', fr: 'Animations & effets' },
        { en: 'SEO Optimized',       fr: 'Optimisé SEO' },
      ]
    },
    {
      en: 'E-Commerce Stores', fr: 'Boutiques E-Commerce',
      icon: 'bi-cart',
      points: [
        { en: 'Payment systems',        fr: 'Systèmes de paiement' },
        { en: 'Product management',     fr: 'Gestion des produits' },
        { en: 'CRM & marketing',        fr: 'CRM & marketing' },
        { en: 'User-friendly interfaces', fr: 'Interfaces conviviales' },
      ]
    },
    {
      en: 'Code Management & Deployment', fr: 'Gestion de Code & Déploiement',
      icon: 'bi-lightbulb',
      points: [
        { en: 'Git & GitHub',      fr: 'Git & GitHub' },
        { en: 'CI/CD pipelines',   fr: 'Pipelines CI/CD' },
        { en: 'Cloud deployment',  fr: 'Déploiement cloud' },
        { en: 'Technical support', fr: 'Support technique' },
      ]
    },
  ];

  return (
    <div className="services-container reveal">
      <div className="container">
        <h2 className="services-header fw-bold">
          {t('My', 'Mes')} <span className="accent">{t('Services', 'Services')}</span>
        </h2>
        <p>{t('Some of the services I provide to my clients', 'Quelques services que je propose à mes clients')}</p>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5 className="service-title">{t(service.en, service.fr)}</h5>
                <ul className="service-points">
                  {service.points.map((point, i) => (
                    <li key={i}>
                      <i className="bi bi-check2-circle"></i>
                      {t(point.en, point.fr)}
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
