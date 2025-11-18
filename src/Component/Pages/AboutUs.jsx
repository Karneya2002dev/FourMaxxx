import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import doctorImage from '../../assets/docanimi.png';

import team1 from '../../assets/docanimi.png';
import team2 from '../../assets/docanimi.png';
import team3 from '../../assets/docanimi.png';
import team4 from '../../assets/docanimi.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const teamMembers = [
  { name: 'Dr. Sarah Johnson', role: 'Head of Research', image: team1, desc: 'Leading groundbreaking research in pharmaceutical sciences for over 15 years.' },
  { name: 'Michael Lee', role: 'Chief Operations Officer', image: team2, desc: 'Ensuring smooth global operations with efficiency and excellence.' },
  { name: 'Anita Rao', role: 'Marketing Director', image: team3, desc: 'Building strong brand presence and customer trust worldwide.' },
  { name: 'Rajesh Kumar', role: 'Quality Assurance Lead', image: team4, desc: 'Dedicated to maintaining the highest standards of product quality.' },
];

const About = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 cards on desktop
  const [startIndex, setStartIndex] = useState(0);

  // Update visible count based on window width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1280) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () =>
    setStartIndex((prev) => (prev + 1) % teamMembers.length);

  const prevSlide = () =>
    setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const headingClass =
    'text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent';

  // Get visible team members for the carousel
  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < visibleCount; i++) {
      members.push(teamMembers[(startIndex + i) % teamMembers.length]);
    }
    return members;
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-16 relative top-5 ">
      {/* Page Title */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className={headingClass}
        >
          Who We Are
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="h-1 mt-3 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="space-y-5 sm:space-y-6">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-blue-700"
          >
            C. PRABU
          </motion.h1>
          <motion.div
            variants={fadeIn}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition duration-300">
              Managing Director
            </span>
          </motion.div>
          <motion.p
            variants={fadeIn}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            C. PRABU brings over 20 years of pharmaceutical industry experience to Fourmax...
          </motion.p>
        </div>

        {/* Right Doctor Image */}
        <motion.div
          variants={fadeIn}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto"
        >
          <motion.img
            src={doctorImage}
            alt="Doctor"
            whileHover={{ scale: 1.03 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' }}
            className="w-full rounded-xl shadow-2xl hover:shadow-blue-300 transition-shadow duration-500"
          />
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="mt-12 max-w-7xl mx-auto text-center relative">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          className={headingClass}
        >
          Meet Our Team
        </motion.h2>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="text-blue-600 font-bold text-xl px-4"
          >
            ‹
          </button>

          <div className="flex overflow-hidden w-full max-w-5xl">
            {getVisibleMembers().map((member, idx) => (
              <motion.div
                key={member.name}
                className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-800 rounded-2xl overflow-hidden shadow-lg mx-2 flex-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 sm:h-72 object-contain bg-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                />
                <div className="p-4 sm:p-6 text-white">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-300 text-xs sm:text-sm md:text-base mb-2">{member.role}</p>
                  <p className="text-xs sm:text-sm md:text-base">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-blue-600 font-bold text-xl px-4"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
