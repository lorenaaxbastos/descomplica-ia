import { createContext, useContext, useState, ReactNode } from "react";

interface ProgressContextData {
  completedSections: string[];
  markSectionAsCompleted: (sectionId: string) => void;
}

const PageProgressContext = createContext<ProgressContextData>({
  completedSections: [],
  markSectionAsCompleted: () => {},
});

export function PageProgressProvider({ children }: { children: ReactNode }) {
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const markSectionAsCompleted = (sectionId: string) => {
    setCompletedSections((prev) =>
      prev.includes(sectionId) ? prev : [...prev, sectionId],
    );
  };

  return (
    <PageProgressContext.Provider
      value={{ completedSections, markSectionAsCompleted }}
    >
      {children}
    </PageProgressContext.Provider>
  );
}

export const usePageProgress = () => useContext(PageProgressContext);
