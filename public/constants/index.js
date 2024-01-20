import { carwale, umpteen, zscaler } from '../images';

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '@/public/icons/index';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Associate Software Engineer',
    company_name: 'Zscaler, Bangalore',
    icon: zscaler,
    iconBg: '#accbe1',
    date: 'Feb 2023 - Present',
    points: [
      'Developed responsive UI components using React and Redux, improving user experience by 30%.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Led a successful migration of legacy code to React, enhancing application performance and maintainability.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Associate Software Developer',
    company_name: 'Carwale, Mumbai',
    icon: carwale,
    iconBg: '#accbe1',
    date: 'Sep 2022 - Jan 2023',
    points: [
      'Implemented a microservice architecture in an agile environment, reducing system downtime by 20%.',
      'Developed a customer-facing web application using React and ASP.NET, enhancing user engagement.',
      'Communication & Collaboration: Worked closely with cross-functional teams to align project objectives and deliverables, ensuring effective communication and collaboration.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    company_name: 'Umpteen Innovations, Bhopal',
    icon: umpteen,
    iconBg: '#accbe1',
    date: 'Feb 2022 - May 2022',
    points: [
      'Built a scalable e-commerce web application, resulting in a 25% increase in client sales.',
      'Optimized application functionalities like pagination and sorting, enhancing user experience.',
      'Teamwork & Agile Practices: Collaborated in a team-oriented environment, adhering to Agile methodologies to meet project deadlines and client requirements.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Dronacharya - Abroad Studies Consultancy',
    description:
      'Empower students to unlock global academic opportunities with this cutting-edge web application. It offers a seamless exploration of study abroad programs and facilitates direct contact with a specialized agency, paving the way for an enriching international educational experience.',
    link: 'http://www.admissionguru.co/',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-blue',
    name: 'Portfolio - Muskan Gupta',
    description:
      "Muskan Gupta's portfolio exemplifies her prowess in UI/UX design, showcasing innovative and user-centric solutions. Her projects, ranging from intuitive mobile apps to engaging websites, demonstrate a harmonious blend of aesthetics and functionality.",
    link: 'https://muskan-gupta.vercel.app/',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Job Search Mobile App',
    description:
      'Explore job opportunities with ease using our React Native-developed mobile app. Designed for seamless, hassle-free interactions, it streamlines your job search with intuitive navigation and swift, responsive features. Find your next career move effortlessly, anytime, anywhere.',
    link: 'https://github.com/KD3010/Job-Search-Mobile-App',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Traworld - E-Commerce Web Application',
    description:
      'Traworld redefines travel booking with its user-friendly interface and seamless experience. Offering intuitive navigation and hassle-free booking, this website caters to all travelers, making vacation planning a delight. Explore and book your dream destinations effortlessly with Traworld.',
    link: 'https://trawworld.com/',
  },
];
