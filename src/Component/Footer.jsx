import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import marqwonLogo from '../assets/blacklogo.jpg';

const socialIcons = [
 {
  icon: <FaWhatsapp />,
  href: 'https://wa.me/917695948457',
  hoverColor: 'hover:text-[#25D366]',
},

  {
    icon: <FaInstagram />,
    href: 'https://instagram.com/your-handle',
    hoverColor: 'hover:text-[#E1306C]',
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-10">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-40 pointer-events-none" />

      {/* Main Footer Box */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-t-3xl shadow-2xl pt-12 px-6 pb-6 border-t border-blue-200">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logo} alt="Fourmax Logo" className="h-35 w-auto drop-shadow-lg" />

            <p className="text-sm text-black/80 text-center md:text-left leading-relaxed">
              © {new Date().getFullYear()} Fourmax Pharmaceuticals<br />
              All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold text-lg text-blue-700 tracking-wide">
              Connect With Us
            </h3>

            <div className="flex space-x-6">
              {socialIcons.map(({ icon, href, hoverColor }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl p-3 rounded-full bg-white/30 backdrop-blur-xl shadow-md hover:shadow-xl hover:bg-white/60 transition transform hover:scale-110 ${hoverColor}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-end space-y-4 text-black/90">

            <h3 className="font-semibold text-lg text-blue-700 tracking-wide">
              Contact Us
            </h3>

            <div className="flex items-start space-x-3 text-sm">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <address className="not-italic text-center md:text-right leading-relaxed">
                NO- 9B, SECOND FLOOR,<br />
                NORTH PERUMAL MAISTRY STREET,<br />
                MADURAI – 625001
              </address>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+917695948457" className="hover:text-blue-700 transition">
                +91 76959 48457
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:info@fourmaxpharma.com" className="hover:text-blue-700 transition">
                info@fourmaxpharma.com
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Credit */}
        <div className="mt-10 text-center">
          <a
            href="https://marqwon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 text-sm font-semibold text-black hover:text-blue-600 transition"
          >
            <span>Developed by</span>
            <img src={marqwonLogo} alt="Marqwon" className="h-7 w-auto" />
            <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">
              MarqWon
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
