import { Reveal } from './Reveal';
import arsenalData from '../data/arsenal.json';

export const Arsenal = () => {
  return (
    <section id="arsenal" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20 text-center">
          <span className="text-cyan-400 mono text-xs tracking-[0.5em] uppercase mb-4 block">{arsenalData.subtitle}</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase glow-text">{arsenalData.title}</h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {arsenalData.modules.map((module, i) => (
            <Reveal key={module.id} className="glass-card glass-card-hover p-6 sm:p-8 rounded-[2rem] relative overflow-hidden group" delay={i * 0.1}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-cyan-400 mb-6 text-3xl font-light">{module.id}</div>
              <h3 className="font-bold tracking-widest uppercase text-base mb-4 text-white/90">{module.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mono group-hover:text-slate-200 transition-colors">{module.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
