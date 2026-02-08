import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media-footer">
          <motion.a
            href="https://github.com/luisciaramicoli"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-footer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/luis-g-a22657283"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-footer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            LinkedIn
          </motion.a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Luis Gustavo Bonfim Ciaramicoli. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
