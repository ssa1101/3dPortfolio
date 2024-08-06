import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
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
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: "",
        link: "",
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: '',
        link: "",
    },

];