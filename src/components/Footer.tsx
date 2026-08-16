export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] mono uppercase tracking-[0.4em] text-slate-500">
      <div>© {new Date().getFullYear()} SARUN.DEV // ALL RIGHTS RESERVED</div>
      <div>BUILT WITH REACT & TAILWIND</div>
    </footer>
  );
};
