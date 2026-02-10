import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets } from "../../assets/assets";

const CircularBadge = ({
  text1 = "OPEN",
  text2 = "to",
  text3 = "Work",
  size = 150
}) => {
  const textRef = useRef(null);


  useEffect(() => {
    gsap.to(textRef.current, {
      rotation: 360,
      duration: 30,     // ⬅ very slow
      ease: "none",
      repeat: -1
    });
  }, []);

  return (
    <motion.div
      className="relative inline-block"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rotating Text */}
      <div ref={textRef} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>

          <text
              className="fill-current text-gray-700 font-bold font-[sans-serif] uppercase"
              style={{ fontSize: "20px" }}
          >
            <textPath href="#circlePath">
              <tspan dx="10">{text1}</tspan>
              <tspan dx="20">{text2}</tspan>
              <tspan dx="30">{text3}</tspan>
              <tspan dx="20">✦</tspan>
              <tspan dx="10">{text1}</tspan>
              <tspan dx="20">{text2}</tspan>
              <tspan dx="30">{text3}</tspan>
              <tspan dx="20">✦</tspan>
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full overflow-hidden"
          style={{ width: size * 0.7, height: size * 0.7 }}
        >
          <img
            src={assets[0]}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}


export default CircularBadge;