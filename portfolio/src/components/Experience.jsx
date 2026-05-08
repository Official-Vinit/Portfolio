import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SKILLS, EXPERIENCE } from "../constants";

const Experience = () => {
    return (
        <section className="py-20 px-8 max-w-6xl mx-auto" id="experience">
            {/* Experience Section */}
            <div className="mb-24">
                <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                    Professional Experience
                </h3>

                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900/50 p-8 rounded-lg border border-slate-800 hover:border-teal-500/30 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                                <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                                <p className="text-teal-400 text-lg">{exp.company}</p>
                            </div>
                            <span className="text-slate-500 font-mono mt-2 md:mt-0">{exp.duration}</span>
                        </div>
                        <p className="text-slate-400 mb-5 max-w-3xl">{exp.description}</p>

                        {exp.links?.length > 0 && (
                            <div className="flex flex-wrap gap-3 mb-5">
                                {exp.links.map((link) => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
                                    >
                                        {link.label}
                                        <ExternalLink size={14} />
                                    </a>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-2 flex-wrap">
                            {exp.tech.map((t, i) => (
                                <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-300 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skills Grid */}
            <div>
                <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                    Technical Arsenal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-teal-500/50 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <skill.icon className="text-slate-500 group-hover:text-teal-400 transition-colors" size={28} />
                                <h4 className="text-xl font-semibold text-slate-200">{skill.category}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="text-sm text-slate-400 bg-black/30 px-3 py-1 rounded border border-slate-800">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
