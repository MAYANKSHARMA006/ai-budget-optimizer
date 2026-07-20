"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4">

      <button
        onClick={() => setTheme("light")}
        className={`w-full rounded-lg p-3 border ${
          theme === "light"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-900"
        }`}
      >
        ☀️ Light Mode
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`w-full rounded-lg p-3 border ${
          theme === "dark"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-900"
        }`}
      >
        🌙 Dark Mode
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`w-full rounded-lg p-3 border ${
          theme === "system"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-900"
        }`}
      >
        💻 System Default
      </button>

    </div>
  );
}