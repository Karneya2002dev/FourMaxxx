import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const nfts = [
  "https://i.postimg.cc/3wHDMZk4/Tribmax-DHA.jpg",
  "https://i.postimg.cc/SK87CsM8/Acpon.jpg",
  "https://i.postimg.cc/NGb81Z5N/Cisqtrix.jpg",
  "https://i.postimg.cc/CKHnwf8v/VFite-5G.jpg",
  "https://i.postimg.cc/LszLhbc3/Pulmoact.jpg",
];

const logoColors = ["#00796b", "#00acc1", "#26c6da", "#80deea", "#b2ebf2"];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let loaded = 0;
    nfts.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === nfts.length) setImagesLoaded(true);
      };
    });
  }, []);

  const prevNFT = () => setCurrent((prev) => (prev - 1 + nfts.length) % nfts.length);
  const nextNFT = () => setCurrent((prev) => (prev + 1) % nfts.length);
  const goToProduct = () => navigate(`/products`);

  return (
    <div
      className="min-h-screen relative overflow-hidden px-2 md:px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Particle Sparks */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] md:w-[4px] md:h-[4px] rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor: logoColors[i % logoColors.length],
            boxShadow: `0 0 8px ${logoColors[i % logoColors.length]}`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 4 + i / 5, repeat: Infinity }}
        />
      ))}

      {/* Floating Headings */}
      <motion.div
        className="absolute w-full flex flex-col items-center justify-center top-10 md:top-16 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#0f4c81] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent"
        >
          Explore Our Products
        </motion.h1>

        <motion.h2
          className="mt-2 md:mt-4 text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#ff2fa0] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent"
        >
          Innovative Pharma Solutions
        </motion.h2>

        <motion.p className="mt-2 text-sm md:text-lg text-gray-700">
          Click on a product to learn more
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative mt-40 md:mt-48 flex items-center justify-center z-10">
        {/* Left Button */}
        <button
          onClick={prevNFT}
          className="absolute left-2 md:left-6 z-50 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="text-gray-800 w-6 h-6 md:w-10 md:h-10" />
        </button>

        {/* Carousel Images */}
        <div className="relative flex items-center justify-center w-full max-w-7xl h-[300px] md:h-[500px] overflow-visible">
          {!imagesLoaded ? (
            <p className="text-lg font-semibold text-gray-600">Loading...</p>
          ) : (
            nfts.map((src, i) => {
              const offset = (i - current + nfts.length) % nfts.length;
              const middle = Math.floor(nfts.length / 2);
              const arcOffset = offset > middle ? offset - nfts.length : offset;
              if (Math.abs(arcOffset) > 2) return null;

              // Responsive Arc Movement
              const baseX = window.innerWidth < 640 ? 140 : 260;
              const angle = arcOffset * 10;
              const translateY = Math.abs(arcOffset) * (window.innerWidth < 640 ? 20 : 30);
              const scale = arcOffset === 0 ? 1.2 : 0.85;

              return (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Product ${i}`}
                  className={`absolute rounded-2xl object-cover cursor-pointer shadow-xl ${
                    arcOffset === 0
                      ? "drop-shadow-[0_0_15px_rgba(0,188,212,0.5)]"
                      : ""
                  }`}
                  style={{
                    width:
                      arcOffset === 0
                        ? "180px"
                        : "140px",
                    height:
                      arcOffset === 0
                        ? "230px"
                        : "180px",
                  }}
                  animate={{
                    x: arcOffset * baseX,
                    y: translateY,
                    scale,
                    rotate: angle,
                    opacity: arcOffset === 0 ? 1 : 0.45,
                    zIndex: 100 - Math.abs(arcOffset),
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => goToProduct(i)}
                />
              );
            })
          )}
        </div>

        {/* Right Button */}
        <button
          onClick={nextNFT}
          className="absolute right-2 md:right-6 z-50 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md"
        >
          <ChevronRight className="text-gray-800 w-6 h-6 md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
