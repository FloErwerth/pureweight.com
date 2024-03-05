import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ClassNameValue, twMerge } from "tailwind-merge";

type CallToActionProps = {
  text?: string;
  variant?: "normal" | "large";
  classNames?: ClassNameValue;
};
export const CallToAction = ({ classNames, variant = "normal" }: CallToActionProps) => {
  const { t } = useTranslation();
  const handleEnrollToEmailList = useCallback(() => {
    //TODO
    console.log("ENROLL");
  }, []);

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
