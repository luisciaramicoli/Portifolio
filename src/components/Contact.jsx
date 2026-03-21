import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MessageSquare, MapPin, Send, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const ContactMethod = ({ method }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    if (method.copyable) {
      e.preventDefault();
      navigator.clipboard.writeText(method.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      className="method-card-wrapper"
      whileHover={{ y: -5 }}
    >
      <a
        href={method.link}
        target="_blank"
        rel="noopener noreferrer"
        className="method-item-interactive glass-card"
      >
        <div className="method-icon-box">
          {method.icon}
        </div>
        <div className="method-details">
          <span className="method-label">{method.label}</span>
          <span className="method-value">{method.value}</span>
        </div>
        
        <div className="method-actions-icons">
          {method.copyable && (
            <button 
              className={`action-btn-mini ${copied ? 'copied' : ''}`} 
              onClick={handleCopy}
              title="Copiar"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          )}
          <ExternalLink size={14} className="external-icon" />
        </div>
      </a>
    </motion.div>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      label: 'Email Profissional',
      value: 'luisgustavobonfim996@gmail.com',
      link: 'mailto:luisgustavobonfim996@gmail.com',
      icon: <Mail size={20} />,
      copyable: true
    },
    {
      id: 2,
      label: 'LinkedIn',
      value: 'luis-ciaramicoli',
      link: 'https://www.linkedin.com/in/luis-ciaramicoli/',
      icon: <Linkedin size={20} />,
      copyable: false
    },
    {
      id: 3,
      label: 'GitHub',
      value: 'luisciaramicoli',
      link: 'https://github.com/luisciaramicoli',
      icon: <Github size={20} />,
      copyable: false
    },
    {
      id: 4,
      label: 'WhatsApp',
      value: '+55 (14) 99754-7353',
      link: 'https://wa.me/5514997547353',
      icon: <MessageSquare size={20} />,
      copyable: true
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-layout">
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-tag">
              <Send size={16} />
              <span>Networking</span>
            </div>
            <h2 className="section-title">Vamos Construir algo <span className="text-gradient">Inovador?</span></h2>
            <p className="contact-description">
              Estou sempre em busca de novos desafios em <strong>IA, IoT e Pesquisa Científica</strong>. 
              Se você tem um projeto interessante ou uma oportunidade, vamos conversar!
            </p>

            <div className="availability-card glass-card">
              <div className="status-dot-pulse"></div>
              <div className="status-text">
                <strong>Disponibilidade Imediata</strong>
                <span>Aberto a propostas para Dev & Pesquisa</span>
              </div>
            </div>

            <div className="location-badge">
              <MapPin size={18} className="text-primary" />
              <div>
                <strong>Tupã, SP</strong>
                <span>Atuação Remota ou Híbrida</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-methods-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => (
              <ContactMethod key={method.id} method={method} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
