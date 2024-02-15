import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import Support_Logo from "@/media/support.svg";
import Support_Logo_Dark from "@/media/support_dark.svg";
import Design_Dark from "@/media/design_dark.svg";
import Design from "@/media/design.svg";
import Chart from "@/media/chart.svg";
import ChartDark from "@/media/chart_dark.svg";
import Tracking from "@/media/track.svg";
import TrackingDark from "@/media/track_dark.svg";
import { useThemeSpecific } from "@/hooks/useThemeSpecific.tsx";

export const Functions = () => {
  const Support = useThemeSpecific({ dark: Support_Logo, light: Support_Logo_Dark });
  const DesignSvg = useThemeSpecific({ dark: Design, light: Design_Dark });
  const ChartSvg = useThemeSpecific({ light: Chart, dark: ChartDark });
  const TrackingSvg = useThemeSpecific({ light: Tracking, dark: TrackingDark });

  return (
    <>
      <div className="mt-[300px]" id="functions" />
      <div className="grid grid-cols-4 gap-5 max-h-[300px]">
        <div>
          <div className="flex flex-col h-full items-center">
            <img className="w-[50px] h-[50px] mb-5" src={TrackingSvg}></img>
            <Card className="p-2 rounded-xl border-[#666]">
              <CardHeader>
                <CardTitle className="text-center">Einfaches tracken</CardTitle>
              </CardHeader>
              <CardContent className="flex p-2 flex-row justify-center items-center text-center">
                Schnelle Eingaben sind wichtig. <br />
                <br />
                Pure Weight legt wert darauf eine einfache Handhabung zu haben und das Tracking
                deines Fortschritts während des Trainings so einfach wie möglich zu machen
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col h-full  items-center">
          <img className="w-[50px] h-[50px]  mb-5" src={ChartSvg}></img>
          <Card className="p-2 rounded-xl h-full border-[#666]">
            <CardHeader>
              <CardTitle className="text-center">Fortschritt sehen</CardTitle>
            </CardHeader>
            <CardContent className="flex p-2 flex-row justify-center items-center text-center">
              Fortschritte sind wichtig und halten die Motivation hoch. <br />
              <br />
              Pure Weight errechnet aus deinen Daten die Übungen, in denen du dich am meisten
              steigerst und zeigt diese in Prozent an. hast.
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col h-full  items-center">
          <img className="w-[50px] h-[50px] mb-5" src={DesignSvg}></img>
          <Card className="p-2 rounded-xl h-full border-[#666]">
            <CardHeader>
              <CardTitle className="text-center">Schlichtes Design</CardTitle>
            </CardHeader>
            <CardContent className="flex p-2 flex-row justify-center items-center text-center">
              Der Fokus liegt auf dem Training. <br />
              <br />
              Pure Weight hat ein schlichtes Design, das dich nicht von deinem Training ablenkt. Es
              gibt einen hellen und einen dunklen Modus.
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col h-full items-center">
          <img className="w-[50px] h-[50px] mb-5" src={Support}></img>
          <Card className="p-2 rounded-xl h-full  border-[#666]">
            <CardHeader>
              <CardTitle className="text-center">Herausragender Support</CardTitle>
            </CardHeader>
            <CardContent className="flex p-2 flex-row justify-center items-center text-center">
              Du bist mit Probleme nicht alleine. <br />
              <br />
              Pure Weight bietet dir viele Möglichkeiten Probleme und Anregungen zur App zu melden.
              Wir antworten Dir schnell.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
