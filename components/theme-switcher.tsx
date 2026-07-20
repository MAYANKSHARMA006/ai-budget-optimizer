"use client";


import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] =
    useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      title={
        isDark
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="
        relative
        flex
        h-10
        w-20
        items-center
        rounded-full
        border
        border-slate-300
        bg-slate-200
        px-1
        transition-all
        duration-300
        hover:scale-105
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      <div
        className={`
          absolute
          h-8
          w-8
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${
            isDark
              ? "translate-x-10"
              : "translate-x-0"
          }
        `}
      />

      <div className="z-10 flex w-full justify-between px-1">
        <Sun size={16} />
        <Moon size={16} />
      </div>
    </button>
  );
}