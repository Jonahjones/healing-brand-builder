import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ToastProvider() {
  const loc = useLocation();

  // Clear any lingering toasts when route changes (path OR hash)
  useEffect(() => { toast.remove(); }, [loc.pathname, loc.search, loc.hash]);

  return (
    <Toaster
      position="top-center"
      // Container never intercepts clicks; sits below sticky header (incl. iOS safe area)
      containerStyle={{
        position: "fixed",
        top: "calc(var(--header-h, 72px) + env(safe-area-inset-top, 0px) + 8px)",
        left: 0, right: 0,
        zIndex: 10000,
        pointerEvents: "none",
      }}
      toastOptions={{
        duration: 3500,
        // Kill translucency/blur; cap width so it doesn't sprawl
        style: {
          background: "#ffffff",
          color: "#0f172a",
          borderRadius: "16px",
          border: "1px solid rgba(16,24,40,.08)",
          boxShadow: "0 10px 30px rgba(16,24,40,.12)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          maxWidth: "560px",
          margin: "0 auto",
          pointerEvents: "auto", // individual toast can be interacted with
        },
      }}
    />
  );
}
