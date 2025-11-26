import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, Phone, User, FileText } from "lucide-react";
import { Award, ShieldCheck, Wallet } from "lucide-react";

const jobList = [
  {
    title: "Research Scientist",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Join our R&D team to develop innovative pharmaceutical solutions and contribute to breakthrough treatments.",
    image:
      "https://www.shutterstock.com/image-photo/team-medical-research-scientists-collectively-260nw-691541065.jpg",
  },
  {
    title: "Quality Control Specialist",
    location: "Hyderabad, India",
    type: "Full-Time",
    description:
      "Ensure the highest standards of quality and compliance across all pharmaceutical products.",
    image:
      "https://media.istockphoto.com/id/1441662840/photo/scientists-working-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=GUJ7aw11lhADMMyfNyNjUn15Xa16zhGcd_wHcv3ASHU=",
  },
  {
    title: "Clinical Research Associate",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Coordinate and monitor clinical trials ensuring compliance with protocols and patient safety.",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4sGUfabmKE79Bj1pdPkeF4/f6e77f0c57680efc625a5c063f830a4f/GettyImages-1461437473.jpg?w=1000",
  },
];



const highlights = [
  { 
    icon: <Award className="text-pink-600 w-10 h-10" />, 
    title: "Award Winning", 
    description: "Recognized for excellence in pharmaceutical innovation." 
  },
  { 
    icon: <Wallet className="text-blue-600 w-10 h-10" />, 
    title: "Well Allowance", 
    description: "Comprehensive benefits and allowances for employees." 
  },
  { 
    icon: <ShieldCheck className="text-green-600 w-10 h-10" />, 
    title: "Full Insurance", 
    description: "Health insurance coverage for all team members." 
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Careers = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [pdfPreview, setPdfPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, resume: file }));
      if (file.type === "application/pdf") setPdfPreview(URL.createObjectURL(file));
      else setPdfPreview(null);
    } else {
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    }
  };

  useEffect(() => () => pdfPreview && URL.revokeObjectURL(pdfPreview), [pdfPreview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Application submitted successfully!");
    setFormData({ jobTitle: "", name: "", email: "", phone: "", coverLetter: "", resume: null });
    setPdfPreview(null);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 overflow-hidden">

      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200/30 rounded-full"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: ["0%", "5%", "0%"],
              x: ["0%", "5%", "0%"],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <motion.div
        className="relative text-center py-28 md:py-36 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/2pudprfttvy6/2ipMiLDRFV9rG1SboaZYf7/6b9d2fab6000094a9c08b9db6536328d/GettyImages-892091842.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
            At Fourmax Pharmaceuticals, we foster innovation and growth.
          </p>
        </motion.div>
      </motion.div>

      {/* JOB LIST + FORM */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* JOB CARDS */}
        <div className="space-y-8">
          {jobList.map((job, idx) => (
            <motion.div
              key={idx}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition p-6 hover:scale-105 hover:rotate-1 hover:border-blue-400/50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <motion.img
                src={job.image}
                alt={job.title}
                className="w-full h-56 object-cover rounded-2xl mb-4 border-2 border-white/30 shadow-md"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{job.title}</h3>
              <p className="text-gray-700 mb-2">{job.description}</p>
              <p className="text-blue-600 font-semibold mb-2">{job.location}</p>
              <span className="px-4 py-1 bg-blue-600/80 text-white text-sm rounded-full inline-block">
                {job.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <motion.div
          className="p-8 rounded-3xl h-fit bg-white/20 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition hover:scale-105"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-extrabold mb-6 text-blue-900">Apply Now</h3>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/** JOB TITLE **/}
            <div>
              <label className="font-semibold mb-1">Job Title</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 text-gray-600" size={18} />
                <select
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-white/40 backdrop-blur-md"
                >
                  <option value="">Select Job</option>
                  {jobList.map((job) => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/** NAME **/}
            <div>
              <label className="font-semibold mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-600" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-white/40 backdrop-blur-md"
                />
              </div>
            </div>

            {/** EMAIL **/}
            <div>
              <label className="font-semibold mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-600" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-white/40 backdrop-blur-md"
                />
              </div>
            </div>

            {/** PHONE **/}
            <div>
              <label className="font-semibold mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-600" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-300 px-10 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-white/40 backdrop-blur-md"
                />
              </div>
            </div>

            {/** COVER LETTER **/}
            <div>
              <label className="font-semibold mb-1">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us something about yourself..."
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition bg-white/40 backdrop-blur-md"
              />
            </div>

            {/** RESUME **/}
            <div>
              <label className="font-semibold mb-1">Resume (PDF Only)</label>
              <div className="mt-2 flex items-center gap-3 border border-gray-300 px-4 py-3 rounded-xl bg-white/40 backdrop-blur-md">
                <FileText className="text-gray-600" />
                <input type="file" name="resume" accept=".pdf" onChange={handleChange} />
              </div>
              {pdfPreview && (
                <iframe src={pdfPreview} className="w-full h-48 mt-3 border rounded-xl" title="Resume Preview" />
              )}
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg rounded-xl transition transform hover:scale-105 shadow-lg">
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          {highlights.map((h, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-110 hover:rotate-1 border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-3 animate-pulse">{h.icon}</div>
              <h4 className="font-bold text-lg">{h.title}</h4>
              <p className="text-gray-700 mt-2">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
