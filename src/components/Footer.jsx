import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-8 items-center">
          {/* Left — CTA text */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 leading-tight">
              Ready to Transform
              <br />
              Your Smile?
            </h2>
            <p className="text-slate-400 text-sm max-w-sm">
              Book your appointment today and take the first step towards a healthier, more beautiful smile.
            </p>
            <a
              href="mailto:thedentalliumclinic@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mt-3 transition-colors"
            >
              <Mail size={14} />
              thedentalliumclinic@gmail.com
            </a>
          </div>

          {/* Middle — Contact cards row */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <a
              href="tel:+917982542536"
              className="bg-blue-700/80 rounded-xl px-5 py-4 text-center hover:bg-blue-700 transition-colors min-w-[130px]"
            >
              <Phone size={18} className="mx-auto mb-1.5 text-white" />
              <p className="font-semibold text-sm mb-0.5">Call Us</p>
              <p className="text-blue-200 text-[11px]">7982542536</p>
            </a>
            <a
              href="https://wa.me/917982542536"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700/80 rounded-xl px-5 py-4 text-center hover:bg-green-700 transition-colors min-w-[130px]"
            >
              <MessageCircle size={18} className="mx-auto mb-1.5 text-white" />
              <p className="font-semibold text-sm mb-0.5">WhatsApp</p>
              <p className="text-green-200 text-[11px]">7206169798</p>
            </a>
            <div className="bg-slate-700/80 rounded-xl px-5 py-4 text-center min-w-[130px]">
              <MapPin size={18} className="mx-auto mb-1.5 text-red-400" />
              <p className="font-semibold text-sm mb-0.5">Visit Us</p>
              <p className="text-slate-300 text-[11px]">F-16, F Block Market,<br />Ashok Vihar Phase-1,<br />Delhi-110052</p>
            </div>
          </div>

          {/* Right — Clinic image + Logo */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <div className="w-40 h-28 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop"
                alt="The Dentallium clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-[10px]">🦷</span>
              </div>
              <span className="font-bold text-sm">
                The <span className="text-primary-light">Dentallium</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
