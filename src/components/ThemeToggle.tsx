import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useCallback } from "react";
import { useTheme } from "@/components/themeProvider.tsx";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = useCallback(() => {
    if(theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }, [setTheme, theme])

  return (
      <Button onClick={handleToggle} variant="destructive" className="focus:outline-none hover:border-none w-14 h-8">
        <Sun color="black" className="h-[1.2rem] w-[1.2rem] transition-transform scale-100 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform scale-0 dark:scale-100" />
      </Button>

  )
}