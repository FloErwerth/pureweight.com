import { ClassNameValue, twMerge } from "tailwind-merge";
import { useCallback } from "react";

interface LinkProps {
  href: string;
  scrollsToAnchor?: boolean;
  text: string;
  disabled?: boolean;
  classNames?: ClassNameValue;
}

export const Link = ({ scrollsToAnchor = true, classNames, href, text, disabled }: LinkProps) => {
  const normalClasses: ClassNameValue =
    "hover:cursor-pointer font-semibold dark:text-[#fff] text-[#000] hover:text-indigo-500 hover:dark:text-[#ddd]";
  const disabledClasses: ClassNameValue = disabled ? "text-[#999] pointer-events-none" : "";
  const mergedClasses = twMerge(normalClasses, disabledClasses, classNames);

  const handleScrollToElement = useCallback(() => {
    if (scrollsToAnchor) {
      const element = document.querySelector(href);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
    }
  }, [scrollsToAnchor, href]);

  return (
    <a
      href={scrollsToAnchor ? undefined : href}
      aria-disabled={disabled}
      className={mergedClasses}
      onClick={handleScrollToElement}
    >
      {text}
    </a>
  );
};
