import { useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='h-screen'>
      {/* Animated Profile Image - travels from hero right corner to navbar left */}
      <div 
        className="fixed z-50 transition-all duration-700 ease-in-out"
        style={{
          top: scrolled ? '1.5rem' : '50%',
          left: scrolled ? '1rem' : '2%',
          transform: scrolled ? 'translate(0, 0)' : 'translate(0, -50%)',
        }}
      >
        <div className="relative">
          {/* Image Container - large rectangle (half page) transforms to small circle */}
          <div 
            className="overflow-hidden shadow-2xl ease-in-out"
            style={{
              width: scrolled ? '50px' : '640px', // Half viewport width when in hero
              height: scrolled ? '50px' : '420px', // Most of viewport height when in hero
              borderRadius: scrolled ? '50%' : '12px', // Rectangle with subtle rounding
              transition: scrolled 
                ? 'width 0.7s ease-in-out, height 0.7s ease-in-out, border-radius 0.7s ease-in-out 0.5s' 
                : 'width 0.7s ease-in-out, height 0.7s ease-in-out, border-radius 0.7s ease-in-out',
            }}
          >
            <img 
              src={assets}
              alt="Profile" 
              className="w-full h-full object-cover border-2 border-white/20"
              style={{
                borderRadius: scrolled ? '50%' : '12px',
                transition: scrolled 
                  ? 'border-radius 0.7s ease-in-out 0.5s'
                  : 'border-radius 0.7s ease-in-out',
              }}
            />
          </div>

          {/* Name - appears beside image when scrolled to navbar */}
          <div 
            className={`absolute whitespace-nowrap font-medium tracking-wide text-slate-100 transition-all duration-700 ease-in-out ${
              scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              top: '50%',
              left: 'calc(100 + 2.75rem)',
              transform: 'translateY(-50%)',
              fontSize: '1.05rem',
              visibility: scrolled ? 'visible' : 'hidden', // Completely hidden when not scrolled
            }}
          >
            DJ.
          </div>
        </div>
      </div>

    </div>
  );
}