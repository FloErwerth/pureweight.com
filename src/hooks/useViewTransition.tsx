import { useCallback } from "react";
import { flushSync } from "react-dom";

export const useViewTransition = () => {
  return useCallback((callback: () => void) => {
    flushSync(() => {
      if ("startViewTransition" in document) {
        document.startViewTransition(callback);
      } else {
        callback();
      }
    });
  }, []);
};
