import React, { useState } from "react";
import { Pill } from "lucide-react";
import { motion } from "framer-motion";

const logoColors = ["#00796b", "#00acc1", "#26c6da", "#80deea", "#b2ebf2"];


const medicines = [
  {
    id: "pulmoclear",
    name: "Pulmoact",
    image: "https://i.postimg.cc/LszLhbc3/Pulmoact.jpg",
    fullName: "Combination of Two Medicines (for respiratory conditions)",
    description:
      "Pulmoact is a combination medicine used for the treatment and prevention of respiratory conditions such as asthma, COPD, bronchitis, pneumonia, and cystic fibrosis. It works by relaxing the muscles in the airways, reducing mucus buildup, and improving airflow to make breathing easier.",
    uses: [
      {
        title: "Asthma",
        detail:
          "Helps prevent asthma attacks by relaxing airway muscles and making it easier to breathe. Useful when taken before exposure to triggers like dust, pollen, pets, or cigarette smoke.",
      },
      {
        title: "Chronic Obstructive Pulmonary Disease (COPD)",
        detail:
          "Relieves chest tightness, shortness of breath, and coughing by keeping the airways open and loosening mucus. Enables patients to perform daily activities more comfortably.",
      },
      {
        title: "Bronchitis",
        detail:
          "Reduces mucus thickness in the airways, making it easier to cough out. Also helps reduce inflammation and ease breathing discomfort.",
      },
      {
        title: "Pulmonary Complications of Cystic Fibrosis",
        detail:
          "Improves lung function by reducing mucus buildup and easing breathing. Helps manage persistent symptoms like coughing and breathlessness while reducing infection risks.",
      },
      {
        title: "Pneumonia",
        detail:
          "Works by killing bacteria that cause serious infections such as pneumonia and other bacterial infections of the lungs, skin, and soft tissues. Promotes recovery and prevents resistance when taken as prescribed.",
      },
    ],
    howItWorks: [
      {
        name: "Airway Muscle Relaxation",
        description:
          "Relaxes the muscles in the airways, making it easier for air to move in and out of the lungs.",
      },
      {
        name: "Mucus Loosening",
        description:
          "Breaks down and thins thick mucus, allowing it to be coughed out more easily, which helps clear airways.",
      },
      {
        name: "Anti-inflammatory Effect",
        description:
          "Reduces inflammation in the lungs and airways, easing symptoms like tightness, wheezing, and shortness of breath.",
      },
      {
        name: "Antibacterial Action",
        description:
          "Kills harmful bacteria that cause respiratory infections, helping prevent complications and reinfection.",
      },
    ],
  },

  {
    id: "montiqik",
    name: "MontiQik-L",
    image: "https://i.postimg.cc/q7f2JT57/Montiqik-L.jpg",
    fullName: "Levocetirizine + Montelukast",
    description:
      "A combination of levocetirizine and montelukast is primarily used to treat and prevent symptoms of allergic conditions, including allergic rhinitis and chronic hives. This dual-action medication targets different chemical messengers in the body to provide comprehensive relief from allergic symptoms.",
    uses: [
      {
        title: "Allergic Rhinitis (Hay Fever)",
        detail:
          "Effective against both seasonal and year-round allergies. Relieves symptoms like a runny or stuffy nose, sneezing, and watery, itchy eyes.",
      },
      {
        title: "Asthma-associated Rhinitis",
        detail:
          "Useful in managing nasal symptoms in patients with both rhinitis and asthma.",
      },
      {
        title: "Chronic Urticaria (Hives)",
        detail:
          "Beneficial for individuals whose hives don't respond to standard antihistamines, relieving itching and inflammation.",
      },
    ],
    howItWorks: [
      {
        name: "Levocetirizine",
        description:
          "An antihistamine that blocks histamine, a chemical released during allergic reactions. It helps reduce sneezing, itching, and a runny nose.",
      },
      {
        name: "Montelukast",
        description:
          "A leukotriene receptor antagonist that blocks leukotrienes — chemicals that cause airway and nasal inflammation. This reduces swelling and improves breathing.",
      },
    ],
  },

  {
    id: "ectap",
    name: "EC Tap MR",
    image: "https://i.postimg.cc/90XG6YNt/EC-Tap-MR.jpg",
    fullName: "Etoricoxib + Thiocolchicoside",
    description:
      "This combination provides pain relief and muscle relaxation. It's commonly prescribed for arthritis and muscle spasms.",
    uses: [
      { title: "Osteoarthritis" },
      { title: "Rheumatoid Arthritis" },
      { title: "Muscle Spasms and Injuries" },
    ],
    howItWorks: [
      {
        name: "Etoricoxib",
        description: "Reduces inflammation by blocking the COX-2 enzyme.",
      },
      {
        name: "Thiocolchicoside",
        description:
          "A muscle relaxant that reduces spasms and stiffness, improving mobility and comfort.",
      },
    ],
  },

  {
    id: "rde",
    name: "RDE DSR",
    image: "https://i.postimg.cc/D0zXjy8x/Rde-DSR.jpg",
    fullName: "Rabeprazole Sodium + Domperidone",
    description:
      "This combination is effective in treating acid-related disorders of the stomach and gastrointestinal tract.",
    uses: [
      { title: "GERD (Gastroesophageal Reflux Disease)" },
      { title: "Peptic Ulcer Disease" },
      { title: "Zollinger-Ellison Syndrome" },
      { title: "Indigestion and Bloating" },
      { title: "Nausea and Vomiting" },
      { title: "Gastroparesis (Delayed Stomach Emptying)" },
    ],
    howItWorks: [
      {
        name: "Rabeprazole",
        description:
          "A proton pump inhibitor (PPI) that blocks acid-producing enzymes in the stomach lining, reducing stomach acid.",
      },
      {
        name: "Domperidone",
        description:
          "A prokinetic agent that enhances movement of food through the stomach and intestines by blocking dopamine receptors, helping prevent acid reflux.",
      },
    ],
  },

  {
    id: "spaztap",
    name: "Spaztap",
    image: "https://i.postimg.cc/J0dB9VXM/Spaz-Tap.jpg",
    fullName: "Aceclofenac + Paracetamol + Thiocolchicoside",
    description:
      "Spaztap Tablet is a combination medicine used for pain relief and muscle relaxation. It helps reduce inflammation, fever, and muscle stiffness associated with musculoskeletal and joint conditions such as back pain, arthritis, and muscle spasms.",
    uses: [
      {
        title: "Muscle Pain",
        detail: "Treats general muscle pain, stiffness, and spasms.",
      },
      {
        title: "Back and Neck Pain",
        detail:
          "Alleviates pain and stiffness in the back and neck caused by strain or injury.",
      },
      {
        title: "Osteoarthritis",
        detail:
          "Manages pain and inflammation associated with degenerative joint disorders.",
      },
      {
        title: "Rheumatoid Arthritis",
        detail:
          "Helps relieve swelling, pain, and stiffness in joints caused by autoimmune inflammation.",
      },
    ],
    howItWorks: [
      {
        name: "Aceclofenac",
        description:
          "A non-steroidal anti-inflammatory drug (NSAID) that works by blocking the release of certain chemical messengers that cause pain and swelling.",
      },
      {
        name: "Paracetamol (Acetaminophen)",
        description:
          "An analgesic and antipyretic that increases the body’s pain threshold and reduces fever.",
      },
      {
        name: "Thiocolchicoside",
        description:
          "A muscle relaxant that acts on the centers in the brain and spinal cord to relieve muscle stiffness and spasms, thereby improving movement and flexibility.",
      },
    ],
  },


  {
  id: "argiflux",
  name: "Argiflux ",
  image: "https://i.postimg.cc/1XpZgKXC/Agri.png",
  fullName: "L-Arginine + L-Glutathione + Proanthocyanidin Granules",
  description:
    "Argiflux Sachet is a nutritional and antioxidant formulation used in pregnancy to improve placental blood flow, fetal growth, and amniotic fluid volume. It supports maternal health and helps prevent pregnancy complications associated with uteroplacental insufficiency.",
  uses: [
    { title: "Uteroplacental Insufficiency", detail: "Improves placental blood flow and oxygen supply to the fetus." },
    { title: "Oligohydramnios", detail: "Helps increase amniotic fluid volume." },
    { title: "Low Birth Weight", detail: "Supports fetal growth and development." },
    { title: "Gestational Diabetes Mellitus (GDM)", detail: "Supports metabolic health and reduces oxidative stress." },
    { title: "Preeclampsia", detail: "Helps regulate blood pressure and improve vascular health." },
    { title: "PIH / IUGR", detail: "Improves fetal perfusion and prevents growth restriction." }
  ],
  howItWorks: [
    {
      name: "L-Arginine",
      description:
        "Boosts Nitric Oxide levels, improves uteroplacental blood flow, and increases amniotic fluid volume while supporting fetal growth."
    },
    {
      name: "L-Glutathione",
      description:
        "A powerful antioxidant that protects cells from oxidative stress and enhances the performance of L-Arginine."
    },
    {
      name: "Proanthocyanidin",
      description:
        "A potent antioxidant that improves microcirculation, protects vascular tissues, and enhances placental function."
    }
  ],
  extraBenefits: [
    "Sugar-free",
    "Orange flavored",
    "Stable source of Nitric Oxide",
    "Improves fetal health & growth",
    "Enhances placental function"
  ]
},

{
  id: "tendoqik4d",
  name: "Tendo Qik 4D",
  image: "https://i.postimg.cc/L6w1DSRV/Tendo-Qik-4-D.jpg",
  fullName: "Bioactive Collagen Peptide Type I + Rosehip Extract + Sodium Hyaluronate + L-Carnitine + Chondroitin Sulphate + Vitamin C + Vitamin D3 Tablets",
  description:
    "Tendo Qik 4D is a comprehensive tendon recovery formula designed for Stage 3 & Stage 4 tendinopathies. It enhances tendon healing, reduces inflammation, improves collagen strength, and prevents recurrence. The 4-Dimensional approach accelerates recovery and restores mobility in chronic tendon injuries.",
  uses: [
    { title: "Chronic Tendinopathies", detail: "Recommended for Stage 3 & 4 tendinopathy cases with persistent pain and degeneration." },
    { title: "Sports Tendon Injuries", detail: "Promotes tendon repair & strengthens ligament structure in athletes." },
    { title: "Post-Injury Rehabilitation", detail: "Supports recovery following tendon tears and overuse injuries." },
    { title: "Rotator Cuff & Achilles Tendinopathy", detail: "Boosts collagen formation for shoulder & ankle tendon repair." },
    { title: "Tennis Elbow / Golfer’s Elbow", detail: "Helps relieve tendon inflammation and improves grip strength." },
    { title: "Patellar & Plantar Fascia Issues", detail: "Effective in patellar tendinitis and plantar fasciitis recovery." }
  ],

  howItWorks: [
    {
      name: "Bioactive Collagen Peptide Type I",
      description: "Stimulates tendon fibroblasts, enhances collagen synthesis, and improves tendon tensile strength."
    },
    {
      name: "Rosehip Extract",
      description: "Provides natural anti-inflammatory action and reduces tendon pain & stiffness."
    },
    {
      name: "Mucopolysaccharide (Sodium Hyaluronate)",
      description: "Improves tendon elasticity, lubricates tissue, and supports cellular regeneration."
    },
    {
      name: "Chondroitin Sulphate + Vitamin C",
      description: "Promotes collagen cross-linking, matrix rebuilding, and faster soft tissue healing."
    },
    {
      name: "Vitamin D3",
      description: "Helps calcium absorption and prevents recurrence by enhancing tendon-bone interface strength."
    }
  ],

  extraBenefits: [
    "4-Dimensional formula for tendon regeneration",
    "Anti-inflammatory, regenerative, resilient & anti-recurrent action",
    "Strengthens collagen fibers for long-term tendon health",
    "Supports elite sports injury recovery",
    "Reduces stiffness & restores mobility"
  ]
}


];

