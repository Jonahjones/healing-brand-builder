import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import './index.css'
import { HelmetProvider } from "react-helmet-async";
import { DevErrorBoundary } from "./DevErrorBoundary";

// OPTIONAL: kill any old SW that might be serving stale JS
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister())).catch(() => {});
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <DevErrorBoundary>
        <App />
      </DevErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
