import { Link } from "./Link";
import { MapPin, PhoneCall, Mail } from "lucide-react";

export const Impressum = () => {
  return (
    <div>
      <div className="text-[20px] text-[#aaa] font-bold">Impressum</div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <div className="text-[16px] flex flex-col gap-3">
              <div className="pt-2">Florian Erwerth</div>
              <div className="flex items-center gap-2">
                <MapPin />
                <div className="leading-tight">
                  <div>Balanstraße 93</div>
                  <div>81539 München</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall />
                <div>0157 / 30 24 34 60</div>
              </div>
              <div className="flex items-center gap-2">
                <Mail />
                <div>
                  <Link
                    scrollsToAnchor={false}
                    classNames="text-[#ddd]"
                    href="mailto:pureweight.app@gmail.com"
                    text="pureweight.app@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
