import { motion } from 'framer-motion';

export default function WaveTransition({ 
  backgroundColor = "#faf7ed", 
  waveColor = "#ffffff",
  position = "bottom", // "top" or "bottom"
  className = ""
}) {
  
  const waveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{ backgroundColor }}
    >
      {position === "bottom" && (
        <svg 
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <motion.path 
            d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" 
            fill={waveColor}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={waveVariants}
          />
        </svg>
      )}
      
      {position === "top" && (
        <svg 
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <motion.path 
            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" 
            fill={waveColor}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={waveVariants}
          />
        </svg>
      )}
    </div>
  );
}