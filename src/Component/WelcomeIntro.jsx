import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Welcome from "./Welcome";

export default function WelcomeIntro() {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    setCollapse(true);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#F5F7FB]">

      {/* ===== LIGHTING BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Cool Blue Glow (Top Left) */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full
          bg-[#0059D6]/30 blur-[180px]"
        ></div>

        {/* Soft Purple Glow (Bottom Right) */}
        <div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full
          bg-[#C043FF]/20 blur-[200px]"
        ></div>

        {/* Faint Inner Spotlight */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
          bg-white/40 blur-[120px]"
        ></div>
      </div>
      {/* ====================================== */}

      {/* Background Frosted Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px]" />

      {/* Floating Capsules */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          const endX = startX + (Math.random() > 0.5 ? 200 : -200);
          const endY = startY - 250;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={`capsule-${i}`}
              className="absolute w-16 h-6 rounded-full backdrop-blur-sm"
              style={{
                background:
                  Math.random() > 0.5
                    ? "linear-gradient(90deg, #0059D6, #7A36FF)"
                    : "linear-gradient(90deg, #0076FF, #C043FF)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
              initial={{ x: startX, y: startY, rotate: 0, opacity: 0.7 }}
              animate={{
                x: [startX, endX],
                y: [startY, endY],
                rotate: [0, 360],
                opacity: [0.7, 1, 0.5],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                ease: "linear",
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Sparks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          return (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-[3px] h-[3px] rounded-full"
              style={{
                backgroundColor:
                  Math.random() > 0.5 ? "#0076FF" : "#7A36FF",
                boxShadow: "0 0 8px rgba(0,0,0,0.25)",
              }}
              initial={{ x: startX, y: startY, opacity: 1, scale: 1 }}
              animate={
                collapse
                  ? {
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                      opacity: 0,
                      scale: 0.3,
                    }
                  : { y: [startY, startY - 50], opacity: [0, 1, 0] }
              }
              transition={{
                duration: collapse ? 2 : 6 + Math.random() * 6,
                repeat: collapse ? 0 : Infinity,
                delay: Math.random() * 4,
              }}
            />
          );
        })}
      </div>

      {/* Card */}
      {!collapse && (
        <motion.div
          className="
            relative top-20 
            w-[90%] max-w-[520px] h-[480px]
            sm:w-[520px] sm:h-[320px]
            p-[4px] rounded-2xl sm:rounded-3xl z-20
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Gradient Border */}
          <motion.div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl"
            style={{
              padding: "4px",
              background:
                "linear-gradient(90deg, #0059D6, #7A36FF, #C043FF, #0059D6)",
              backgroundSize: "200% 200%",
              filter: "drop-shadow(0 0 25px rgba(0,0,0,0.15))",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Inner Card */}
            <div className="h-full w-full rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center text-gray-900 relative z-10 px-4">
              <motion.img
                src={logo}
                alt="FourMax Pharma Logo"
                className="w-32 sm:w-40 md:w-48 drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              />

              <motion.button
                onClick={handleExplore}
                className="mt-6 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#0059D6] to-[#7A36FF] text-white font-medium shadow-lg hover:shadow-2xl hover:scale-110 transition-transform text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore FourMax Pharma
              </motion.button>

              <motion.p
                className="mt-3 text-xs sm:text-sm text-[#7A36FF] tracking-wider text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
              >
                Empowering Health Through Innovation
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Welcome Carousel */}
      <div className="relative w-full mt-30">
        <Welcome />
      </div>
    </section>
  );
}
