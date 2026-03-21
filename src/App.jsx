import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

const App = () => {
  useEffect(() => {
    // Forçar o scroll para o topo ao recarregar
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Garantir scroll no topo com instant para evitar flash
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Fallback com pequeno delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
