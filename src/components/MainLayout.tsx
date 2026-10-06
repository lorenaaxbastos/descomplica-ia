import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNavigation } from "../context/NavigationContext";
import { BackgroundEffects } from "./BackgroundEffects";
import { TopNavBar } from "./TopNavBar";
import { SideTracker } from "./SideTracker";
import { ROUTE_MAP, PAGE_PATHS } from "../config/routes";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeSection, totalSections, sectionTitles, scrollToSection } =
    useNavigation();

  const currentRoute = ROUTE_MAP[location.pathname] || {
    pageNumber: 1,
    themeColor: "cyan",
  };
  const { pageNumber, themeColor } = currentRoute;
  const totalPages = PAGE_PATHS.length;

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-tech-title">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-tech-mono focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Ir para o conteúdo principal
      </a>

      <BackgroundEffects color={themeColor} />

      <TopNavBar
        pageNumber={pageNumber}
        totalPages={totalPages}
        color={themeColor}
        onPrev={() => pageNumber > 1 && navigate(PAGE_PATHS[pageNumber - 2])}
        onNext={() =>
          pageNumber < totalPages && navigate(PAGE_PATHS[pageNumber])
        }
      />

      <SideTracker
        activeSection={activeSection}
        totalSections={totalSections}
        sectionTitles={sectionTitles}
        color={themeColor}
        onSelect={scrollToSection}
      />

      <main
        id="main-content"
        tabIndex={-1}
        className="w-full relative z-10 animate-content-in pt-16 outline-none"
      >
        {children}
      </main>
    </div>
  );
};
