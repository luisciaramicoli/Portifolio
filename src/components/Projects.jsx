import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SAT',
      description: 'Sistema Administrativo Tecnológico, projeto de TCC apresentado no ano de 2024 na qual tem como objetivo administrar pequenas e médias empresas.',
      image: '/novaDash.png', // Caminho para a imagem do projeto SAT
    },
    {
      id: 2,
      title: 'Bengala Multissensorial',
      description: 'A Bengala Multissensorial tem como objetivo ajudar e auxiliar pessoas com deficiência visual, na qual foi apresentado em diversas feiras científicas e entrevistas em canais de TV.',
      image: '/bengala.jpeg', // Caminho para a imagem do projeto Bengala
    },
  
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
