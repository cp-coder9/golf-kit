import { Hero } from '@/components/hero';
import { KitCard } from '@/components/kit-card';
import { InstallationSteps } from '@/components/installation-steps';

const kits = [
  {
    name: 'The Player Series: Entry Level',
    specs: "12' x 17'",
    sqft: '204',
    holes: 2,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-carolina.jpg',
    description: 'The perfect introduction to home practice. This compact layout delivers authentic roll and speed without dominating your outdoor space.',
    targetAudience: 'Beginners, casual golfers, and homeowners with limited backyard space or patios.',
    shapeAndFeatures: 'A compact, kidney-like shape that maximizes putting area within a small footprint. Features 2 strategic hole locations for basic drill work.',
    suitability: 'Ideal for small patios, compact backyards, or even spacious indoor entertainment areas.',
    keyBenefits: [
      'Quickest installation time',
      'Highly affordable entry point',
      'Perfect for mastering short, straight putts'
    ]
  },
  {
    name: 'The Player Series: Essential',
    specs: "15' x 17'",
    sqft: '255',
    holes: 3,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-kiawah.jpg',
    description: 'A balanced design offering more varied putting angles and an extra hole location for dynamic practice sessions.',
    targetAudience: 'Intermediate players and families looking for a fun, functional backyard addition.',
    shapeAndFeatures: 'A wider, more versatile footprint with gentle contours. Includes 3 hole locations to practice breaking putts and varied distances.',
    suitability: 'Perfect for medium-sized yards, dedicated practice corners, and family recreation spaces.',
    keyBenefits: [
      'Excellent balance of size and functionality',
      'Allows for multi-angle putting practice',
      'Great entertainment value for guests'
    ]
  },
  {
    name: 'The Player Series: Pro',
    specs: "18' x 23'",
    sqft: '414',
    holes: 4,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-southampton.jpg',
    description: 'An expansive layout designed for serious amateurs. Offers enough surface area to practice long lag putts and delicate chips from the fringe.',
    targetAudience: 'Serious amateurs, low-handicap players, and golf enthusiasts who want course-like conditions.',
    shapeAndFeatures: 'Sweeping curves and a large, elongated shape. Features 4 distinct hole locations and ample fringe area for chipping practice.',
    suitability: 'Best suited for large backyards and professional-grade home practice setups.',
    keyBenefits: [
      'Ample space for long lag putts',
      'Generous fringe allows for chipping practice',
      'Simulates complex, real-course green scenarios'
    ]
  },
  {
    name: 'The Player Series: Elite',
    specs: "18' x 28'",
    sqft: '504',
    holes: 4,
    puttingTurf: 'Ready Putt',
    fringeTurf: 'XGrass Luxury 1st Cut',
    basePanels: 'Polypropylene Copolymer (Recycled Materials)',
    warranty: '5 Years (Turf and Panels); 1 Year (Accessories)',
    imageSrc: 'https://cdn.xgrass.com/cmss_files/imagelibrary/thb-monteray-new.jpg',
    description: 'The ultimate home golfing experience. A massive footprint that provides endless practice variations and serves as a stunning landscape feature.',
    targetAudience: 'Golf professionals, luxury homeowners, and country club enthusiasts demanding the best.',
    shapeAndFeatures: 'An elongated, professional-grade footprint with maximum undulation potential. 4 holes spread across a vast surface area for ultimate challenge.',
    suitability: 'Designed for expansive estates, premium outdoor living spaces, and dedicated training facilities.',
    keyBenefits: [
      'Maximum surface area for limitless practice routines',
      'Serves as a breathtaking landscape centerpiece',
      'The ultimate tool for comprehensive short-game mastery'
    ]
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
