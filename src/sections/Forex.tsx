import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Shield, Zap, Smartphone } from 'lucide-react';

const features = [
  { icon: Globe, text: 'Deep liquidity' },
  { icon: Shield, text: 'Secure trade execution' },
  { icon: Zap, text: 'Advanced trading tools' },
  { icon: Smartphone, text: 'Multi-device access (Web & Mobile)' },
];

export default function Forex() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="forex"
      ref={sectionRef}
      className="relative section-padding bg-bluestone-dark overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-bluestone-accent/10 rounded-full blur-3xl animate-orb-1" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-bluestone-royal/10 rounded-full blur-3xl animate-orb-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span
              className={`inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Forex Trading
            </span>
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '100ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Global Forex Market Access
            </h2>
            <p
              className={`text-lg text-white/70 mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '200ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Trade major, minor, and exotic currency pairs with tight spreads and fast execution.
              Whether you are a beginner or professional trader, Blue Stone provides stable
              infrastructure for consistent performance.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white/80 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className={`btn-primary flex items-center gap-2 group animate-pulse-glow transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '700ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Open Live Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-400" />
            </button>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{
              transitionDelay: '300ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Simulated Trading Chart */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">EUR/USD</h3>
                    <p className="text-green-400 text-sm">+0.45% today</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white font-display">1.0847</div>
                    <div className="text-xs text-white/50">Spread: 0.1 pip</div>
                  </div>
                </div>
                {/* Chart SVG */}
                <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="forexChartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3E90C2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3E90C2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 Q50,50 100,55 T200,40 Q250,30 300,35 T400,20"
                    fill="none"
                    stroke="#3E90C2"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,60 Q50,50 100,55 T200,40 Q250,30 300,35 T400,20 L400,100 L0,100 Z"
                    fill="url(#forexChartGrad)"
                  />
                </svg>
                {/* Currency Pairs */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { pair: 'GBP/USD', price: '1.2634', change: '+0.12%' },
                    { pair: 'USD/JPY', price: '149.82', change: '-0.08%' },
                    { pair: 'AUD/USD', price: '0.6542', change: '+0.23%' },
                    { pair: 'USD/CHF', price: '0.8891', change: '+0.05%' },
                  ].map((item) => (
                    <div key={item.pair} className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-400">
                      <div className="text-sm font-medium text-white">{item.pair}</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-white/70 text-sm">{item.price}</span>
                        <span className={`text-xs ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
