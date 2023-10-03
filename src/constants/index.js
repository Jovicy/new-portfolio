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
  forbes,
  relume,
  vuePort,
  evolve,
  threejs,
  bootstrap,
  vue,
  vuetify,
  sass,
  getlinked,
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
      "Contributed to the company's success by delivering well-executed frontend solutions that positively impacted user engagement and satisfaction.",
    ],
  },
  {
    title: "Web Development and Cloud Development Tutor",
    company_name: "Forbes Royal Academy",
    icon: forbes,
    iconBg: "#383E56",
    date: "April 2023 - Till Date",
    points: [
      "Empowering Future Developers: I have played a pivotal role in nurturing the next generation of web and cloud developers, imparting them with the skills and knowledge necessary to excel in a highly competitive tech landscape.",
      "Interactive Learning: My approach to teaching goes beyond the conventional, focusing on hands-on experiences and real-world applications. Through meticulously designed coursework, I have fostered an environment where students not only understand the principles but also apply them effectively.",
      "Cutting-edge Technologies: Staying true to Forbes Royal Academy's commitment to excellence, I have introduced students to the latest web and cloud development technologies. This includes cloud computing platforms like AWS, Azure, and Google Cloud, as well as modern web development frameworks such as React, Vue.js, and Angular.",
      "Code Reviews and Quality Assurance: Emulating industry best practices, I have encouraged a culture of code reviews and quality assurance among my students. This ensures that the code produced is not only functional but also follows industry standards, enhancing the students' readiness for real-world projects.",
      "Hands-on Experience: To simulate real-world scenarios, I have overseen practical projects that require students to create and deploy web applications on cloud platforms. This practical exposure equips them with the skills needed for successful careers in web and cloud development.",
      "Student Success: The success stories of my students, who have secured positions at top tech companies and launched their startups, stand as a testament to the effectiveness of my teaching methods and mentorship.",
      "Collaborative Environment: Fostering a collaborative learning environment, I encourage students to share ideas, engage in peer-to-peer learning, and explore innovative solutions. This approach has led to the development of creative and forward-thinking projects.",
      "Adaptive Teaching: Recognizing the dynamic nature of technology, I have adapted my teaching methods to keep pace with the ever-evolving landscape of web and cloud development. This has included introducing students to serverless computing, containerization, and DevOps practices.",
      "Continuous Learning: Just as I inspire my students to embrace lifelong learning, I lead by example. I stay up-to-date with the latest trends, technologies, and best practices in web and cloud development, ensuring that my students receive the most current and relevant knowledge.",
      "Commitment to Excellence: I take pride in consistently delivering high-quality educational experiences, meeting and often exceeding the expectations of both students and the institution. My dedication to excellence aligns with Forbes Royal Academy's commitment to setting the gold standard in education.",
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
  {
    name: "Get Linked",
    description:
      "Participating in the getlinked Tech Hackathon 1.0 was a transformative experience that demonstrated our visionary capabilities. We united to shape a future where innovation prevails, addressing real-world challenges and showcasing our dedication to pushing technological boundaries for a positive global impact.",
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
    image: getlinked,
    source_code_link: "https://github.com/Jovicy/Get-linked",
  },
];

export { services, technologies, experiences, projects };
