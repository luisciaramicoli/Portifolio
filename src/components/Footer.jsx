import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, GraduationCap, ChevronRight, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-brand">
             <div className="footer-logo">
               <span className="logo-text">Luis Ciaramicoli</span>
               <div className="logo-dot"></div>
             </div>
             <p className="footer-tagline">Sistemas Inteligentes & Pesquisa Científica FAPESP.</p>
             <div className="footer-socials">
                <a href="https://github.com/luisciaramicoli" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/luis-ciaramicoli/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Linkedin size={18} /></a>
                <a href="http://lattes.cnpq.br/1341430292224425" target="_blank" rel="noopener noreferrer" className="footer-social-link"><GraduationCap size={18} /></a>
             </div>
          </div>
          
          <div className="footer-nav-groups">
            <div className="nav-group">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#hero">Início <ChevronRight size={12} /></a></li>
                <li><a href="#about">Sobre <ChevronRight size={12} /></a></li>
                <li><a href="#projects">Projetos <ChevronRight size={12} /></a></li>
                <li><a href="#contact">Contato <ChevronRight size={12} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Luis Ciaramicoli. 
          </p>
          <div className="footer-made-with">
            <span>Inovação com propósito</span>
            <Heart size={14} className="heart-icon" />
            <span>Tupã - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
