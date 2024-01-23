import { CallToAction } from "@/components/CallToAction.tsx";

export const HeadlineContent = () => {
  return (
    <div className="items-center w-full p-20 mt-[200px] ease-in mb-[30vh]">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-center w-1/2 mb-6">
          Fortschritte mit <b>Pure Weight</b> einfach tracken
        </h1>
        <p className="text-xl mb-10">Die App legt ein Wert darauf einfach zu bedienen zu sein - ohne Abstriche bei den Funktionen</p>
        <CallToAction variant="large" />
      </div>
    </div>
  );
};
