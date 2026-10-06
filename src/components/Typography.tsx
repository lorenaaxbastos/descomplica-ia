import { ReactNode } from "react";
import { ColorType } from "../types/color";

export function SectionTitle({
  children,
  as: Tag = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-4 sm:mb-6 tracking-tight leading-snug max-w-4xl">
      {children}
    </Tag>
  );
}

export function SectionHighlight({
  children,
  color = "cyan",
}: {
  children: ReactNode;
  color?: ColorType;
}) {
  const GLOW_COLORS: Record<ColorType, string> = {
    cyan: "text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]",
    violet: "text-violet-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    amber: "text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]",
    emerald: "text-emerald-300 drop-shadow-[0_0_25px_rgba(52,211,153,0.35)]",
    rose: "text-rose-300 drop-shadow-[0_0_25px_rgba(251,113,133,0.35)]",
  };

  const activeColor = GLOW_COLORS[color] || GLOW_COLORS.cyan;

  return (
    <p
      className={`text-lg sm:text-2xl md:text-3xl font-extrabold mb-4 sm:mb-6 leading-snug ${activeColor}`}
    >
      {children}
    </p>
  );
}

interface SectionTextProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
}

export function SectionText({
  children,
  className = "",
  align = "left",
}: SectionTextProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  return (
    <p
      className={`text-sm sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl ${alignClasses} ${className}`}
    >
      {children}
    </p>
  );
}

interface SectionBoldProps {
  children: ReactNode;
  color?: ColorType;
}

export function SectionBold({ children, color = "cyan" }: SectionBoldProps) {
  const HIGHLIGHT_COLORS: Record<ColorType, string> = {
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
    rose: "text-rose-400",
  };

  const activeColor = HIGHLIGHT_COLORS[color] || HIGHLIGHT_COLORS.cyan;

  return <strong className={`${activeColor} font-bold`}>{children}</strong>;
}

interface SectionSmallProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionSmall({
  children,
  className = "",
  align = "center",
}: SectionSmallProps) {
  const aligns = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <p
      className={`text-slate-400 text-xs sm:text-sm mb-8 font-tech-mono shrink-0 max-w-3xl leading-relaxed ${aligns[align]} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionUnderline({
  children,
  color = "cyan",
  variant = "mono",
}: {
  children: ReactNode;
  color?: ColorType;
  variant?: "mono" | "sans";
}) {
  const DECORATION_COLORS: Record<ColorType, string> = {
    cyan: "decoration-cyan-400 text-cyan-200",
    violet: "decoration-violet-400 text-violet-200",
    amber: "decoration-amber-400 text-amber-200",
    emerald: "decoration-emerald-400 text-emerald-200",
    rose: "decoration-rose-400 text-rose-200",
  };

  const DECORATION_ONLY: Record<ColorType, string> = {
    cyan: "decoration-cyan-400",
    violet: "decoration-violet-400",
    amber: "decoration-amber-400",
    emerald: "decoration-emerald-400",
    rose: "decoration-rose-400",
  };

  if (variant === "sans") {
    const activeOnly = DECORATION_ONLY[color] || DECORATION_ONLY.cyan;
    return (
      <strong
        className={`font-bold underline decoration-2 underline-offset-4 ${activeOnly}`}
      >
        {children}
      </strong>
    );
  }

  const activeColor = DECORATION_COLORS[color] || DECORATION_COLORS.cyan;

  return (
    <span
      className={`font-tech-mono font-bold underline decoration-2 underline-offset-8 ${activeColor}`}
    >
      {children}
    </span>
  );
}

export function SectionInlineCode({
  children,
  color = "cyan",
  className = "",
}: {
  children: ReactNode;
  color?: ColorType;
  className?: string;
}) {
  const TEXT_COLORS: Record<ColorType, string> = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    amber: "text-amber-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
  };

  const activeColor = TEXT_COLORS[color] || TEXT_COLORS.cyan;

  return (
    <span
      className={`font-tech-mono bg-slate-950/80 px-2 py-1 rounded border border-slate-800 text-xs sm:text-sm inline-block mt-2 ${activeColor} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionStatus({
  children,
  color = "cyan",
  pulse = false,
}: {
  children: ReactNode;
  color?: ColorType;
  pulse?: boolean;
}) {
  const TEXT_COLORS: Record<ColorType, string> = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    amber: "text-amber-300",
    emerald: "text-emerald-300",
    rose: "text-rose-400",
  };

  const DOT_COLORS: Record<ColorType, string> = {
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    rose: "bg-rose-500",
  };

  const textColor = TEXT_COLORS[color] || TEXT_COLORS.cyan;
  const dotColor = DOT_COLORS[color] || DOT_COLORS.cyan;

  return (
    <p
      className={`font-tech-mono font-bold text-base sm:text-xl flex items-center gap-2 ${textColor}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block w-2.5 h-2.5 rounded-full ${dotColor} ${
          pulse ? "motion-safe:animate-pulse" : ""
        }`}
      />
      {children}
    </p>
  );
}
