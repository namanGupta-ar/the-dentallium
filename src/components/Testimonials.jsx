import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Meera S.',
    rating: 5,
    text: '"The team is amazing! I was always afraid of dentists, but they made me feel so comfortable. My smile has never looked better."',
    avatar: 'M',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Rohit P.',
    rating: 5,
    text: '"Got my implant done here. The procedure was smooth and painless. Highly recommend DentaCare for everyone!"',
    avatar: 'R',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Anjali K.',
    rating: 5,
    text: '"Teeth whitening results are fantastic! I got my confidence back. Thank you DentaCare doctor and team."',
    avatar: 'A',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10">What Our Patients Say</h2>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-yellow-400 text-xs">
                      {'★'.repeat(t.rating)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Decorative nav arrows */}
          <button
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full hidden lg:flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full hidden lg:flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
