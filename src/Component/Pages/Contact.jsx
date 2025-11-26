import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* ------------------ ANIMATIONS ------------------ */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const slideIn = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
});

/* ------------------ EXAMPLE PRODUCTS ------------------ */
const products = [
  "Collagen Peptides",
  "Vitamin C Complex",
  "Joint Health Supplement",
  "Calcium + Vitamin D",
  "Iron & Folic Acid",
  "Omega 3 Capsules",
  "Multivitamin Tablets",
];

const Contact = () => {
  return (
    <section
      className="relative w-full min-h-screen text-white font-sans overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-wide"
          >
            Let’s Connect With Us
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mt-6 text-gray-200 max-w-2xl mx-auto text-base md:text-lg"
          >
            Have questions, suggestions, or want to collaborate?  
            We’d love to hear from you — drop us a message or visit us directly.
          </motion.p>
        </motion.div>

        {/* Form + Info Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* ---------------- Enquiry Form ---------------- */}
          <motion.div
            variants={slideIn("left")}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Enquiry Form </h3>

            <form className="space-y-6">
              {/* Inputs */}
              {["Full Name", "Email Address", "Phone Number"].map((label, i) => (
                <motion.div key={i} variants={fadeInUp} custom={i + 1}>
                  <label className="text-gray-200 text-sm font-medium mb-1 block">
                    {label}
                  </label>
                  <input
                    type={label === "Email Address" ? "email" : "text"}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </motion.div>
              ))}

              {/* Product Selection */}
              <motion.div variants={fadeInUp} custom={4}>
                <label className="text-gray-200 text-sm font-medium mb-1">
                  Product Interested
                </label>
                <div className="relative">
                  <select className="w-full p-3 pr-10 rounded-lg bg-white/10 border border-white/30 text-white focus:ring-2 focus:ring-purple-400 outline-none appearance-none">
                    <option value="">Select a product</option>
                    {products.map((p, index) => (
                      <option key={index} value={p} className="text-black">
                        {p}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
                    ▼
                  </span>
                </div>
              </motion.div>

              {/* Message Type */}
              <motion.div variants={fadeInUp} custom={5}>
                <label className="text-gray-200 text-sm font-medium mb-1">
                  Message Type
                </label>
                <div className="relative">
                  <select className="w-full p-3 pr-10 rounded-lg bg-white/10 border border-white/30 text-white focus:ring-2 focus:ring-purple-400 outline-none appearance-none">
                    <option value="">Select a message type</option>
                    {["General Query", "Feedback", "Collaboration", "Support"].map(
                      (type, index) => (
                        <option key={index} value={type} className="text-black">
                          {type}
                        </option>
                      )
                    )}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
                    ▼
                  </span>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUp} custom={6}>
                <label className="text-gray-200 text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={fadeInUp}
                custom={7}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>

          {/* ---------------- Contact Information ---------------- */}
          <motion.div
            variants={slideIn("right")}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Contact Information</h3>

            <ul className="space-y-6 text-gray-200 text-sm leading-relaxed">
             <motion.li variants={fadeInUp} custom={1} className="flex gap-4">
  <FaMapMarkerAlt className="text-purple-300 text-xl mt-1" />
  <div>
    <span className="font-medium text-white">Address</span>
    <br />FOURMAX PHARMA,
    <br />NO- 9B, SECOND FLOOR,
    <br />NORTH PERUMAL MAISTRY STREET,
    <br />MADURAI - 625001,
    <br />TAMIL NADU, INDIA
  </div>
</motion.li>


              <motion.li variants={fadeInUp} custom={2} className="flex gap-4">
                <FaPhoneAlt className="text-purple-300 text-xl mt-1" />
                <div>
                  <span className="font-medium text-white">Phone</span>
                  <br />+91 76959 43457
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} custom={3} className="flex gap-4">
                <FaEnvelope className="text-purple-300 text-xl mt-1" />
                <div>
                  <span className="font-medium text-white">Email</span>
                  <br /> info@fourmaxpharma.com
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} custom={4} className="flex gap-4">
                <FaClock className="text-purple-300 text-xl mt-1" />
                <div>
                  <span className="font-medium text-white">Working Hours</span>
                  <br />Monday – Friday: 9:00 AM – 5:00 PM
                </div>
              </motion.li>
            </ul>

            {/* Google Map */}
            <motion.div
              variants={fadeInUp}
              custom={5}
              className="mt-6 rounded-xl overflow-hidden border border-white/20 shadow-md"
            >
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.005284621009!2d78.11611037462267!3d9.926642274804146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c585f52a9b1f%3A0x2c3c63a0ec1d7f3b!2sNorth%20Perumal%20Maistry%20St%2C%20Madurai%2C%20Tamil%20Nadu%20625001!5e0!3m2!1sen!2sin!4v1732546996572!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