// Collapsible Section Component
function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-5 border border-indigo-300 dark:border-indigo-700 rounded-2xl overflow-hidden shadow-md backdrop-blur-md bg-white/80 dark:bg-gray-900/70">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold text-sm sm:text-lg"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 sm:p-6 bg-transparent text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

// Medicine Details Component
function MedicineTabContent({ medicine }) {
  return (
    <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-5 sm:p-8 shadow-2xl border border-indigo-200 dark:border-indigo-700 transition-all duration-500">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-2xl border-4 border-indigo-600 shadow-lg"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {medicine.name}
          </h2>
          <p className="text-sm sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-2">
            {medicine.fullName}
          </p>
        </div>
      </div>

      <CollapsibleSection title="Description">
        <p>{medicine.description}</p>
      </CollapsibleSection>

      <CollapsibleSection title="Uses">
        <ul className="list-disc pl-5 space-y-2">
          {medicine.uses.map((use, i) => (
            <li key={i}>
              <strong>{use.title}</strong>
              {use.detail && <>: {use.detail}</>}
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="How It Works">
        <ul className="list-disc pl-5 space-y-2">
          {medicine.howItWorks.map((item, i) => (
            <li key={i}>
              <strong>{item.name}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </CollapsibleSection>
    </div>
  );
}

// 🌟 Main Component with Capsule Background
export default function MedicineInfo() {
  const [activeTab, setActiveTab] = useState("montiqik");

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-gray-800 dark:text-gray-200">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "",
          zIndex: 0,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Capsules */}
     
      {/* Foreground Content */}
      <div className="relative z-10 px-4 sm:px-10 py-20 ">
        {/* Header */}
        <header className="text-center mb-10 mt-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Medicine Information Portal
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-cyan-500">
            Explore detailed insights about our prescribed medicines
          </p>
          <div className="mt-5 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </header>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 max-w-7xl mx-auto px-3 sm:px-5">
  
  {/* Sidebar / Mobile Tab Scroll */}
  <nav
    className="
      flex lg:flex-col gap-2 lg:gap-4 w-full lg:w-72
      bg-white/80 dark:bg-gray-900/70 backdrop-blur-md
      rounded-xl p-2 sm:p-4 shadow-md
      overflow-x-auto lg:overflow-y-auto
      scrollbar-hide
    "
  >
    {medicines.map((medicine) => {
      const isActive = medicine.id === activeTab;
      return (
                <button
          key={medicine.id}
          onClick={() => setActiveTab(medicine.id)}
          className={`
            flex items-center gap-3 min-w-max lg:min-w-0
            px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-semibold
            transition-all duration-300 shadow-sm
            ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-105 shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-200/50 dark:hover:bg-gray-700"
            }
          `}
        >
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-10 h-10 object-contain rounded-lg border border-gray-300"
          />
          <span className="text-sm sm:text-base">{medicine.name}</span>
        </button>
      );
    })}
  </nav>

  {/* Content Area */}
  <main className="flex-1">
    <MedicineTabContent
      medicine={medicines.find((m) => m.id === activeTab)}
    />
  </main>
</div>
      </div>
    </div>
  );
}

 