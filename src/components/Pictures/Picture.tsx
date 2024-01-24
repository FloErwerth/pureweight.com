import "./styles.css";
import { config } from "@/components/Pictures/config.ts";
import { CallToAction } from "@/components/CallToAction.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { useCallback, useId, useMemo, useState } from "react";

type PictureProps = {
  index: number;
  attention?: {
    index: number;
    class: string;
  };
};

let cardOpenedOnce = false;
export const Picture = ({ index, attention }: PictureProps) => {
  const id = useId();
  const details = config[index];
  const [cardOpen, setCardOpen] = useState(false);
  const openClassesAvailable = attention?.index === index && !cardOpen && !cardOpenedOnce;

  const consumedAttention = useMemo(
    () => (openClassesAvailable ? attention?.class ?? "" : ""),
    [attention?.class, openClassesAvailable],
  );

  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage: `url(${details.url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }),
    [details.url],
  );

  const handleToggleCard = useCallback(() => {
    if (!cardOpenedOnce) {
      cardOpenedOnce = true;
    }
    setCardOpen(!cardOpen);
  }, [cardOpen]);

  const cardOpenClasses = useMemo(
    () => (cardOpen ? "picture-detail-open picture-detail-background-anim" : ""),
    [cardOpen],
  );

  const handleHover = useCallback(() => {
    if (!cardOpen) {
      setCardOpen(true);
    }
  }, [cardOpen]);

  const handleBlur = useCallback(() => {
    if (cardOpen) {
      setCardOpen(false);
    }
  }, [cardOpen]);

  return (
    <div className="rounded-xl relative w-full picture">
      <div className="overflow-hidden w-full h-full rounded-2xl" style={backgroundImageStyle}>
        <Card
          onPointerEnter={handleHover}
          onPointerLeave={handleBlur}
          id={id}
          className={`border-none picture-detail ${consumedAttention} ${cardOpenClasses} bg-[#333] text-[#ddd] flex flex-col justify-evenly`}
        >
          <CardHeader
            onClick={handleToggleCard}
            className="hover:cursor-pointer text-center relative"
          >
            <CardTitle className="picture-details-title">{details.title}</CardTitle>
          </CardHeader>
          <CardContent>{details.content}</CardContent>
          <CardFooter className="flex w-full justify-center">
            <CallToAction />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
