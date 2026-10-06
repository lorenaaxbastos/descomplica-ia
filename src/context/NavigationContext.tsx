import { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  activeSection: number;
  setActiveSection: (section: number) => void;
  totalSections: number;
  setTotalSections: (total: number) => void;
  sectionTitles: string[];
  setSectionTitles: (titles: string[]) => void;
  scrollToSection: (sectionNumber: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState(1);
  const [totalSections, setTotalSections] = useState(4);
  const [sectionTitles, setSectionTitles] = useState<string[]>([]);

  const scrollToSection = (sectionNumber: number) => {
    const el = document.getElementById(`section-${sectionNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        totalSections,
        setTotalSections,
        sectionTitles,
        setSectionTitles,
        scrollToSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigation deve ser usado dentro de NavigationProvider",
    );
  }
  return context;
};
