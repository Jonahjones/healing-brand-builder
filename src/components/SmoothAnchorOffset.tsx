// src/components/SmoothAnchorOffset.tsx
"use client";
import { useEffect } from "react";

/**
 * Smoothly scrolls to in-page anchors while accounting for the sticky header.
 * If you already use CSS `scroll-padding-top`, you can delete this component
 * and its usage entirely.
 */
export default function SmoothAnchorOffset() {
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement | null;

    const headerH = () => {
      const cssVar = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-h")
        .trim();
      const parsed = parseInt(cssVar, 10);
      if (!Number.isNaN(parsed) && parsed > 0) return parsed;
      return header?.offsetHeight ?? 0;
    };

    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      const id = href.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const y = window.scrollY + el.getBoundingClientRect().top - headerH() - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    };

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])')
    );
    links.forEach((l) => l.addEventListener("click", onClick));

    return () => links.forEach((l) => l.removeEventListener("click", onClick));
  }, []);

  return null;
}