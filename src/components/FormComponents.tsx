import { ReactNode, ChangeEvent } from "react";
import { ColorType } from "../types/color";

interface TextAreaProps {
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  color: ColorType;
}

export function TextArea({
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  color,
}: TextAreaProps) {
  const FOCUS_STYLES: Record<string, string> = {
    cyan: "focus:border-cyan-400 focus-visible:ring-cyan-400",
    violet: "focus:border-violet-400 focus-visible:ring-violet-400",
    amber: "focus:border-amber-400 focus-visible:ring-amber-400",
    emerald: "focus:border-emerald-400 focus-visible:ring-emerald-400",
    rose: "focus:border-rose-400 focus-visible:ring-rose-400",
  };

  const currentFocus = FOCUS_STYLES[color] || FOCUS_STYLES.cyan;

  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`w-full p-4 rounded-2xl bg-slate-950/80 border border-slate-800 ${currentFocus} text-slate-200 font-tech-mono text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all placeholder:text-slate-600 resize-none`}
    />
  );
}

export function FormLabel({
  children,
  htmlFor,
  color,
}: {
  children: ReactNode;
  htmlFor?: string;
  color: ColorType;
}) {
  const TEXT_COLORS: Record<string, string> = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    amber: "text-amber-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
  };

  const textColor = TEXT_COLORS[color] || TEXT_COLORS.cyan;

  return (
    <label
      htmlFor={htmlFor}
      className={`font-tech-mono text-xs sm:text-sm font-bold ${textColor} block mb-3 uppercase tracking-wider cursor-pointer`}
    >
      {children}
    </label>
  );
}

interface FormChoiceGroupProps<T> {
  options: T[];
  selectedValue: T | null;
  onChange: (val: T) => void;
  color: ColorType;
  containerClass?: string;
  buttonClass?: string;
  prefix?: string;
}

export function FormChoiceGroup<T extends string | number>({
  options,
  selectedValue,
  onChange,
  color,
  containerClass = "flex gap-2",
  buttonClass = "flex-1 py-3 text-center text-sm",
  prefix = "",
}: FormChoiceGroupProps<T>) {
  const ACTIVE_STYLES: Record<string, string> = {
    cyan: "bg-cyan-500 text-slate-950 border-white shadow-[0_0_20px] shadow-cyan-500/60 scale-105 focus-visible:ring-cyan-400",
    amber:
      "bg-amber-500 text-slate-950 border-white shadow-[0_0_20px] shadow-amber-500/60 scale-105 focus-visible:ring-amber-400",
    emerald:
      "bg-emerald-500 text-slate-950 border-white shadow-[0_0_20px] shadow-emerald-500/60 scale-105 focus-visible:ring-emerald-400",
    violet:
      "bg-violet-500 text-white border-white shadow-[0_0_20px] shadow-violet-500/60 scale-105 focus-visible:ring-violet-400",
    rose: "bg-rose-500 text-white border-white shadow-[0_0_20px] shadow-rose-500/60 scale-105 focus-visible:ring-rose-400",
  };

  const HOVER_STYLES: Record<string, string> = {
    cyan: "hover:border-cyan-400 focus-visible:ring-cyan-400",
    violet: "hover:border-violet-400 focus-visible:ring-violet-400",
    amber: "hover:border-amber-400 focus-visible:ring-amber-400",
    emerald: "hover:border-emerald-400 focus-visible:ring-emerald-400",
    rose: "hover:border-rose-400 focus-visible:ring-rose-400",
  };

  const activeStyle = ACTIVE_STYLES[color] || ACTIVE_STYLES.cyan;
  const hoverStyle = HOVER_STYLES[color] || HOVER_STYLES.cyan;

  return (
    <div className={containerClass}>
      {options.map((option) => {
        const isSelected = selectedValue === option;
        return (
          <button
            key={String(option)}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(option)}
            className={`rounded-2xl font-tech-mono font-bold transition-all duration-300 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${buttonClass} ${
              isSelected
                ? activeStyle
                : `bg-slate-950/80 border-slate-800 text-slate-300 ${hoverStyle} hover:text-white`
            }`}
          >
            {prefix}
            {option}
          </button>
        );
      })}
    </div>
  );
}
