import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, GraduationCap, ArrowRight } from 'lucide-react';
import Scene3D from './Scene3D';
import './Hero.css';

const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const name = "Ciaramicoli";
  
  return (
    <section id="hero" className="hero">
      <Scene3D />
      <div className="spotlight"></div>
      
      <div className="hero-container section-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot"></span>
            Disponível para Pesquisa & Desenvolvimento
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Luis <br />
            <span className="text-gradient">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <strong>Sistemas Inteligentes & IA</strong>. 
            Bolsista de Iniciação Científica FAPESP, focado em transformar 
            o agronegócio e a acessibilidade através da tecnologia.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <MagneticButton href="#projects" className="btn btn-primary">
              Ver Projetos <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-outline">
              Contatar
            </MagneticButton>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.a 
              href="https://github.com/luisciaramicoli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              title="GitHub"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/luis-ciaramicoli/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              title="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="http://lattes.cnpq.br/1341430292224425" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              title="Lattes"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <GraduationCap size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
