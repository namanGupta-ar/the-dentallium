const techs = [
  {
    title: '3D Intraoral Scanner',
    desc: 'Digital impressions for perfect accuracy.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop',
  },
  {
    title: 'Digital X-Ray',
    desc: 'Low radiation, high precision imaging.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop',
  },
  {
    title: 'Laser Dentistry',
    desc: 'Painless treatments with faster healing.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=200&fit=crop',
  },
  {
    title: 'CAD/CAM Technology',
    desc: 'Same-day crowns with perfect fit.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&h=200&fit=crop',
  },
  {
    title: 'Microscope Assisted Dentistry',
    desc: 'Maximum precision for better results.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Advanced Dental Technology</h2>
        <p className="text-gray-500 mb-10">
          State-of-the-art equipment for precise and comfortable treatment
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {techs.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-dark text-sm mb-1">{t.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
