import {
    Code, Layout, Database, Server, Smartphone, Layers,
    Linkedin, Github, Mail, Phone, Award, Terminal
} from "lucide-react";

// Personal Details
export const PROFILE = {
    name: "Vinit Kumar Gupta",
    role: "FULL STACK SOFTWARE DEVELOPER | MACHINE LEARNING | GenAI | DSA",
    email: "officialvinit1176@gmail.com",
    phone: "+919621030649",
    location: "India",
    resume: {
        path: "./VINIT_RESUME.pdf",
        fileName: "Vinit_Kumar_Gupta_Resume.pdf"
    },
    education: {
        degree: "B.Tech Information Technology (Honors in Full Stack Development)",
        college: "KPR Institute of Engineering and Technology, Coimbatore",
        cgpa: "8.38/10",
        year: "2023-2027"
    }
};

// Social Links
export const PLATFORMS = [
    {
        name: "LeetCode",
        subtext: "Problem Solving",
        stat: "275+ Solved",
        url: "https://leetcode.com/u/Vinit_Gupta7/",
        icon: Code,
        color: "group-hover:text-orange-400",
        border: "group-hover:border-orange-500/50"
    },
    {
        name: "HackerRank",
        subtext: "Competency",
        stat: "5 Star Gold",
        url: "https://www.hackerrank.com/profile/23IT066_KPRIET",
        icon: Terminal,
        color: "group-hover:text-green-400",
        border: "group-hover:border-green-500/50"
    },
    {
        name: "GitHub",
        subtext: "Source Code",
        stat: "All Major Projects",
        url: "https://github.com/Official-Vinit",
        icon: Github,
        color: "group-hover:text-white",
        border: "group-hover:border-white/50"
    },
    {
        name: "Credly",
        subtext: "Certifications",
        stat: "Verified Badges",
        url: "https://www.credly.com/users/vinit-gupta.0e985388/badges#credly",
        icon: Award,
        color: "group-hover:text-yellow-500",
        border: "group-hover:border-yellow-500/50"
    },
    {
        name: "LinkedIn",
        subtext: "Professional",
        stat: "Connect",
        url: "https://www.linkedin.com/in/vinit-gupta-kumar/",
        icon: Linkedin,
        color: "group-hover:text-blue-400",
        border: "group-hover:border-blue-500/50"
    }
];

// Skills Matrix
export const SKILLS = [
    { category: "Languages", items: ["Java", "Kotlin", "JavaScript", "C/C++", "Python"], icon: Code },
    { category: "Web Dev", items: ["HTML", "CSS", "React.js", "Node.js", "Express"], icon: Layout },
    { category: "Machine Learning", items: ["Python", "Scikit-learn", "PyTorch", "Pandas", "NumPy"], icon: Code },
    { category: "GenAI", items:["LLMs","RAG","LangChain","Transformers","OpenAI APIs","Agentic AI"],icon: Code},
    { category: "Android", items: ["Kotlin", "Jetpack Compose", "Retrofit", "Coil"], icon: Smartphone },
    { category: "Databases", items: ["MongoDB", "MySQL", "Room", "Mongoose"], icon: Database },
    { category: "DevOps/Cloud", items: ["AWS","Docker","System Design","CI/CD","Computer Networks", "Render", "Vercel"], icon: Server },
    { category: "Core", items: ["DSA", "API Handling", "Testing (Jest)"], icon: Layers },
];

// Certifications & Achievements
export const ACHIEVEMENTS = [
    { title: "MongoDB Certified Associate Developer", issuer: "MongoDB", type: "Certification", url: "https://drive.google.com/file/d/1FV11ERwVGcfB6pBqoNplZu1GNk_azoTi/view", image: "/certificates/mongodb.png" },
    { title: "AWS Academy Cloud Foundation Certificate", issuer: "AWS", type: "Certification", url: "https://drive.google.com/file/d/1zobdHmOzHmFCFdmYJVf6onaI4nJPy9N2/view", image: "/certificates/aws.png" },
    { title: "Microsoft & EY AI Skills Passport", issuer: "Microsoft and EY", type: "Achievement", url: "https://drive.google.com/file/d/1t8GXLaGnrKwe4wWMUoNLGoFhqJLTvRaQ/view", image: "/certificates/Microsoft&EY.png" },
    { title: "Deloitte Australia Data Analytics Job Simulation", issuer: "Forage", type: "Achievement", url: "https://drive.google.com/file/d/1_vbI70aclZYX3yy8eUFwD0WHGyUfEd-Z/view", image: "/certificates/DataAnalytics.png" },
    { title: "Software Engineer Intern Certificate", issuer: "HackerRank", type: "Achievement", url: "https://www.hackerrank.com/certificates/90bdf276b712", image: "/certificates/SEInternHackerRank.png" },
    { title: "Legacy JavaScript Algorithms and DataStructures V7", issuer: "freeCodeCamp", type: "Achievement", url: "https://www.freecodecamp.org/certification/vinit_gupta/javascript-algorithms-and-data-structures", image: "/certificates/JavaScriptFreeCodeCamp.png" },
    { title: "5 Star at Problem Solving", issuer: "HackerRank", type: "Achievement", url: "https://www.hackerrank.com/profile/23IT066_KPRIET", image: "/certificates/hackerrank-5-star.png" },
    { title: "275+ Problems Solved", issuer: "LeetCode", type: "Achievement", url: "https://leetcode.com/u/Vinit_Gupta7/", image: "/certificates/leetcode-275.png" },
    { title: "SQL (Intermediate)", issuer: "HackerRank", type: "Certification", url: "https://www.hackerrank.com/certificates/02d1b6cfe77c", image: "/certificates/sql-intermediate.png" },
    { title: "Problem Solving in C", issuer: "CodeChef", type: "Certification", url: "https://www.codechef.com/certificates/public/7ded4b5", image: "/certificates/CProgramming.png" },
    { title: "Problem Solving (Intermediate)", issuer: "HackerRank", type: "Certification", url: "https://www.hackerrank.com/certificates/c5b2611f6b83", image: "/certificates/problem-solving.png" }
];

