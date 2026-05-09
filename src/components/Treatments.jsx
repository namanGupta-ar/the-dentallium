const treatments = [
  {
    icon: '🦷',
    title: 'Teeth Whitening',
    desc: 'Remove stains and get a brighter, whiter smile.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop',
  },
  {
    icon: '🔧',
    title: 'Root Canal Treatment',
    desc: 'Painless procedure to save your natural teeth.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop',
  },
  {
    icon: '🦿',
    title: 'Dental Implants',
    desc: 'Permanent solution for missing teeth.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop',
  },
  {
    icon: '😁',
    title: 'Orthodontics',
    desc: 'Straighten your teeth with braces or aligners.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=300&h=200&fit=crop',
  },
  {
    icon: '✨',
    title: 'Smile Makeover',
    desc: 'Complete smile transformation.',
    image: 'https://images.unsplash.com/photo-1581585090934-e3816e5a0e68?w=300&h=200&fit=crop',
  },
  {
    icon: '👨‍⚕️',
    title: 'General Dentistry',
    desc: 'Complete care for you and your family.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=200&fit=crop',
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Our Dental Treatments</h2>
        <p className="text-gray-500 mb-10">Comprehensive care for your perfect smile</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg mb-3">
                  {t.icon}
                </div>
                <h3 className="font-bold text-dark text-base mb-1">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
