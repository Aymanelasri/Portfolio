import './Projects.css';
import { useLang } from './LangContext';

export default function Projects() {
  const { t } = useLang();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      en: 'Full-stack e-commerce application with product catalog, shopping cart, and payment integration.',
      fr: 'Application e-commerce full-stack avec catalogue de produits, panier d\'achat et intégration de paiement.',
      tech: ['React', 'Bootstrap', 'Firebase'],
      img: '/CASAMODA.png',
      link: 'https://casamoda0.netlify.app/',
    },
    {
      id: 2,
      title: 'SIMPL-TVA Generator',
      en: 'A web application that generates EDI files for VAT declarations (Relevé des Déductions) compatible with the Moroccan SIMPL-TVA platform.',
      fr: 'Une application web permettant de générer des fichiers EDI pour les déclarations de TVA (Relevé des Déductions), compatible avec la plateforme marocaine SIMPL-TVA.',
      tech: ['React', 'Laravel', 'MySQL'],
      img: '/TVA.jpg',
      link: 'https://taxtva20.netlify.app/',
    },
    {
      id: 3,
      title: 'Admin Dashboard Application',
      en: 'A modern and responsive dashboard application that allows administrators to manage users, products, analytics, reports, notifications, and messages through an interactive and user-friendly interface.',
      fr: 'Un tableau de bord moderne et responsive permettant aux administrateurs de gérer les utilisateurs, produits, analyses, rapports, notifications et messages via une interface interactive et conviviale.',
      tech: ['React', 'CSS', 'Bootstrap', 'Recharts'],
      img: '/Dashboard.png',
      link: 'https://dashbaord3.netlify.app/',
    },
  ];

  return (
    <div className="projects-container reveal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-5 projects-header">
              {t('My', 'Mes')} <span className="accent">{t('Projects', 'Projets')}</span>
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-12">
              <div className="project-card">
                <div className="card-header">
                  <img src={project.img} alt={project.title} className="project-title" />
                </div>
                <div className="card-body">
                  <p className="project-description">{t(project.en, project.fr)}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <a href={project.link} className="btn-project">
                    {t('View Project', 'Voir le Projet')} <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
