import './About.css';

const About = () => {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p className="descripcion">
          Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. 
          Actualmente me encuentro en formación como Analista y Desarrollador de Software en el SENA, 
          enfocándome en crear soluciones innovadoras y funcionales.
        </p>
        
        <div className="fila">
          <div className="col">
            <h3>Información Personal</h3>
            <ul>
              <li>
                <i className="fa-solid fa-calendar"></i>
                <div>
                  <strong>Fecha de Nacimiento</strong>
                  <span>29 de Enero, 2007</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <span>sm03122018@gmail.com</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-briefcase"></i>
                <div>
                  <strong>Cargo Actual</strong>
                  <span>Aprendiz SENA</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Objetivos Profesionales</h3>
            <ul className="objetivos">
              <li>
                <i className="fa-solid fa-rocket"></i>
                <span>Convertirme en un desarrollador Full Stack</span>
              </li>
              <li>
                <i className="fa-solid fa-code"></i>
                <span>Desarrollar proyectos a gran escala de forma independiente/corporativo</span>
              </li>
              <li>
  <i className="fa-solid fa-graduation-cap"></i>
  <span>Especializarme en arquitectura y diseño de sistemas escalables</span>
</li>
            </ul>
          </div>
        </div>

        <div className="intereses-section">
          <h3>Intereses</h3>
          <div className="contenedor-intereses">
            <div className="interes">
              <i className="fa-solid fa-gamepad"></i>
              <span>Videojuegos</span>
            </div>
            <div className="interes">
              <i className="fa-solid fa-headphones"></i>
              <span>Música</span>
            </div>
            <div className="interes">
              <i className="fa-solid fa-plane"></i>
              <span>Viajar</span>
            </div>
            <div className="interes">
              <i className="fa-solid fa-book"></i>
              <span>Lectura</span>
            </div>
            <div className="interes">
              <i className="fa-solid fa-car"></i>
              <span>Automóviles</span>
            </div>
            <div className="interes">
              <i className="fa-solid fa-camera"></i>
              <span>Fotografía</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
