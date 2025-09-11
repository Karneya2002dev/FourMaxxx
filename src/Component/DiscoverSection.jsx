import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../assets/blueline.mp4"; // your video path
import { useNavigate } from "react-router-dom";

const DiscoverSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

      {/* Floating Orbs (Innovative Feel) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 right-16 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl z-10"
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 max-w-3xl text-center p-6 rounded-2xl backdrop-blur-md bg-white/5 shadow-lg border border-white/10"
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-purple-400 drop-shadow-lg"
        >
          Discover Our Innovative Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base md:text-lg leading-relaxed text-white/90"
        >
          <span className="font-semibold text-sky-200">
            "Beyond Boundaries, Ahead in Healthcare."
          </span>
          <br />
          We're changing healthcare with simpler, smarter innovations.
          At Fourmax Pharmaceuticals, we build{" "}
          <span className="text-purple-300 font-medium">
            reliable, forward-thinking solutions
          </span>{" "}
          to support better patient care through strong research, quality
          production, and a global reach — all in a fast-moving world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
         onClick={()=>navigate('/products')} >
           Explore Products
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiscoverSection;
