import { Reveal } from '../components/Reveal';
import { CONTACT_LINKS } from '../config/links';

export const Contact = () => {
  const contacts = [
    {
      ...CONTACT_LINKS.email,
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-cyan-500/20'
    },
    {
      ...CONTACT_LINKS.telegram,
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.82-.76 4.39-1.07 6.07-.13.71-.4 1.15-.65 1.18-.55.05-1.01-.27-1.48-.59-.74-.49-1.16-.76-1.89-1.25-.83-.56-.3-.87.18-1.37.13-.13 2.29-2.11 2.33-2.3.01-.02.01-.11-.04-.16-.06-.05-.14-.03-.21-.02-.09.02-1.5 1.01-4.23 2.91-.4.28-.76.42-1.08.41-.36-.01-1.05-.21-1.56-.38-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.37 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
        </svg>
      ),
      color: 'from-blue-500/20'
    },
    {
      ...CONTACT_LINKS.linkedin,
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'from-indigo-500/20'
    },
    {
      ...CONTACT_LINKS.signal,
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-cyan-500/20'
    },
    {
      ...CONTACT_LINKS.github,
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      color: 'from-violet-500/20'
    },
    {
      ...CONTACT_LINKS.website,
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'from-emerald-500/20'
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter glow-text mb-8">
            CONTACT<span className="text-cyan-400"> ME</span>
          </h1>
          <p className="text-slate-400 text-xl mb-12 mono">
            Choose your preferred secure protocol. I usually respond within a few hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((contact, i) => (
            <Reveal key={contact.name} delay={i * 0.1}>
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs mono text-cyan-400 uppercase tracking-widest mb-1">{contact.name}</div>
                      <div className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">{contact.value}</div>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
