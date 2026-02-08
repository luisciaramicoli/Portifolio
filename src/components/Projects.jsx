import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SAT',
      description: 'Sistema Administrativo Tecnológico, projeto de TCC apresentado no ano de 2024 na qual tem como objetivo administrar pequenas e médias empresas.',
      image: '/novaDash.png',
    },
    {
      id: 2,
      title: 'Bengala Multissensorial',
      description: 'A inclusão de pessoas com deficiência visual no contexto brasileiro é uma demanda crucial. A bengala multissensorial Canna surge como uma resposta inovadora para promover a independência e a mobilidade, equipada com sensores avançados como Arduino e Esp8266 para detectar obstáculos no ambiente, oferecendo segurança e autonomia.',
      image: '/bengala.jpeg',
    },
  ];

  const publications = [
    {
      id: 1,
      title: 'MULTISSENSORIAL WALK: CANNA Project',
      journal: 'Journal of Engineering Research, v. 3, p. 2-4, 2023.',
      url: 'https://www.atenaeditora.com.br/post/e-book-demandas-para-a-educacao-brasileira-no-seculo-xxi-desafios-emergentes',
    },
    {
      id: 2,
      title: 'Demandas para a educação brasileira no século XXI: desafios emergentes',
      publisher: 'Atena Editora, 2023.',
      url: 'https://www.atenaeditora.com.br/post/e-book-demandas-para-a-educacao-brasileira-no-seculo-xxi-desafios-emergentes',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="project-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <p className="project-description">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="publications-container">
        <h2 className="projects-title">Minhas Publicações</h2>
        <div className="project-list">
          {publications.map((publication) => (
            <motion.a
              key={publication.id}
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="project-title">{publication.title}</h3>
              <p className="project-description">{publication.journal || publication.publisher}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
