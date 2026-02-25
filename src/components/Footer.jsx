import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div id="pochoclo">
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-mina-23423a2b2/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/sebas-2901" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p>© {currentYear} Johan Sebastian Mina López</p>
    </footer>
  );
};

export default Footer;
