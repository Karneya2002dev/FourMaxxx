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
    name: "Spaztap Tablet",
    image: "https://i.postimg.cc/3x3Qz8mK/Spaztap.jpg",
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
          background: "linear-gradient(135deg, #0b0f2a, #1a1f38, #0b0f2a)",
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
      {[...Array(10)].map((_, i) => {
        const size = 30 + Math.random() * 25;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 90}vh`,
              left: `${Math.random() * 90}vw`,
              rotate: Math.random() * 360,
              zIndex: 1,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Pill size={size} color={logoColors[i % logoColors.length]} />
          </motion.div>
        );
      })}

      {/* Particle Sparks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[4px] h-[4px] rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor: logoColors[i % logoColors.length],
            boxShadow: `0 0 8px ${logoColors[i % logoColors.length]}`,
            zIndex: 1,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 4 + i / 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Foreground Content */}
      <div className="relative z-10 px-4 sm:px-10 py-20 ">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Medicine Information Portal
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-cyan-100">
            Explore detailed insights about our prescribed medicines
          </p>
          <div className="mt-5 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </header>

       <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 max-w-7xl mx-auto">
  {/* Sidebar */}
  <nav
    className="
      flex sm:flex-col gap-3 sm:gap-4 
      w-full sm:w-72 
      bg-white/80 dark:bg-gray-900/70 
      backdrop-blur-md rounded-2xl p-3 sm:p-5 shadow-lg 
      overflow-x-auto sm:overflow-y-auto 
      sm:max-h-[80vh] scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent
    "
  >
    {medicines.map((medicine) => {
      const isActive = medicine.id === activeTab;
      return (
       <button
  key={medicine.id}
  onClick={() => setActiveTab(medicine.id)}
  className={`
    flex flex-col sm:flex-row justify-center items-center 
    gap-2 sm:gap-3 
    px-5 sm:px-4 py-4 sm:py-3 
    rounded-xl text-sm sm:text-base font-semibold text-center
    whitespace-nowrap transition-all duration-300 w-full
    ${
      isActive
        ? "bg-cyan-600 text-white shadow-md scale-[1.03]"
        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cyan-500 hover:text-white"
    }
  `}
>
  <img
    src={medicine.image}
    alt={medicine.name}
    className="w-10 h-10 sm:w-10 sm:h-10 object-contain rounded-lg"
  />
  <span className="text-center">{medicine.name}</span>
</button>

      );
    })}
  </nav>

  {/* Main Content */}
  <main className="flex-grow">
    <MedicineTabContent medicine={medicines.find((m) => m.id === activeTab)} />
  </main>
</div>

      </div>
    </div>
  );
}