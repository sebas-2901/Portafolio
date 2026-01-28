import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div id="pochoclo">
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
      <p>©2024 Johan Sebastian Mina López. Todos los derechos Reservados</p>
    </footer>
  );
};

export default Footer;
