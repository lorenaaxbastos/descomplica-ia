import { ColorType } from "../types/color";

const GLOW_STYLES: Record<ColorType, string> = {
  cyan: "bg-cyan-500/15",
  violet: "bg-violet-600/15",
  amber: "bg-amber-500/15",
  emerald: "bg-emerald-500/15",
  rose: "bg-rose-500/15",
};

export function BackgroundEffects({ color }: { color: ColorType }) {
  return (
    <>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] opacity-40 pointer-events-none z-0" />
      <div
        className={`fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ease-in-out ${GLOW_STYLES[color]}`}
      />
    </>
  );
}
