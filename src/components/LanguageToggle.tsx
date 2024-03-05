import GermanFlag from "../media/GermanFlag.svg";
import UsaFlag from "../media/UsaFlag.svg";
import { Button } from "@/components/ui/button";
import { useViewTransition } from "@/hooks/useViewTransition";

import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const transition = useViewTransition();

  const handleToggle = useCallback(() => {
    transition(() => {
      if (i18n.language === "en") {
        i18n.changeLanguage("de");
        sessionStorage.setItem("language", "de");
      } else {
        i18n.changeLanguage("en");
        sessionStorage.setItem("language", "en");
      }
    });
  }, [i18n, transition]);

  const enClasses = useMemo(() => {
    if (i18n.language === "en") {
      return "absolute h-[1.2rem] w-[1.2rem] max-lg:h-[40px]  max-lg:w-[40px] transition-transform scale-100";
    }
    return "absolute h-[1.2rem] w-[1.2rem] max-lg:h-[40px] max-lg:w-[40px] transition-transform scale-0";
  }, [i18n.language]);

  const germanClasses = useMemo(() => {
    if (i18n.language === "de") {
      return "absolute h-[1.2rem] w-[1.2rem] max-lg:h-[40px] max-lg:w-[40px] transition-transform scale-100";
    }
    return "absolute h-[1.2rem] w-[1.2rem] max-lg:h-[40px]  max-lg:w-[40px] transition-transform scale-0";
  }, [i18n.language]);

  return (
    <Button
      onClick={handleToggle}
      variant="destructive"
      className="focus:outline-none hover:border-none max-lg:w-[40px] max-lg:h-[40px] w-8 h-8 p-0"
    >
      <img src={GermanFlag} color="black" className={germanClasses} />
      <img src={UsaFlag} className={enClasses} />
    </Button>
  );
}
