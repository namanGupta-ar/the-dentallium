const treatments = [
  {
    icon: '😁',
    title: 'Orthodontics',
    desc: 'Clear Aligners & Invisible Braces',
    images: [
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1581585090934-e3816e5a0e68?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-blue-600',
  },
  {
    icon: '✨',
    title: 'Cosmetic Dentistry',
    desc: 'Laminates & Veneers',
    images: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-purple-600',
  },
  {
    icon: '🦷',
    title: 'Prosthodontics',
    desc: 'Dentures, Crowns & Bridges',
    images: [
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-slate-700',
  },
  {
    icon: '🔧',
    title: 'Endodontics',
    desc: 'Root Canal & Restorations',
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-red-600',
  },
  {
    icon: '�',
    title: 'Paediatric Dentistry',
    desc: 'Gentle care for children',
    images: [
      'https://images.unsplash.com/photo-1581585090934-e3816e5a0e68?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-pink-500',
  },
  {
    icon: '🦿',
    title: 'Dental Implants',
    desc: 'Permanent solution for missing teeth',
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-teal-600',
  },
  {
    icon: '⚕️',
    title: 'Surgical Extractions',
    desc: 'Extractions & Impactions',
    images: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-orange-600',
  },
  {
    icon: '💎',
    title: 'Teeth Whitening',
    desc: 'Whitening & Professional Cleaning',
    images: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=150&h=100&fit=crop',
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=150&h=100&fit=crop',
    ],
    iconBg: 'bg-cyan-600',
  },
];

export default function Treatments() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Our Services</h2>
        <p className="text-gray-500 mb-10">Comprehensive care for your perfect smile</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white text-center"
            >
              {/* Two thumbnail images side by side */}
              <div className="flex">
                {t.images.map((img, idx) => (
                  <div key={idx} className="w-1/2 h-20 overflow-hidden">
                    <img
                      src={img}
                      alt={`${t.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="px-3 py-4">
                <div className={`w-9 h-9 ${t.iconBg} rounded-full flex items-center justify-center text-sm mx-auto mb-2`}>
                  <span className="text-white">{t.icon}</span>
                </div>
                <h3 className="font-bold text-dark text-xs mb-1 leading-tight">{t.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
