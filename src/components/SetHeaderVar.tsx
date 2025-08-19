"use client";
import { useEffect } from "react";

export default function SetHeaderVar() {
  useEffect(() => {
    const set = () => {
      const h = (document.querySelector("header") as HTMLElement | null)?.offsetHeight || 72;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    set();
    const header = document.querySelector("header");
    const ro = header ? new ResizeObserver(set) : null;
    if (header) ro?.observe(header);
    addEventListener("resize", set);
    return () => { ro?.disconnect(); removeEventListener("resize", set); };
  }, []);
  return null;
}