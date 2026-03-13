import arogyaImg from "../images/arogyaimg.jpg";
import meshopImg from "../images/meshopimg.jpg";
import f1Img from "../images/carimg.jpg";
import nikeImg from "../images/nikeimage.jpg";

export const projects = [
  {
    title: "Arogya – Telemedicine Platform",
    description:
      "A full-stack healthcare platform with secure appointments, doctor profiles, and real-time patient management.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "https://arogya-client.vercel.app/",
    githubUrl: "https://github.com/dinesh0126/aarogya-first-api",
    image: arogyaImg
  },
  {
    title: "Meshop – E-commerce Platform",
    description:
      "A modern storefront with product discovery, authentication, and Firebase-backed checkout flows.",
    tech: ["React", "Firebase", "Tailwind"],
    liveUrl: "https://meshop-lilac.vercel.app/",
    githubUrl: "https://github.com/dinesh0126/Meshop",
    image: meshopImg
  },
  {
    title: "F1 Website Redesign",
    description:
      "A sleek motorsport experience featuring motion-driven storytelling and high-performance UI.",
    tech: ["React", "Framer Motion", "UI/UX"],
    liveUrl: "https://car-xi-tawny.vercel.app/",
    githubUrl: "https://github.com/dinesh0126/car",
    image: f1Img
  },
  {
    title: "Nike Website UI",
    description:
      "A bold, modern product showcase with smooth transitions and premium layout details.",
    tech: ["React", "Tailwind", "UI/UX"],
    liveUrl: "https://dinesh0126.github.io/Nike/",
    githubUrl: "https://github.com/dinesh0126/Nike",
    image: nikeImg
  }
];

export const featuredProjects = [
  {
    title: "MERN Food Ordering App",
    description:
      "Multi-vendor ordering with live menus, cart sync, and secure payments.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/dinesh0126/Restro"
  },
  {
    title: "Nike Website UI",
    description:
      "A bold, modern product showcase with smooth transitions and premium layout details.",
    tech: ["React", "Tailwind", "UI/UX"]
  },
  {
    title: "Meshop – E-commerce Platform",
    description:
      "A modern storefront with product discovery, authentication, and Firebase-backed checkout flows.",
    tech: ["React", "Firebase", "Tailwind"]
  },
  {
    title: "F1 Website Redesign",
    description:
      "A sleek motorsport experience featuring motion-driven storytelling and high-performance UI.",
    tech: ["React", "Framer Motion", "UI/UX"]
  }
];

export const skills = {
  frontend: ["React.js", "Redux", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["MongoDB", "PostgreSQL", "Firebase"],
  tools: ["Git", "Vercel", "Postman", "Figma"]
};
