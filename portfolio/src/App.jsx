import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import { PROFILE } from "./constants";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-teal-500 selection:text-black overflow-x-hidden font-sans">

      {/* Subtle Grid Background - Optional if you want to keep it layered with the new gradient */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <Navbar />

      <div className="relative z-10 w-full">
        <Hero />
        <Experience /> {/* This contains Skills + Internship */}
        <Achievements /> {/* New Section */}
        <Projects />

        {/* Footer with Contact Details */}
        <footer className="py-16 mt-20 border-t border-slate-800 bg-slate-950" id="contact">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">{PROFILE.name}</h2>
              <p className="text-slate-500">{PROFILE.role}</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-slate-400">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-teal-400 transition-colors">
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone}`} className="hover:text-teal-400 transition-colors">
                {PROFILE.phone}
              </a>
              <p className="text-xs text-slate-600 mt-4">
                © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;