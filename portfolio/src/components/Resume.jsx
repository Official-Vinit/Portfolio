import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { PROFILE } from "../constants";

const Resume = () => {
    const resumeUrl = PROFILE.resume.path;
    const pdfPreviewUrl = `${resumeUrl}#view=FitH&toolbar=1&navpanes=0`;

    return (
        <section className="py-20 px-8 max-w-6xl mx-auto border-t border-slate-900" id="resume">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
                <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-4 border-l-4 border-teal-500 pl-4">
                        Resume
                    </h3>
                    <p className="text-slate-400 max-w-2xl">
                        Preview the latest resume here, open it in a full browser tab, or download the PDF directly.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
                    >
                        <ExternalLink size={18} />
                        View Full
                    </a>
                    <a
                        href={resumeUrl}
                        download={PROFILE.resume.fileName}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-bold text-black hover:bg-teal-400 transition-colors"
                    >
                        <Download size={18} />
                        Download PDF
                    </a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950"
            >
                <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-400">
                    <FileText size={18} className="text-teal-400" />
                    {PROFILE.resume.fileName}
                </div>
                <object
                    data={pdfPreviewUrl}
                    type="application/pdf"
                    title={`${PROFILE.name} resume preview`}
                    className="h-[72vh] min-h-[520px] w-full bg-white"
                >
                    <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 bg-slate-950 p-8 text-center">
                        <p className="max-w-md text-slate-400">
                            The browser could not render the PDF preview here.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
                            >
                                <ExternalLink size={18} />
                                Open Resume
                            </a>
                            <a
                                href={resumeUrl}
                                download={PROFILE.resume.fileName}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-bold text-black hover:bg-teal-400 transition-colors"
                            >
                                <Download size={18} />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </object>
            </motion.div>
        </section>
    );
};

export default Resume;
