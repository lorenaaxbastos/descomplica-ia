import { Routes, Route, Navigate } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { MainLayout } from "./components/MainLayout";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { ScrollToTop } from "./components/ScrollToTop";
import PageOQueE from "./pages/o-que-e/PageOQueE";
import PageTiposDeIa from "./pages/tipos-de-ia/PageTiposDeIa";
import PageDesinformacao from "./pages/desinformacao/PageDesinformacao";
import PageEticaEResponsabilidade from "./pages/etica-e-responsabilidade/PageEticaEResponsabilidade";
import PageBoasPraticas from "./pages/boas-praticas/PageBoasPraticas";

export default function App() {
  return (
    <NavigationProvider>
      <AnalyticsTracker />

      <ScrollToTop />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/o-que-e" replace />} />
          <Route path="/o-que-e" element={<PageOQueE />} />
          <Route path="/tipos-de-ia" element={<PageTiposDeIa />} />
          <Route path="/desinformacao" element={<PageDesinformacao />} />
          <Route
            path="/etica-e-responsabilidade"
            element={<PageEticaEResponsabilidade />}
          />
          <Route path="/boas-praticas" element={<PageBoasPraticas />} />
        </Routes>
      </MainLayout>
    </NavigationProvider>
  );
}
