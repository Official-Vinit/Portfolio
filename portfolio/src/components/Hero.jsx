import { motion } from "framer-motion";
import { Download, Eye, GraduationCap, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../constants";
import SocialStats from "./SocialStats";

const Hero = () => {
    const [firstName, middleName, lastName] = PROFILE.name.split(" ");

    return (
        <section className="min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto pt-20" id="about">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-teal-400 font-mono tracking-widest text-sm mb-4 block">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        // {PROFILE.phone}
                        <br />
                        // {PROFILE.email}
                    </motion.span>
                </span>

                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tighter leading-tight relative group">
                    <span className="relative inline-block transition-transform duration-300 group-hover:-skew-x-12">
                        {firstName}
                    </span>
                    <span className="text-slate-500"> {middleName}</span>
                    <span className="text-slate-500"> {lastName}</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl font-light">
                    {PROFILE.role}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl">

                    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 md:col-span-2">
                        <div className="flex items-center gap-2 text-teal-400 mb-2">
                            <GraduationCap size={18} />
                            <span className="text-xs uppercase tracking-widest font-mono">Education</span>
                        </div>
                        <p className="text-slate-200 font-medium">{PROFILE.education.degree}</p>
                        <p className="text-sm text-slate-500 mt-1">
                            {PROFILE.education.college} • CGPA {PROFILE.education.cgpa} • {PROFILE.education.year}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-teal-500 text-black font-bold rounded-lg flex items-center gap-2 hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]"
                    >
                        <Mail size={20} /> Contact Me
                    </motion.a>

                    <motion.a
                        href="#resume"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg flex items-center gap-2 hover:border-teal-500 hover:text-teal-400 transition-all hover:bg-teal-500/10"
                    >
                        <Eye size={20} /> View Resume
                    </motion.a>

                    <motion.a
                        href={PROFILE.resume.path}
                        download={PROFILE.resume.fileName}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg flex items-center gap-2 hover:border-teal-500 hover:text-teal-400 transition-all hover:bg-teal-500/10"
                    >
                        <Download size={20} /> Download
                    </motion.a>
                </div>
                <SocialStats />
            </motion.div>
        </section>
    );
};

export default Hero;
