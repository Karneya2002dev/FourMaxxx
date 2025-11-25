import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFlask, FaIndustry, FaCheckCircle, FaTruckMoving } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import doctorImg from "../assets/Doctor.png";

/* ----------------------- PRODUCT IMAGES ----------------------- */
const nfts = [
  "https://i.postimg.cc/3wHDMZk4/Tribmax-DHA.jpg",
  "https://i.postimg.cc/SK87CsM8/Acpon.jpg",
  "https://i.postimg.cc/NGb81Z5N/Cisqtrix.jpg",
  "https://i.postimg.cc/CKHnwf8v/VFite-5G.jpg",
  "https://i.postimg.cc/LszLhbc3/Pulmoact.jpg",
];

/* ----------------------- ANIMATIONS ----------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
  }),
};

/* ----------------------- SERVICES ----------------------- */
const services = [
  {
    icon: <FaFlask size={40} className="text-blue-700" />,
    title: "Research & Development",
    description:
      "Developing breakthrough medications through innovative scientific research and clinical trials.",
  },
  {
    icon: <FaIndustry size={40} className="text-blue-700" />,
    title: "Manufacturing",
    description:
      "Producing high-quality pharmaceutical products in state-of-the-art facilities.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-blue-700" />,
    title: "Quality Control",
    description:
      "Ensuring all products meet rigorous safety and efficacy standards.",
  },
  {
    icon: <FaTruckMoving size={40} className="text-blue-700" />,
    title: "Distribution",
    description:
      "Global supply chain ensuring our products reach patients worldwide.",
  },
];

/* =============================================================
   FULL HOME PAGE
   ============================================================= */
const HomePage = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

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

  const prevNFT = () =>
    setCurrent((prev) => (prev - 1 + nfts.length) % nfts.length);

  const nextNFT = () =>
    setCurrent((prev) => (prev + 1) % nfts.length);

  const goToProduct = (index) => navigate(`/products?id=${index}`);

  return (
    <>
      {/* MAIN WRAPPER FIXED */}
      <div className="min-h-[85vh] relative overflow-hidden px-4 md:px-10 bg-white pb-14 pt-44 md:pt-52">


        {/* Title Section */}
        <motion.div
          className="w-full text-center mt-2 md:mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0f4c81] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent">
            Explore Our Products
          </h1>

          <h2 className="mt-1 md:mt-2 text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#ff2fa0] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent">
            Innovative Pharma Solutions
          </h2>

          <p className="mt-1 text-sm md:text-lg text-gray-600">
            Click on a product to learn more
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-10 md:mt-14 flex items-center justify-center">

          {/* LEFT Button */}
          <button
            onClick={prevNFT}
            className="absolute left-0 md:left-10 bg-white/70 backdrop-blur-md p-2 md:p-3 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-gray-800" />
          </button>

          {/* Images */}
          <div className="relative w-full max-w-6xl h-[260px] md:h-[380px] flex items-center justify-center">

            {!imagesLoaded ? (
              <p className="text-gray-600 font-semibold">Loading...</p>
            ) : (
              nfts.map((src, i) => {
                const offset = (i - current + nfts.length) % nfts.length;
                const middle = Math.floor(nfts.length / 2);
                const arcOffset = offset > middle ? offset - nfts.length : offset;

                if (Math.abs(arcOffset) > 2) return null;

                const baseX = window.innerWidth < 768 ? 140 : 220;
                const angle = arcOffset * 8;
                const translateY = Math.abs(arcOffset) * 10;
                const scale = arcOffset === 0 ? 1.22 : 0.85;

                return (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`Product ${i}`}
                    className={`absolute rounded-2xl object-cover cursor-pointer shadow-xl ${
                      arcOffset === 0
                        ? "drop-shadow-[0_0_25px_rgba(0,188,212,0.45)]"
                        : ""
                    }`}
                    style={{
  width: arcOffset === 0 ? (window.innerWidth < 768 ? "160px" : "200px") : "120px",
  height: arcOffset === 0 ? (window.innerWidth < 768 ? "200px" : "260px") : "160px",
}}

                    animate={{
                      x: arcOffset * baseX,
                      y: translateY,
                      scale,
                      rotate: angle,
                      opacity: arcOffset === 0 ? 1 : 0.4,
                      // zIndex: 50 - Math.abs(arcOffset),
                    }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    onClick={() => goToProduct(i)}
                  />
                );
              })
            )}
          </div>

          {/* RIGHT Button */}
          <button
            onClick={nextNFT}
            className="absolute right-0 md:right-10 bg-white/70 backdrop-blur-md p-2 md:p-3 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-gray-800" />
          </button>
        </div>
      </div>

      {/* =============================================================
          HERO + SERVICES
      ============================================================= */}
      <div ref={heroRef} className="relative z-10 px-4 py-20 space-y-32">

        {/* HERO */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >

          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
            >
              Beyond Boundaries, Ahead{" "}
              <span className="text-blue-700">in Healthcare</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              <strong>We treat</strong> not only symptoms — we care about lives.
              At <span className="font-semibold text-blue-700">Fourmax Pharmaceuticals</span>,
              we deliver <span className="text-purple-700">future-ready healthcare solutions.</span>
            </motion.p>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold shadow-md w-fit"
            >
              Explore All Products
            </motion.button>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="p-4 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300 shadow-xl"
            >
              <motion.img
                src={doctorImg}
                alt="Doctor"
                className="w-[280px] md:w-[400px] object-contain"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SERVICES */}
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              What We Do
            </span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                }}
                className="rounded-2xl"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[330px] flex flex-col">
                  <div className="mx-auto bg-blue-50 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
