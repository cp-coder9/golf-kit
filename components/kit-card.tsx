'use client';

import { motion } from 'motion/react';
import { Ruler, Flag, ShieldCheck, Layers } from 'lucide-react';
import Image from 'next/image';

interface KitCardProps {
  name: string;
  specs: string;
  sqft: string;
  holes: number;
  puttingTurf: string;
  fringeTurf: string;
  basePanels: string;
  warranty: string;
  imageSrc: string;
  index: number;
}

export function KitCard({
  name,
  specs,
  sqft,
  holes,
  puttingTurf,
  fringeTurf,
  basePanels,
  warranty,
  imageSrc,
  index,
}: KitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative flex flex-col md:flex-row bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-emerald-900/50 transition-colors duration-500"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-serif text-stone-100 mb-2">
            {name}
          </h3>
          <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
            {sqft} sq ft • {holes} Hole Locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-3">
            <Ruler className="w-5 h-5 text-stone-500 mt-0.5" />
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">Dimensions</p>
              <p className="text-stone-200 font-light">{specs}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Flag className="w-5 h-5 text-stone-500 mt-0.5" />
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">Turf</p>
              <p className="text-stone-200 font-light text-sm">
                <span className="block">Putting: {puttingTurf}</span>
                <span className="block text-stone-400">Fringe: {fringeTurf}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-stone-500 mt-0.5" />
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">Base Panels</p>
              <p className="text-stone-200 font-light text-sm">{basePanels}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-stone-500 mt-0.5" />
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">Warranty</p>
              <p className="text-stone-200 font-light text-sm">{warranty}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full sm:w-auto px-8 py-3 bg-stone-800 hover:bg-emerald-600 text-stone-100 rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(5,150,105,0.3)]">
            Get Pricing
          </button>
        </div>
      </div>
    </motion.div>
  );
}
