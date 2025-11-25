// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const nfts = [
//   "https://i.postimg.cc/3wHDMZk4/Tribmax-DHA.jpg",
//   "https://i.postimg.cc/SK87CsM8/Acpon.jpg",
//   "https://i.postimg.cc/NGb81Z5N/Cisqtrix.jpg",
//   "https://i.postimg.cc/CKHnwf8v/VFite-5G.jpg",
//   "https://i.postimg.cc/LszLhbc3/Pulmoact.jpg",
// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let loaded = 0;
//     nfts.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         loaded++;
//         if (loaded === nfts.length) setImagesLoaded(true);
//       };
//     });
//   }, []);

//   const prevNFT = () =>
//     setCurrent((prev) => (prev - 1 + nfts.length) % nfts.length);

//   const nextNFT = () =>
//     setCurrent((prev) => (prev + 1) % nfts.length);

//   const goToProduct = (index) => navigate(`/products?id=${index}`);

//   return (
//     <div className="min-h-screen relative overflow-hidden px-4 md:px-10 bg-white">

//       {/* Title Section */}
//       <motion.div
//         className="w-full text-center mt-6 md:mt-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0f4c81] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent">
//           Explore Our Products
//         </h1>

//         <h2 className="mt-1 md:mt-2 text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#ff2fa0] via-[#1e90ff] to-[#ff2fa0] bg-clip-text text-transparent">
//           Innovative Pharma Solutions
//         </h2>

//         <p className="mt-1 text-sm md:text-lg text-gray-600">
//           Click on a product to learn more
//         </p>
//       </motion.div>

//       {/* Carousel */}
//       <div className="relative mt-20 md:mt-28 flex items-center justify-center">

//         {/* LEFT Button */}
//         <button
//           onClick={prevNFT}
//           className="absolute left-0 md:left-10 bg-white/70 backdrop-blur-md p-2 md:p-3 rounded-full shadow-md hover:bg-white transition"
//         >
//           <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-gray-800" />
//         </button>

//         {/* Images */}
//         <div className="relative w-full max-w-6xl h-[240px] md:h-[360px] flex items-center justify-center">

//           {!imagesLoaded ? (
//             <p className="text-gray-600 font-semibold">Loading...</p>
//           ) : (
//             nfts.map((src, i) => {
//               const offset = (i - current + nfts.length) % nfts.length;
//               const middle = Math.floor(nfts.length / 2);
//               const arcOffset = offset > middle ? offset - nfts.length : offset;

//               if (Math.abs(arcOffset) > 2) return null;

//               const baseX = window.innerWidth < 768 ? 130 : 200;
//               const angle = arcOffset * 7;
//               const translateY = Math.abs(arcOffset) * 10; // lowered gap
//               const scale = arcOffset === 0 ? 1.2 : 0.85;

//               return (
//                 <motion.img
//                   key={i}
//                   src={src}
//                   alt={`Product ${i}`}
//                   className={`absolute rounded-2xl object-cover cursor-pointer shadow-xl ${
//                     arcOffset === 0
//                       ? "drop-shadow-[0_0_25px_rgba(0,188,212,0.45)]"
//                       : ""
//                   }`}
//                   style={{
//                     width: arcOffset === 0 ? "190px" : "140px",
//                     height: arcOffset === 0 ? "240px" : "180px",
//                   }}
//                   animate={{
//                     x: arcOffset * baseX,
//                     y: translateY,
//                     scale,
//                     rotate: angle,
//                     opacity: arcOffset === 0 ? 1 : 0.45,
//                     zIndex: 50 - Math.abs(arcOffset),
//                   }}
//                   transition={{ duration: 0.55, ease: "easeOut" }}
//                   onClick={() => goToProduct(i)}
//                 />
//               );
//             })
//           )}
//         </div>

//         {/* RIGHT Button */}
//         <button
//           onClick={nextNFT}
//           className="absolute right-0 md:right-10 bg-white/70 backdrop-blur-md p-2 md:p-3 rounded-full shadow-md hover:bg-white transition"
//         >
//           <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-gray-800" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
