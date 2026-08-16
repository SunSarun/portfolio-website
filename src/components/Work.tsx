import { Reveal } from './Reveal';
import workData from '../data/work.json';

export const Work = () => {
  return (
    <section id="work" className="relative py-32 px-6 max-w-7xl mx-auto">
      <Reveal className="mb-20">
        <span className="text-cyan-400 mono text-xs tracking-[0.5em] mb-4 block">{workData.subtitle}</span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase glow-text">{workData.title}</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {workData.projects.map((project, i) => {
          const content = (
            <div className="group relative cursor-pointer">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden glass-card mb-8 p-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={project.img} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex justify-between items-start px-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase flex items-center gap-2">
                    {project.title}
                    <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg max-w-md">{project.desc}</p>
                </div>
                <span className="text-xs mono border border-white/10 px-4 py-1.5 rounded-full text-slate-500 bg-white/5">
                  {project.year}
                </span>
              </div>
            </div>
          );

          return (
            <Reveal key={project.title} delay={i * 0.2}>
              {'link' in project && project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block focus:outline-none"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
