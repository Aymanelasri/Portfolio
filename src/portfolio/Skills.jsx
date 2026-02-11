import './Skills.css';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '/icons/html.png' },
        { name: 'CSS',  icon: '/icons/css.png' },
        { name: 'React',  icon: '/icons/react.png' },
        { name: 'JavaScript', icon: '/icons/js.png' },
        { name: 'Bootstrap', icon: '/icons/bootstrap.png' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind.png' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', icon: '/icons/php.png' },
        { name: 'Laravel', icon: '/icons/laravel.png' },
        { name: 'Node', icon: '/icons/Node.js.png' },
        { name: 'Express', icon: '/icons/express.png' },
        { name: 'MySQL', icon: '/icons/mysql.png' },
        { name: 'MongoDB', icon: '/icons/mongodb.png' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git & GitHub', icon: '/icons/git.png' },
        { name: 'SonarQube', icon: '/icons/sonarqube.png' },
        { name: 'Docker', icon: '/icons/docker.png' },
        { name: 'Jira', icon: '/icons/jira.png' }
      ]
    }
  ];

  return (
    <div className="skills-container reveal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-4  skills-header">My <span className="accent">Skills</span></h2>
            <p className="text-center mb-4">Technologies and tools I use to bring ideas to life</p>
          </div>
        </div>

        <div className="row g-4">
            
          {categories.map((cat, ci) => (
            <div className="col-lg-4 col-md-6" key={ci}>
              <div className="skill-card p-4">
                <h5 className="skill-title">{cat.title}</h5>
                <div className="card-center-icon">
                  {cat.skills.map((skill, index) => (
                    <div className="skill-icon" key={index}>
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                  ))}
                </div>
                
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
