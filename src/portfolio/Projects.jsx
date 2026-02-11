import './Projects.css';

export default function Projects() {
  const projects = [

  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with product catalog, shopping cart, and payment integration.',
    tech: ['React', 'Bootstrap','Firebase'],
    img: '/store.png',
    link: 'https://casamoda-m.netlify.app/',
  },
{
  id: 2,
  title: 'Restaurant Application',
  description: 'A restaurant application that allows users to order meals online and reserve tables easily.',
  tech: ['React','Laravel', 'MySQL',"Css"], 
  img: '/gustoPc.png',
  link: 'https://www.gustotable.site/',
} 

  ];

  return (
    <div className="projects-container reveal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-5 projects-header">
              My <span className="accent">Projects</span>
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-12">
              <div className="project-card">
                <div className="card-header">
                  <img src={project.img} alt={project.title} className="project-title"/>
                </div>
                <div className="card-body">
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <a href={project.link} className="btn-project">
                    View Project <i className="bi bi-arrow-right"></i>
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
