import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="text-left">
            <p className="text-primary font-semibold text-sm mb-3">
              Advanced Dental Care. Beautiful Smiles
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-dark leading-tight">
              Transform Your{' '}
              <span className="relative inline-block">
                Smile
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200/50 rounded-full -z-10" />
              </span>
              <br />
              Transform Your Life
            </h1>
            <p className="text-gray-500 mt-4 text-base max-w-md leading-relaxed">
              Experience the perfect blend of advanced technology, expert care and a gentle touch.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <span>📅</span> Book Appointment
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-7">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white bg-linear-to-br from-blue-300 to-blue-500 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-dark">500+ Happy Smiles</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="text-yellow-400">★★★★★</span> 4.9/5
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-blue-100 aspect-4/3 flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=450&fit=crop"
                alt="Dentist treating patient"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
