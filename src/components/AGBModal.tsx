import { useTranslation } from "react-i18next";
import { Link } from "./Link";
import { Modal } from "./Modal";
import i18n from "@/translation";
import { EnglischContent, GermanContent } from "@/components/ui/AGBContents.tsx";

const AgbEnglisch = () => {
  const { t } = useTranslation();
  return (
    <Modal
      dialogTitle={t("agb")}
      Trigger={() => <Link classNames="text-[#ddd]" href="" text={t("agb")} />}
    >
      <EnglischContent />
    </Modal>
  );
};

export const AGBModal = () => {
  const { t } = useTranslation();
  const language = i18n.language;

  const german = (
    <Modal
      dialogTitle={t("agb")}
      Trigger={() => <Link classNames="text-[#ddd]" href="" text={t("agb")} />}
    >
      <GermanContent />
    </Modal>
  );

  return language === "de" ? german : <AgbEnglisch />;
};
