"use client";
import { useEffect } from "react";

export default function SetHeaderVar() {
  useEffect(() => {
    const set = () => {
      const h = (document.querySelector("nav") as HTMLElement | null)?.offsetHeight || 72;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    set();
    addEventListener("resize", set);
    return () => removeEventListener("resize", set);
  }, []);
  return null;
}