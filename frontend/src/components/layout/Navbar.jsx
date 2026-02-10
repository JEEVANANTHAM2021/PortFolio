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
          ? 'bg-[#faf7ed]/95 backdrop-blur-xl border-b border-black/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Space reserved for animated profile image from Hero */}
          <div className={`flex items-center gap-3 transition-all duration-700 ease-in-out ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            {/* Profile image will appear here from Hero component */}
            <div className="w-11 h-11"></div>
            {/* Name will appear here from Hero component */}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            {/* Projects - moves from off-screen left */}
            <a 
              href="#projects"
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors duration-300"
              style={{
                transform: scrolled ? 'translateX(0)' : 'translateX(-900px)',
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Projects
            </a>

            {/* About - moves from off-screen left */}
            <a 
              href="#about"
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors duration-300"
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
              className="relative font-medium text-sm tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}