import React from 'react';
import Cassoussel from 'react-cassoussel';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Carrossel de imagens utilizando o Cassoussel */}
        <Cassoussel>
          <div className="cassoussel-item">
            <img src="https://via.placeholder.com/800x400?text=Imagem+1" alt="Imagem 1" />
          </div>
          <div className="cassoussel-item">
            <img src="https://via.placeholder.com/800x400?text=Imagem+2" alt="Imagem 2" />
          </div>
          <div className="cassoussel-item">
            <img src="https://via.placeholder.com/800x400?text=Imagem+3" alt="Imagem 3" />
          </div>
        </Cassoussel>

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
