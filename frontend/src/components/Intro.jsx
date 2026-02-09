import React from 'react'
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";


const Intro = () => {
  const socials = [
  { icon: Instagram, url: "https://instagram.com/jeeva_2Vx03", label: "Instagram" },
  { icon: Linkedin, url: "https://linkedin.com/in/your_username", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/your_username", label: "GitHub" },
  { icon: MessageCircle, url: "https://wa.me/917418270442", label: "WhatsApp" },
];
  return (
      <div className="min-h-screen flex items-center justify-center px-4 border shadow-4xl bg-[white] rounded-bl-4xl">
        <div className="w-full max-w-7xl text-center md:text-left ">

          {/* Small role text */}
          <p className="text-sm md:text-base tracking-[0.3em] text-gray-500 mb-4 uppercase">
            React Developer
          </p>

          {/* Big name text */}
          <h1 className="font-bold leading-none text-black
            text-[20vw] md:text-[13vw] lg:text-[13vw]">
            Jeevanantham
          </h1>

          {/* Optional sub line */}
          <div className='flex flex-1 text-start justify-end'>
            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl">
              A curious React Developer who believes in constant learning, turning complex problems into elegant components and every idea into a scalable web experience.
            </p>
          </div>
          {/* Social Links */}
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

  )
}

export default Intro
