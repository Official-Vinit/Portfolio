// src/components/SocialStats.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PLATFORMS } from "../constants";

const SocialStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 w-full">
      {PLATFORMS.map((platform, index) => (
        <motion.a
          key={index}
          href={platform.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className={`group relative bg-slate-900/40 p-4 rounded-lg border border-slate-800 transition-all duration-300 ${platform.border} hover:bg-slate-900/80`}
        >
          <div className="flex items-start justify-between mb-2">
            <platform.icon className={`text-slate-500 transition-colors duration-300 ${platform.color}`} size={24} />
            <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-300" />
          </div>
          
          <div>
            <h4 className="text-slate-200 font-bold text-sm group-hover:text-white">{platform.name}</h4>
            <p className="text-xs text-slate-500 font-mono mb-1">{platform.subtext}</p>
            <div className={`text-sm font-bold transition-colors duration-300 ${platform.color}`}>
              {platform.stat}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialStats;