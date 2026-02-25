import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#inicio">Portafolio</a>
        </div>
        <nav id="nav" className={menuVisible ? 'responsive' : ''}>
          <ul>
            <li><a href="#inicio" onClick={closeMenu}>INICIO</a></li>
            <li><a href="#sobremi" onClick={closeMenu}>SOBRE MI</a></li>
            <li><a href="#skills" onClick={closeMenu}>HABILIDADES</a></li>
            <li><a href="#proyecto" onClick={closeMenu}>PROYECTOS</a></li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
