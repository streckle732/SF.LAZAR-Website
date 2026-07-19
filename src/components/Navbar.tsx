import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, AlertCircle } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmergencyBannerOpen, setIsEmergencyBannerOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Despre Noi', href: '#despre' },
    { name: 'Pachete Funerare', href: '#pachete' },
    { name: 'Calculator Buget', href: '#calculator' },
    { name: 'Cum Procedăm', href: '#proces' },
    { name: 'Flotă & Servicii', href: '#flota' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
      {/* 1. Emergency Floating Alert Banner (Dignified top notification bar) */}
      <AnimatePresence>
        {isEmergencyBannerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-auto w-full bg-gold text-dark-bg text-center py-2 px-4 font-sans text-[10px] sm:text-xs font-semibold tracking-[0.1em] uppercase flex items-center justify-center gap-2 shadow-lg border-b border-gold/30"
          >
            <AlertCircle className="w-3.5 h-3.5 fill-current text-dark-bg animate-pulse flex-shrink-0" />
            <span>Deces în familie? Dispeceratul nostru este disponibil pentru asistență în Iași: </span>
            <a href="tel:+40754321321" className="underline font-extrabold hover:opacity-85 transition-opacity">
              0754 321 321
            </a>
            <button
              onClick={() => setIsEmergencyBannerOpen(false)}
              className="ml-3 px-2 py-0.5 rounded border border-dark-bg/30 hover:bg-dark-bg/10 text-[9px] tracking-wide cursor-pointer"
              aria-label="Închide banner"
            >
              Închide
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Navbar */}
      <motion.nav
        layout
        className={`pointer-events-auto w-full transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 bg-dark-bg/95 border-b border-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md'
            : 'py-4 bg-[#0a0a0a]/80 border-b border-gold/10 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-3.5 group">
              <Logo size={46} className="transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif text-[15px] tracking-[0.22em] uppercase font-light text-sand group-hover:text-gold transition-colors duration-300 leading-none">
                  SF. LAZĂR
                </span>
                <span className="text-[7.5px] text-sand/40 font-sans tracking-[0.22em] uppercase leading-none mt-1">
                  Servicii Funerare Complete
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative px-3.5 py-2 text-[10px] uppercase font-sans tracking-[0.2em] text-sand/60 hover:text-gold transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Emergency Call Button */}
              <a
                href="tel:+40754321321"
                className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 border border-gold rounded-full text-gold font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-dark-bg transition-all duration-300 shadow-[0_4px_15px_rgba(193,154,107,0.1)] hover:shadow-[0_8px_25px_rgba(193,154,107,0.25)] hover:-translate-y-0.5"
              >
                <Phone className="w-3 h-3 fill-current animate-pulse" />
                <span>0754 321 321</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-none text-sand/60 hover:text-gold hover:bg-white/5 focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gold/15 bg-dark-bg"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-xs font-sans uppercase tracking-[0.15em] text-sand/60 hover:text-gold hover:bg-gold/5 transition-colors duration-200 border-l-2 border-transparent hover:border-gold"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-4 pb-2 px-4">
                  <a
                    href="tel:+40754321321"
                    className="flex items-center justify-center gap-3 w-full px-5 py-3.5 border border-gold rounded-full text-gold font-sans text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-dark-bg transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 fill-current animate-pulse" />
                    <span>0754 321 321 (Asistență)</span>
                  </a>
                  <p className="text-center text-[9px] font-sans tracking-widest text-sand/40 mt-3 uppercase">
                    Apel direct asistență și îndrumare Iași
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
