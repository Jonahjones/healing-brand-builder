import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ToastProvider() {
  const loc = useLocation();
  useEffect(() => { toast.remove(); }, [loc.pathname]); // clear on route change

  return (
    <Toaster
      position="top-center"
      containerStyle={{
        top: "calc(var(--header-h, 72px) + 8px)",
        zIndex: 9999,
        pointerEvents: "none",
      }}
      toastOptions={{
        duration: 3500,
        style: {
          background: "#ffffff",        // remove transparency only
          backdropFilter: "none",
          borderRadius: "16px",
          border: "1px solid rgba(16,24,40,.08)",
          boxShadow: "0 10px 30px rgba(16,24,40,.12)",
        },
      }}
    />
  );
}

// Optional helpers
export const notify = {
  ok: (m: string) => toast.success(m),
  oops: (m: string) => toast.error(m),
  info: (m: string, ms = 3500) => toast(m, { duration: ms }),
  promise<T>(p: Promise<T>, msgs: { loading?: string; success: string; error: string }) {
    return toast.promise(p, {
      loading: msgs.loading ?? "Working...",
      success: msgs.success,
      error: msgs.error,
    });
  },
};
