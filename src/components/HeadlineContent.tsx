import { CallToAction } from "@/components/CallToAction.tsx";
import { useTranslation } from "react-i18next";

export const HeadlineContent = () => {
  const { t } = useTranslation();

  return (
    <div className="items-center w-full p-20 max-lg:px-2 lg:mb-[25vh] lg:mt-[200px] py-20 mb-10">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-center w-2/3 max-lg:text-[40px] max-lg:w-full mb-6">
          {t("headline_1")} <b>Pure Weight</b> {t("headline_2")}
        </h1>
        <p className="max-lg:mx-5 max-lg:text-center text-xl mb-10">{t("subtitle")}</p>
        <CallToAction variant="large" />
      </div>
    </div>
  );
};
