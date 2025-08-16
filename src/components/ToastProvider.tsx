import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ToastProvider() {
  const loc = useLocation();
  useEffect(() => { toast.remove(); }, [loc.pathname]); // clear on route change

  return (
    <Toaster
      position="top-center"
      // Important: do NOT set pointerEvents here. Let react-hot-toast defaults apply.
      containerStyle={{
        top: "calc(var(--header-h, 72px) + 8px)",
        zIndex: 9999,
      }}
      toastOptions={{
        duration: 3500,
        style: {
          background: "#ffffff",
          color: "#0f172a",
          borderRadius: "16px",
          border: "1px solid rgba(16,24,40,.08)",
          boxShadow: "0 10px 30px rgba(16,24,40,.12)",
          backdropFilter: "none",
        },
      }}
    />
  );
}
