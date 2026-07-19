import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Hero() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=1920&q=80',
      caption: 'Liniște, demnitate și respect pentru cei dragi'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80',
      caption: 'Un ultim drum vegheat de profesionalism'
    },
    {
      url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80',
      caption: 'Suntem alături de tine în momentele cele mai grele'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg text-sand">
      {/* Background Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[currentIdx].url}')` }}
          />
        </AnimatePresence>
        {/* Visual vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 via-transparent to-dark-bg/95 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16">
        {/* Small top badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-1.5 border border-gold/20 bg-gold/5 text-gold text-[10px] font-sans tracking-[0.4em] uppercase mb-10"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>RESPECT & DEMNITATE · SERVICII FUNERARE IAȘI</span>
        </motion.div>

        {/* Dynamic headings */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-[76px] leading-[1.05] sm:leading-[0.95] font-light italic mb-8"
        >
          Liniștea ta <br className="hidden sm:block" />
          este datoria <br />
          <span className="text-gold not-italic">noastră.</span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto font-serif text-sand/60 text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-14"
        >
          Suntem alături de dumneavoastră cu servicii funerare complete în Iași, transformând durerea în onoare și amintiri eterne. Ne asumăm întreaga birocrație cu transparență totală.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
        >
          <a
            href="#pachete"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-dark-bg border border-gold font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-gold transition-all duration-300 shadow-[0_4px_15px_rgba(193,154,107,0.15)] hover:shadow-[0_8px_30px_rgba(193,154,107,0.3)] hover:-translate-y-0.5"
          >
            <span>Vezi Pachete Complete</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#calculator"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full border border-gold/30 bg-transparent hover:bg-gold/5 hover:border-gold/60 text-sand font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Calculator Buget</span>
          </a>
        </motion.div>

        {/* Live footer details in Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-gold/10"
        >
          <div className="text-center sm:border-r border-gold/10 px-2">
            <div className="font-serif text-lg text-gold font-light">Str. Carpați 9A</div>
            <div className="text-[9px] font-sans text-sand/40 mt-1 uppercase tracking-[0.2em]">Sediul Central Iași</div>
          </div>
          <div className="text-center sm:border-r border-gold/10 px-2">
            <div className="font-serif text-lg text-gold font-light">Înființat 2026</div>
            <div className="text-[9px] font-sans text-sand/40 mt-1 uppercase tracking-[0.2em]">Serviciu Iași</div>
          </div>
          <div className="text-center sm:border-r border-gold/10 px-2">
            <div className="font-serif text-lg text-gold font-light">~30 Minute</div>
            <div className="text-[9px] font-sans text-sand/40 mt-1 uppercase tracking-[0.2em]">Intervenție Rapidă</div>
          </div>
          <div className="text-center px-2">
            <div className="font-serif text-lg text-gold font-light flex items-center justify-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-gold/50" />
              <span>DISPONIBIL</span>
            </div>
            <div className="text-[9px] font-sans text-sand/40 mt-1 uppercase tracking-[0.2em]">Urgențe & Decese</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer text-sand/50 hover:text-gold transition-colors duration-200">
        <a href="#despre" className="flex flex-col items-center">
          <span className="text-[9px] font-sans uppercase tracking-[0.25em] opacity-60">Află mai multe</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-1"
          >
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
