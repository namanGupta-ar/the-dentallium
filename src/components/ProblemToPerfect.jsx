import { ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Problem',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=200&h=200&fit=crop',
  },
  {
    title: 'Cleaning',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=200&h=200&fit=crop',
  },
  {
    title: 'Treatment',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=200&h=200&fit=crop',
  },
  {
    title: 'Whitening',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=200&h=200&fit=crop',
  },
  {
    title: 'Perfect Smile',
    image: 'https://images.unsplash.com/photo-1581585090934-e3816e5a0e68?w=200&h=200&fit=crop',
  },
];

export default function ProblemToPerfect() {
  return (
    <section className="bg-linear-to-b from-slate-800 to-slate-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold italic mb-2">From Problem to Perfect</h2>
        <p className="text-slate-300 mb-10">Scroll down and watch the magic happen</p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-slate-700">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{step.title}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={24} className="text-slate-400 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="text-sm text-slate-300 border border-slate-500 px-4 py-2 rounded-full hover:bg-slate-700 transition-colors">
            Scroll Down ↓
          </button>
        </div>
      </div>
    </section>
  );
}
