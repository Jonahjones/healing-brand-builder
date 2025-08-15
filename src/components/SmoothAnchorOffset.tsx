"use client";
import { useEffect } from "react";

export default function SmoothAnchorOffset() {
  useEffect(() => {
    const header = document.querySelector("header");
    const headerH = () => (header ? (header as HTMLElement).offsetHeight : 0);
    const click = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - headerH() - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", click));
    return () =>
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener("click", click)
      );
  }, []);
  return null;
}