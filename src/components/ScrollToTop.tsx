import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../context/NavigationContext";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    setActiveSection(1);

    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.documentElement.scrollTo({ top: 0, behavior: "instant" });
      document.body.scrollTo({ top: 0, behavior: "instant" });

      const root = document.getElementById("root");
      if (root) root.scrollTo({ top: 0, behavior: "instant" });
    };

    forceScrollToTop();

    const timer = setTimeout(forceScrollToTop, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, setActiveSection]);

  return null;
}
