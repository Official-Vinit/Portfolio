import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, ExternalLink, X } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section className="py-20 px-8 max-w-6xl mx-auto border-t border-slate-900" id="achievements">
            <h3 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-teal-500 pl-4">
                Certifications & Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS.map((item, index) => (
                    <motion.button
                        type="button"
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedCertificate(item)}
                        className="flex w-full items-center gap-4 bg-slate-900/50 p-6 rounded-lg border border-slate-800 text-left hover:border-teal-500/40 transition-all"
                    >
                        <div className="bg-teal-500/10 p-3 rounded-full text-teal-400">
                            {item.type === "Certification" ? <Award size={24} /> : <CheckCircle size={24} />}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-mono mt-1">{item.issuer}</p>
                        </div>
                        <ExternalLink size={18} className="ml-auto text-slate-600" />
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl rounded-lg border border-slate-700 bg-slate-900 p-4 shadow-2xl"
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/80 p-2 text-slate-300 hover:text-white"
                                aria-label="Close certificate preview"
                            >
                                <X size={20} />
                            </button>

                            <img
                                src={selectedCertificate.image}
                                alt={`${selectedCertificate.title} certificate`}
                                className="max-h-[75vh] w-full rounded-md object-contain bg-slate-950"
                            />

                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-100">{selectedCertificate.title}</h4>
                                    <p className="text-sm text-slate-500">{selectedCertificate.issuer}</p>
                                </div>
                                <a
                                    href={selectedCertificate.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-teal-500 hover:text-teal-400"
                                >
                                    <ExternalLink size={16} />
                                    Verify
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;
