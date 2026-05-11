import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Pawan K.',
    role: 'Patient',
    rating: 5,
    text: '"The team is amazing! Dr. Prateek and Dr. Garima are both exceptional, explaining every step clearly and ensuring my comfort throughout the procedure. The hygienists and assistants were thorough and attentive, providing excellent care. I highly recommend The Dentallium!"',
    avatar: 'https://ui-avatars.com/api/?name=Pawan+Kumar&background=1e40af&color=fff&size=80&bold=true',
  },
  {
    name: 'Priya M.',
    role: 'Patient',
    rating: 5,
    text: '"I was always afraid of dentists, but The Dentallium made me feel so comfortable. The modern facility and friendly reception put me at ease. My smile has never looked better after the treatment."',
    avatar: 'https://ui-avatars.com/api/?name=Priya+M&background=7c3aed&color=fff&size=80&bold=true',
  },
  {
    name: 'Rahul S.',
    role: 'Patient',
    rating: 5,
    text: '"Got my orthodontic treatment done here with clear aligners. The procedure was smooth and painless. Dr. Prateek explained everything clearly. Highly recommend The Dentallium for everyone!"',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+S&background=059669&color=fff&size=80&bold=true',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10 text-center">What Our Patients Say</h2>

        <div className="relative px-8 lg:px-12">
          {/* Nav arrow — left edge */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full hidden sm:flex items-center justify-center shadow-sm hover:bg-gray-50 transition z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-gray-400 text-[11px]">{t.role}</p>
                    <p className="text-yellow-400 text-xs tracking-wide">
                      {'★'.repeat(t.rating)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Nav arrow — right edge */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full hidden sm:flex items-center justify-center shadow-sm hover:bg-gray-50 transition z-10"
            aria-label="Next"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
