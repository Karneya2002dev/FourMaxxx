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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide, Glucosamine, Chondroitin, Boswellia Serrata Extract, Vitamin D3",
    fullDescription:
      "OA-CARE UC is a unique formulation that addresses the pain mechanisms in osteoarthritis, including inflammatory pain, neuropathic pain, and degenerative pain, in a comprehensive manner. It is recommended in painful osteoarthritis, neuropathic arthropathy, synovial arthritis, rheumatoid arthritis, trauma and joint injury, as well as in pre-TJR (Total Joint Replacement) preparation and post-TJR rehabilitation.",
    indication: "For the management of osteoarthritis.",
  },

 {
  id: 7,
  category: "Orthopedic / Bone Health",
  title: "Mangnes D3",
  description:
    "Combination of highly bioavailable Magnesium Glycine Complex with Vitamin D3 – supports bone strength, muscle function, and overall metabolic health.",
  images: ["https://i.ibb.co/fzYf1LPR/magnesd3updated.jpg"],
  composition:
    "Magnesium Glycine Complex (EQ. TO ELEMENTAL MAGNESIUM) 250MG and Vitamin D3 1000 IU Tablets.",
  fullDescription:
    "Mangnes-D3 offers a combination of highly bioavailable magnesium with vitamin D3. It can be used as maintenance therapy or to treat vitamin D insufficiency states associated with musculoskeletal disorders, metabolic diseases, and pregnancy.",
  indication:
    "Helps prevent and manage Gestational Diabetes Mellitus (GDM), Pregnancy-induced Hypertension, Leg Cramps, and Vitamin D Deficiency."
},

  {
    id: 8,
    category: "Respiratory",
    title: "MontiQik-L",
    description:
      "Montelukast + Levocetirizine – effective in asthma, allergic rhinitis, and respiratory allergies.",
    images: ["https://i.postimg.cc/q7f2JT57/Montiqik-L.jpg"],
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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

    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    // composition:
    //   "Collagen Peptide Type I - 40MG, Sodium Hyaluronate - 30MG, Chondroitin Sulfate - 200MG, Vitamin C - 12.5MG Tablets.",
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
    category: "Gynecology / Fertility",
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
  }
];

export { products };

