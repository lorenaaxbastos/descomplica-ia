import { useState, useRef } from "react";
import { ColorType } from "../types/color";

export interface CarouselItem {
  id: string | number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface ContentCarouselProps {
  items: CarouselItem[];
  color: ColorType;
}

export function ContentCarousel({ items, color }: ContentCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = items.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const nextSlide = () =>
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const CARD_SHADOWS: Record<ColorType, string> = {
    cyan: "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    violet: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    amber: "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    emerald: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    rose: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  };

  const DOT_ACTIVE: Record<ColorType, string> = {
    cyan: "bg-cyan-400 shadow-[0_0_10px] shadow-cyan-400/60",
    violet: "bg-violet-400 shadow-[0_0_10px] shadow-violet-400/60",
    amber: "bg-amber-400 shadow-[0_0_10px] shadow-amber-400/60",
    emerald: "bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/60",
    rose: "bg-rose-400 shadow-[0_0_10px] shadow-rose-400/60",
  };

  const DOT_HOVER: Record<ColorType, string> = {
    cyan: "hover:bg-cyan-400/50 focus-visible:ring-cyan-400",
    violet: "hover:bg-violet-400/50 focus-visible:ring-violet-400",
    amber: "hover:bg-amber-400/50 focus-visible:ring-amber-400",
    emerald: "hover:bg-emerald-400/50 focus-visible:ring-emerald-400",
    rose: "hover:bg-rose-400/50 focus-visible:ring-rose-400",
  };

  const BUTTON_STYLES: Record<ColorType, string> = {
    cyan: "text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 focus-visible:ring-cyan-400",
    amber:
      "text-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 focus-visible:ring-amber-400",
    emerald:
      "text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 focus-visible:ring-emerald-400",
    violet:
      "text-violet-400 hover:bg-violet-500 hover:text-white hover:border-violet-400 focus-visible:ring-violet-400",
    rose: "text-rose-400 hover:bg-rose-500 hover:text-white hover:border-rose-400 focus-visible:ring-rose-400",
  };

  const DECORATION_STYLES: Record<ColorType, { glow: string; tag: string }> = {
    cyan: {
      glow: "bg-cyan-600/10 border-cyan-500/50",
      tag: "text-cyan-300 bg-cyan-950/80 border-cyan-700/60",
    },
    violet: {
      glow: "bg-violet-600/10 border-violet-500/50",
      tag: "text-violet-300 bg-violet-950/80 border-violet-700/60",
    },
    amber: {
      glow: "bg-amber-600/10 border-amber-500/50",
      tag: "text-amber-300 bg-amber-950/80 border-amber-700/60",
    },
    emerald: {
      glow: "bg-emerald-600/10 border-emerald-500/50",
      tag: "text-emerald-300 bg-emerald-950/80 border-emerald-700/60",
    },
    rose: {
      glow: "bg-rose-600/10 border-rose-500/50",
      tag: "text-rose-300 bg-rose-950/80 border-rose-700/60",
    },
  };

  if (!items.length) return null;

  const activeDecors = DECORATION_STYLES[color] || DECORATION_STYLES.cyan;
  const activeBtnStyle = BUTTON_STYLES[color] || BUTTON_STYLES.cyan;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="sr-only" aria-live="polite">
        Slide {activeSlide + 1} de {totalSlides}: {items[activeSlide].title}
      </div>

      <div className="w-full max-w-5xl flex items-center justify-center gap-2 sm:gap-6 relative">
        <button
          onClick={prevSlide}
          className={`hidden sm:flex p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-all cursor-pointer shadow-lg active:scale-95 shrink-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeBtnStyle}`}
          aria-label="Item anterior"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          className={`flex-1 w-full max-w-full bg-slate-900/80 border border-dashed rounded-3xl backdrop-blur-xl text-left relative overflow-hidden min-h-[400px] sm:min-h-[320px] flex items-center ${CARD_SHADOWS[color]} ${activeDecors.glow}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${activeDecors.glow.split(" ")[0]}`}
          />

          <div
            className="relative z-10 flex w-full h-full items-center transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {items.map((item, idx) => (
              <div
                key={item.id}
                aria-hidden={activeSlide !== idx}
                className="w-full min-w-full max-w-full shrink-0 flex-none flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center p-6 sm:p-8 transition-opacity duration-500"
                style={{ opacity: activeSlide === idx ? 1 : 0 }}
              >
                {item.image && (
                  <div
                    className={`w-full md:w-2/5 shrink-0 relative group rounded-2xl overflow-hidden border bg-slate-950 shadow-lg ${activeDecors.glow.split(" ")[1]}`}
                  >
                    <div
                      className={`absolute inset-0 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0 ${activeDecors.glow.split(" ")[0]}`}
                    />
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="w-full h-48 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/0f172a/64748b?text=IMAGEM+INDISPONIVEL`;
                      }}
                    />
                  </div>
                )}

                <div
                  className={`w-full flex flex-col justify-center ${item.image ? "md:w-3/5" : ""}`}
                >
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span
                        className={`font-tech-mono text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded uppercase shrink-0 self-start xl:self-center border ${activeDecors.tag}`}
                      >
                        // {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={`hidden sm:flex p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-all cursor-pointer shadow-lg active:scale-95 shrink-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeBtnStyle}`}
          aria-label="Próximo item"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex sm:hidden items-center justify-center gap-6 mt-6 w-full shrink-0">
        <button
          onClick={prevSlide}
          className={`p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-all cursor-pointer shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeBtnStyle}`}
          aria-label="Item anterior"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className={`p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-all cursor-pointer shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeBtnStyle}`}
          aria-label="Próximo item"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 shrink-0">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all duration-300 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
              activeSlide === idx
                ? `w-8 h-2.5 ${DOT_ACTIVE[color]}`
                : `w-2.5 h-2.5 bg-slate-700 ${DOT_HOVER[color]}`
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
            aria-current={activeSlide === idx ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
