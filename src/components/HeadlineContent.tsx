import { CallToAction } from "@/components/CallToAction.tsx";

export const HeadlineContent = () => {
  return (
    <div className="items-center w-full p-20 max-lg:px-2 lg:mb-[25vh] lg:mt-[200px] py-20 mb-10">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-center w-1/2 max-lg:text-[40px] max-lg:w-full mb-6">
          Fortschritte mit <b>Pure Weight</b> einfach tracken
        </h1>
        <p className="max-lg:mx-5 max-lg:text-center text-xl mb-10">
          Pure Weight legt Wert darauf einfach bedienbar zu sein - ohne Abstriche bei den Funktionen
        </p>
        <CallToAction variant="large" />
      </div>
    </div>
  );
};
