import {
    Code, Layout, Database, Server, Smartphone, Layers,
    Linkedin, Github, Award, Terminal
} from "lucide-react";

export const PROFILE = {
    name: "Vinit Kumar Gupta",
    role: "FULL STACK DEVELOPER | SOFTWARE ENGINEER",
    email: "officialvinit1176@gmail.com",
    phone: "+919621030649",
    location: "India",
    resume: {
        path: "/VINIT_RESUME.pdf",
        fileName: "VINIT_KUMAR_GUPTA_SDE_RESUME.pdf"
    },
    education: {
        degree: "B.Tech. in Information Technology — Honors in Full Stack Development",
        college: "KPR Institute of Engineering and Technology, Coimbatore",
        cgpa: "8.4/10",
        year: "2023-2027",
        additional: "Higher Secondary (12th): 78% • Secondary (10th): 85%"
    }
};

export const PLATFORMS = [
    { name: "LeetCode", subtext: "Problem Solving", stat: "300+ Solved", url: "https://leetcode.com/u/Vinit_Gupta7/", icon: Code, color: "group-hover:text-orange-400", border: "group-hover:border-orange-500/50" },
    { name: "HackerRank", subtext: "Competency", stat: "5 Star Gold", url: "https://www.hackerrank.com/profile/23IT066_KPRIET", icon: Terminal, color: "group-hover:text-green-400", border: "group-hover:border-green-500/50" },
    { name: "GitHub", subtext: "Source Code", stat: "All Major Projects", url: "https://github.com/Official-Vinit", icon: Github, color: "group-hover:text-white", border: "group-hover:border-white/50" },
    { name: "Credly", subtext: "Certifications", stat: "Verified Badges", url: "https://www.credly.com/users/vinit-gupta.0e985388/badges#credly", icon: Award, color: "group-hover:text-yellow-500", border: "group-hover:border-yellow-500/50" },
    { name: "LinkedIn", subtext: "Professional", stat: "Connect", url: "https://www.linkedin.com/in/vinit-gupta-kumar/", icon: Linkedin, color: "group-hover:text-blue-400", border: "group-hover:border-blue-500/50" }
];

export const SKILLS = [
    { category: "Languages", items: ["Java", "JavaScript", "Python", "C/C++"], icon: Code },
    { category: "Frontend", items: ["React.js", "Vite", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit", "shadcn/Radix UI"], icon: Layout },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO"], icon: Server },
    { category: "Databases", items: ["MongoDB", "MySQL", "RoomDB", "Database Engines", "Oracle", "PostgreSQL"], icon: Database },
    { category: "Cloud & DevOps", items: ["Docker", "AWS", "Vercel", "Render", "Git", "GitHub"], icon: Layers },
    { category: "AI/ML", items: ["Scikit-learn", "PyTorch", "LLMs", "RAG", "LangChain", "Transformers", "OpenAI APIs"], icon: Code },
    { category: "Tools & Technologies", items: ["Cloudinary", "Firebase", "Debezium", "Apache SeaTunnel", "Google DVT", "WAL"], icon: Smartphone }
];

export const ACHIEVEMENTS = [
    { title: "300+ Problems Solved", issuer: "LeetCode", type: "Achievement", url: "https://leetcode.com/u/Vinit_Gupta7/", image: "/certificates/leetcode-275.png" },
    { title: "5-Star Problem Solving", issuer: "HackerRank", type: "Achievement", url: "https://www.hackerrank.com/profile/23IT066_KPRIET", image: "/certificates/hackerrank-5-star.png" },
    { title: "MongoDB Certified Associate Developer", issuer: "MongoDB", type: "Certification", url: "https://drive.google.com/file/d/1FV11ERwVGcfB6pBqoNplZu1GNk_azoTi/view", image: "/certificates/mongodb.png" },
    { title: "AWS Academy Cloud Foundations", issuer: "AWS", type: "Certification", url: "https://drive.google.com/file/d/1zobdHmOzHmFCFdmYJVf6onaI4nJPy9N2/view", image: "/certificates/aws.png" },
    { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", type: "Certification", url: "https://www.freecodecamp.org/certification/vinit_gupta/javascript-algorithms-and-data-structures", image: "/certificates/JavaScriptFreeCodeCamp.png" },
    { title: "Deloitte Australia Data Analytics Job Simulation", issuer: "Forage", type: "Achievement", url: "https://drive.google.com/file/d/1_vbI70aclZYX3yy8eUFwD0WHGyUfEd-Z/view", image: "/certificates/DataAnalytics.png" },
    { title: "Microsoft & EY AI Skills Passport", issuer: "Microsoft and EY", type: "Achievement", url: "https://drive.google.com/file/d/1t8GXLaGnrKwe4wWMUoNLGoFhqJLTvRaQ/view", image: "/certificates/Microsoft&EY.png" },
    { title: "Problem Solving in C", issuer: "CodeChef", type: "Certification", url: "https://www.codechef.com/certificates/public/7ded4b5", image: "/certificates/CProgramming.png" }
];

export const EXPERIENCE = [
    {
        company: "Lingaasys Technologies",
        role: "Product Engineer Intern",
        duration: "Sept 18, 2026 - Dec 01, 2026",
        description: "Worked on a database migration platform, with the first release transferring data from Oracle DB to PostgreSQL. Worked with Apache SeaTunnel and Google DVT, and explored database engines, Debezium, and write-ahead logs (WAL).",
        links: [],
        tech: ["Oracle", "PostgreSQL", "Apache SeaTunnel", "Google DVT", "Debezium", "WAL"]
    }
];

export const PROJECTS = [
    {
        title: "ThoughtCamp",
        role: "Full Stack E-Learning Platform",
        description: "A full stack learning platform for learners and educators, with course enrollment, video lectures, reviews, and an educator dashboard.",
        points: ["Implemented JWT authentication and Google sign-in with Firebase.", "Built course, lecture, review, and educator dashboard experiences.", "Integrated Cloudinary uploads, Redux state management, and Dockerized deployment."],
        tech: ["React.js", "Vite", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Firebase", "Cloudinary", "Docker"],
        Githublink: "https://github.com/Official-Vinit/ThoughtCamp",
        DeploymentLink: "https://thought-camp-psi.vercel.app/"
    },
    {
        title: "Bhindi Online",
        role: "MERN Real-Time Chat App",
        description: "A responsive real-time chat platform with private messaging, account security, profile updates, and image uploads.",
        points: ["Built real-time communication with Socket.IO.", "Implemented secure JWT authentication and profile updates.", "Added Cloudinary image uploads and Dockerized full-stack setup."],
        tech: ["React.js", "Vite", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Cloudinary", "Docker"],
        Githublink: "https://github.com/Official-Vinit/bhindiOnline",
        DeploymentLink: "https://bhindi-online.vercel.app/login"
    },
    {
        title: "CDCWork",
        role: "Full Stack Placement Cell Management System",
        description: "A placement management platform for students and administrators, covering job applications and multi-round campus recruitment workflows.",
        points: ["Built student and admin dashboards with role-based authentication, job eligibility, and application tracking.", "Implemented QR/code-based attendance with real-time updates using server-sent events.", "Added calendar and events, student profiles, announcements, bulk student advancement, and email notifications."],
        tech: ["React.js", "Vite", "Tailwind CSS", "shadcn/Radix UI", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Brevo API"],
        Githublink: "https://github.com/Official-Vinit/CDCWork",
        DeploymentLink: "https://cdc-work.vercel.app/login"
    }
];
