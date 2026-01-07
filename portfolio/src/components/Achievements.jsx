import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    return (
        <section className="py-20 px-8 max-w-6xl mx-auto border-t border-slate-900" id="achievements">
            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Certifications & Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-teal-500/40 transition-all"
                    >
                        <div className="bg-teal-500/10 p-3 rounded-full text-teal-400">
                            {item.type === "Certification" ? <Award size={24} /> : <CheckCircle size={24} />}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-mono mt-1">{item.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;