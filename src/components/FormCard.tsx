import { useState, ReactNode } from "react";
import { ColorType } from "../types/color";

interface FormCardProps {
  formName: string;
  color: ColorType;
  formData: Record<string, string>;
  isSubmitDisabled: boolean;
  onReset: () => void;
  children: ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  buttonLabel?: string;
  successTitle?: string;
  successMessage?: string;
}

export function FormCard({
  formName,
  color,
  formData,
  isSubmitDisabled,
  onReset,
  children,
  headerTitle,
  headerSubtitle,
  buttonLabel = "Enviar",
  successTitle = "Mensagem registrada!",
  successMessage = "Obrigada pelo seu envio!",
}: FormCardProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const GLOW_COLORS: Record<string, string> = {
    cyan: "bg-cyan-600/10",
    violet: "bg-violet-600/10",
    amber: "bg-amber-600/10",
    emerald: "bg-emerald-600/10",
    rose: "bg-rose-600/10",
  };
  const TEXT_COLORS: Record<string, string> = {
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
    rose: "text-rose-400",
  };
  const BUTTON_STYLES: Record<string, string> = {
    cyan: "from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] focus-visible:ring-cyan-400",
    violet:
      "from-violet-500 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] focus-visible:ring-violet-400",
    amber:
      "from-amber-500 to-orange-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] focus-visible:ring-amber-400",
    emerald:
      "from-emerald-500 to-teal-600 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] focus-visible:ring-emerald-400",
    rose: "from-rose-500 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)] focus-visible:ring-rose-400",
  };
  const BORDER_COLORS: Record<string, string> = {
    cyan: "border-cyan-500/50",
    violet: "border-violet-500/50",
    amber: "border-amber-500/50",
    emerald: "border-emerald-500/50",
    rose: "border-rose-500/50",
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/index.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName, ...formData }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        setIsSubmitted(true);
      })
      .catch((error) => console.error("Erro ao enviar:", error));
  };

  const handleReset = () => {
    onReset();
    setIsSubmitted(false);
  };

  return (
    <div
      className={`w-full max-w-3xl bg-slate-900/80 border border-dashed ${BORDER_COLORS[color]} rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden shrink-0 mb-6 mx-auto`}
    >
      <div
        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${GLOW_COLORS[color]}`}
      />

      {!isSubmitted ? (
        <form
          name={formName}
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 relative z-10"
        >
          {headerTitle && (
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-1">
              <span
                className={`font-tech-mono text-xs font-bold ${TEXT_COLORS[color]} uppercase tracking-wider`}
              >
                {headerTitle}
              </span>
              {headerSubtitle && (
                <span className="font-tech-mono text-[10px] text-slate-500">
                  {headerSubtitle}
                </span>
              )}
            </div>
          )}

          <div className="flex flex-col gap-6">{children}</div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r font-tech-mono font-black text-sm sm:text-base rounded-2xl transition-all transform uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                !isSubmitDisabled
                  ? `${BUTTON_STYLES[color]} hover:scale-105 active:scale-95 cursor-pointer opacity-100`
                  : "from-slate-700 to-slate-800 text-slate-400 opacity-40 cursor-not-allowed shadow-none"
              }`}
            >
              {buttonLabel}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 animate-fade-in relative z-10 flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <svg
              aria-hidden="true"
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {successTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-tech-mono max-w-md leading-relaxed">
              {successMessage}
            </p>
          </div>
          <button
            onClick={handleReset}
            className={`mt-4 text-xs font-tech-mono ${TEXT_COLORS[color]} hover:opacity-80 underline cursor-pointer focus-visible:outline-none focus-visible:ring-1 rounded px-1`}
          >
            Preencher novamente
          </button>
        </div>
      )}
    </div>
  );
}
