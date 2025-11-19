import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// IMPORT BOTH IMAGES  
import mobileBg from "../assets/forrr.png";      // Mobile version image
import desktopBg from "../assets/for.png";        // Desktop version image

export default function WelcomeIntro() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    // Auto redirect
    const timer = setTimeout(() => navigate("/home"), 5000);

    // Detect live resize
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const circleProgressVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 4.5, ease: "easeInOut" }
    }
  };

  return (
    <section
      className="
        relative flex flex-col items-center justify-center min-h-screen 
        bg-cover bg-center bg-no-repeat px-4 overflow-hidden
      "
      style={{
        backgroundImage: `url(${isMobile ? mobileBg : desktopBg})`
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-800/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Glow 1 */}
      <motion.div
        className="absolute rounded-full blur-[180px] z-10"
        style={{
          width: isMobile ? "300px" : "900px",
          height: isMobile ? "300px" : "900px",
          backgroundColor: "rgba(56, 189, 248, 0.30)"
        }}
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow 2 */}
      <motion.div
        className="absolute bottom-0 right-0 rounded-full blur-[150px] z-10"
        style={{
          width: isMobile ? "200px" : "600px",
          height: isMobile ? "200px" : "600px",
          backgroundColor: "rgba(168, 85, 247, 0.25)"
        }}
        animate={{
          x: ["0%", "-30%", "0%"],
          y: ["0%", "30%", "0%"],
          scale: [1, 0.7, 1],
          rotate: [360, 0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Shapes */}
      {[...Array(isMobile ? 2 : 6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * (isMobile ? 20 : 50) + 15}px`,
            height: `${Math.random() * (isMobile ? 20 : 50) + 15}px`,
            backgroundColor: `rgba(255,255,255,${0.1 + Math.random() * 0.2})`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            x: `${Math.random() * (isMobile ? 150 : 400) - 100}px`,
            y: `${Math.random() * (isMobile ? 150 : 400) - 100}px`,
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, Math.random() * 360, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1.5
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-white font-extrabold tracking-tight mb-4
                     text-4xl sm:text-6xl md:text-7xl drop-shadow-2xl"
          variants={childVariants}
        >
          {"Future of Health".split(" ").map((word, i) => (
            <motion.span key={i} className="inline-block mx-2" variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-white text-base sm:text-xl md:text-2xl 
                     leading-relaxed mb-12 max-w-lg drop-shadow-lg"
          variants={childVariants}
        >
          Pioneering breakthroughs, delivering care, shaping tomorrow.
        </motion.p>
      </motion.div>

      {/* Progress Loader */}
      <div className="absolute bottom-6 sm:bottom-10 z-30">
        <svg width={isMobile ? "50" : "60"} height={isMobile ? "50" : "60"} viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            stroke="#0A5AD9"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            transform="rotate(-90 30 30)"
            variants={circleProgressVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>
    </section>
  );
}
