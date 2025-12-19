import React from "react";
import { motion } from "framer-motion";

import doctor1 from "../../assets/docanimi.png";
import doctor2 from "../../assets/girldoctor.jpg";
import doctor3 from "../../assets/docanimi.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Data for alternating sections
const sections = [
  {
    name: "C. PRABU",
    role: "Executive Director – Sales & Marketing",
    desc: "Mr. C. Prabu brings over 20 years of extensive experience in pharmaceutical sales and marketing, driving strategic growth and market expansion.",
    image: doctor1,
    reverse: false, // image right
  },
  {
    name: "INDHUMATHI R",
    role: "Executive Director – HR, Finance & Accounts",
    desc: "Ms. Indhumathi R oversees human resources, finance, and accounts, ensuring operational efficiency, compliance, and organizational excellence.",
    image: doctor2,
    reverse: true, // image left
  },
  {
    name: "POONGKOTHAI S",
    role: "RVP (PMD) – Administration & Product Management",
    desc: "Ms. Poongkothai S leads product management and administration, focusing on product strategy, lifecycle management, and internal operations.",
    image: doctor3,
    reverse: false, // image right
  },
];

const About = () => {
  const headingClass =
    "text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent";

  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-16 relative top-5">
      {/* Page Title */}
      <div className="text-center mb-12 sm:mb-16 relative top-5">
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
          animate={{ width: "60px" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="h-1 mt-3 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </div>

      {/* Alternating Sections */}
      <div className="space-y-20">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className={`${item.reverse ? "lg:order-2" : "lg:order-1"} space-y-5`}>
              <motion.h1
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-blue-700"
              >
                {item.name}
              </motion.h1>

              <motion.div
                variants={fadeIn}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition duration-300">
                  {item.role}
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
                {item.desc}
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              variants={fadeIn}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative w-full max-w-sm sm:max-w-md mx-auto ${
                item.reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <motion.img
                src={item.image}
                alt={item.name}
                whileHover={{ scale: 1.03 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="w-full rounded-xl shadow-2xl hover:shadow-blue-300 transition-shadow duration-500"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
