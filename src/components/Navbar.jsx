import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = ['Home', 'About', 'Services', 'Technology', 'Results', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="The Dentallium" className="h-20 w-auto rounded-lg" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:7982542536" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
            <Phone size={14} />
            <span className="font-medium">7982542536</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 hover:text-primary font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold px-5 py-2.5 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
