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
  jira,
  aws,
  docker,
  kafka,
  postgres,
  redis,
} from '@/public/icons/index';

export const skills = [
  {
    imageUrl: jira,
    name: 'JIRA',
    type: 'Collaboration',
  },
  {
    imageUrl: aws,
    name: 'AWS',
    type: 'Operations',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Operations',
  },
  {
    imageUrl: kafka,
    name: 'Kafka',
    type: 'Backend',
  },
  {
    imageUrl: redis,
    name: 'Redis',
    type: 'Backend',
  },
  {
    imageUrl: postgres,
    name: 'Postgres/SQL',
    type: 'Database',
  },
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
    title: 'Software Developer Engineer',
    company_name: 'Zscaler, Bangalore',
    icon: zscaler,
    iconBg: '#accbe1',
    date: 'Feb 2023 - Present',
    points: [
      "Developed and maintained scalable UI components using **React and Redux**, contributing to the **micro-frontend architecture** for Zscaler’s AI-based data security platform, DSPM, improving system modularity and **reducing deployment time by 20%.**",
      "Collaborated closely with **cross-functional teams** (backend engineers, product managers, and designers) in an **Agile environment**, participating in daily stand-ups and sprint planning to ensure timely feature delivery with a **95% sprint completion rate.**",
      "Led discussions with Product Managers (PM) and the backend team to define the best API signatures, ensuring efficient data flow between the frontend and backend, resulting in a 30% increase in API performance and a more seamless integration process.",
      "Experienced in **collaborating with global teams** with the help of tools like **Slack, Jira, Zoom, and GitHub** for seamless project management.",
      "Improved load times by **30%** by optimizing state management and reducing unnecessary re-renders.",
      "Transitioned from **INTERN* to a **Full-Time Role** in August 2023."
    ]
  },
  {
    title: 'Associate Software Developer',
    company_name: 'Carwale, Mumbai',
    icon: carwale,
    iconBg: '#accbe1',
    date: 'Sep 2022 - Jan 2023',
    points: [
      "Implemented **dynamic hyperlink generation** based on regex evaluation to enable real-time content updates, which enhanced content accuracy and **reduced manual intervention by 30%**.",
      "Developed a **microservice architecture** using **Node.js, Express, and gRPC**, which handled dynamic content modifications, resulting in a **20% reduction in system downtime** and more efficient content delivery.",
      "Designed scalable backend systems by implementing data modeling strategies and creating a **high-level system architecture**, improving the overall system's ability to handle **increased traffic by 25%.**",
      "Utilized **Postgres and Elasticsearch** to query large datasets, optimizing database queries and **reducing response times by 40%*.",
      "Built an **event-driven architecture** using event emitters where subscribing services consumed events, improving the modularity and reliability of the system’s real-time operations.",
      "Leveraged Redis queues and Pub/Sub architecture for handling high-volume tasks, allowing the system to scale horizontally to accommodate increasing user demands with 0% downtime during peak loads.",
      "Led backend development efforts in collaboration with frontend teams to ensure seamless API integration and data flow, contributing to **80% on-time delivery** of all sprint features."
    ]
  },
  {
    title: 'MERN Stack Developer',
    company_name: 'Umpteen Innovations, Bhopal',
    icon: umpteen,
    iconBg: '#accbe1',
    date: 'Feb 2022 - May 2022',
    points: [
      'Developed a scalable **e-commerce web** application that boosted client sales by **25%**, enhancing overall revenue and customer retention.',
      'Optimized core functionalities, including pagination and sorting, resulting in a **40% improvement in load times** and smoother user experience across all platforms.',
      'Collaborated within an **Agile team, ensuring seamless communication** and achieving 100% on-time delivery of features that met client requirements and exceeded expectations.'
    ]
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/kd3010',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/kushagra30',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'ZapMate - Zapiers Clone',
    description:
      `
### **ZapMate: Workflow Automation Platform**

**ZapMate** is a workflow automation platform inspired by Zapier, built using a robust **microservices architecture** to ensure scalability, reliability, and seamless integration of workflows. This project combines a powerful **backend system** with an intuitive **frontend interface** to deliver exceptional user experiences.

#### **Key Features**
- **Microservices Architecture**: Designed and implemented a scalable **microservices-based system** using **Node.js** and **Express**, ensuring modularity and maintainability.
- **Event-Driven Architecture**: Utilized **Kafka** for the **publisher-consumer model**, enabling reliable message processing and communication between services.
- **Backend Integration**: Leveraged **Postgres** as the primary database, ensuring data consistency and optimized performance.
- **Database Management**: Implemented the **transactional outbox pattern** to maintain data integrity across distributed services.
- **Frontend Development**: Built a responsive and dynamic UI using **Next.js**, providing a seamless user experience for workflow creation and management.
- **Scalability and Performance**: Engineered the platform to handle multiple concurrent workflows efficiently, ensuring high availability and zero downtime.

#### **Tech Stack**
- **Backend**: Node.js, Express, Kafka
- **Database**: Postgres with Prisma ORM
- **Frontend**: Next.js for responsive and dynamic user interfaces
- **Deployment**: Dockerized services for easy deployment and scalability

This project showcases my expertise in **microservices architecture**, **event-driven systems**, and **full-stack development**, demonstrating my ability to design and deliver scalable, production-ready solutions for complex workflows.
`,
    link: 'https://github.com/KD3010/ZapMate',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-blue',
    name: 'Issue Tracker - JIRA Clone',
    description:
      `
### **Issue Tracker: Simplifying Task Management**

The **Issue Tracker** is a full-stack task management system that enables users to **create**, **track**, and **edit issues** with ease. This project combines a robust **backend architecture** with a responsive **frontend interface**, delivering a seamless user experience.

#### **Key Features**
- **Frontend Development**: Built with **Next.js**, ensuring seamless server-side rendering and a highly responsive UI.
- **Backend Integration**: Developed the backend using **Next.js API routes**, integrated with **Prisma ORM** and **Postgres** for efficient data management.
- **Database Management**: Utilized **Postgres** as the primary database, ensuring scalability and secure data handling.
- **State Management**: Implemented **Redux** to optimize state handling, reducing unnecessary re-renders and enhancing performance.
- **Data Validation**: Leveraged **Zod** for robust type validation, ensuring accurate and consistent data handling across the application.
- **UI Design**: Designed a clean and accessible user interface using **Shadcn UI library**, ensuring cross-device compatibility and responsiveness.

This project demonstrates my expertise in **full-stack development**, showcasing my ability to build and integrate **backend architectures** with **responsive, user-friendly interfaces** to create impactful applications.
`,
    link: 'https://issue-tracker-kd.vercel.app/',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Job Search Mobile App',
    description:
      `
### **Explore Job Opportunities with Ease**

Discover your next career move effortlessly with our **React Native**-powered mobile app. Designed for **seamless** and **hassle-free interactions**, this app streamlines your job search with **intuitive navigation** and a **responsive interface**.

#### **Key Features**
- **Built with React Native**, ensuring a **cross-platform experience** for both iOS and Android users.
- Integrated **Rapid API** for real-time access to job listings from multiple platforms.
- **Swift and responsive UI** to deliver smooth navigation and enhanced user engagement.
- Accessible **anytime, anywhere**, making it convenient to browse jobs on the go.

This app demonstrates my skills in:
- **Mobile App Development**: Leveraging **React Native** for a seamless user experience.
- **API Integration**: Utilizing **Rapid API** to provide comprehensive job search capabilities.
- **User-Centric Design**: Creating **intuitive and responsive interfaces** tailored for job seekers.
    `,
    link: 'https://github.com/KD3010/Job-Search',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Traworld - E-Commerce Web Application',
    description:
      `
### **Traworld: Redefining Travel Booking**

**Traworld** revolutionizes the way travelers plan and book vacations with its **user-friendly interface** and **seamless booking experience**. Designed for all types of travelers, the platform combines **intuitive navigation** with hassle-free functionality to make vacation planning a delight.

#### **Key Features**
- **Intuitive Navigation**: Crafted using **React** to ensure a responsive and dynamic user interface.
- **Seamless User Experience**: Focused on creating a smooth, engaging experience for users.
- **Cross-Platform Compatibility**: Built with modern frontend technologies to deliver consistent performance across devices.

This project highlights my expertise in **frontend development**, showcasing my ability to build **intuitive and engaging interfaces** that enhance user satisfaction and simplify complex workflows.
`,
    link: 'https://trawworld.com/',
  },
];
