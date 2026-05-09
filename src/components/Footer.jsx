import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Ready to Transform
              <br />
              Your Smile?
            </h2>
            <p className="text-slate-300 text-sm max-w-md">
              Book your appointment today and take the first step towards a healthier, more beautiful smile.
            </p>
          </div>

          {/* Right - Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:+919876543210"
              className="bg-slate-800 rounded-xl p-5 text-center hover:bg-slate-700 transition-colors"
            >
              <Phone size={20} className="mx-auto mb-2 text-primary-light" />
              <p className="font-semibold text-sm mb-1">Call Us</p>
              <p className="text-slate-400 text-xs">+91 98765 43210</p>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-5 text-center hover:bg-slate-700 transition-colors"
            >
              <MessageCircle size={20} className="mx-auto mb-2 text-green-400" />
              <p className="font-semibold text-sm mb-1">WhatsApp</p>
              <p className="text-slate-400 text-xs">Chat with us</p>
            </a>
            <div className="bg-slate-800 rounded-xl p-5 text-center">
              <MapPin size={20} className="mx-auto mb-2 text-red-400" />
              <p className="font-semibold text-sm mb-1">Visit Us</p>
              <p className="text-slate-400 text-xs">123 Smile Street, Dental City, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🦷</span>
            </div>
            <span className="font-bold text-sm">
              <span className="text-primary-light">Denta</span>Care
            </span>
          </div>
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} DentaCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
