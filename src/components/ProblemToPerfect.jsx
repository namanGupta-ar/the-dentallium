import { ChevronRight, Mouse } from 'lucide-react';

const steps = [
  { title: 'Problem' },
  { title: 'Cleaning' },
  { title: 'Treatment' },
  { title: 'Whitening' },
  { title: 'Perfect Smile' },
];

const toothColors = [
  { main: '#c8a860', shadow: '#8b6914', crack: true },
  { main: '#d4c99a', shadow: '#9a8e5e', splash: true },
  { main: '#e8dfc0', shadow: '#b0a474', patch: true },
  { main: '#f0ead6', shadow: '#c5bc9a', glow: false },
  { main: '#ffffff', shadow: '#d4d4d4', glow: true },
];

function ToothSVG({ color, index }) {
  return (
    <svg viewBox="0 0 100 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Glow effect for perfect tooth */}
      {color.glow && (
        <>
          <defs>
            <radialGradient id={`glow-${index}`} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="55" rx="48" ry="60" fill={`url(#glow-${index})`} />
        </>
      )}

      {/* Tooth body */}
      <path
        d="M30 10 C30 10, 35 2, 50 2 C65 2, 70 10, 70 10 C75 20, 78 35, 75 50 C73 60, 68 75, 65 90 C63 100, 60 120, 58 130 C56 136, 54 138, 52 138 C50 138, 48 130, 46 120 C45 115, 50 115, 50 110 C50 115, 55 115, 54 120 C56 130, 52 138, 50 138 C48 138, 44 136, 42 130 C40 120, 37 100, 35 90 C32 75, 27 60, 25 50 C22 35, 25 20, 30 10Z"
        fill={color.main}
        stroke={color.shadow}
        strokeWidth="1"
      />

      {/* Crown highlight */}
      <path
        d="M38 15 C38 15, 42 8, 50 8 C58 8, 62 15, 62 15 C64 20, 65 28, 63 35 C60 30, 55 28, 50 28 C45 28, 40 30, 37 35 C35 28, 36 20, 38 15Z"
        fill="white"
        opacity="0.3"
      />

      {/* Cracks for problem tooth */}
      {color.crack && (
        <>
          <path d="M42 20 L48 40 L44 55" stroke="#5a3a00" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M55 15 L58 30 L54 42" stroke="#5a3a00" strokeWidth="1" fill="none" opacity="0.5" />
          <ellipse cx="60" cy="25" rx="6" ry="8" fill="#8b6914" opacity="0.5" />
        </>
      )}

      {/* Water splash for cleaning */}
      {color.splash && (
        <>
          <circle cx="20" cy="30" r="2" fill="#93c5fd" opacity="0.7" />
          <circle cx="15" cy="45" r="1.5" fill="#93c5fd" opacity="0.6" />
          <circle cx="80" cy="35" r="2" fill="#93c5fd" opacity="0.7" />
          <circle cx="85" cy="50" r="1.5" fill="#93c5fd" opacity="0.5" />
          <path d="M18 25 Q12 35 16 48" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M82 28 Q88 40 84 52" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.5" />
        </>
      )}

      {/* Patch for treatment tooth */}
      {color.patch && (
        <ellipse cx="52" cy="30" rx="7" ry="5" fill="#f5f5dc" stroke="#d4c99a" strokeWidth="0.5" opacity="0.8" />
      )}

      {/* Roots */}
      <path
        d="M42 90 C40 100, 38 115, 36 125 C35 130, 34 135, 35 138"
        stroke={color.shadow}
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M58 90 C60 100, 62 115, 64 125 C65 130, 66 135, 65 138"
        stroke={color.shadow}
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export default function ProblemToPerfect() {
  return (
    <section className="bg-linear-to-b from-[#0a1628] to-[#0f1f3d] py-14 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold italic mb-2">From Problem to Perfect</h2>
        <p className="text-slate-400 text-sm mb-10">Scroll down and watch the magic happen</p>

        <div className="flex items-end justify-center gap-2 sm:gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-end gap-2 sm:gap-4 lg:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-28 sm:w-28 sm:h-36 lg:w-36 lg:h-44 flex items-end justify-center">
                  <ToothSVG color={toothColors[i]} index={i} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-2 italic">{step.title}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={18} className="text-slate-500 shrink-0 mb-10" />
              )}
            </div>
          ))}

          {/* Scroll Down indicator */}
          <div className="hidden lg:flex flex-col items-center gap-1.5 ml-6 mb-10">
            <span className="text-[11px] text-slate-400 whitespace-nowrap">Scroll Down</span>
            <Mouse size={18} className="text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
