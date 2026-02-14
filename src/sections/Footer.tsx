import { useEffect, useRef, useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Send,
  Shield,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Forex', href: '#forex' },
  { name: 'Funding', href: '#funding' },
  { name: 'IB Program', href: '#ib-program' },
  { name: 'Copy Trading', href: '#copy-trading' },
  { name: 'Contact', href: '#contact' },
];

const legal = [
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Risk Disclosure', href: '#' },
  { name: 'IB Agreement', href: '#' },
  { name: 'Funding Rules', href: '#' },
];

const support = [
  { name: 'Help Center', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Support', href: '#contact' },
  { name: 'Blog', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative bg-bluestone-deep pt-20 pb-8 overflow-hidden"
    >
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div
            className={`col-span-2 md:col-span-3 lg:col-span-1 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Logo */}
            <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Bluestone"
                className="h-10 w-auto object-contain"
              />
            </a>
            
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              A complete trading ecosystem offering Forex access, capital funding, IB partnership, and advanced copy trading — all under one trusted platform.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-400 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + index * 50}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h4 className="text-white font-semibold font-display mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.name}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + index * 50}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-400 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h4 className="text-white font-semibold font-display mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li 
                  key={link.name}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 50}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-400 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '300ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h4 className="text-white font-semibold font-display mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li 
                  key={link.name}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 50}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-400 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`col-span-2 md:col-span-1 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h4 className="text-white font-semibold font-display mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get market insights and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors duration-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-white transition-colors duration-400 hover:scale-105"
                style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors duration-400">
                <Mail className="w-4 h-4 text-gold" />
                support@bluestone.com
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors duration-400">
                <Phone className="w-4 h-4 text-gold" />
                +1 (888) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors duration-400">
                <MapPin className="w-4 h-4 text-gold" />
                London, UK
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8 animate-divider" />

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: '500ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-white/50">
            <span>&copy; 2026 Blue Stone. All Rights Reserved.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#" className="text-white/50 hover:text-gold transition-colors duration-400">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors duration-400">
              Terms & Conditions
            </a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors duration-400">
              Risk Disclosure
            </a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors duration-400">
              IB Agreement
            </a>
          </div>
        </div>

        {/* Risk Warning */}
        <div
          className={`mt-8 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-xs text-white/50 leading-relaxed">
              <strong className="text-white/70">Risk Warning:</strong> Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. 
              You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. 
              Past performance is not indicative of future results. Please read our full Risk Disclosure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
