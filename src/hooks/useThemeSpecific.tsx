import { useTheme } from "@/components/ThemeProvider.tsx";

type ThemeSpecificConfig<T> = Record<"dark" | "light", T>;
export function useThemeSpecific<T>(config: ThemeSpecificConfig<T>) {
  const { theme } = useTheme();

  const mappedTheme = theme === "system" ? "light" : theme;

  return config[mappedTheme];
}
