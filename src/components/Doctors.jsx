import { Award, GraduationCap } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Prateek Gupta',
    title: 'Orthodontist',
    image: '/prateek.png',
    education: 'MDS Orthodontics — BHU',
    alma: 'Maulana Azad Institute of Dental Sciences',
    desc: 'A distinguished dental professional specializing in Orthodontics and Dentofacial Orthopaedics. Published researcher in international peer-reviewed journals with extensive experience across Delhi-NCR.',
  },
  {
    name: 'Dr. Garima Gupta',
    title: 'Dental Surgeon',
    image: '/garima.png',
    education: 'BDS — National Dental College, Chandigarh',
    alma: '13+ Years of Clinical Experience',
    desc: 'A highly accomplished dental professional with over thirteen years of extensive experience. Known for her compassionate approach and commitment to the highest standards of patient care.',
  },
];

export default function Doctors() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Our Doctors</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Meet the expert team behind The Dentallium — dedicated to delivering exceptional dental care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">{doc.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{doc.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{doc.desc}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap size={15} className="text-primary shrink-0" />
                    <span>{doc.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award size={15} className="text-primary shrink-0" />
                    <span>{doc.alma}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
