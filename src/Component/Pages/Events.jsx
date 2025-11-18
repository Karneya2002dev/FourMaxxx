import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import event1 from "../../assets/event1.jpeg";
import event2 from "../../assets/event2.jpeg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpeg";
import event5 from "../../assets/event5.webp";
import event6 from "../../assets/event3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventData = [
    {
      image: event1,
      caption: "Annual Health Conference 2024",
      description:
        "A gathering of top medical professionals sharing innovations.",
      tag: "Conference",
    },
    {
      image: event2,
      caption: "Community Medical Camp",
      description:
        "Free health check-ups and awareness programs for the community.",
      tag: "Community",
    },
    {
      image: event3,
      caption: "Pharma Research & Innovation Meet",
      description:
        "Showcasing groundbreaking pharmaceutical research projects.",
      tag: "Innovation",
    },
    {
      image: event4,
      caption: "Global Medical Technology Summit",
      description:
        "Exploring the future of AI, robotics, and healthcare tech.",
      tag: "Summit",
    },
    {
      image: event5,
      caption: "Healthcare Leadership Awards",
      description:
        "Honoring excellence and leadership in healthcare services.",
      tag: "Awards",
    },
    {
      image: event6,
      caption: "World Pharmaceutical Expo",
      description:
        "Global exhibition of pharma innovations and partnerships.",
      tag: "Expo",
    },
  ];

  // Preload images
  useEffect(() => {
    eventData.forEach((ev) => {
      const img = new Image();
      img.src = ev.image;
    });
  }, []);
//
  return (
    <section className="py-24  bg-gradient-to-b from-gray-50 via-white to-gray-50 relative  top-0 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto  px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Our Events
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12 text-sm md:text-base"
        >
          From global summits to community health drives, our events bring
          together experts, innovators, and the community to advance healthcare,
          share knowledge, and inspire positive change.
        </motion.p>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <motion.img
                    src={event.image}
                    alt={event.caption}
                    loading="lazy"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedEvent(event)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium shadow-lg"
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Tag */}
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {event.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <p className="text-gray-800 text-lg font-bold">
                    {event.caption}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
    <AnimatePresence>
  {selectedEvent && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full text-black shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedEvent(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src={selectedEvent.image}
          alt={selectedEvent.caption}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        {/* Title & Description */}
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-2"
        >
          {selectedEvent.caption}
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 mb-4"
        >
          {selectedEvent.description}
        </motion.p>

        {/* Action Button */}
      
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Events;
