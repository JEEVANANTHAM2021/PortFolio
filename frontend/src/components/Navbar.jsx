import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-slate-900/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Space reserved for animated profile image from Hero */}
          <div className={`flex items-center gap-3 transition-all duration-700 ease-in-out ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="w-11 h-11"></div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            {/* About - starts off-screen left, moves to center on scroll */}
            <a 
              href="#projects"
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-slate-200 hover:text-white transition-colors duration-300"
              style={{
                transform: scrolled ? 'translateX(0)' : 'translateX(-900px)',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Projects
            </a>

            <a 
              href="#about"
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-slate-200 hover:text-white transition-colors duration-300"
              style={{
                transform: scrolled ? 'translateX(0)' : 'translateX(-500px)',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              About
            </a>

            {/* Resume - always stays at navbar-end */}
            <a 
              href="#resume"
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-slate-200 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}