import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navData from '../data/navigation.json';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  hash?: boolean;
  isHome: boolean;
  currentPath: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, hash, isHome, currentPath, onClick }: NavLinkProps) => {
  if (hash && isHome) {
    return (
      <a href={to} onClick={onClick} className="hover:text-cyan-400 transition-colors">
        {children}
      </a>
    );
  }
  
  const destination = hash ? `/${to}` : to;
  
  return (
    <Link to={destination} onClick={onClick} className={`hover:text-cyan-400 transition-colors ${currentPath === to ? 'text-cyan-400' : ''}`}>
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter glow-text flex items-center gap-2">
            {navData.brand.name}<span className="text-cyan-400">{navData.brand.dot}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[12px] uppercase tracking-[0.3em] font-medium text-slate-300">
            {navData.links.map((link) => (
              'external' in link && link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  hash={'hash' in link ? link.hash : undefined}
                  isHome={isHome}
                  currentPath={location.pathname}
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </nav>
          
          <nav className="hidden md:block">
            <NavLink to={navData.contactButton.to} isHome={isHome} currentPath={location.pathname}>
              <span className="px-6 py-2 text-[12px] border border-cyan-400/30 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all uppercase tracking-widest bg-white/5">
                {navData.contactButton.label}
              </span>
            </NavLink>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all z-50 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span 
                className={`absolute h-[2px] w-full bg-slate-300 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-1.5 bg-cyan-400' : 'top-0'
                }`}
              />
              <span 
                className={`absolute h-[2px] w-full bg-slate-300 rounded-full transition-all duration-300 top-1.5 ${
                  isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute h-[2px] w-full bg-slate-300 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-1.5 bg-cyan-400' : 'top-3'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-stars pointer-events-none opacity-10"></div>
        <div className="absolute inset-0 bg-liquid-space pointer-events-none opacity-50"></div>
        
        <nav className="flex flex-col gap-8 text-center text-lg uppercase tracking-[0.3em] font-medium text-slate-300 z-10">
          {navData.links.map((link) => (
            'external' in link && link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                hash={'hash' in link ? link.hash : undefined}
                isHome={isHome}
                currentPath={location.pathname}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            )
          ))}
          <NavLink 
            to={navData.contactButton.to} 
            isHome={isHome} 
            currentPath={location.pathname} 
            onClick={closeMenu}
          >
            <span className="px-8 py-3 text-[14px] border border-cyan-400/40 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all uppercase tracking-widest bg-white/5 inline-block mt-4">
              {navData.contactButton.label}
            </span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};
