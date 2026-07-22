export const widgets = [
  {
    id: 1,
    title: "Services",
    className: "widget_services",
    links: [
      { text: "AC Repair", href: "/service/ac-repair" },
      { text: "Refrigerator Repair", href: "/service/refrigerator-repair" },
      { text: "Washing Machine Repair", href: "/service" },
    ],
    spacer: { desktop: 10, mobile: 0, smobile: 50 },
  },
  {
    id: 2,
    title: "Useful Links",
    className: "widget_useful-link",
    links: [
      { text: "About", href: "/about-us" },
      { text: "Our Services", href: "/service" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
    ],
    spacer: { desktop: 10, mobile: 50, smobile: 50 },
  },
];
