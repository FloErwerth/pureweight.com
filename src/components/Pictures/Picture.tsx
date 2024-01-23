import "./styles.css";
import { config } from "@/components/Pictures/config.ts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { CallToAction } from "@/components/CallToAction.tsx";

type PictureProps = {
  src: string;
  index: number;
};

export const Picture = ({ src, index }: PictureProps) => {
  const details = config[index];
  return (
    <div className="rounded-xl overflow-hidden relative picture">
      <img style={{ backgroundImage: `url(${details.url})` }} src={details.url || src} />
      <Card className="flex flex-col justify-evenly picture-detail">
        <CardHeader>
          <CardTitle>{details.title}</CardTitle>
        </CardHeader>
        <CardContent>{details.content}</CardContent>
        <CardFooter className="flex w-full justify-center">
          <CallToAction />
        </CardFooter>
      </Card>
    </div>
  );
};