// Work Experience
export const EXPERIENCE = [
    {
        company: "PiyushDhara Eduverse",
        role: "Website Developer Intern",
        duration: "01 Oct 2025 - 01 Jan 2026",
        description: "Developed and deployed a full stack website for educational content sharing as per client's demand.",
        links: [
            { label: "User Site", url: "https://www.piyushdhara.com" },
            { label: "Admin Site", url: "https://www.admin.piyushdhara.com" }
        ],
        tech: ["MERN Stack", "System Design", "Deployment"]
    }
];

// Projects
export const PROJECTS = [
    {
        title: "Placement Cell Management System",
        role: "Group Project (Collaborated through github)",
        description: "A comprehensive platform automating recruitment workflows for universities.",
        points: [
            "Implemented secure JWT-based authentication and role-based access control (admin, students).",
            "Implemented file upload functionality with Cloudinary for resume and document management.",
            "Built a responsive admin dashboard with data visualization using Chart.js.",
            "Created real-time notification system for job applications and updates."
        ],
        tech: ["React", "Node.js", "MongoDB", "Chart.js"],
        Githublink: "https://github.com/Official-Vinit/CDCWork",
        DeploymentLink:"https://cdc-work.vercel.app/login"
    },
    {
        title: "Bhindi Online",
        role: "Realtime Chatting Platform",
        description: "A full-stack web application designed for realtime chatting between users.",
        points: [
            "A fullstack chat platform using React, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB and Socket.IO for instant one to one messaging.",
            "Implemented secure authentication with JWT, HTTP-only cookies, bcrypt password hashing, and protected routes for signup, login, and logout flows.",
            "Integrated profile/image upload with Multer+Cloudinary and added real-time online user presence tracking with live message delivery."
        ],
        tech: ["MERN Stack", "Socket.io", "Redux"],
        Githublink: "https://github.com/Official-Vinit/SWSAI.git",
        DepoymentLink: "https://bhindi-online.vercel.app/"
    },
    {
        title: "PiyushDhara Eduverse",
        role: "Ed-tech Website (Internship Project)",
        description: "A website where the admin can share educational content",
        points: [
            "Developed secure RESTful APIs using Node.js, Express, and MongoDB.",
            "Enabled CORS for safe cross-origin requests and integrated environment-based configuration.",
            "Designed modular, scalable code structure with robust error handling.",
        ],
        tech: ["Node.js", "Express", "MongoDB", "REST API"],
        Githublink: "https://github.com/Official-Vinit/PiyushDhara-Ed-tech.git",
        DeploymentLink: "https://www.piyushdhara.com/"
    },
    {
        title: "Stock Trading Web App",
        role: "FinTech Simulation",
        description: "A high-performance trading simulation platform inspired by Zerodha.",
        points: [
            "Developed secure RESTful APIs using Node.js, Express, and MongoDB.",
            "Enabled CORS for safe cross-origin requests and integrated environment-based configuration.",
            "Designed modular, scalable code structure with robust error handling.",
            "Developed a real-time data pipeline integrating backend API with frontend dashboards."
        ],
        tech: ["Node.js", "Express", "MongoDB", "REST API"],
        Githublink: "https://github.com/Official-Vinit/zerodha"
    },
    {
        title: "My Portfolio",
        role: "DPortfolio",
        description: "A dashboard to showcase my profile",
        points: [
            "Simple frontend application with my profile information",
            "Deployed using Vercel",
        ],
        tech: ["React", "Express", "Nodejs"],
        Githublink: "https://github.com/Official-Vinit/Portfolio.git",
        DeploymentLink: "https://portfolio-vinit-sandy.vercel.app/"
    },
    {
        title: "CampusConnect",
        role: "Social Platform",
        description: "A full-stack web application designed to foster engagement within a campus community.",
        points: [
            "Enables users to create posts, participate in polls, comment, react, and follow others.",
            "Features user authentication, profile management, and interactive sidebars.",
            "Includes chatbot assistance and news feed integration."
        ],
        tech: ["MERN Stack", "Socket.io", "Redux"],
        Gitlink: "https://github.com/Official-Vinit/CampusConnect2"
    },
    {
        title: "SmartCart - Customer Sugmentation System",
        role: "Customer segmentation",
        description: "A customer segmentation system using different algorithms in unsupervised learning",
        points: [
            "Developed an end- to end customer segmentation system using different algorithms in unsupervised learning",
            "Implemented evaluations to check the correctness and anamoly detection",
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        Githublinklink: "https://github.com/Official-Vinit/SmartCart-Customer-Segmentation"
    },
    {
        title: " PowerPlant Energy Prediction - ANN System",
        role: "ANN model",
        description: "A prediction system using ANN model",
        points: [
            "Architecture: Implemented a multi-layer ANN with ReLU activation and MSELoss to optimize performance.",
            "Performance: Achieved a high R^2 Score of 0.93 on test data, effectively capturing non-linear relationships.",
            "Optimization: Utilized the Adam optimizer and implemented a \"best model\" save/load checkpoint strategy."
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "PyTorch"],
        Githublink: "https://github.com/Official-Vinit/ANNRegression"
    },
];
