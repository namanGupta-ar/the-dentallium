import { ArrowRight, Search, Sparkles, Crown, Wrench, Baby, Plug, Scissors, Sun, ShieldCheck } from 'lucide-react';

const treatments = [
  {
    title: 'Orthodontics',
    desc: 'Straighten your teeth with clear aligners & advanced braces.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop',
    icon: Search,
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Enhance your smile with veneers, bonding & smile makeovers.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop',
    icon: Sparkles,
  },
  {
    title: 'Prosthodontics',
    desc: 'Restore function and beauty with crowns, bridges & dentures.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=500&h=300&fit=crop',
    icon: Crown,
  },
  {
    title: 'Endodontics',
    desc: 'Relieve pain and save your natural teeth with root canal treatments.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=300&fit=crop',
    icon: Wrench,
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, caring dental treatment for your little ones.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&h=300&fit=crop',
    icon: Baby,
  },
  {
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking solution for missing teeth.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=300&fit=crop',
    icon: Plug,
  },
  {
    title: 'Surgical Extractions',
    desc: 'Safe and comfortable removal of damaged or impacted teeth.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop&crop=top',
    icon: Scissors,
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional whitening for a brighter, whiter, more confident smile.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=500&h=300&fit=crop&crop=top',
    icon: Sun,
  },
];


export default function Treatments() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          {/* Decorative line with tooth icon */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-primary/30" />
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <ShieldCheck size={16} className="text-primary" />
            </div>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3">
            Complete Care for Your Perfect Smile
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Advanced technology, expert care, and personalized treatments<br className="hidden sm:block" />
            for a healthier, brighter smile.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Icon badge */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
                  <t.icon size={16} className="text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pt-8 pb-5 text-center">
                <h3 className="font-bold text-dark text-[15px] mb-2">{t.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{t.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
