"use client";
import { useEffect } from "react";

export default function SmoothAnchorOffset() {
  useEffect(() => {
    const header = document.querySelector("header");
    const headerH = () => (header ? (header as HTMLElement).offsetHeight : 0);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const click = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - headerH() - 8;
      window.scrollTo({ top: y, behavior: prefersReduced ? "auto" : "smooth" });
      history.pushState(null, "", `#${id}`);
    };

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    anchors.forEach(a => a.addEventListener("click", click));
    return () => anchors.forEach(a => a.removeEventListener("click", click));
  }, []);
  return null;
}