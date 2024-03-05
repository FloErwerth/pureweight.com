import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export function FunctionAccordion() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center mt-[30px] mb-[200px]">
      <div className="lg:w-1/2 max-lg:w-full rounded-xl bg-[#222] lg:p-10 max-lg:p-4 max-lg:mx-4">
        <div className="text-xl text-center text-[#ddd]">{t("explore_function_title")}</div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#ddd]">
              {t("explore_function_1_title")}
            </AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              {t("explore_function_1_content")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#ddd]">
              {t("explore_function_2_title")}
            </AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              {t("explore_function_2_content_1")}
              <br />
              <br />
              {t("explore_function_2_content_2")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#ddd]">
              {t("explore_function_3_title")}
            </AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              {t("explore_function_3_content_1")} <br />
              <br />
              {t("explore_function_3_content_2")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#ddd]">
              {t("explore_function_4_title")}
            </AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              {t("explore_function_4_content_1")}
              <br />
              <br />
              {t("explore_function_4_content_2")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
