// src/context/ThemeContext.tsx
"use client"

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type ThemeContextType = {
  isLight: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(true);

  // Optional: persist in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setIsLight(stored === "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggle = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLight, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be inside a ThemeProvider");
  }
  return ctx;
}