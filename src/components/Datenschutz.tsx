import i18n from "@/translation";
import { Link } from "./Link";
import { Modal } from "./Modal";
import { useTranslation } from "react-i18next";
import { EnglishPrivacyContent, GermanPrivacyContent } from "@/components/ui/PrivacyContents.tsx";
//adjust this text for the website, add headers, paragraphs spacing etc

export const DatenschutzEnglisch = () => {
  const { t } = useTranslation();
  return (
    <Modal
      dialogTitle={t("datenschutz")}
      Trigger={() => <Link classNames="text-[#ddd]" href="" text={t("datenschutz")} />}
    >
      <EnglishPrivacyContent />
    </Modal>
  );
};

export const Datenschutz = () => {
  const { t } = useTranslation();
  const language = i18n.language;

  const german = (
    <Modal
      dialogTitle={t("datenschutz")}
      Trigger={() => <Link classNames="text-[#ddd]" href="" text={t("datenschutz")} />}
    >
      <GermanPrivacyContent />
    </Modal>
  );

  return language === "de" ? german : <DatenschutzEnglisch />;
};
