import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Projeto 1', description: 'Uma aplicação incrível para resolver problemas do dia a dia.' },
    { id: 2, title: 'Projeto 2', description: 'Um sistema avançado para gerenciamento eficiente.' },
    { id: 3, title: 'Projeto 3', description: 'Uma ferramenta criativa para facilitar a vida de desenvolvedores.' },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
