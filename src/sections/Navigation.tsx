import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Forex', href: '#forex' },
  { name: 'Funding', href: '#funding' },
  { name: 'IB Program', href: '#ib-program' },
  { name: 'Copy Trading', href: '#copy-trading' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(true);

  const isScrolled = scrollY > 50;

  useEffect(() => {
    // Track scroll state for background styling
    if (scrollY > 100) {
      setIsVisible(true);
      setHasScrolled(true);
    } else {
      setIsVisible(true);
      setHasScrolled(true);
    }
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Navigation with Slide-Down Effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-bluestone-deep/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-white/10 backdrop-blur-md border-b border-white/5'
        }`}
        style={{
          transform: 'translateY(0)',
          opacity: 1,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center group"
            >
              <img
                src="/logo.png"
                alt="Bluestone"
                className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-400"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-400 nav-underline"
                  style={{ 
                    animationDelay: `${index * 80}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`,
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="hidden lg:flex items-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            >
              <button className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-400">
                Login
              </button>
              <button className="btn-primary text-sm py-2.5 px-5 animate-pulse-glow">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-bluestone-deep/98 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-lg font-medium text-white/80 hover:text-white transition-colors duration-400"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-3 text-center text-white/80 border border-white/20 rounded-xl hover:bg-white/5 transition-colors duration-400">
                Login
              </button>
              <button className="w-full py-3 text-center btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
