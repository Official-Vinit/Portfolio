import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { PROJECTS } from "../constants";

const getProjectLinks = (project) => {
    const githubUrl = project.Githublink || project.Gitlink || project.Githublinklink || project.link;
    const deploymentUrl = project.DeploymentLink || project.DepoymentLink;
    return [
        githubUrl && { label: "Code", url: githubUrl, icon: Github },
        deploymentUrl && { label: "Live", url: deploymentUrl, icon: Rocket },
    ].filter(Boolean);
};

const ProjectCard = ({ project }) => {
    const links = getProjectLinks(project);
    const PrimaryIcon = links[0]?.icon;

    return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, rotateX: 2, rotateY: 2, z: 50 }}
        transition={{ duration: 0.3 }}
        className="group min-w-[280px] sm:min-w-[360px] lg:min-w-[390px] bg-slate-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-800 hover:border-teal-500/50 hover:shadow-[0_20px_40px_rgba(45,212,191,0.1)] transition-all"
    >
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start gap-4 mb-6">
                <h4 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
                    {project.title}
                </h4>
                {links[0] && PrimaryIcon && (
                    <motion.a
                        href={links[0].url}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="text-slate-500 hover:text-white transition-colors shrink-0"
                        aria-label={`Open ${project.title} ${links[0].label}`}
                    >
                        <PrimaryIcon size={24} />
                    </motion.a>
                )}
            </div>

            <p className="text-xs uppercase tracking-widest text-teal-400/80 mb-4 font-mono">
                {project.role}
            </p>

            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
            </p>

            <ul className="text-slate-500 text-sm list-disc pl-4 space-y-2 mb-8 flex-grow">
                {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

            {links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-5">
                    {links.map((link) => (
                        <a
                            key={`${link.label}-${link.url}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
                        >
                            <link.icon size={16} />
                            {link.label}
                            <ExternalLink size={13} className="text-slate-500" />
                        </a>
                    ))}
                </div>
            )}

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
};

const Projects = () => {
    const devProjects = PROJECTS.slice(0, 6);
    const mlProjects = PROJECTS.slice(6);
    const renderScroller = (projects) => (
        <div className="-mx-8 px-8 overflow-x-auto pb-6 mb-20 horizontal-project-scroll">
            <div className="flex gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={`${project.title}-${index}`} project={project} />
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-20 px-8 max-w-6xl mx-auto" id="projects">
            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Development Projects
            </h3>

            {renderScroller(devProjects)}

            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Machine Learning Projects
            </h3>

            {renderScroller(mlProjects)}
        </section>
    );
};

export default Projects;
