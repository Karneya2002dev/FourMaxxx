import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logoo.png";
import name from "../assets/name.png";

const shootingOrder = [
  { name: "HOME", path: "/home" },
  { name: "USES OF PRODUCTS", path: "/uses" },
  { name: "PRODUCTS", path: "/products" },
  { name: "ABOUT US", path: "/about" },
  { name: "CAREERS", path: "/carrers" },
  { name: "EVENTS", path: "/events" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shotLinks, setShotLinks] = useState([]);
  const [showName, setShowName] = useState(false);
  const location = useLocation();
  const logoControls = useAnimation();

  // 🌈 Scroll detection for glass background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ Logo intro animation
  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({
        x: window.innerWidth / 2 - 60,
        scale: 1.5,
        rotateY: 360,
        transition: { duration: 2, ease: "easeInOut" },
      });

      logoControls.start({
        x: 0,
        scale: 1,
        rotateY: 720,
        transition: { duration: 2, ease: "easeInOut" },
      });

      setShotLinks(shootingOrder);
      await new Promise((r) => setTimeout(r, 2000));
      setShowName(true);
    };
    sequence();
  }, [logoControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <nav
        className={`transition-all duration-700 w-full max-w-[95%] mt-4 rounded-2xl px-4 py-3 border ${
          scrolled
            ? // 🌈 Glass effect after scroll
              "backdrop-blur-lg bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)]"
            : // ✨ Transparent before scroll
              "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-x-6">
          {/* 🧬 Logo + Name */}
          <div className="flex items-center space-x-3">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
              initial={{ x: 0, scale: 1 }}
              animate={logoControls}
              style={{ transformStyle: "preserve-3d" }}
            />
            {showName && (
              <motion.img
                src={name}
                alt="FourmaX Pharma"
                className="h-12 w-auto object-contain"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}
          </div>

          {/* 💻 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {shotLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.name}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative text-sm font-medium"
                >
                  <NavLink to={link.path}>
                    {isActive ? (
                      <span>
                        <span className="text-[#FF0066] font-bold">
                          {link.name.charAt(0)}
                        </span>
                        <span className="text-sky-500 font-bold">
                          {link.name.slice(1)}
                        </span>
                      </span>
                    ) : (
                      <span className="text-sky-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                        {link.name}
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
          </div>

          {/* 📱 Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>

        {/* 📲 Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            >
              <div className="flex flex-col px-4 py-3 space-y-3">
                {shootingOrder.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`text-base font-medium ${
                          isActive
                            ? "text-[#FF0066] font-bold"
                            : "text-sky-400 hover:text-purple-400"
                        }`}
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
