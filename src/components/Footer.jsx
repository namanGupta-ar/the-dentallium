import { Phone, MessageCircle, MapPin, Mail, Calendar, CheckCircle, Star, Clock, ChevronRight, Shield } from 'lucide-react';

function Sparkle({ className, size = 8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact">
      {/* CTA Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020a1a 0%, #0a1e47 30%, #0d2b6b 50%, #0a1e47 70%, #020a1a 100%)' }}>
        {/* Radial glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]" />

        {/* Dot grid pattern — left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            ))}
          </div>
        </div>

        {/* Sparkle decorations */}
        <Sparkle className="absolute top-8 left-[15%] opacity-60 animate-pulse" size={6} />
        <Sparkle className="absolute top-12 right-[40%] opacity-80 animate-pulse" size={10} />
        <Sparkle className="absolute top-6 right-[25%] opacity-50 animate-pulse" size={5} />
        <Sparkle className="absolute bottom-16 left-[30%] opacity-40 animate-pulse" size={7} />
        <Sparkle className="absolute top-1/2 left-[45%] opacity-70 animate-pulse" size={8} />
        <Sparkle className="absolute bottom-8 right-[20%] opacity-50 animate-pulse" size={6} />
        <Sparkle className="absolute top-20 left-[55%] opacity-60 animate-pulse" size={4} />
        <Sparkle className="absolute bottom-24 left-[10%] opacity-30 animate-pulse" size={5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            {/* Left content */}
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                Ready for a <span className="text-blue-400">Confident Smile?</span>
              </h2>
              <p className="text-slate-300/80 text-sm mb-6">
                Book your consultation today with Delhi's<br className="hidden sm:block" />
                trusted dental experts.
              </p>
              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0f2557] border border-blue-500/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#152d6b] transition-colors text-sm shadow-lg shadow-blue-900/30"
                >
                  <Calendar size={15} /> Book Appointment
                </a>
                <a
                  href="https://wa.me/917982542536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors text-sm shadow-lg shadow-green-900/30"
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-5 text-slate-400 text-xs">
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-blue-400" /> Advanced Technology</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-blue-400" /> Experienced Doctors</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={13} className="text-blue-400" /> Painless Treatment</span>
              </div>
            </div>

            {/* Right — Woman image + Stats card */}
            <div className="hidden lg:flex items-end justify-end relative">
              {/* Woman image */}
              <div className="relative">
                <img
                  src="/girl-avatar.png"
                  alt="Happy patient smiling"
                  className="w-72 h-80 object-cover object-top rounded-2xl"
                />
                {/* Subtle glow behind image */}
                <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl -z-10" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -right-2 top-4 bg-[#0d2259]/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-5 shadow-2xl shadow-blue-900/40 min-w-[160px]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm">🦷</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white leading-tight">5000+</p>
                    <p className="text-slate-400 text-[11px]">Happy Patients</p>
                  </div>
                </div>
                <div className="border-t border-blue-500/20 pt-3">
                  <p className="text-2xl font-bold text-white">4.9</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — Brand */}
            <div>
              <div className="mb-4">
                <img src="/logo.png" alt="The Dentallium" className="h-20 w-auto" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                We combine advanced technology with compassionate care to deliver exceptional dental experiences and lifelong smiles.
              </p>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">G</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">4.9 Rating</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-white text-[10px]">😊</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">5000+</p>
                    <p className="text-[10px] text-slate-400">Happy Patients</p>
                  </div>
                </div>
              </div>
              {/* <p className="text-slate-400 text-xs font-semibold mb-2">Follow Us</p>
              <div className="flex items-center gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="https://wa.me/917982542536" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <MessageCircle size={14} className="text-slate-300" />
                </a>
              </div> */}
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="font-bold text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {['Home', 'About Us', 'Our Services', 'Smile Gallery', 'Patient Reviews', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
                      <ChevronRight size={12} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Our Treatments */}
            <div>
              <h3 className="font-bold text-sm mb-4">Our Treatments</h3>
              <ul className="space-y-2.5">
                {['Dental Implants', 'Smile Makeover', 'Teeth Whitening', 'Root Canal Treatment', 'Braces & Aligners', 'Kids Dentistry', 'Cosmetic Dentistry'].map((t) => (
                  <li key={t}>
                    <a href="#services" className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
                      <span className="text-blue-400">🦷</span> {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact Us */}
            <div>
              <h3 className="font-bold text-sm mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>F-16, F Block Market,<br />Ashok Vihar Phase-1,<br />Delhi-110052</span>
                </li>
                <li>
                  <a href="tel:+917982542536" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                    <Phone size={14} className="text-blue-400 shrink-0" />
                    +91 79825 42536
                  </a>
                </li>
                <li>
                  <a href="tel:+917206169798" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                    <Phone size={14} className="text-blue-400 shrink-0" />
                    +91 72061 69798
                  </a>
                </li>
                <li>
                  <a href="mailto:thedentalliumclinic@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                    <Mail size={14} className="text-blue-400 shrink-0" />
                    thedentalliumclinic@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock size={14} className="text-blue-400 shrink-0" />
                  Mon - Sun : 10:00 AM - 8:00 PM
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href="https://maps.google.com/?q=F-16+F+Block+Market+Ashok+Vihar+Phase-1+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-slate-600 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <MapPin size={12} /> View on Map
                </a>
                <a
                  href="https://wa.me/917982542536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={12} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Shield size={12} /> 100% Secure & Hygienic Environment
            </div>
            <p>© 2025 The Dentallium Clinic. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
