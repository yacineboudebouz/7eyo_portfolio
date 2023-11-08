import {
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  laravel,
  flutter,
  kotlin,
  estin,
  upwork,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Php Laravel Developer",
    icon: laravel,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Kotlin Developer",
    icon: kotlin,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Laravel",
    icon: laravel,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Cs Student",
    company_name: "Estin",
    icon: estin,
    iconBg: "#fff",
    date: "September 2021 - present",
    points: [
      "Learned and practiced programming languages like Python, Java, C++, etc.",
      "Worked on various assignments and projects, ranging from simple algorithms to complex software applications.",
      "Studied mathematical concepts relevant to computer science, including discrete mathematics, calculus, linear algebra, etc.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#fff",
    date: "Juin 2023 - present",
    points: [
      "Developed bespoke software solutions tailored to specific client needs, potentially using a variety of programming languages and platforms.",
      "Created and optimized databases, wrote SQL queries, and developed database-driven applications.",
      "Offered tutoring services or taught coding workshops, helping others learn programming and computer science concepts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
