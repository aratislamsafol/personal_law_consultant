import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  ...props
}: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme if not set
    if (!theme || theme === "light") {
      const stored = localStorage.getItem("ensaf-theme");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.state?.theme) {
            // Theme is already set by Zustand persist
            return;
          }
        } catch {
          // Invalid storage, use default
        }
      }
      if (defaultTheme) {
        setTheme(defaultTheme);
      }
    }
  }, [defaultTheme, theme, setTheme]);

  return <>{children}</>;
}

export const useTheme = () => {
  const { theme, setTheme, getEffectiveTheme } = useThemeStore();
  return {
    theme,
    setTheme,
    getEffectiveTheme,
  };
};
