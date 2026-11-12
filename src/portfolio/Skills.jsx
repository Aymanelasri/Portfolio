import './Skills.css';
import { useLang } from './LangContext';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const categories = [
  {
    en: 'Frontend', fr: 'Frontend',
    skills: [
      { name: 'HTML5',       src: `${CDN}/html5/html5-original.svg`,           anim: 'sk-bounce'   },
      { name: 'CSS3',        src: `${CDN}/css3/css3-original.svg`,             anim: 'sk-shake'    },
      { name: 'React',       src: `${CDN}/react/react-original.svg`,           anim: 'sk-spin'     },
      { name: 'JavaScript',  src: `${CDN}/javascript/javascript-original.svg`, anim: 'sk-heartbeat'},
      { name: 'Bootstrap',   src: `${CDN}/bootstrap/bootstrap-original.svg`,   anim: 'sk-flip'     },
      { name: 'Tailwind CSS',src: `${CDN}/tailwindcss/tailwindcss-original.svg`,anim: 'sk-flip'    },
      { name: 'Next.js',    src: `${CDN}/nextjs/nextjs-original.svg`,           anim: 'sk-orbit'   },
    ],
  },
  {
    en: 'Backend', fr: 'Backend',
    skills: [
      { name: 'PHP',        src: `${CDN}/php/php-original.svg`,             anim: 'sk-orbit'    },
      { name: 'Laravel',    src: `${CDN}/laravel/laravel-original.svg`,     anim: 'sk-shake'    },
      { name: 'Node.js',    src: `${CDN}/nodejs/nodejs-original.svg`,       anim: 'sk-bounce'   },
      { name: 'Express.js', src: `${CDN}/express/express-original.svg`,     anim: 'sk-heartbeat'},
      { name: 'MySQL',      src: `${CDN}/mysql/mysql-original.svg`,         anim: 'sk-flip'     },
      { name: 'MongoDB',    src: `${CDN}/mongodb/mongodb-original.svg`,     anim: 'sk-spin'     },
    ],
  },
  {
    en: 'Tools', fr: 'Outils',
    skills: [
      { name: 'Git',       src: `${CDN}/git/git-original.svg`,             anim: 'sk-spin'     },
      { name: 'SonarQube', src: `${CDN}/sonarqube/sonarqube-original.svg`, anim: 'sk-heartbeat'},
      { name: 'Docker',    src: `${CDN}/docker/docker-original.svg`,       anim: 'sk-bounce'   },
      { name: 'Jira',      src: `${CDN}/jira/jira-original.svg`,           anim: 'sk-shake'    },
    ],
    
  },
];

const delays = ['0s','0.4s','0.8s','1.3s','0.2s','1.0s','0.6s','1.5s','0.1s','0.9s','0.5s','1.2s'];

export default function Skills() {
  const { t } = useLang();

  return (
    <div className="skills-container reveal">
      <div className="sk-dots" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="sk-dot" style={{ '--d': `${Math.random() * 100}%`, '--t': `${2 + Math.random() * 4}s`, '--dl': `${Math.random() * 4}s` }} />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-2 skills-header">
              {t('My', 'Mes')} <span className="accent">{t('Skills', 'Compétences')}</span>
            </h2>
            <p className="skills-sub">
              {t('Technologies and tools I use to bring ideas to life', "Technologies et outils que j'utilise pour donner vie aux idées")}
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center mt-2">
          {categories.map((cat, ci) => (
            <div className="col-lg-4 col-md-6 col-12 sk-card-col" key={ci} style={{ '--ci': ci }}>
              <div className="skill-card">
                <h5 className="skill-title sk-shimmer">{t(cat.en, cat.fr)}</h5>
                <div className="card-center-icon">
                  {cat.skills.map((skill, idx) => (
                    <div className="skill-icon-wrapper" key={idx} style={{ '--si': idx }}>
                      <div className={`skill-icon ${skill.anim}`} style={{ animationDelay: delays[idx % delays.length] }}>
                        <img src={skill.src} alt={skill.name} loading="lazy" />
                      </div>
                      <span className="skill-label">{skill.name}</span>
                    </div>
                  ))}
                  {cat.extra && (
                    <div className="skill-icon-wrapper">
                      <div className="skill-icon sk-more">
                        <span>···</span>
                      </div>
                      <span className="skill-label">{t('& more', '& plus')}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
