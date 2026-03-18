import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, rotateX: 2, rotateY: 2, z: 50 }}
        transition={{ duration: 0.3 }}
        className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-teal-500/50 hover:shadow-[0_20px_40px_rgba(45,212,191,0.1)] transition-all"
    >
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                    {project.title}
                </h4>
                <motion.a
                    href={project.link}
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-slate-500 hover:text-white transition-colors"
                >
                    <Github size={24} />
                </motion.a>
            </div>

            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
            </p>

            <ul className="text-slate-500 text-sm list-disc pl-4 space-y-2 mb-8 flex-grow">
                {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-teal-500/80 bg-teal-500/10 px-2 py-1 rounded">
                        #{tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const devProjects = PROJECTS.slice(0, 3);
    const mlProjects = PROJECTS.slice(3);

    return (
        <section className="py-20 px-8 max-w-6xl mx-auto" id="projects">
            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Development Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {devProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Machine Learning Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mlProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;