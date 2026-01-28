import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src="/img/foto.jpeg" alt="Johan Sebastian Mina" />
        </div>
        <h1>Johan Sebastian Mina</h1>
        <h2>Analista y Desarrollador en Software</h2>
        <div className="redes">
          <a href="https://www.facebook.com/johansebastian.minalopez" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://x.com/johanSebas2907" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-mina-23423a2b2/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sebas-2901" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
