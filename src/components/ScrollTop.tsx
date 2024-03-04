import { useCallback, useEffect, useMemo, useState } from "react";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  const wrapperClasses = useMemo(() => {
    const base = "fixed bottom-4 right-4 z-50 transition-all duration-300";
    if (visible) {
      return `${base} opacity-100 scale-100`;
    }
    return `${base} opacity-0 scale-0`;
  }, [visible]);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={wrapperClasses}>
      <button onClick={handleScrollTop} disabled={!visible}></button>
    </div>
  );
};
