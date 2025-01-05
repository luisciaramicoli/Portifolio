import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="profile_circle">
        <img
          src="perfil.PNG" // Substitua pelo link da sua imagem
          alt="Foto de perfil"
          className="profile_img"
        />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isMenuOpen ? 'active' : ''}>
        <a href="#about">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
