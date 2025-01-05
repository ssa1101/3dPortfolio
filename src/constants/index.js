import { meta, shopify, starbucks, tesla } from "../assets/images";
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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
  
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer Intern",
        company_name: "Carina - Open Avenues",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "February 2024 - May 2024",
        points: [
            "Developed full stack dynamic forms application, enabling CRUD functionality using RESTful custom API architecture.",
            "Utilized multiple technologies including MongoDB, React.js, Node, Express",
            "Live site allows secure user authentication, creation and distribution of forms  ",
            "Participated in weekly code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Revenue Cycle Management Analyst Intern",
        company_name: "Envision Healthcare",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2023 - July 2023",
        points: [
            "Conducted analysis of Accounts Receivable data to improve AR turnover rate and decrease instances of held/denied AR",
            "Technologies: SQL, Tableau, PowerBI, Visiquate, Jira, Kanban",
            "Designed Visiquate dashboard data visualizations of held AR reports across 4 service lines",
            "Identified inefficiencies in AR hold denial response cycle",
        ],
    },
    {
        title: "Open Avenues SWE Internship",
        company_name: "Open Avenues",
       
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Apr 2023",
        points: [
            "Deployed data scrubber application for protected health information",
            "Technologies: React.js, Python, Flask, SQLAlchemy, REST APIs",
            "Implemented database of user information with SQL Alchemy",
        
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
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Admin Dashboard - Machine Learning',
        description: 'Admin Dashboard visualizes key metrics using recharts and regression.js libraries. Machine learning model predicts revenue via a simple linear regression. Technology: MERN Stack',
        link: "https://shifa-sadaat-admin-mydash.netlify.app",
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Dynamic Forms App',
        description: 'Full stack dynamic forms application, enabling CRUD functionality using RESTful custom API architecture. Live site allows secure user authentication, creation and distribution of forms. MERN Stack.  Test Account Credentials - Username: shifasadaat@gmail.com Password: 1234',
        link: "https://shifa-sadaat-dynamic-forms.netlify.app/auth",
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D Portfolio Site',
        description: 'This portfolio website is designed with React and Three.js. The Home Page gamified mechanics utilize simple Three.js geometry.',
        link: "https://github.com/ssa1101/3dPortfolio",
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'E-Commerce Site',
        description: 'This CMS website utilizes Payload CMS and features tech and cosmetic related products. Integrated Stripe checkout ',
        link: "https://github.com/ssa1101/e-commerce",
    },



];