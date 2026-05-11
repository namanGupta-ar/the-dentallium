import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const comparisons = [
  { before: '/before.png', after: '/after.png' },
];

function CompareSlider({ before, after }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);

    const onMouseMove = (e) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const onMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden aspect-video sm:aspect-[2.2/1] cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After image (full, behind) */}
      <img
        src={after}
        alt="After treatment"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={before}
          alt="Before treatment"
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerWidth ? `${containerWidth}px` : '100%', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 z-10"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-slate-800/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg border-2 border-white/30"
        style={{ left: `${sliderPos}%` }}
      >
        <ChevronLeft size={14} className="text-white -mr-1" />
        <ChevronRight size={14} className="text-white -ml-1" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-slate-800/70 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-slate-800/70 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
        After
      </div>
    </div>
  );
}

export default function Results() {
  const [current] = useState(0);

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-2">Real Results. Real Smiles.</h2>
        <p className="text-gray-500 mb-8">See the amazing transformations</p>

        <div className="relative max-w-5xl mx-auto">
          <CompareSlider
            before={comparisons[current].before}
            after={comparisons[current].after}
          />

          {/* Dots */}
          {/* <div className="flex justify-center gap-2 mt-5">
            {comparisons.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
