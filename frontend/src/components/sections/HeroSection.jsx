import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { assets } from "../../assets/assets";
import CurvedSection from "../ui/Curved";
import ScrollReveal from "../ui/RevealText";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    { icon: Instagram, url: "https://instagram.com/jeeva_2Vx03", label: "instagram" },
    { icon: Linkedin, url: "https://linkedin.com/in/your_username", label: "linkedin" },
    { icon: Github, url: "https://github.com/your_username", label: "github" },
    { icon: MessageCircle, url: "https://wa.me/917418270442", label: "whatsapp" },
  ];

  return (
    <CurvedSection curve="bl" className="bg-[#faf7ed]">
      <section className="relative min-h-[140vh] px-12 pt-32 overflow-hidden">

        {/* ===== IMAGE (ONLY ELEMENT THAT MOVES) ===== */}
        <div
          className="fixed z-50 transition-all duration-700 ease-in-out"
          style={{
            top: scrolled ? "1.5rem" : "50%",
            left: scrolled ? "1rem" : "2%",
            transform: scrolled ? "translate(0,0)" : "translate(0,-50%)",
          }}
        >
          <div className="relative">
            <div
              className="overflow-hidden shadow-2xl"
              style={{
                width: scrolled ? "50px" : "640px",
                height: scrolled ? "50px" : "420px",
                borderRadius: scrolled ? "50%" : "12px",
                transition:
                  "width 0.7s ease, height 0.7s ease, border-radius 0.7s ease",
              }}
            >
              <img
                src={assets[0]}
                alt="Profile"
                className="w-full h-full object-cover border-2 border-white/20"
                style={{ borderRadius: scrolled ? "50%" : "12px" }}
              />
            </div>

            {/* Name beside avatar */}
            <div
              className={`absolute whitespace-nowrap font-medium tracking-wide text-slate-100 transition-all duration-700 ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                top: "50%",
                left: "calc(100% + 2.75rem)",
                transform: "translateY(-50%)",
                fontSize: "1.05rem",
              }}
            >
              DJ.
            </div>
          </div>
        </div>

        {/* ===== TEXT CONTENT (ScrollReveal ONLY) ===== */}
        <div className="relative z-10 mt-130 max-w-7xl mx-auto px-4">

          <ScrollReveal textClassName="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase">
            React Developer
          </ScrollReveal>

          <ScrollReveal textClassName="font-bold leading-none text-black text-[20vw] md:text-[13vw]">
            Jeevanantham
          </ScrollReveal>

          <div className="flex justify-end">
            <ScrollReveal textClassName="text-gray-600 text-base md:text-lg max-w-xl">
              A curious React Developer who believes in constant learning,
              turning complex problems into elegant components and every idea
              into a scalable web experience.
            </ScrollReveal>
          </div>

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

      </section>
    </CurvedSection>
  );
}
