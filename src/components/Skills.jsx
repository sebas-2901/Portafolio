import { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  // Mapeo de skills a iconos de Font Awesome
  const skillIcons = {
    'HTML': 'fa-html5',
    'CSS': 'fa-css3',
    'JavaScript': 'fa-js',
    'Python': 'fa-python',
    'React': 'fa-react',
    'Angular': 'fa-angular',
    'Dedicación': 'fa-heart',
    'Creatividad': 'fa-lightbulb',
    'Trabajo en Equipo': 'fa-users',
    'Resolución de Problemas': 'fa-puzzle-piece'
  };

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.getElementById('skills');
      if (skills) {
        const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300 && !animateSkills) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSkills]);

  const renderSkill = (skillName) => {
    const iconClass = skillIcons[skillName] || 'fa-star';
    const isDevIcon = ['fa-html5', 'fa-css3', 'fa-js', 'fa-python', 'fa-react', 'fa-angular'].includes(iconClass);
    const brandClass = isDevIcon ? 'fa-brands' : 'fa-solid';

    return (
      <div className={`skill ${animateSkills ? 'animate' : ''}`}>
        <span>
          {skillName}
          <i className={`${brandClass} ${iconClass}`}></i>
        </span>
      </div>
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>HABILIDADES</h2>
        <div className="fila">
          <div className="col">
            <h3>Lenguajes y Tecnologías</h3>
            {renderSkill('HTML')}
            {renderSkill('CSS')}
            {renderSkill('JavaScript')}
            {renderSkill('Python')}
            {renderSkill('React')}
            {renderSkill('Angular')}
          </div>
          <div className="col derecha">
            <h3>Habilidades Blandas</h3>
            {renderSkill('Dedicación')}
            {renderSkill('Creatividad')}
            {renderSkill('Trabajo en Equipo')}
            {renderSkill('Resolución de Problemas')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
