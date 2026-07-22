export const services = [
  {
    id: 1,
    slug: "ac-repair",
    imageSrc: "/assets/ac-repair.jpg",
    iconClass: "zingbox-icon-sola-plant",
    title: "AC Repair",
    description: "Expert air conditioning repair and maintenance services in Riyadh. We fix all AC brands quickly and affordably.",
    longDescription:
      "When your air conditioner stops working in Riyadh's extreme heat, you need fast, reliable service. At Al Madina Tabreed, our certified technicians have years of experience diagnosing and repairing all types of air conditioning systems, from window units to central AC and split systems. We handle all major brands including Samsung, LG, Carrier, Gree, and more. Our same-day service ensures you won't have to suffer through the heat for long. We arrive fully equipped to diagnose the issue on the spot and provide an upfront, transparent quote before any work begins. From refrigerant leaks and compressor failures to thermostat issues and electrical faults, we've seen it all and fixed it all.",
    features: [
      "Same-day AC repair service across Riyadh",
      "Expert diagnosis for all AC brands and models",
      "Refrigerant leak detection and repair",
      "Compressor and motor replacement",
      "Thermostat calibration and replacement",
      "AC maintenance and tune-up services",
      "Emergency repair services available",
    ],
    animation: "fadeInDown",
    active: false,
  },
  {
    id: 2,
    slug: "refrigerator-repair",
    imageSrc: "/assets/refrigerator-repair.jpg",
    iconClass: "zingbox-icon-traffic-light",
    title: "Refrigerator Repair",
    description: "Professional refrigerator repair services. Fast diagnosis and reliable repair for all fridge makes and models.",
    longDescription:
      "A broken refrigerator can lead to spoiled food and costly replacements. At Al Madina Tabreed, we understand how critical your refrigerator is to your daily life. Our experienced technicians specialize in diagnosing and repairing all types of refrigerators, including side-by-side, French door, bottom freezer, and built-in models. We work with all major brands such as Samsung, LG, Panasonic, Hisense, and more. Whether your fridge is not cooling, making strange noises, leaking water, or showing error codes, we can quickly identify the problem and provide an effective solution. We use genuine parts for all replacements and offer a warranty on our repairs for your peace of mind.",
    features: [
      "Fast diagnosis of cooling and temperature issues",
      "Compressor and condenser coil repair",
      "Defrost system troubleshooting and repair",
      "Water leak detection and fix",
      "Ice maker and water dispenser repair",
      "Door seal/gasket replacement",
      "Thermostat and control board repair",
    ],
    animation: "fadeInUp",
    active: true,
  },
  {
    id: 3,
    slug: "washing-machine-repair",
    imageSrc: "/assets/washing-machine-repair.jpg",
    iconClass: "zingbox-icon-enegy",
    title: "Automatic Washing Machine Repair",
    description: "Reliable automatic washing machine repair in Riyadh. Expert service for all brands with same-day support.",
    longDescription:
      "A malfunctioning washing machine can disrupt your entire household routine. At Al Madina Tabreed, we specialize in repairing all types of automatic washing machines, including front-load, top-load, and washer-dryer combos. Our skilled technicians are trained to handle issues with all major brands including Samsung, LG, Bosch, Whirlpool, and more. From machines that won't start, drain, or spin, to excessive noise, vibration, or water leaks — we diagnose the problem accurately and get your machine back to working order quickly. We carry common spare parts in our service vehicle to complete most repairs in a single visit. Same-day service is available across Riyadh.",
    features: [
      "Won't start or power on diagnosis",
      "Drain and spin issue troubleshooting",
      "Water leak and hose repair",
      "Motor and belt replacement",
      "Drum bearing and seal repair",
      "Control board and display panel repair",
      "Noise and vibration problem solving",
    ],
    animation: "fadeInDown",
    active: false,
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}
