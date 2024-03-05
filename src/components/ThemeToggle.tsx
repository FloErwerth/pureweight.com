import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider.tsx";
import { useViewTransition } from "@/hooks/useViewTransition";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const transition = useViewTransition();
  const handleToggle = useCallback(() => {
    transition(() => {
      if (theme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    });
  }, [setTheme, theme]);

  return (
    <Button
      onClick={handleToggle}
      variant="destructive"
      className="focus:outline-none hover:border-none w-8 h-8 p-0 max-lg:h-[40px] max-lg:w-[40px] "
    >
      <Sun
        color="black"
        className="h-[1.2rem] w-[1.2rem] max-lg:h-[40px] max-lg:w-[40px]  transition-transform scale-100 dark:scale-0"
      />
      <Moon className="absolute h-[1.2rem] max-lg:h-[40px] max-lg:w-[40px]  w-[1.2rem] transition-transform scale-0 dark:scale-100" />
    </Button>
  );
}
