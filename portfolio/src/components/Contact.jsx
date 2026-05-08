import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { PROFILE } from "../constants";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "idle", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setStatus({ type: "idle", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const contentType = response.headers.get("content-type") || "";
            const data = contentType.includes("application/json")
                ? await response.json()
                : { message: await response.text() };

            if (!response.ok) {
                throw new Error(data.message || "Unable to send message.");
            }

            setForm(initialForm);
            setStatus({ type: "success", message: "Message sent. I will get back to you soon." });
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="py-20 px-8 border-t border-slate-800 bg-slate-950" id="contact">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-4 border-l-4 border-teal-500 pl-4">
                        Contact Me
                    </h3>
                    <p className="text-slate-400 leading-relaxed max-w-md">
                        Share an opportunity, collaboration idea, or project note and it will land in my inbox.
                    </p>

                    <div className="mt-8 space-y-4 text-slate-400">
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                            <Mail size={20} />
                            {PROFILE.email}
                        </a>
                        <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                            <Phone size={20} />
                            {PROFILE.phone}
                        </a>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 md:p-8 space-y-5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-300">Name</span>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-teal-400"
                                placeholder="Your name"
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-slate-300">Email</span>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-teal-400"
                                placeholder="you@example.com"
                            />
                        </label>
                    </div>

                    <label className="block">
                        <span className="text-sm font-medium text-slate-300">Subject</span>
                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-teal-400"
                            placeholder="Project, collaboration, or opportunity"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-slate-300">Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="mt-2 w-full resize-y rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-teal-400"
                            placeholder="Write your message..."
                        />
                    </label>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <motion.button
                            type="submit"
                            disabled={isSending}
                            whileHover={{ scale: isSending ? 1 : 1.03 }}
                            whileTap={{ scale: isSending ? 1 : 0.97 }}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-bold text-black transition-colors hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <Send size={18} />
                            {isSending ? "Sending..." : "Send Message"}
                        </motion.button>

                        {status.message && (
                            <p className={`text-sm ${status.type === "success" ? "text-teal-400" : "text-red-400"}`}>
                                {status.message}
                            </p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
