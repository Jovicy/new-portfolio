import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  schoolite,
  relume,
  vuePort,
  evolve,
  threejs,
  bootstrap,
  vue,
  vuetify,
  sass,
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
    title: "Responsive Design",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Cross-Browser Compatibility",
    icon: backend,
  },
  {
    title: "Performance Optimization",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "sass",
    icon: sass,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "vuetify",
    icon: vuetify,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Schoolite",
    icon: schoolite,
    iconBg: "#383E56",
    date: "November 2021 - Till Date",
    points: [
      "Developed innovative and user-friendly web applications to enhance the user experience and functionality of the Schoolite platform.",
      "Contributed to the design and implementation of exciting new features, ensuring they were visually appealing and responsive across different devices.",
      "Gained valuable experience in front-end technologies such as HTML, CSS, and JavaScript, as well as modern frameworks like React and Vue.js.",
      "I actively participated in code reviews, incorporating feedback from senior developers to improve code quality and performance.",
      "During development, I conducted rigorous testing and debugging to ensure a smooth and error-free user experience",
      "Adapted to an agile development environment, embracing quick iterations and continuous improvement.",
      "Collaborated closely with the UX/UI team to translate design concepts into functional, pixel-perfect interfaces.",
      "Demonstrated a strong commitment to learning and staying up-to-date with the latest frontend trends and best practices.",
      "Showcased a passion for delivering high-quality work, meeting project deadlines, and exceeding expectations.",
      "Communicated effectively with team members, sharing ideas and insights to foster a positive and creative work environment.",
      "CContributed to the company's success by delivering well-executed frontend solutions that positively impacted user engagement and satisfaction.",
    ],
  },
];

const projects = [
  {
    name: "Evolve Gym App",
    description:
      "Elevate your fitness journey with captivating animations and interactive class schedules. Built with React, TypeScript, and Tailwind CSS, this visually stunning platform redefines the gym experience, attracting a surge in memberships.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evolve,
    source_code_link: "https://github.com/Jovicy/Evolve-Typescript-app",
  },
  {
    name: "Relume",
    description:
      "Juicy flavors and freshness await in this delightful website crafted with Sass, HTML, and JS. Explore a vibrant array of fruits and discover mouthwatering recipes. An enticing blend of design and functionality brings a juicy experience to visitors.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: relume,
    source_code_link: "https://github.com/Jovicy/Relume",
  },
  {
    name: "Vue Portfolio",
    description:
      " Explore my dynamic showcase of Vue.js projects, highlighting expertise in HTML, CSS, and JavaScript. Engaging design, live demos, and detailed descriptions demonstrate a passion for innovative web development. Discover my skills and achievements in this captivating Vue.js portfolio",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "vuetify",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vuePort,
    source_code_link: "https://github.com/Jovicy/vue-portfolio",
  },
];

export { services, technologies, experiences, projects };
