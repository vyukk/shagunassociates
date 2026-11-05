import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./index.css";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function PageEffects() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      document.title = "Shagun Associates — A place to call yours";
    }

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function SiteApp() {
  return (
    <BrowserRouter>
      <PageEffects />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<ProjectDetailPage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SiteApp />
  </React.StrictMode>,
);
