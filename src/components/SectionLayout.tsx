import { ReactNode } from "react";
import { ColorType } from "../types/color";

interface SectionLayoutProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export interface SectionProps {
  id: string;
  step: string;
  label: string;
  color: ColorType;
}

export function SectionLayout({
  id,
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className={`w-full min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-24 lg:px-32 py-24 relative z-10 font-tech-title outline-none ${className}`}
    >
      <div className="w-full max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
