"use client";

import { useEffect, useState } from "react";

export function ThemeScript() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const resolvedTheme = storedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return null;
}
