'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-950 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080?random=1"
          alt="Putting Green Background"
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-emerald-400 font-mono text-sm tracking-[0.2em] uppercase">
            Modular DIY Putting Green Kits
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 tracking-tight leading-[1.1]">
            Master Your <br />
            <span className="italic font-light text-stone-300">Short Game</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Practice at home with the innovative Players Series system. Installs quickly and provides a professionally installed look and performance without the disruption of a full construction project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12"
        >
          <a
            href="#catalog"
            className="flex flex-col items-center gap-3 text-stone-400 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest font-mono">Explore Kits</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
