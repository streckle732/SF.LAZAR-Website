import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, Cross, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Values from './components/Values';
import Process from './components/Process';
import FleetAndGallery from './components/FleetAndGallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Logo from './components/Logo';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-dark-bg font-serif text-sand min-h-screen selection:bg-gold/30 selection:text-sand scroll-smooth relative overflow-hidden">
      {/* Immersive Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full immersive-glow-1 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full immersive-glow-2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-[55%] -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none hidden md:block"></div>

      {/* 1. Header / Navigation */}
      <Navbar />

      {/* 2. Hero Section with dynamic image slider and entrance animations */}
      <Hero />

      {/* 4. About Us section with numerical scroll counter tickers */}
      <About />

      {/* 5. Values Section displaying corporate codes in beautiful Bento Grid */}
      <Values />

      {/* 6. Packages & Dynamic Interactive Budget Estimator Tool */}
      <Packages />

      {/* 7. Process Step-by-Step Vertical Timeline */}
      <Process />

      {/* 8. Fleet omologation & Image Filter Gallery */}
      <FleetAndGallery />

      {/* 9. Interactive FAQ Accordions */}
      <Faq />

      {/* 10. Contact form with Maps and Legal details */}
      <Contact />

      {/* 11. Fully Crafted Elegant Footer */}
      <footer className="bg-dark-bg text-sand/60 py-16 border-t border-gold/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Logo size={46} />
                <div className="flex flex-col">
                  <span className="font-serif text-base font-light text-gold tracking-[0.2em] uppercase leading-none">
                    SF. LAZĂR
                  </span>
                  <span className="text-[9px] text-sand/40 font-sans tracking-[0.2em] uppercase leading-none mt-1.5">
                    Servicii Funerare Complete
                  </span>
                </div>
              </div>
              <p className="text-sand/50 text-xs font-light leading-relaxed">
                Asigurăm o gamă completă de pompe funebre în Iași, sprijinind familiile îndoliate cu respect profund, onestitate și profesionalism desăvârșit.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[10px] text-gold/80 font-sans tracking-wide">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>AUTORIZAT SANITAR D.S.P. IAȘI</span>
              </div>
            </div>

            {/* Quick links navigation */}
            <div>
              <h4 className="font-sans text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-b border-gold/10 pb-2">
                Navigare Rapidă
              </h4>
              <ul className="space-y-2.5 text-xs font-sans tracking-wider text-sand/70">
                <li>
                  <a href="#despre" className="hover:text-gold transition-colors duration-150">
                    Despre Noi
                  </a>
                </li>
                <li>
                  <a href="#pachete" className="hover:text-gold transition-colors duration-150">
                    Pachete de Servicii
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-gold transition-colors duration-150">
                    Calculator de Buget
                  </a>
                </li>
                <li>
                  <a href="#proces" className="hover:text-gold transition-colors duration-150">
                    Procesul de Asistență
                  </a>
                </li>
                <li>
                  <a href="#flota" className="hover:text-gold transition-colors duration-150">
                    Flota de Autospeciale
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links / Rights */}
            <div>
              <h4 className="font-sans text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-b border-gold/10 pb-2">
                Asistență & Informații
              </h4>
              <ul className="space-y-2.5 text-xs text-sand/50 font-light italic">
                <li>Ajutor de Deces Casa de Pensii Iași</li>
                <li>Consultanță Legală Certificat de Deces</li>
                <li>Tanatopraxie & Cosmetică Profesională</li>
                <li>Aranjamente Florale Memoriale</li>
                <li>Repatriere în Uniunea Europeană</li>
              </ul>
            </div>

            {/* Contact coordinates footer */}
            <div className="space-y-3">
              <h4 className="font-sans text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-b border-gold/10 pb-2">
                Dispecerat & Contact Direct
              </h4>
              <p className="text-sand/70 text-xs font-light leading-relaxed font-sans">
                Strada Carpați 9A, 700729, Iași (zona Nicolina 1)
              </p>
              <div className="text-gold text-base font-light tracking-wide">
                <a href="tel:+40754321321" className="hover:underline font-sans">
                  📞 0754 321 321
                </a>
              </div>
              <p className="text-sand/40 text-[10px] leading-relaxed italic">
                Apelați pentru asistență și îndrumare. Personalul nostru operativ se deplasează cu profesionalism în cel mai scurt timp.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-gold/15 mb-8" />

          {/* Legal / Rights details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-sand/40 font-sans tracking-widest uppercase text-center sm:text-left">
            <div>
              <p>© 2026 S.C. SF. LAZĂR S.R.L. Iași. Toate drepturile rezervate.</p>
              <p className="mt-1 normal-case tracking-normal text-[10px] opacity-75 font-serif italic text-sand/40">Administrator: Croitoru Andreea-Teodora | CAEN: 9603 | Înființat 2026</p>
            </div>
            <div className="flex gap-4">
              <span className="hover:text-gold transition-colors cursor-pointer">Termeni și Condiții</span>
              <span className="hover:text-gold transition-colors cursor-pointer">Politica de Confidențialitate</span>
              <span className="hover:text-gold transition-colors cursor-pointer">ANPC</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. Persistent Floating Call Urgență Button & Scroll To Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Pulsing Call Button */}
        <motion.a
          href="tel:+40754321321"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-dark-bg shadow-2xl hover:scale-105 transition-transform duration-200 group"
          title="Sunați Acum — Asistență Directă"
        >
          {/* Pulsing ring circles around phone button */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-gold/30"
          />
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeOut', delay: 0.5 }}
            className="absolute inset-0 rounded-full bg-gold/20"
          />
          <Phone className="w-5 h-5 fill-current relative z-10 animate-pulse text-dark-bg" />
          
          {/* Tiny tool tip for clarity */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark-bg text-gold text-[10px] font-sans font-semibold uppercase tracking-[0.2em] py-1.5 px-3 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gold/30 shadow-lg">
            📞 Apel Direct Asistență
          </span>
        </motion.a>

        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-none bg-dark-bg text-gold border border-gold/30 shadow-md hover:bg-gold hover:text-dark-bg transition-colors duration-200 focus:outline-none"
              title="Înapoi sus"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
