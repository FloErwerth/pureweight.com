import { ClassNameValue, twMerge } from "tailwind-merge";
import { useCallback } from "react";

interface LinkProps {
  href: string;
  text: string;
  disabled?: boolean;
}

export const Link = ({ href, text, disabled }: LinkProps) => {
  const normalClasses: ClassNameValue = "hover:cursor-pointer font-semibold dark:text-[#fff] text-[#000] hover:text-indigo-500 hover:dark:text-[#ddd]";
  const disabledClasses: ClassNameValue = disabled ? "text-[#999] pointer-events-none" : "";
  const mergedClasses = twMerge(normalClasses, disabledClasses);

  const handleScrollToElement = useCallback(() => {
    const element = document.querySelector(href);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }, [href]);

  return (
    <a aria-disabled={disabled} className={mergedClasses} onClick={handleScrollToElement}>
      {text}
    </a>
  );
};
