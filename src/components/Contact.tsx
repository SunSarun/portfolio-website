import { Reveal } from './Reveal';
import { CONTACT_LINKS } from '../config/links';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-48 px-6 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <Reveal className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-12 glow-text uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Get_In_<span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-slate-400 mono text-xs md:text-sm tracking-[0.5em] mb-16 uppercase">
          "Ready to work!"
        </p>
        <div className="flex flex-col items-center gap-8">
          <a href={CONTACT_LINKS.email.link} className="text-xl sm:text-2xl md:text-5xl font-bold border-b-2 border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-400 transition-all pb-2 glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-3xl">
            {CONTACT_LINKS.email.value}
          </a>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 text-[10px] mono uppercase tracking-[0.3em] text-slate-500">
            <a href={CONTACT_LINKS.website.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Website
            </a>
            <a href={CONTACT_LINKS.github.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 rounded-full bg-violet-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Github
            </a>
            <a href={CONTACT_LINKS.linkedin.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg hover:text-cyan-400 transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 rounded-full bg-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              LinkedIn
            </a> 
            <a href={CONTACT_LINKS.telegram.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg hover:text-cyan-400 transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 rounded-full bg-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Telegram
            </a>
            <a href={CONTACT_LINKS.signal.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg hover:text-cyan-400 transition-colors flex items-center gap-2 group">
              <span className="w-1 h-1 rounded-full bg-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Signal
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
