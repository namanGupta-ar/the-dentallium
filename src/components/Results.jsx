import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  '/clinic-image.jpg',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&h=400&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&h=400&fit=crop',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&h=400&fit=crop',
];

export default function Results() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Real Results. Real Smiles.</h2>
        <p className="text-gray-500 mb-8">See the amazing transformations</p>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-[2.2/1]">
            <img
              src={slides[current]}
              alt={`Result ${current + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Center nav — dark circle with prev/next arrows */}
          <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-0">
            <button
              onClick={prev}
              className="w-10 h-10 bg-slate-800/80 backdrop-blur text-white rounded-l-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 bg-slate-800/80 backdrop-blur text-white rounded-r-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
