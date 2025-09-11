import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const jobList = [
  {
    title: "Research Scientist",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Join our R&D team to develop innovative pharmaceutical solutions. This role involves conducting research, developing new formulations, and contributing to breakthrough treatments.",
    image:
      "https://www.shutterstock.com/image-photo/team-medical-research-scientists-collectively-260nw-691541065.jpg",
  },
  {
    title: "Quality Control Specialist",
    location: "Hyderabad, India",
    type: "Full-Time",
    description:
      "Ensure the highest standards of quality for our pharmaceutical products. This role focuses on testing, compliance, and quality assurance across departments.",
    image:
      "https://media.istockphoto.com/id/1441662840/photo/scientists-working-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=GUJ7aw11lhADMMyfNyNjUn15Xa16zhGcd_wHcv3ASHU=",
  },
  {
    title: "Clinical Research Associate",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Coordinate and monitor clinical trials to ensure compliance with protocols and regulatory requirements while maintaining data integrity and patient safety.",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4sGUfabmKE79Bj1pdPkeF4/f6e77f0c57680efc625a5c063f830a4f/GettyImages-1461437473.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
  },
];

const highlights = [
  {
    icon: "🏆",
    title: "Award Winning",
    description: "Recognized for excellence in pharmaceutical innovation.",
  },
  {
    icon: "💼",
    title: "Well Allowance",
    description: "Comprehensive benefits and allowances for employees.",
  },
  {
    icon: "🛡️",
    title: "Full Insurance",
    description: "Health insurance coverage for all team members.",
  },
];

// Animation variants
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
      if (file.type === "application/pdf") {
        setPdfPreview(URL.createObjectURL(file));
      } else {
        setPdfPreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    }
  };

  useEffect(() => () => pdfPreview && URL.revokeObjectURL(pdfPreview), [pdfPreview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("✅ Application submitted successfully!");
    setFormData({
      jobTitle: "",
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });
    setPdfPreview(null);
  };

  return (
    <section className="relative w-full bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        className="relative text-center py-28 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/2pudprfttvy6/2ipMiLDRFV9rG1SboaZYf7/6b9d2fab6000094a9c08b9db6536328d/GettyImages-892091842.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Career
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-100">
            Join Our Team! We are looking for passionate individuals to grow
            with Fourmax Pharmaceuticals.
          </p>
        </motion.div>
      </motion.div>

      {/* Jobs + Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Job Cards */}
        <div className="space-y-6">
          {jobList.map((job, idx) => (
            <motion.div
              key={idx}
              className="border p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 sm:h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.description}</p>
              <p className="text-sm font-semibold text-blue-700 mb-2">
                {job.location}
              </p>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {job.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Our Team</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Job Title Dropdown */}
            <select
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Job Title</option>
              {jobList.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
            <textarea
              name="coverLetter"
              placeholder="Your Message"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full"
            />
            {pdfPreview && (
              <iframe
                src={pdfPreview}
                title="Resume Preview"
                className="w-full h-48 mt-2 border rounded"
              />
            )}
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
              Send Application
            </button>
          </form>
        </motion.div>
      </div>

      {/* Highlights / Achievements */}
      <motion.div
        className="bg-gray-100 py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {highlights.map((h, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl mb-2">{h.icon}</div>
              <h4 className="font-bold mb-2">{h.title}</h4>
              <p className="text-gray-600 text-sm md:text-base">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Careers;
