"use client";
import { useEffect } from "react";

export default function SetHeaderVar() {
  useEffect(() => {
    const elems = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          // include header and any sticky/floating bars near the top
          "header, .sticky, .site-header, [data-sticky], .floating-cta, .book-cta, nav"
        )
      );

    const compute = () => {
      const cands = elems();
      // Measure the tallest top-fixed element region
      const bottom = cands.length
        ? Math.max(...cands.map(el => el.getBoundingClientRect().bottom))
        : (document.querySelector("header") as HTMLElement | null)?.getBoundingClientRect().bottom || 72;

      // clamp to sensible range
      const h = Math.max(48, Math.min(128, Math.round(bottom)));
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    compute();
    const onResize = () => compute();
    const onScroll  = () => compute(); // handles headers that shrink on scroll
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll",  onScroll,  { passive: true });
    // also recompute after fonts load
    (document as any).fonts?.ready?.then(compute).catch(() => {});
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll",  onScroll);
    };
  }, []);
  return null;
}