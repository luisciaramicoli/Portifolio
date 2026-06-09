import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.project-card') ||
        target.closest('.cv-button') ||
        target.closest('.social-icon-link') ||
        target.closest('.btn');

      const isTextBlock =
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.classList.contains('text-gradient');

      setIsHovered(isInteractive);
      setIsText(isTextBlock);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 2.5 : isText ? 1.5 : 1,
          backgroundColor: isText ? '#8b5cf6' : '#3b82f6'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : isText ? 0.5 : 1,
          opacity: isHovered ? 0.3 : 0.8,
          borderColor: isText ? '#8b5cf6' : '#3b82f6'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
