import { Link } from "@/components/Link";
import { useTranslation } from "react-i18next";

export const Support = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[100vh] max-lg:px-2 lg:w-2/3 lg:mx-auto">
      <h2>Support</h2>
      <div className="pt-5">
        {t("support_content_1")}{" "}
        <span className="bg-[#222] text-[#ddd] p-1 rounded-[5px]">
          Einstellungen &#62; Bedienhilfe
        </span>
        . {t("support_content_2")}.
      </div>
      <div className="py-2">{t("support_content_3")}</div>
      <div>
        {t("support_content_4")}{" "}
        <Link
          scrollsToAnchor={false}
          text="pureweight.app@gmail.com"
          href="mailto:pureweight.app@gmail.com"
        />
        . {t("support_content_5")}
      </div>
      <div className="mt-4 font-bold">{t("support_content_6")}</div>
    </div>
  );
};
