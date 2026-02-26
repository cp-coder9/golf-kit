'use client';

import { motion } from 'motion/react';
import { Pickaxe, Puzzle, FlagTriangleRight } from 'lucide-react';

const steps = [
  {
    icon: Pickaxe,
    title: 'Prepare Location',
    description:
      'Select or prepare a relatively flat location (no more than 3% slope), utilize compacted stone dust as needed, and install geotextile fabric.',
  },
  {
    icon: Puzzle,
    title: 'Assemble Panels',
    description:
      'Assemble the Ultra Base Players Series Panel System, placing the pre-drilled cup panels where you would like your hole locations.',
  },
  {
    icon: FlagTriangleRight,
    title: 'Install Turf & Cups',
    description:
      'Install the cup systems, pre-cut XGrass turf and fringe, cut the holes and place flags.',
  },
];

export function InstallationSteps() {
  return (
    <section className="py-32 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Three Steps To Quick Install
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto text-lg font-light"
          >
            Constructed with interlocking Ultra Base base panels and covered with tour quality putting surface and fringe turf from XGrass, these putting greens are designed for serious golfers. Easily installed in hours...not days...and can be relocated as needed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-stone-800 -z-10" />
              )}

              <div className="w-24 h-24 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-8 group-hover:border-emerald-500/50 group-hover:bg-stone-800 transition-all duration-500 shadow-lg shadow-stone-950">
                <step.icon className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-serif mb-4 text-stone-200">{step.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="https://www.xgrass.com/how-to-build-putting-green.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-sm uppercase tracking-widest transition-colors border-b border-emerald-400/30 hover:border-emerald-300 pb-1"
          >
            View Full Installation Guide
          </a>
        </motion.div>
      </div>
    </section>
  );
}
