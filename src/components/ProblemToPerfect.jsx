import { ArrowRight, Search, ClipboardList, Stethoscope, HeartPulse, Sparkles, Monitor, UserCheck, Heart, Award } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Examination',
    desc: 'Comprehensive check-up to understand your dental needs.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Treatment Plan',
    desc: 'Customized plan crafted for your perfect smile transformation.',
    icon: ClipboardList,
  },
  {
    num: '03',
    title: 'Treatment',
    desc: 'Advanced technology and expert care for best results.',
    icon: Stethoscope,
  },
  {
    num: '04',
    title: 'Care & Recovery',
    desc: 'Guidance and support for a smooth and comfortable recovery.',
    icon: HeartPulse,
  },
  {
    num: '05',
    title: 'Beautiful Smile',
    desc: 'Step out with a brighter, healthier and confident smile!',
    icon: Sparkles,
  },
];

const badges = [
  { icon: Monitor, title: 'Advanced Technology', desc: 'Latest equipment for precise care' },
  { icon: UserCheck, title: 'Expert Dentists', desc: 'Experienced professionals' },
  { icon: Heart, title: 'Painless Dentistry', desc: 'Comfort-first approach' },
  { icon: Award, title: 'Proven Results', desc: 'Thousands of happy smiles' },
];

export default function ProblemToPerfect() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Transformation Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3">Your Smile, Our Expertise</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            A personalized journey to a healthier, more confident smile.
          </p>
        </div>

        {/* Steps — horizontal scroll on mobile, row on desktop */}
        <div className="flex overflow-x-auto lg:overflow-visible gap-0 mb-14 pb-4 lg:pb-0 snap-x snap-mandatory lg:justify-center scrollbar-hide">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center shrink-0 snap-center">
              {/* Step card */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 lg:p-6 text-center w-40 sm:w-44 lg:w-48 xl:w-52 flex flex-col items-center">
                {/* Icon */}
                <div className="w-11 h-11 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-2 lg:mb-3">
                  <step.icon size={22} className="text-primary" />
                </div>
                {/* Number */}
                <p className="text-primary font-bold text-xs lg:text-sm mb-1">{step.num}</p>
                {/* Title */}
                <h3 className="font-bold text-dark text-xs lg:text-sm mb-1 lg:mb-2">{step.title}</h3>
                {/* Description */}
                <p className="text-gray-500 text-[11px] lg:text-xs leading-relaxed">{step.desc}</p>
              </div>
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center w-6 lg:w-8 shrink-0">
                  <div className="w-5 h-5 lg:w-7 lg:h-7 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-10">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <badge.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-dark text-sm">{badge.title}</p>
                <p className="text-gray-500 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
