import { MessageCircle, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="text-left">
            <p className="text-primary font-semibold text-sm mb-4 tracking-wide">
              The Dentallium — Creates Beautiful Smiles
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-dark leading-[1.15]">
              Transform Your{' '}
              <span className="relative inline-block">
                Smile
                <svg
                  className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)]"
                  viewBox="0 0 120 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="60" cy="25" rx="56" ry="22" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
                </svg>
              </span>
              <br />
              Transform Your Life
            </h1>
            <p className="text-gray-500 mt-5 text-[15px] max-w-md leading-relaxed">
              A premier destination for creating radiant smiles in the heart of Northwest Delhi.
              Experience exceptional care with advanced technology and a gentle touch.
            </p>

            {/* Location badge */}
            <div className="flex items-center gap-1.5 mt-4 text-gray-500 text-sm">
              <MapPin size={14} className="text-primary" />
              <span>F-16, F Block Market, Ashok Vihar Phase-1, Delhi</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-lg shadow-blue-500/25"
              >
                <Calendar size={15} /> Book Appointment
              </a>
              <a
                href="https://wa.me/917982542536"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2.5">
                {['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
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
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=450&fit=crop"
                alt="The Dentallium - Dental care"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
