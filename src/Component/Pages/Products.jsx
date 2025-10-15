import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Categories
const categories = [
  "All Products",
  "Cardiovascular",
  "Respiratory",
  "Pain / Musculoskeletal",
  "Orthopedic / Bone Health",
  "Orthopedic / Joint Health",
  "Hematology / Anemia",
  "Gynecology / Fertility",
  "Gastrointestinal",
  "Infectious Disease",
];

// Products
const products = [
  {
    id: 1,
    category: "Orthopedic / Joint Health",
    title: "Tendo Qik",
    description:
      "Collagen Peptide Type I, Sodium Hyaluronate, Chondroitin Sulfate, Vitamin C – supportive tendon recovery formula.",
    images: ["https://i.postimg.cc/L6w1DSRV/Tendo-Qik-4-D.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide Type I, Sodium Hyaluronate, and Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in early and recovering tendinopathies may help improve movement and relieve discomfort effectively.",
    indication: "For early & recovering tendinopathies.",
  },

  {
    id: 2,
    category: "Pain / Musculoskeletal",
    title: "Acpon",
    description:
      "Aceclofenac + Paracetamol – relieves pain and inflammation in musculoskeletal disorders.",
    images: ["https://i.postimg.cc/SK87CsM8/Acpon.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",

  },
  {
    id: 3,
    category: "Orthopedic / Bone Health",
    title: "Cisqtrix",
    description:
      "Cissus Quadrangularis, Calcium Orotate, Calcitriol, Vitamin K2-7 – unique bone health & fracture healing support.",
    images: ["https://i.postimg.cc/NGb81Z5N/Cisqtrix.jpg"],
    composition:
      "Cissus Quadrangularis Extract 500MG, Calcium Orotate 740MG, Calcitriol 0.25MCG, Vitamin K2-7 45MCG.",
    fullDescription:
      "CISOTRIOL is a unique formulation combining multiple bone-health nutrients: \n\n- **Cissus Quadrangularis Extract** – helps reduce pain, swelling, and fracture mobility.\n- **Calcium Orotate** – reduces fracture risk and strengthens bone.\n- **Calcitriol** – helps treat and prevent low calcium levels and bone disease in geriatric patients.\n- **Vitamin K2-7** – supports bone mineralization and increases bone mass.\n\nThis synergistic blend promotes bone healing, reduces fracture complications, and enhances long-term skeletal strength.",
    indication:
      "Osteoporosis, Post-menopausal osteoporosis, Osteopenia, and Fracture healing.",
  },

  {
    id: 4,
    category: "Pain / Musculoskeletal",
    title: "EC Tap MR",
    description: "Etoricoxib + Thiocolchicoside – arthritis and muscle relaxant therapy.",
    images: ["https://i.postimg.cc/90XG6YNt/EC-Tap-MR.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },

  {
    id: 5,
    category: "Hematology / Anemia",
    title: "Ferzi Plus",
    description:
      "Ferrous Bisglycinate, Zinc, Methylcobalamin, L-Methylfolate – advanced formula for anemia and neuropathy support.",
    images: ["https://i.postimg.cc/90xGCw63/Ferzi-Plus.jpg"],
    composition:
      "Each soft gelatin capsule contains Ferrous Bisglycinate (equivalent to elemental iron)60 mg L-Methylfolate...500 mcg Zinc Bisglycinate (equivalent to elemental Zinc)15 mg Methylcobalamin IP 500 mcg",
    fullDescription:
      "FERZIBIS Tab consists of one molecule of ferrous iron bound to two molecules of glycine. Ferrous bisglycinate belongs to dietary supplements and has been approved by global regulators. FERZIBIS Tab enjoys the privilege of being a highly absorbable iron supplement exceeding ferrous salts.",
    indication: "TO PREVENT ANEMIA",
  },
  {
    id: 6,
    category: "Orthopedic / Joint Health",
    title: "FlexmaXX UC",
    description:
      "Collagen peptide, Glucosamine, Chondroitin, Boswellia, Vit D3 – advanced support for osteoarthritis and joint pain.",
    images: ["https://i.postimg.cc/3JRX99G3/Flexma-XX-UC.jpg"],
    composition:
      "Collagen Peptide, Glucosamine, Chondroitin, Boswellia Serrata Extract, Vitamin D3",
    fullDescription:
      "OA-CARE UC is a unique formulation that addresses the pain mechanisms in osteoarthritis, including inflammatory pain, neuropathic pain, and degenerative pain, in a comprehensive manner. It is recommended in painful osteoarthritis, neuropathic arthropathy, synovial arthritis, rheumatoid arthritis, trauma and joint injury, as well as in pre-TJR (Total Joint Replacement) preparation and post-TJR rehabilitation.",
    indication: "For the management of osteoarthritis.",
  },

  {
    id: 7,
    category: "Orthopedic / Bone Health",
    title: "Magnes D3",
    description: "Magnesium Glycine Complex + Vitamin D3 – supports bone strength and muscle function.",
    images: ["https://i.postimg.cc/L8gzFXv7/Magnes-D3.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },

  {
    id: 8,
    category: "Respiratory",
    title: "MontiQik-L",
    description:
      "Montelukast + Levocetirizine – effective in asthma, allergic rhinitis, and respiratory allergies.",
    images: ["https://i.postimg.cc/q7f2JT57/Montiqik-L.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  {
    id: 9,
    category: "Gynecology / Fertility",
    title: "OvaFol",
    description:
      "Myo-Inositol, D-Chiro Inositol, Folate, Vit D3, Chromium, Zinc – PCOS, insulin resistance, and fertility support.",
    images: ["https://i.postimg.cc/gJmRhKdF/OvaFol.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  // ------------------ NEW UPLOADED PRODUCTS ------------------ //
  {
    id: 10,
    category: "Hematology / Anemia",
    title: "Tri B Max Total",
    description:
      "Advanced B-complex with Iron & Zinc – supports anemia, energy, and neurological function.",
    images: ["https://i.postimg.cc/7ZzTQRZr/Tri-B-Max-Total.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  {
    id: 11,
    category: "Gynecology / Fertility",
    title: "Tribmax DHA",
    description:
      "Folic Acid, DHA, Vitamins & Minerals – essential formula for pregnancy and fetal development.",
    images: ["https://i.postimg.cc/3wHDMZk4/Tribmax-DHA.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  {
    id: 12,
    category: "Cardiovascular",
    title: "VFite 5G",
    description:
      "Multivitamin & Antioxidant formula with advanced phytonutrients – supports heart health, immunity, and energy.",
    images: ["https://i.postimg.cc/CKHnwf8v/VFite-5G.jpg"],
    composition:
      "VEYOFIT-5G is a soft gelatin capsules of Natural Extracts, Omega-3 Fatty Acids, Essential Vitamins, Trace Elements, Essential Amino Acids, Minerals, Probiotic with Bio-availability enhancers.",
    fullDescription:
      "VEYOFIT-5G is a comprehensive formulation that tackles vitamin and mineral deficiencies in adults, specifically in patients with dietary restrictions, such as diabetes mellitus. Piperine in VEYOFIT-5G is a Bio-Enhancer and improves absorption of micronutrients improving efficacy. VEYOFIT-5G is effective in vertigo & tinnitus associated with vestibular disorders, which are very common in elderly population, due to its highly bioavailable ginkgo biloba",
    indication: "FOR POST SURGICAL & GENERAL WEAKNESS.",
  },

  {
    id: 13,
    category: "Respiratory",
    title: "Pulmoact",
    description:
      "Acebrophylline & N-Acetylcysteine – mucolytic and bronchodilator for respiratory care.",
    images: ["https://i.postimg.cc/LszLhbc3/Pulmoact.jpg"],

    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  {
    id: 14,
    category: "Infectious Disease",
    title: "Qikzyme",
    description:
      "Trypsin, Bromelain & Rutoside – potent anti-inflammatory and wound healing support.",
    images: ["https://i.postimg.cc/9Mb9YqF4/Qikzyme.jpg"],
    composition:
      "Trypsin: 48MG, Bromelain: 90MG, Rutoside Trihydrate: 100MG Tablets",
    fullDescription:
      "Trypsin, Bromelain, and Rutoside combination in Qikzyme offers potent proteolytic action in relieving edema, inflammation, and promoting wound healing. Bromelain improves penetration of drugs into inflamed tissue & hastens the healing process. Rutoside improves blood circulation, thereby aiding faster healing and resolution of edema and inflammation. Recommended in mild to moderate inflammatory conditions associated with edema in trauma, sprains, strains, wounds & injuries, swelling following surgery, tooth extractions, abscesses, diabetic ulcers, tonsillitis, laryngitis, pharyngitis & fractures.",
    indication: "For painful inflammatory conditions with edema and impaired healing.",
  },

  {
    id: 15,
    category: "Gastrointestinal",
    title: "Rde DSR",
    description:
      "Rabeprazole Sodium (EC) & Domperidone (SR) – GERD and acid reflux management.",
    images: ["https://i.postimg.cc/D0zXjy8x/Rde-DSR.jpg"],
    composition:
      "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
    fullDescription:
      "Collagen Peptide type I, Sodium Hyaluronate, Chondroitin Sulfate may help support tendon recovery from degenerative tendinopathies. This supportive action in degenerative tendinopathies in early & recovering tendinopathies may help movement and relieve discomfort.",
    indication: "For early & recovering tendinopathies.",
  },
  {
    id: 16,
    category: "Pain / Musculoskeletal",
    title: "Spaz Tap",
    description:
      "Thiocolchicoside, Aceclofenac, Paracetamol – muscle relaxant for spasm & pain relief.",
    images: ["https://i.postimg.cc/J0dB9VXM/Spaz-Tap.jpg"],
    composition:
      "Thiocolchicoside 4MG, Aceclofenac 100MG, Paracetamol 325MG Tablets.",
    fullDescription:
      "TAPQIK is an effective skeletal muscle relaxant formula designed to reduce pain intensity and improve mobility in joint, bone, and muscle conditions associated with painful spasms. It is recommended in pain driven by muscle spasm with better gastrointestinal tolerability. Indicated in mild to moderate painful musculoskeletal conditions including muscle pain (myalgia), degenerative vertebral disorders, vertebral static problems, torticollis, dorsal pain, low-back pain, injury, and neurological disorders.",
    indication: "For mild to moderate spasm & pain.",
  },

  {
    id: 17,
    category: "Orthopedic / Joint Health",
    title: "Tendo Qik 4D",
    description:
      "Fortified formula with Collagen, Rosehip, Hyaluronate, L-Carnitine, Chondroitin, Vitamin C & D3 – designed for toughest tendinopathies.",
    images: ["https://i.postimg.cc/28VWnyp6/Tendo-Qik.jpg"],
    composition:
      "Bioactive Collagen Peptide Type I: 40MG, Mucopolysaccharide Polysulphate: 220MG, Rosehip Extract: 375MG, Sodium Hyaluronate: 30MG, L-Carnitine: 500MG, Chondroitin Sulphate: 200MG, Ascorbic Acid: 35MG, Cholecalciferol (Vitamin D3): 1000 IU",
    fullDescription:
      "Fortified formula for the toughest tendinopathies. A unique combination of collagen peptides, mucopolysaccharides, rosehip, hyaluronate, L-carnitine, chondroitin, vitamin C, and vitamin D3 to support tendon health and repair. Designed to aid recovery, improve resilience, and provide comprehensive tendon and joint support.",
    indication:
      "For stage III tendinopathies and challenging tendon recovery cases.",
  },

  {
    id: 18,
    category: "Cardiovascular",
    title: "Argiflux",
    description:
      "L-Arginine, Glutathione & Proanthocyanidin – supports fetomaternal circulation and pregnancy health.",
    images: ["https://i.postimg.cc/1XpZgKXC/Agri.png"],
    composition:
      "L-Arginine 3GM, L-Glutathione 25MG, Proanthocyanidin 75MG Granules.",
    fullDescription:
      "A novel combination that maintains round-the-clock fetomaternal circulation in pregnancy, helping support maternal and fetal well-being.",
    indication:
      "For management of uteroplacental insufficiency, preeclampsia, pregnancy-induced hypertension (PIH), gestational diabetes mellitus (GDM), low-birth weight (LBW), oligohydramnios, and intrauterine growth restriction (IUGR).",
  },



];

// Background images for categories
const categoryBackgrounds = {
  "All Products":
    "https://img.pikbest.com/wp/202347/capsule-pill-pharmacy-and-healthcare-concept-blue-background-with-pills-in-panoramic-layout-3d-render_9763081.jpg!sw800",
  Cardiovascular:
    "https://media.istockphoto.com/id/454238423/photo/stethoscope-heart-shape.jpg?s=612x612&w=0&k=20&c=1jtvb5aCwdR7nY1prW11mNwW0Wla3bUSkc17_C6YfK8=",
  Respiratory:
    "https://media.istockphoto.com/id/816819352/photo/the-inhaler-and-mask-pairs-antiallergic-drugs-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=fbu9ol4ibS_0sV5S83WL4DsI2FYVdzwdse_hz2H8yJ4=",
  "Infectious Disease":
    "https://png.pngtree.com/background/20250212/original/pngtree-texture-of-geometry-and-microbiology-in-medical-particle-elements-picture-image_13456132.jpg",
  Diabetics:
    "https://www.slideegg.com/image/multi-slide/47857/82163-diabetes-powerpoint-background-01.png",
  "Pain / Musculoskeletal":
    "https://shahalam.avisena.com.my/wp-content/uploads/2023/09/article-Joint-Health-intro.jpg",
  "Orthopedic / Bone Health":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSTsaAN2ka7gXp7nqjpT7-bBRQciz81uxiW-nwVruaBm6eoRFqSJYOjG2diV0Pknw7RM&usqp=CAU",
  "Orthopedic / Joint Health":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpdr8A4EQfZQ77fQLIlSD-HBzr7aXqtHbcA&s",
  "Hematology / Anemia":
    "https://www.sysmex.com/-/media/project/sysmex/sysmex/images/2-column_content_component-image_and_text/knowledge-card-hematology-image.jpg?iar=0&sc_lang=es-cl&hash=C88576D54F61DBE513C85DA7D2918E96",
  "Gynecology / Fertility":
    "https://www.newhopefertility.com/wp-content/uploads/2023/07/When-to-See-a-Fertility-Specialist.webp",
  Gastrointestinal:
    "https://gemhospitals.com/frontend/assets/images/team/grid/UPPER_GI.jpg",
};

const underline = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Lazy image loader
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 animate-pulse" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>
  );
};


const gradientGlows = [
  "from-yellow-400 to-orange-400",
  "from-pink-400 to-rose-500",
  "from-green-400 to-emerald-500",
  "from-blue-400 to-cyan-500",
  "from-purple-400 to-fuchsia-500",
  "from-orange-400 to-amber-500",
];

const glowShadows = [
  "hover:shadow-[0_0_25px_6px_rgba(251,191,36,0.7)]",  // yellow glow
  "hover:shadow-[0_0_25px_6px_rgba(244,114,182,0.7)]", // pink glow
  "hover:shadow-[0_0_25px_6px_rgba(34,197,94,0.7)]",   // green glow
  "hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.7)]",  // blue glow
  "hover:shadow-[0_0_25px_6px_rgba(168,85,247,0.7)]",  // purple glow
  "hover:shadow-[0_0_25px_6px_rgba(249,115,22,0.7)]",  // orange glow
];

const ProductCard = ({ product, delay, index, onClick }) => {
  const gradient = gradientGlows[index % gradientGlows.length];
  const glow = glowShadows[index % glowShadows.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={delay + 1}
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      onClick={() => onClick(product)}
      className={`relative group rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-transparent backdrop-blur-lg transition duration-500 ${glow}`}
    >
      {/* Product Image */}
      <LazyImage
        src={product.images[0]}
        alt={product.title}
        className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] object-contain transition-transform duration-700 group-hover:scale-110"
      />

      {/* Title + Category */}
      <div className="p-3 sm:p-4 text-center relative z-10">
        <h4
          className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {product.title}
        </h4>
        <p
          className={`text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {product.category}
        </p>
      </div>
    </motion.div>
  );
};


// Product modal
const ProductModal = ({ product, onClose }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
   const navigate = useNavigate();

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-2 sm:p-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl 
                     grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-600 
                       hover:text-red-500 text-2xl sm:text-3xl font-bold z-10"
          >
            &times;
          </button>

          {/* 🖼️ Image Section */}
          <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-4">
            <motion.img
              key={currentIndex}
              src={product.images[currentIndex]}
              alt={product.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] 
                         object-contain rounded-lg cursor-zoom-in"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5 }}
              onClick={() => setZoomImage(true)}
            />
          </div>

          {/* 📄 Info Section */}
          <div className="p-4 sm:p-6 flex flex-col justify-center space-y-3 sm:space-y-4 overflow-y-auto max-h-[80vh]">
            <motion.h2
              className="text-lg sm:text-2xl font-bold text-gray-900 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
            >
              {product.title}
            </motion.h2>

            <motion.p
              className="text-xs sm:text-sm text-gray-500 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              {product.category}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
            >
              {product.description}
            </motion.p>

            {product.composition && (
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={3}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Composition:
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{product.composition}</p>
              </motion.div>
            )}

            {product.fullDescription && (
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={4}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Description:
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{product.fullDescription}</p>
              </motion.div>
            )}

            {product.indication && (
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={5}>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                  Indication:
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{product.indication}</p>
              </motion.div>
            )}
               <button
        onClick={() => {
          onClose(); // close modal first
          navigate("/contact", { state: { product } }); 
        }}
        className="px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition mt-4"
      >
        Enquiry
      </button>
          </div>
    

        </motion.div>
 

           
        


        {/* 🔍 Fullscreen Zoom Modal */}
        <AnimatePresence>
          {zoomImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomImage(false)}
            >
              <motion.img
                src={product.images[currentIndex]}
                alt={product.title}
                className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}



        </AnimatePresence>
        
      </motion.div>
    </AnimatePresence>
  );
};

// Main Component
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative text-white py-10 sm:py-16 px-3 sm:px-6 md:px-12 overflow-hidden">
      {/* 🔲 Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${categoryBackgrounds[selectedCategory]}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 sm:from-black/80 sm:to-black/60"></div>
      </div>

      <div className="relative z-10">
        {/* 🏷️ Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-10 tracking-wide m-10"
        >
          Our Products
        </motion.h2>

        {/* 🔘 Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-500
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
                    : "bg-white/20 text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 📦 Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={index}
              index={index}
              onClick={(p) => setModalProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* 🪟 Product Modal */}
      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </section>
  );
};

export default Product;