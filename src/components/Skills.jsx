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
            <h3>Habilidades Tecnicas (En Proceso)</h3>
            <div className="skill">
              <span>Javascript y Python</span>
              <div className="barra-skill">
                <div className={`progreso ${animateSkills ? 'javascript' : ''}`}>
                  <span>35%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill2">
                <div className={`progreso ${animateSkills ? 'htmlcss' : ''}`}>
                  <span>40%</span>
                </div>
              </div>
            </div>
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
          </div>
          <div className="col derecha">
            <h3>Experiencia de trabajo</h3>
            <div className="item der">
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
