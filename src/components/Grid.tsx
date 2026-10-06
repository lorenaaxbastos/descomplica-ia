import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  maxWidth?: "4xl" | "5xl" | "6xl" | "full";
  className?: string;
}

const COLS_MAP: Record<1 | 2 | 3 | 4, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const MAX_WIDTH_MAP: Record<"4xl" | "5xl" | "6xl" | "full", string> = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  full: "w-full",
};

export function Grid({
  children,
  cols = 2,
  maxWidth = "5xl",
  className = "",
}: GridProps) {
  const colsClass = COLS_MAP[cols] || COLS_MAP[2];
  const maxWClass = MAX_WIDTH_MAP[maxWidth] || MAX_WIDTH_MAP["5xl"];

  return (
    <div
      className={`w-full grid gap-4 sm:gap-6 lg:gap-8 text-left mt-6 mb-8 ${colsClass} ${maxWClass} ${className}`}
    >
      {children}
    </div>
  );
}
