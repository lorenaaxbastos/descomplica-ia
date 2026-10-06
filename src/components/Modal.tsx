import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ColorType } from "../types/color";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  color?: ColorType;
  className?: string;
}

const MODAL_THEMES: Record<
  ColorType,
  { border: string; shadow: string; closeBtn: string }
> = {
  cyan: {
    border: "border-cyan-500/50",
    shadow: "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    closeBtn:
      "text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 focus-visible:ring-cyan-400",
  },
  violet: {
    border: "border-violet-500/50",
    shadow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    closeBtn:
      "text-slate-400 hover:text-violet-300 hover:bg-violet-950/40 focus-visible:ring-violet-400",
  },
  amber: {
    border: "border-amber-500/50",
    shadow: "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    closeBtn:
      "text-slate-400 hover:text-amber-300 hover:bg-amber-950/40 focus-visible:ring-amber-400",
  },
  emerald: {
    border: "border-emerald-500/50",
    shadow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    closeBtn:
      "text-slate-400 hover:text-emerald-300 hover:bg-emerald-950/40 focus-visible:ring-emerald-400",
  },
  rose: {
    border: "border-rose-500/50",
    shadow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]",
    closeBtn:
      "text-slate-400 hover:text-rose-300 hover:bg-rose-950/40 focus-visible:ring-rose-400",
  },
};

export function Modal({
  isOpen,
  onClose,
  children,
  color = "cyan",
  className = "",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const theme = MODAL_THEMES[color] || MODAL_THEMES.cyan;

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (
        previousFocusRef.current &&
        document.contains(previousFocusRef.current)
      ) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
      if (
        previousFocusRef.current &&
        document.contains(previousFocusRef.current)
      ) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

    const modalElement = modalRef.current;
    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      focusableElementsString,
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      modalElement.focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const currentFocusables = modalElement.querySelectorAll<HTMLElement>(
        focusableElementsString,
      );
      if (currentFocusables.length === 0) return;

      const first = currentFocusables[0];
      const last = currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    modalElement.addEventListener("keydown", handleTab);
    return () => {
      modalElement.removeEventListener("keydown", handleTab);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[9999] flex p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`m-auto bg-slate-900 border rounded-3xl p-5 sm:p-8 max-w-2xl w-full relative text-left outline-none ${theme.border} ${theme.shadow} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function ModalCloseButton({
  onClose,
  color = "cyan",
}: {
  onClose: () => void;
  color?: ColorType;
}) {
  const theme = MODAL_THEMES[color] || MODAL_THEMES.cyan;

  return (
    <button
      onClick={onClose}
      className={`p-1 rounded-lg transition cursor-pointer shrink-0 ml-2 focus-visible:outline-none focus-visible:ring-2 ${theme.closeBtn}`}
      aria-label="Fechar modal"
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
