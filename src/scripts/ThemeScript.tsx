'use client';

import { useEffect, useState } from 'react';

export function ThemeScript() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);

    setMounted(true);
  }, []);

  // Don't render children until the theme is applied
  if (!mounted) return null;

  return null;
}
