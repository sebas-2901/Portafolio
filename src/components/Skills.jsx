import { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

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

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>HABILIDADES</h2>
        <div className="fila">
          <div className="col">
            <h3>Lenguajes y Tecnologías</h3>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill2">
                <div className={`progreso ${animateSkills ? 'htmlcss' : ''}`}>
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="barra-skill">
                <div className={`progreso ${animateSkills ? 'javascript' : ''}`}>
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Python</span>
              <div className="barra-skill">
                <div className={`progreso ${animateSkills ? 'javascript' : ''}`}>
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="barra-skill">
                <div className={`progreso ${animateSkills ? 'javascript' : ''}`}>
                  <span>60%</span>
                </div>
              </div>
            </div>
              <div className="skill">
              <span>Angular</span>
              <div className="barra-skill">
                <div className={`progreso ${animateSkills ? 'javascript' : ''}`}>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col derecha">
            <h3>Habilidades Blandas</h3>
            <div className="skill">
              <span>Dedicación</span>
              <div className="barra-skill3">
                <div className={`progreso ${animateSkills ? 'photoshop' : ''}`}>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Creatividad</span>
              <div className="barra-skill4">
                <div className={`progreso ${animateSkills ? 'wordpress' : ''}`}>
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Trabajo en Equipo</span>
              <div className="barra-skill4">
                <div className={`progreso ${animateSkills ? 'wordpress' : ''}`}>
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Resolución de Problemas</span>
              <div className="barra-skill2">
                <div className={`progreso ${animateSkills ? 'htmlcss' : ''}`}>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
