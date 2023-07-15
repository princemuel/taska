"use client";

import { cn } from "@/lib";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Switch = () => {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const [_, startTransition] = React.useTransition();

  const isDarkMode = theme === "dark";

  const updateTheme = React.useCallback(() => {
    startTransition(() => {
      setTheme(isDarkMode ? "light" : "dark");
    });
  }, [isDarkMode, setTheme]);

  return (
    <button
      type="button"
      title="Toggle Theme"
      className={cn("")}
      onClick={updateTheme}
    >
      <div className={cn("")}>
        {!theme ? null : theme === "light" ? (
          <MoonIcon className="transition-all" />
        ) : (
          <SunIcon className="transition-all" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export { Switch };
