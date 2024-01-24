import { useCallback } from "react";
import { twMerge } from "tailwind-merge";

type CallToActionProps = {
  text?: string;
  variant?: "normal" | "large";
};
export const CallToAction = ({ variant = "normal", text = "Pure Weight testen" }: CallToActionProps) => {
  const handleEnrollToEmailList = useCallback(() => {
    console.log("ENROLL");
  }, []);

  const largeClasses = "px-12 py-4 text-2xl";
  const mergedClasses = twMerge("transition-transform text-white hover:scale-105 dark:text-[#fff] bg-indigo-400", variant === "large" && largeClasses);
  return (
    <button onClick={handleEnrollToEmailList} className={mergedClasses}>
      {text}
    </button>
  );
};