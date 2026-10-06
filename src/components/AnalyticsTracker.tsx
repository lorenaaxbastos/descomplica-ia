import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-JZ3RMGGLZV", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
