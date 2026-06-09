import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { User, Briefcase, GraduationCap, Code, Rocket, Award } from 'lucide-react';
import './About.css';

const SkillItem = ({ skill, index }) => {
  return (
    <motion.div 
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        y: -10,
        backgroundColor: "rgba(59, 130, 246, 0.15)",
        borderColor: "var(--primary-color)",
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
      }}
    >
      <div className="skill-content">
        <Code size={14} className="skill-icon" />
        <span>{skill.name}</span>
      </div>
      <div className="skill-category-label">{skill.category}</div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const achievements = [
    { year: '2026', title: 'Estágio na Movement (Brudden)', description: 'Inovação: Discovery, prototipação e desenvolvimento mobile com Flutter.', type: 'Estágio' },
    { year: '2026', title: 'climAgro / CentralAgro', description: 'IA especializada para análise meteorológica agrícola.', type: 'Trabalho' },
    { year: '2025', title: 'Bolsista FAPESP', description: 'Pesquisa em automatização de cientometria e LLMs.', type: 'Pesquisa' },
    { year: '2024', title: 'Campus Party 16', description: 'Bengala Multissensorial Canna em destaque.', type: 'Evento' },
    { year: '2024', title: 'Samsung Top 20', description: 'Reconhecimento Nacional Solve for Tomorrow.', type: 'Prêmio' },
    { year: '2022', title: 'Bengala Canna', description: 'Início do projeto de tecnologia assistiva.', type: 'Idealização' },
  ];

  const skills = [
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Python', category: 'Backend' },
    { name: 'FastAPI', category: 'API' },
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Dev' },
    { name: 'Gemini API', category: 'IA' },
    { name: 'LLMs', category: 'IA' },
    { name: 'Arduino', category: 'IoT' },
    { name: 'IoT', category: 'Tech' },
    { name: 'Linux', category: 'OS' }
  ];

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="section-container">
        <div className="about-grid">
          {/* Bio Section */}
          <div className="about-bio">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              <User size={16} />
              <span>Sua Jornada Profissional</span>
            </motion.div>
            
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Transformando Dados em <span className="text-gradient">Impacto Real</span>
            </motion.h2>

            <div className="bio-content glass-card">
              <p>
                Tecnólogo em <strong>Sistemas Inteligentes</strong> pela FATEC, com foco em 
                <strong> Inteligência Artificial</strong> aplicada a desafios sociais e produtivos.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <Rocket className="stat-icon" />
                  <div>
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Anos P&D</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Award className="stat-icon" />
                  <div>
                    <span className="stat-number">Top 20</span>
                    <span className="stat-label">Samsung SFT</span>
                  </div>
                </div>
              </div>

              <h3 className="sub-title">Arsenal Técnico</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="about-details">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              <Briefcase size={16} />
              <span>Linha do Tempo</span>
            </motion.div>
            <h3 className="sub-title">Experiência & Marcos</h3>
            
            <div className="timeline-interactive">
              <motion.div 
                className="timeline-progress-line" 
                style={{ height: timelineY }}
              />
              <div className="timeline-items">
                {achievements.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="timeline-item-interactive"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-marker">
                      <div className="marker-inner" />
                    </div>
                    <div className="timeline-info glass-card">
                      <div className="timeline-header-flex">
                        <span className="timeline-tag">{item.type}</span>
                        <span className="timeline-year">{item.year}</span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
