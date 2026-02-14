import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MarketTicker from './sections/MarketTicker';
import About from './sections/About';
import Forex from './sections/Forex';
import Funding from './sections/Funding';
import IBProgram from './sections/IBProgram';
import CopyTrading from './sections/CopyTrading';
import Security from './sections/Security';
import WhyChoose from './sections/WhyChoose';
import ClientJourney from './sections/ClientJourney';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bluestone-dark text-white overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <MarketTicker />
      <About />
      <Forex />
      <Funding />
      <IBProgram />
      <CopyTrading />
      <Security />
      <WhyChoose />
      <ClientJourney />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
