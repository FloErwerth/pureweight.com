import { useThemeSpecific } from "@/hooks/useThemeSpecific";
import LogoLight from "../media/Logo_Bright.svg";
import LogoDark from "../media/Logo.svg";
import { Impressum } from "./Impressum";
import { Link } from "@/components/Link.tsx";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const Logo = useThemeSpecific({ dark: LogoLight, light: LogoDark });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateToPrivacy = useCallback(() => {
    navigate("/privacy");
  }, [navigate]);

  const navigateToTerms = useCallback(() => {
    navigate("/termsandconditions");
  }, [navigate]);

  return (
    <div className="flex justify-center max-lg:flex-col *:text-[#ddd] lg:gap-20 max-lg:gap-5 bg-[#222]  p-2 pb-4 ">
      <div className="self-center max-lg:flex max-lg:gap-2 max-lg:mt-4">
        <img alt="Pure Weight" width={50} height={50} src={Logo} />
        <div className="self-center text-[16px] mt-2">© 2024 Pure Weight</div>
      </div>
      <div className="grid max-lg:grid-rows-[auto_auto] max-lg:mb-5 lg:grid-cols-2 max-lg:gap-5 gap-2">
        <Impressum />
        <div className="flex flex-col h-[30px]">
          <button onClick={navigateToPrivacy} style={{ all: "unset" }}>
            <Link href="" scrollsToAnchor classNames="text-[#ddd]" text={t("datenschutz")} />
          </button>
          <button onClick={navigateToTerms} style={{ all: "unset" }}>
            <Link href="" scrollsToAnchor classNames="text-[#ddd]" text={t("agb")} />
          </button>
        </div>
      </div>
    </div>
  );
};
