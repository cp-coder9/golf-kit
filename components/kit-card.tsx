'use client';

import { motion } from 'motion/react';
import { Ruler, Flag, ShieldCheck, Layers, Target, Users, Sparkles, LayoutTemplate } from 'lucide-react';
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
  description: string;
  targetAudience: string;
  shapeAndFeatures: string;
  suitability: string;
  keyBenefits: string[];
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
  description,
  targetAudience,
  shapeAndFeatures,
  suitability,
  keyBenefits,
  index,
}: KitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative flex flex-col bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1 transition-all duration-500"
    >
      {/* Top Section: Image & Core Specs */}
      <div className="flex flex-col xl:flex-row border-b border-stone-800">
        <div className="relative w-full xl:w-1/2 h-80 xl:h-auto overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent xl:bg-gradient-to-r" />
        </div>

        <div className="flex-1 p-8 xl:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-serif text-stone-100 mb-4">
              {name}
            </h3>
            <p className="text-stone-300 font-light leading-relaxed mb-6">
              {description}
            </p>
            <div className="inline-block px-4 py-2 bg-stone-950 rounded-full border border-stone-800">
              <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                {sqft} sq ft • {holes} Hole Locations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
      </div>

      {/* Bottom Section: Deep Dive Details */}
      <div className="p-8 xl:p-12 bg-stone-950/50 group-hover:bg-stone-950/80 transition-colors duration-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Target Audience */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <Users className="w-5 h-5" />
            <h4 className="font-serif text-lg text-stone-200">Target Audience</h4>
          </div>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            {targetAudience}
          </p>
        </div>

        {/* Shape & Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <LayoutTemplate className="w-5 h-5" />
            <h4 className="font-serif text-lg text-stone-200">Design & Shape</h4>
          </div>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            {shapeAndFeatures}
          </p>
        </div>

        {/* Suitability */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <Target className="w-5 h-5" />
            <h4 className="font-serif text-lg text-stone-200">Best Suited For</h4>
          </div>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            {suitability}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 mb-4">
            <Sparkles className="w-5 h-5" />
            <h4 className="font-serif text-lg text-stone-200">Key Benefits</h4>
          </div>
          <ul className="space-y-2">
            {keyBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-stone-400 text-sm font-light leading-relaxed">
                <span className="text-emerald-500/50 mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}
