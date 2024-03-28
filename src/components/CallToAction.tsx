import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ClassNameValue, twMerge } from "tailwind-merge";

type CallToActionProps = {
  text?: string;
  variant?: "normal" | "large";
  classNames?: ClassNameValue;
};
export const CallToAction = ({ classNames, variant = "normal" }: CallToActionProps) => {
  const { t, i18n } = useTranslation();

  const handleEnrollToEmailList = useCallback(() => {
    let link: string = "";
    if (i18n.language === "de") {
      link = `https://apps.apple.com/de/app/pure-weight/id6469710434`;
    }

    if (i18n.language === "en") {
      link = `https://apps.apple.com/us/app/pure-weight/id6469710434`;
    }

    window.location.href = link;
  }, [i18n.language]);

  const largeClasses = "px-12 py-4 text-2xl";
  const mergedClasses = twMerge(
    "transition-transform text-white p-2 hover:scale-105 dark:text-[#fff] bg-indigo-400",
    variant === "large" && largeClasses,
    classNames,
  );
  const text = useMemo(() => {
    if (variant === "large") {
      return t("test_now_long");
    }
    return t("test_now");
  }, [t, variant]);

  return (
    <button onClick={handleEnrollToEmailList} className={mergedClasses}>
      {text}
    </button>
  );
};
