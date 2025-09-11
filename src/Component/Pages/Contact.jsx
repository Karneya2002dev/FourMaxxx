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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
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
    transition: { duration: 1.5, ease: "easeOut" },
  },
});

// Example product list for enquiry
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
      className="relative w-full min-h-screen text-gray-800 font-sans overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-textclip tracking-wide"
          >
            Let’s Connect With Us
          </motion.h2>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
            Have questions, suggestions, or want to collaborate?
            We’d love to hear from you — drop us a message or visit us directly.
          </p>
        </motion.div>

        {/* Form + Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Enquiry Form */}
          <motion.div
            variants={slideIn("left")}
            className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Enquiry Form ✨
            </h3>
            <form className="space-y-6">
              {["Full Name", "Email Address", "Phone Number"].map((label, i) => (
                <motion.div key={i} variants={fadeInUp} custom={i + 1}>
                  <label className="text-gray-200 text-sm font-medium block mb-1">
                    {label}
                  </label>
                  <input
                    type={label === "Email Address" ? "email" : "text"}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full p-3 rounded-lg border border-white/40 text-white placeholder:text-gray-300 bg-white/10 focus:ring-2 focus:ring-purple-400 outline-none"
                  />
                </motion.div>
              ))}

              {/* Product Selection */}
             {/* Product Selection */}
<motion.div variants={fadeInUp} custom={5}>
  <label className="text-gray-100 text-sm font-medium block mb-1">
    Product Interested
  </label>
  <select className="w-full p-3 rounded-lg text-black bg-white/10 border border-white/40 focus:ring-2 focus:ring-purple-400 outline-none">
    <option value="">Select a product</option>
    {products.map((product, index) => (
      <option key={index} value={product}>
        {product}
      </option>
    ))}
  </select>
</motion.div>

{/* Message Type */}
<motion.div variants={fadeInUp} custom={6}>
  <label className="text-gray-100 text-sm font-medium block mb-1">
    Message Type
  </label>
  <select className="w-full p-3 rounded-lg text-black bg-white/10 border border-white/40 focus:ring-2 focus:ring-purple-400 outline-none">
    <option value="">Select a message type</option>
    {["General Query", "Feedback", "Collaboration", "Support"].map((type, index) => (
      <option key={index} value={type}>
        {type}
      </option>
    ))}
  </select>
</motion.div>




              {/* Message */}
              <motion.div variants={fadeInUp} custom={6}>
                <label className="text-gray-200 text-sm font-medium block mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-lg border border-white/40 text-white placeholder:text-gray-300 bg-white/10 focus:ring-2 focus:ring-purple-400 outline-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={fadeInUp}
                custom={7}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            variants={slideIn("right")}
            className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Our Contact Information 📌
            </h3>
            <ul className="space-y-6 text-gray-200 text-sm leading-relaxed flex-1">
              <motion.li
                className="flex items-start gap-4"
                variants={fadeInUp}
                custom={1}
              >
                <FaMapMarkerAlt className="text-purple-300 text-lg mt-1" />
                <div>
                  <span className="text-white font-medium block">Address</span>
                  9-B 1st Floor, Sidco Nagar, Villivakkam,<br />
                  Chennai - 600049, Tamil Nadu, India
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                variants={fadeInUp}
                custom={2}
              >
                <FaPhoneAlt className="text-purple-300 text-lg mt-1" />
                <div>
                  <span className="text-white font-medium block">Phone</span>
                  +91 76959 43457
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                variants={fadeInUp}
                custom={3}
              >
                <FaEnvelope className="text-purple-300 text-lg mt-1" />
                <div>
                  <span className="text-white font-medium block">Email</span>
                  fourmaxpharma@gmail.com
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-4"
                variants={fadeInUp}
                custom={4}
              >
                <FaClock className="text-purple-300 text-lg mt-1" />
                <div>
                  <span className="text-white font-medium block">Working Hours</span>
                  Monday – Friday: 9:00 AM – 5:00 PM
                </div>
              </motion.li>
            </ul>

            {/* Social Media */}
            <motion.div variants={fadeInUp} custom={5} className="mt-6">
              <p className="font-medium text-white mb-3">Follow us on</p>
              <div className="flex gap-4 text-xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-blue-600 transition text-white">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-black transition text-white">
                  <FaXTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-pink-500 transition text-white">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-red-500 transition text-white">
                  <FaYoutube />
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              variants={fadeInUp}
              custom={6}
              className="mt-6 rounded-xl overflow-hidden border border-white/30 shadow-md transform hover:scale-[1.02] transition duration-300"
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9223880891526!2d80.2099833153228!3d13.097855190775313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f8f3a12345%3A0xabcdef123456789!2sVillivakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600049%2C%20India!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
