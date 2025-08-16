"use client";
import { useEffect } from "react";

export default function SetHeaderVar() {
  useEffect(() => {
    const set = () => {
      const h = (document.querySelector("header") as HTMLElement | null)?.offsetHeight || 72;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    set();
    addEventListener("resize", set);
    const ro = new ResizeObserver(set);
    const header = document.querySelector("header");
    if (header) ro.observe(header);
    return () => { removeEventListener("resize", set); ro.disconnect(); };
  }, []);
  return null;
}