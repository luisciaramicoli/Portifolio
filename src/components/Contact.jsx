import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contato</h2>
        <p className="contact-text">
          Caso queira entrar em contato, aqui estão minhas informações:
        </p>
        
        <div className="contact-info">
          <p>
            <strong>Email:</strong> 
            <a href="mailto:luisgustavobonfim996@gmail.com" className="contact-link"> luisgustavobonfim996@gmail.com</a>
          </p>
          <p>
            <strong>Telefone:</strong> 
            <a href="tel:+5514997547353" className="contact-link"> +55 (14) 99754-7353</a>
          </p>
          <p>
            <strong>Endereço:</strong> 
            Caingangues 1809, Tupã, SP, 17603-010
          </p>
        </div>

        <div className="social-media">
          <p>Redes Sociais:</p>
          <a href="https://github.com/luisciaramicoli" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luis-g-a22657283" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
