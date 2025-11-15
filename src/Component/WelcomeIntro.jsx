import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/Fourmax.jpeg";

export default function WelcomeIntro() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/home");
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Subtle Animated Blue Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#d7e6ff]/60 to-[#edf3ff]/40 backdrop-blur-[30px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Soft Moving Light Glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[120px]"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal Floating Molecules */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const size = Math.random() * 8 + 6;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-300/30 backdrop-blur-sm"
              style={{
                width: size,
                height: size,
                top: y,
                left: x
              }}
              animate={{
                y: [y, y - 40, y],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 6 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-20 w-[90%] max-w-[460px] bg-white/80 backdrop-blur-2xl border border-white/70 
        rounded-3xl p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="FourMax Pharma Logo"
          className="w-36 mb-5 drop-shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Title */}
        <motion.h1
          className="text-gray-900 text-xl font-semibold tracking-wide mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          Empowering Health Through Innovation
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.3 }}
        >
          Premium healthcare solutions crafted with scientific precision 
          and trusted pharmaceutical excellence.
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={handleExplore}
          className="px-8 py-3 rounded-full bg-[#0A5AD9] text-white font-medium shadow-md 
          hover:shadow-lg hover:scale-105 transition-all"
          whileTap={{ scale: 0.94 }}
        >
          Enter FourMax Pharma
        </motion.button>
      </motion.div>
    </section>
  );
}
