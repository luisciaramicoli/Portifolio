import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importar o Carousel do react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar o CSS do Bootstrap
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
     
    <div className="about-container">
      {/* Carrossel de imagens */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Screenshot_20250104-172848.png"
            alt="Imagem 1"
          />
          <Carousel.Caption>
            <h3>Imagem 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/2.png"
            alt="Imagem 2"
          />
          <Carousel.Caption>
            <h3>Imagem 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Screenshot_20250104-172807.png"
            alt="Imagem 3"
          />
          <Carousel.Caption>
            <h3>Imagem 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
       {/* Adicionando a imagem do perfil */}
       <div className="profile-circle">
        <img
          src="perfil.PNG" // Substitua pelo link da sua imagem
          alt="Foto de perfil"
          className="profile-img"
        />
        <div className="profile-info">
          <p className="profile-name">Luis Gustavo Bonfim Ciaramicoli</p>
          <p className="profile-location">Tupã, 17 anos</p>
        </div>
      </div>
  
      {/* Conteúdo sobre mim */}
      <h2 className="about-title">Sobre Mim</h2>
      <p className="about-text">
        Meu nome é <strong>Luis Gustavo Bonfim Ciaramicoli</strong>, tenho 17 anos e sou apaixonado por tecnologia e desenvolvimento de sistemas.
        Atualmente, busco minha primeira oportunidade profissional na área de informática para aplicar os conhecimentos adquiridos ao longo da minha formação e projetos práticos.
      </p>
      <p className="about-text">
        Sou formado em <strong>Técnico em Desenvolvimento de Sistemas</strong> pela ETEC Prof. Massuyuki Kawano (2024), onde desenvolvi habilidades sólidas na criação de sistemas web e aplicativos móveis.
        Durante minha jornada acadêmica, participei de eventos como o <strong>CICFAI</strong> e a <strong>Campus Party</strong>, além de liderar projetos inovadores.
      </p>
      <p className="about-text">
        Fui líder no desenvolvimento do projeto <strong>Bengala Multissensorial</strong>, uma iniciativa voltada para auxiliar pessoas com deficiência visual.
        Este projeto não apenas demonstrou minha capacidade de liderança e inovação, mas também me proporcionou experiências valiosas, como dar entrevistas para redes de televisão, incluindo a TV Tem, Band TV e Record.
      </p>
      <p className="about-text">
        Minhas principais habilidades incluem: <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong> e outras tecnologias relacionadas ao desenvolvimento de software.
        Sou comprometido com a excelência, inovação e aprendizado contínuo, sempre buscando superar desafios e contribuir para o sucesso das equipes e projetos dos quais faço parte.
      </p>
    </div>
  </section>
  
  );
};

export default About;
