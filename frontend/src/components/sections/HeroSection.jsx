import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { assets } from "../../assets/assets";
import WordReveal from "../ui/WordReveal";
import FadeUp from "../ui/FadeUp";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log("Scrolled:", isScrolled, "ScrollY:", window.scrollY); // DEBUG
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    { icon: Instagram, url: "#", label: "instagram" },
    { icon: Linkedin, url: "#", label: "linkedin" },
    { icon: Github, url: "#", label: "github" },
    { icon: MessageCircle, url: "#", label: "whatsapp" },
  ];

  return (
    <section className="relative min-h-[200vh] px-12 pt-100 overflow-hidden bg-[#faf7ed]">
      {/* ===== IMAGE ===== */}
      <div
        className="fixed z-50 transition-all duration-700 ease-in-out"
        style={{
          top: scrolled ? "1.5rem" : "50%",
          right: scrolled ? "auto" : "5%",
          left: scrolled ? "1rem" : "auto",
          transform: scrolled ? "translate(0, 0)" : "translate(0, -50%)",
        }}
      >
        <div className="relative">
          <div
            className="overflow-hidden shadow-2xl"
            style={{
              width: scrolled ? "50px" : "640px",
              height: scrolled ? "50px" : "420px",
              borderRadius: scrolled ? "50%" : "12px",
              transition: scrolled 
                ? 'width 0.7s ease-in-out, height 0.7s ease-in-out, border-radius 0.7s ease-in-out 0.5s' 
                : 'width 0.7s ease-in-out, height 0.7s ease-in-out, border-radius 0.7s ease-in-out',
            }}
          >
            {/* Image */}
            <img
              src={assets[0]}
              alt="Profile"
              className="w-full h-full object-cover border-2 border-white/20"
              style={{ 
                borderRadius: scrolled ? "50%" : "12px",
                transition: scrolled 
                  ? 'border-radius 0.7s ease-in-out 0.5s' 
                  : 'border-radius 0.7s ease-in-out',
              }}
              onError={(e) => console.log("Image failed to load:", e)}
              onLoad={() => console.log("Image loaded successfully")}
            />
          </div>

          {/* Name */}
          <div
            className={`absolute whitespace-nowrap font-bold tracking-wide text-slate-900 transition-all duration-700 bg-yellow-200 px-2 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              top: "50%",
              left: "calc(100% + 0.75rem)",
              transform: "translateY(-50%)",
              fontSize: "1.05rem",
              visibility: scrolled ? 'visible' : 'hidden',
            }}
          >
            DJ.
          </div>
        </div>
      </div>

      {/* ===== TEXT CONTENT ===== */}
      <div className="relative max-w-7xl mx-auto px-4 mt-16">
        <WordReveal text={`${'React Developer'}`} className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase mb-4"/>
        <WordReveal text={'Jeevanantham'}  className="font-bold leading-none text-black text-[20vw] md:text-[13vw] mb-8"/>

        <div className="flex justify-end">
            <FadeUp className="text-gray-600 text-base md:text-lg max-w-xl">
              A curious React Developer who believes in constant learning,turning complex problems 
              into elegant components and every idea into a scalable web experience.
              <div className="flex flex-1 gap-4 mt-4 justify-start">
                {socials.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center 
                    hover:bg-gray-700 transition"
                  >
                    <Icon size={20} />
                  </a>
                  ))}
              </div>
            </FadeUp>
        </div>  
      </div>
    </section>
  );
}