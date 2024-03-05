import graph from "../media/graph.png";
import push_workout from "../media/push_workout.png";
import overview from "../media/overview.png";
import { useCallback, useMemo, useRef, useState } from "react";
import "./styles.css";
import { useViewTransition } from "@/hooks/useViewTransition";
import { useTranslation } from "react-i18next";

export const Functions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const transitionView = useViewTransition();
  const { t } = useTranslation();
  const pic1Ref = useRef<HTMLButtonElement>(null);
  const pic2Ref = useRef<HTMLButtonElement>(null);
  const pic3Ref = useRef<HTMLButtonElement>(null);

  const getImageClass = useCallback(
    (index: number) => {
      const base =
        "max-lg:h-[75vh] lg:h-[600px] transition-all duration-300 hover:opacity-100 lg:scale-100 lg:hover:scale-105 cursor-pointer";
      if (index === selectedIndex) {
        return `${base} opacity-100 lg:scale-105`;
      }
      return `${base} opacity-50 scale-95`;
    },
    [selectedIndex],
  );

  const selectedText = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return (
          <div id="cap1">
            <p className="text-center mb-2 text-[40px] max-lg:text-[25px] font-bold">
              {t("easy_tracking")}
            </p>
            <div className="text-[26px] max-lg:text-[20px] text-center">
              {t("easy_tracking_subtitle")}
            </div>
          </div>
        );
      case 1:
        return (
          <div id="cap2">
            <p className="text-center mb-2 text-[40px] max-lg:text-[25px] font-bold">
              {t("see_progress")}
            </p>
            <div className="text-[26px] max-lg:text-[20px] text-center">
              {t("see_progress_subtitle")}
            </div>
          </div>
        );

      case 2:
        return (
          <div id="cap3">
            <p className="text-center mb-2 text-[40px] max-lg:text-[25px] font-bold">
              {t("keep_overview")}
            </p>
            <div className="text-[26px] max-lg:text-[20px] text-center">
              {t("keep_overview_subtitle")}
            </div>
          </div>
        );
    }
  }, [selectedIndex, t]);

  const handleSelect = useCallback(
    (index: number) => {
      if (index === selectedIndex) {
        return;
      }

      if (document.documentElement.clientWidth < 1024) {
        switch (index) {
          case 0:
            pic1Ref.current?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "end",
            });
            break;
          case 1:
            pic2Ref.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "end" });
            break;
          case 2:
            pic3Ref.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "end" });
            break;
        }
      }

      transitionView(() => setSelectedIndex(index));
    },
    [pic1Ref, pic2Ref, pic3Ref, selectedIndex, transitionView],
  );

  return (
    <>
      <div className="justify-center relative flex mb-2 lg:mb-10">
        <div id="functions" />
        <span>{selectedText}</span>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="grid lg:justify-between lg:h-fit grid-cols-[max-content_max-content_max-content] max-lg:px-[25vw] max-lg:overflow-x-auto max-lg:overflow-y-hidden"
      >
        <button
          className="max-lg:h-[calc(75vh-40px)] max-lg:overflow-hidden"
          ref={pic1Ref}
          onClick={() => handleSelect(0)}
        >
          <img id="img1" className={getImageClass(0)} src={push_workout} alt="" />
        </button>
        <button
          className="max-lg:h-[calc(75vh-40px)]  max-lg:overflow-hidden"
          ref={pic2Ref}
          onClick={() => handleSelect(1)}
        >
          <img id="img2" className={getImageClass(1)} src={graph} alt="graph" />
        </button>
        <button
          className="max-lg:h-[calc(75vh-40px)]  max-lg:overflow-hidden"
          ref={pic3Ref}
          onClick={() => handleSelect(2)}
        >
          <img id="img3" className={getImageClass(2)} src={overview} alt="" />
        </button>
      </div>
    </>
  );
};
