import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">Sobre Mim</h2>

        <div className="profile-section">
          <img
            src="perfil.PNG"
            alt="Foto de perfil"
            className="profile-img"
          />
          <div className="profile-info">
            <p className="profile-name">Luis Gustavo Bonfim Ciaramicoli</p>
            <p className="profile-location">Tupã, 17 anos</p>
          </div>
        </div>

        <div className="about-text-section">
          <p className="about-text">
            Meu nome é <strong>Luis Gustavo Bonfim Ciaramicoli</strong>, tenho 17 anos e sou apaixonado por tecnologia e desenvolvimento de sistemas.
            Atualmente, busco minha primeira oportunidade profissional na área de informática para aplicar os conhecimentos adquiridos ao longo da minha formação e projetos práticos.
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

        <div className="info-section">
          <div className="info-column">
            <h3 className="info-title">Formação Acadêmica</h3>
            <ul className="info-list">
              <li>Graduação em andamento em Sistemas Inteligentes - FATEC</li>
              <li>Técnico em Desenvolvimento de Sistemas - ETEC Massuyuki Kawano (2024)</li>
              <li>Ensino Médio - ETEC Massuyuki Kawano (2021)</li>
            </ul>
          </div>
          <div className="info-column">
            <h3 className="info-title">Idiomas</h3>
            <ul className="info-list">
              <li>Português (Nativo)</li>
              <li>Inglês (Intermediário)</li>
            </ul>
          </div>
        </div>

        <div className="events-section">
          <h3 className="info-title">Eventos e Premiações</h3>
          <ul className="info-list">
            <li>Campus Party Brasil 16 (2024)</li>
            <li>Feira Tecnológica do Centro Paula Souza (FETEPS) (2024)</li>
            <li>Solve for Tomorrow Brasil (2024)</li>
            <li>Campus Party Brasil 15 (2023)</li>
            <li>XVI Congresso de Iniciação Científica Júnior (2023)</li>
            <li>XV Congresso de Iniciação Científica Júnior (2022)</li>
          </ul>
        </div>

        <div className="carousel-section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="Screenshot_20250104-172848.png"
                alt="Imagem 1"
              />
              <Carousel.Caption>
                <h3>Bom dia São Paulo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.png"
                alt="Imagem 2"
              />
              <Carousel.Caption>
                <h3>CPBR16</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="Screenshot_20250104-172807.png"
                alt="Imagem 3"
              />
              <Carousel.Caption>
                <h3>CPBR16</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="feteps.jpg"
                alt="Imagem 3"
              />
              <Carousel.Caption>
                <h3>FETEPS</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="campus15.jpg"
                alt="Imagem 3"
              />
              <Carousel.Caption>
                <h3>CPBR15</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
