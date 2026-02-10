import React from 'react'
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import CurvedSection from '../ui/Curved';
import ScrollReveal from '../ui/RevealText';

const Intro = () => {
  const socials = [
    { icon: Instagram, url: "https://instagram.com/jeeva_2Vx03", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/in/your_username", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/your_username", label: "GitHub" },
    { icon: MessageCircle, url: "https://wa.me/917418270442", label: "WhatsApp" },
  ];

  return (
    <CurvedSection curve="bl" className='bg-red-300 border-0'>
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-7xl">

          {/* Role */}
          <ScrollReveal textClassName="font-['sans-serif'] text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase">
            React Developer
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal textClassName="font-['sans-serif'] font-bold leading-none text-black text-[20vw] md:text-[13vw]">
            Jeevanantham
          </ScrollReveal>

          {/* Description */}
          <div className="flex justify-end">
            <ScrollReveal
              textClassName="font-['sans-serif'] mt-6 text-gray-600 text-base md:text-lg max-w-xl"
            >
              A curious React Developer who believes in constant learning, turning complex problems into elegant components and every idea into a scalable web experience.
            </ScrollReveal>
          </div>

          {/* Social Links (NO ScrollReveal here) */}
          <div className="flex gap-4 mt-8 justify-end">
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="btn btn-circle btn-neutral"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </CurvedSection>
  );
};

export default Intro;
