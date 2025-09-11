import React, { useState } from "react";
import { motion } from "framer-motion";
import doctorImg from "../../assets/im.png";
import bgVideo from "../../assets/lab.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate=useNavigate();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setTilt({ rotateX: -y, rotateY: x });
  };

  return (
    <section
      className="relative text-white py-20 px-6 lg:px-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/40 backdrop-blur-sm -z-10"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-lg p-8 rounded-2xl bg-teal-500/20 backdrop-blur-md shadow-lg border border-white/20"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empower Your <br /> Healthcare Journey
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Trusted by thousands of professionals across healthcare sectors.
            Access reliable information, improve your workflow, and get
            connected with experts worldwide.
          </p>
          <button onClick={()=>navigate("/products")} className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </motion.div>

        {/* Right Doctor Image with Floating & Shadow */}
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // floating effect
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.08 }}
          className="relative flex justify-center lg:justify-end mb-10 lg:mb-0"
        >
          {/* Pulsating Rings */}
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full border-4 border-cyan-400/40 -z-20"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
          <motion.div
            className="absolute w-[550px] h-[550px] rounded-full border-2 border-cyan-300/30 -z-30"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 8 }}
          />

          {/* Shadow */}
          <motion.div
            className="absolute bottom-0 w-64 h-12 bg-black/30 rounded-full filter blur-xl -z-10"
            animate={{
              scale: [1, 1.1, 1], // shadow scales with floating
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Doctor Image */}
          <motion.img
            src={doctorImg}
            alt="Doctor"
            className="w-80 md:w-[420px] drop-shadow-2xl rounded-xl"
            whileHover={{ rotate: -2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
