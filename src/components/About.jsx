import './About.css';

const About = () => {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <div className="fila">
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <strong>Cumpleaños</strong>
                29-01-2007
              </li>
              <li>
                <strong>Email</strong>
                sm03122018@gmail.com
              </li>
              <li>
                <strong>Objetivos</strong><br/>
                -Ser un programador Full Stack<br/>
                -Tener proyectos a gran escala individuales<br/>
              </li>
              <li>
                <strong>Cargo</strong>
                <span>Aprendiz SENA</span>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <i className="fa-solid fa-gamepad"></i>
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-headphones"></i>
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-plane"></i>
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-book"></i>
                <span>LIBROS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-car"></i>
                <span>AUTOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-camera"></i>
                <span>FOTOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
