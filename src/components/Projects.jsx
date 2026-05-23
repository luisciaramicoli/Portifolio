import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, FileText, ChevronRight, BrainCircuit, CloudSun, Accessibility, X, Info, Filter, CheckCircle2, Copy, Check } from 'lucide-react';
import './Projects.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content glass-card"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Fechar">
              <X size={24} />
            </button>
            <div className="modal-body">
              <div className="modal-sidebar">
                <div className="modal-image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="modal-links-vertical">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                    <Github size={18} /> Repositório GitHub
                  </a>
                  {project.links.demo !== '#' && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                      <ExternalLink size={18} /> Visualizar Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="modal-main-content">
                <div className="modal-header">
                  <div className="modal-badge-row">
                    <span className="modal-category-tag">
                      {project.icon}
                      {project.subtitle}
                    </span>
                    <span className="modal-status-tag">Concluído</span>
                  </div>
                  <h2>{project.title}</h2>
                </div>

                <div className="modal-scroll-area">
                  <section className="modal-section">
                    <h3><Info size={18} /> Visão Geral</h3>
                    <p>{project.longDescription}</p>
                  </section>

                  <section className="modal-section">
                    <h3><CheckCircle2 size={18} /> Objetivos Alcançados</h3>
                    <ul className="deliverables-list">
                      {project.deliverables.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          <Check size={14} className="text-primary" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>

                  <section className="modal-section">
                    <h3><Layers size={18} /> Tecnologias Utilizadas</h3>
                    <div className="modal-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="modal-tag-item">#{tag}</span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      layout
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-image-container" style={{ transform: "translateZ(40px)" }}>
        <img src={project.image} alt={project.title} className="project-img" />
        <div className="project-overlay">
           <div className="project-links">
              <button onClick={() => onOpen(project)} className="project-link-icon" title="Ver Detalhes">
                <Info size={20} />
              </button>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="GitHub">
                <Github size={20} />
              </a>
           </div>
        </div>
        <div className="project-category-badge">
          {project.icon}
          {project.subtitle}
        </div>
      </div>
      <div className="project-info" style={{ transform: "translateZ(20px)" }}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="card-actions">
          <div className="project-tags">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <button className="btn-text-interactive" onClick={() => onOpen(project)}>
            Detalhes <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'IA', 'IoT', 'Científico'];

  const projects = [
    {
      id: 1,
      category: 'Científico',
      title: 'Pesquisa FAPESP - IA & Ciência',
      subtitle: 'Bolsista FAPESP | LLMs',
      description: 'Plataforma para automatização de cientometria e curadoria utilizando LLMs.',
      longDescription: 'Este projeto de Iniciação Científica foca na otimização de fluxos de pesquisa acadêmica. Desenvolvi um pipeline que utiliza modelos de linguagem de larga escala para extrair metadados, realizar análise de citações e organizar bancos de dados vetoriais (RAG) para pesquisadores da FATEC Shunji Nishimura.',
      deliverables: [
        'Arquitetura RAG com integração de Gemini API e Pinecone.',
        'Algoritmo de filtragem automática de artigos irrelevantes.',
        'Interface para visualização de tendências de pesquisa.'
      ],
      image: '/curadoria.png',
      tags: ['Python', 'LLMs', 'Gemini API', 'VectorDB'],
      links: { github: 'https://github.com/luisciaramicoli', demo: '#' },
      icon: <BrainCircuit size={18} />
    },
    {
      id: 2,
      category: 'IA',
      title: 'Projeto climAgro',
      subtitle: 'IA no Agronegócio',
      description: 'IA especializada para análise de dados meteorológicos e assistência na produção agrícola.',
      longDescription: 'O climAgro é uma solução robusta que processa volumes massivos de dados meteorológicos para fornecer recomendações precisas aos agricultores. O sistema utiliza FastAPI no backend e modelos preditivos para mitigar riscos climáticos na região de Tupã e arredores.',
      deliverables: [
        'Processamento de dados via FastAPI e integração com APIs meteorológicas.',
        'Sistema de alertas via WhatsApp para eventos climáticos extremos.',
        'Dashboards interativos para monitoramento de plantio.'
      ],
      image: '/ClimAgro.png',
      tags: ['FastAPI', 'DataScience', 'Python', 'AgroTech'],
      links: { github: 'https://github.com/luisciaramicoli', demo: '#' },
      icon: <CloudSun size={18} />
    },
    {
      id: 3,
      category: 'IoT',
      title: 'Bengala Multissensorial',
      subtitle: 'IoT & Acessibilidade',
      description: 'Dispositivo inteligente para deficientes visuais. Top 20 Samsung Solve for Tomorrow.',
      longDescription: 'A Bengala Canna é um dispositivo IoT vestível que utiliza ultrassom para detectar obstáculos aéreos e terrestres, fornecendo feedback tátil via vibração. O projeto recebeu destaque nacional pela sua viabilidade e impacto social.',
      deliverables: [
        'Circuito impresso otimizado para baixo consumo energético.',
        'Programação C++ de baixo nível para sensores ultrassônicos.',
        'Reconhecimento Nacional Top 20 Samsung Solve for Tomorrow.'
      ],
      image: '/bengala.jpeg',
      tags: ['Arduino', 'C++', 'Hardware', 'Inclusão'],
      links: { github: 'https://github.com/luisciaramicoli', demo: '#' },
      icon: <Accessibility size={18} />
    },
  ];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const publications = [
    {
      id: 1,
      title: 'MULTISSENSORIAL WALK: CANNA Project',
      journal: 'Journal of Engineering Research, 2023',
      url: 'https://atenaeditora.com.br/catalogo/artigo-revista/bengala-multissensorial-para-deficientes-visuais-projeto-canna',
    },
    {
      id: 2,
      title: 'Demandas para a Educação Brasileira',
      journal: 'Atena Editora, 2023',
      url: 'https://atenaeditora.com.br/catalogo/ebook/demandas-para-a-educacao-brasileira-no-seculo-xxi-desafios-emergentes',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <div className="section-tag-center">
            <Layers size={16} />
            <span>Portfólio de Inovação</span>
          </div>
          <h2 className="section-title text-center">Pesquisa & <span className="text-gradient">Desenvolvimento</span></h2>
          <p className="section-subtitle text-center">Projetos científicos e soluções tecnológicas de alto impacto.</p>
        </motion.div>

        {/* Filter System */}
        <div className="filter-container">
          <Filter size={16} className="filter-icon" />
          <div className="filter-buttons">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="projects-grid" 
          style={{ perspective: "1000px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        <div className="publications-section">
          <div className="section-tag">
            <FileText size={16} />
            <span>Produção Acadêmica</span>
          </div>
          <h3 className="sub-title">Publicações e Artigos</h3>
          <div className="pub-grid">
            {publications.map((pub, index) => (
              <motion.a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card glass-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 15, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <div className="pub-icon-wrapper">
                  <FileText size={20} className="pub-icon" />
                </div>
                <div className="pub-content">
                  <h4>{pub.title}</h4>
                  <span>{pub.journal}</span>
                </div>
                <div className="pub-arrow">
                  <ChevronRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
