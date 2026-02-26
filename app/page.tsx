import { Hero } from '@/components/hero';
import { KitCard } from '@/components/kit-card';
import { InstallationSteps } from '@/components/installation-steps';

const kits = [
  {
    name: 'The Player Series: Classic',
    specs: "12' x 17'",
    sqft: '204',
    holes: 2,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-carolina.jpg',
  },
  {
    name: 'The Player Series: Signature',
    specs: "15' x 17'",
    sqft: '255',
    holes: 3,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-kiawah.jpg',
  },
  {
    name: 'The Player Series: Pro Champion',
    specs: "18' x 23'",
    sqft: '414',
    holes: 4,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-southampton.jpg',
  },
  {
    name: 'The Player Series: Eltte X-Tier',
    specs: "18' x 28'",
    sqft: '504',
    holes: 4,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-monteray-new.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-50 selection:bg-emerald-500/30">
      <Hero />

      <section id="catalog" className="py-32 bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-100">
              The Collection
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light">
              Available in 4 distinct shapes and sizes, designed to fit any backyard and elevate your practice routine.
            </p>
          </div>

          <div className="space-y-16">
            {kits.map((kit, index) => (
              <KitCard key={kit.name} {...kit} index={index} />
            ))}
          </div>
        </div>
      </section>

      <InstallationSteps />

      <footer className="bg-stone-950 py-12 border-t border-stone-900 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6">
          <p className="text-stone-500 font-mono text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} XGrass | All Rights Reserved.
          </p>
          <div className="flex gap-6 text-stone-600">
            <a href="https://www.xgrass.com/" className="hover:text-emerald-500 transition-colors">Home</a>
            <a href="https://www.xgrass.com/systems-and-applications.html" className="hover:text-emerald-500 transition-colors">Systems</a>
            <a href="https://www.xgrass.com/synthetic-grass-golf-solutions.html" className="hover:text-emerald-500 transition-colors">Golf</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
