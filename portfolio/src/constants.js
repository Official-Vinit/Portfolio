import {
    Code, Layout, Database, Server, Smartphone, Layers,
    Linkedin, Github, Mail, Phone, Award, Terminal
} from "lucide-react";

// Personal Details
export const PROFILE = {
    name: "Vinit Kumar Gupta",
    role: "Full Stack Web & Android App Development | DSA",
    email: "officialvinit1176@gmail.com",
    phone: "+919621030649",
    location: "India",
    education: {
        degree: "B.Tech Information Technology (Honors in Full Stack Development)",
        college: "KPR Institute of Engineering and Technology, Coimbatore",
        cgpa: "8.49/10",
        year: "2023-2027"
    }
};

// Social Links
export const PLATFORMS = [
    {
        name: "LeetCode",
        subtext: "Problem Solving",
        stat: "150+ Solved",
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
    { category: "Web Dev", items: ["HTML", "CSS", "React.js", "Node.js", "Express", "Tailwind"], icon: Layout },
    { category: "Android", items: ["Kotlin", "Jetpack Compose", "Retrofit", "Coil"], icon: Smartphone },
    { category: "Databases", items: ["MongoDB", "MySQL", "Room", "Mongoose"], icon: Database },
    { category: "DevOps/Cloud", items: ["AWS", "Google Cloud", "Render", "Vercel"], icon: Server },
    { category: "Core", items: ["DSA", "System Design", "API Handling", "Testing (Jest)"], icon: Layers },
];

// Certifications & Achievements
export const ACHIEVEMENTS = [
    { title: "MongoDB Certified Associate Developer", issuer: "MongoDB", type: "Certification" },
    { title: "AWS Academy Cloud Foundation Certificate", issuer: "AWS", type: "Certification" },
    { title: "5 Star at Problem Solving", issuer: "HackerRank", type: "Achievement" },
    { title: "100+ Problems Solved", issuer: "LeetCode", type: "Achievement" },
    { title: "Problem Solving in C", issuer: "HackerRank", type: "Certification" }
];

// Work Experience
export const EXPERIENCE = [
    {
        company: "PiyushDhara Eduverse",
        role: "Website Developer Intern",
        duration: "01 Oct 2025 - 01 Jan 2026",
        description: "Developed and deployed a full stack website for user and admin.",
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
        role: "Academic Project",
        description: "A comprehensive platform automating recruitment workflows for universities.",
        points: [
            "Implemented secure JWT-based authentication and role-based access control (admin, students).",
            "Implemented file upload functionality with Cloudinary for resume and document management.",
            "Built a responsive admin dashboard with data visualization using Chart.js.",
            "Created real-time notification system for job applications and updates."
        ],
        tech: ["React", "Node.js", "MongoDB", "Chart.js"],
        link: "https://github.com/Official-Vinit/CDCWork"
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
        link: "https://github.com/Official-Vinit/CampusConnect2"
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
        link: "https://github.com/Official-Vinit/zerodha"
    }
];