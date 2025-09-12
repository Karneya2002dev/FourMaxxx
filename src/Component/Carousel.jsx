import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pill } from "lucide-react";
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
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#0b0f2a" }}>
  {/* Or if you want a gradient */}
  <motion.div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(135deg, #0b0f2a, #1a1f38, #0b0f2a)",
    }}
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />


      {/* Floating DNA / Molecules */}
      {[...Array(10)].map((_, i) => {
        const size = 30 + Math.random() * 20;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 90}vh`,
              left: `${Math.random() * 90}vw`,
              rotate: Math.random() * 360,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 360, 0], opacity: [1, 0.6, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Pill size={size} color={logoColors[i % logoColors.length]} />
          </motion.div>
        );
      })}

      {/* Particle Sparks */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[4px] h-[4px] rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor: logoColors[i % logoColors.length],
            boxShadow: `0 0 8px ${logoColors[i % logoColors.length]}`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 4 + i / 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

     {/* Floating Headings */}
<motion.div
  className="absolute w-full flex flex-col items-center justify-center top-16 z-20 pointer-events-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  {/* Main Heading */}
  <motion.h1
    className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#0f4c81] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent"
   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    Explore Our Products
  </motion.h1>

  {/* Sub Heading */}
  <motion.h2
    className="mt-4 text-3xl font-semibold bg-gradient-to-r from-[#ff2fa0] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent"
 
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    Innovative Pharma Solutions
  </motion.h2>

  {/* Subtext */}
  <motion.p
    className="mt-2 text-lg text-white/80"

    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    Click on a product to learn more
  </motion.p>
</motion.div>


      {/* Carousel */}
      <div className="relative mt-48 flex items-center justify-center z-10">
        <button onClick={prevNFT} className="absolute left-6 z-50">
          <ChevronLeft className="text-gray-800 w-10 h-10 hover:scale-110 transition-transform" />
        </button>

        <div className="relative flex items-center justify-center w-full max-w-7xl h-[500px] overflow-visible">
          {!imagesLoaded ? (
            <p className="text-lg font-semibold text-gray-600">Loading...</p>
          ) : (
            nfts.map((src, i) => {
              const offset = (i - current + nfts.length) % nfts.length;
              const middle = Math.floor(nfts.length / 2);
              const arcOffset = offset > middle ? offset - nfts.length : offset;
              if (Math.abs(arcOffset) > 2) return null;

              const angle = arcOffset * 10;
              const translateY = Math.abs(arcOffset) * 30;
              const scale = arcOffset === 0 ? 1.3 : 0.9;
              const glow = arcOffset === 0 ? "drop-shadow-[0_0_20px_rgba(0,188,212,0.6)]" : "";

              return (
                <motion.img
                  key={i}
                  src={src}
                  alt={`NFT ${i}`}
                  className={`absolute rounded-2xl object-cover cursor-pointer ${glow}`}
                  style={{ width: "220px", height: "280px" }}
                  animate={{
                    x: arcOffset * 260,
                    y: translateY,
                    scale,
                    rotate: angle,
                    opacity: arcOffset === 0 ? 1 : 0.4,
                    zIndex: 100 - Math.abs(arcOffset),
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{
                    scale: arcOffset === 0 ? 1.4 : 0.95,
                    y: arcOffset === 0 ? translateY - 10 : translateY,
                  }}
                  onClick={() => goToProduct(i)}
                />
              );
            })
          )}
        </div>

        <button onClick={nextNFT} className="absolute right-6 z-50">
          <ChevronRight className="text-gray-800 w-10 h-10 hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
