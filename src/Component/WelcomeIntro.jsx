import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function WelcomeIntro() {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate(); // ✅ Get navigate function

  const handleExplore = () => {
    setCollapse(true);
    setTimeout(() => {
      navigate("/home"); // ✅ Correct navigation
    }, 2600);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* 🌌 Background Gradient - Medical theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101d] via-[#5b7fa9] to-[#1167b1]" />

      {/* 🌫 Glow Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-[#38BDF8]/20 rounded-full blur-[220px] -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-[#34D399]/20 rounded-full blur-[220px] bottom-0 right-0 animate-pulse" />
      </div>

      {/* 💊 Floating Capsules (tumbling pills) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          const endX = startX + (Math.random() > 0.5 ? 200 : -200); // diagonal drift
          const endY = startY - 250;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={`capsule-${i}`}
              className="absolute w-16 h-6 rounded-full"
              style={{
                background: Math.random() > 0.5
                  ? "linear-gradient(90deg, #38BDF8, #34D399)"
                  : "linear-gradient(90deg, #34D399, #38BDF8)",
                boxShadow: "0 0 15px rgba(56,189,248,0.4)",
              }}
              initial={{ x: startX, y: startY, rotate: 0, opacity: 0.8 }}
              animate={{
                x: [startX, endX],
                y: [startY, endY],
                rotate: [0, 360],
                opacity: [0.8, 1, 0.6],
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

      {/* ✨ Animated Sparks (medical blue/green particles) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          return (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-[3px] h-[3px] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.9)]"
              style={{
                backgroundColor: Math.random() > 0.5 ? "#38BDF8" : "#34D399",
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
                  : {
                      y: [startY, startY - 50],
                      opacity: [0, 1, 0],
                    }
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

      {/* 🎨 Capsule Animation on Collapse */}
      {collapse && (
        <motion.div
          className="absolute bg-gradient-to-r from-[#38BDF8] to-[#34D399] shadow-2xl"
          initial={{
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            opacity: 1,
          }}
          animate={{
            width: "250px",
            height: "90px",
            borderRadius: "999px",
            opacity: [1, 1, 0.9],
            scale: [1, 1.05, 0.8],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      )}

      {/* 💡 Text + Button */}
      {!collapse && (
        <motion.div
          className="absolute w-96 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-light text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            style={{
              textShadow: `
                0 0 15px rgba(56,189,248,0.8),
                0 0 30px rgba(52,211,153,0.6),
                0 0 45px rgba(17,94,89,0.5)
              `,
            }}
          >
            Welcome to FourMax Pharma
          </motion.h1>
          <motion.p
            className="mt-4 text-sm text-teal-200 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            Empowering Health Through Innovation
          </motion.p>

          <motion.button
            onClick={handleExplore}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#34D399] text-white font-medium shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore FourMax Pharma
          </motion.button>
        </motion.div>
      )}

      {/* ⚡ Flash Effect */}
      {collapse && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      )}
    </section>
  );
}
