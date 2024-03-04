import { Link } from "@/components/Link";

export const Support = () => {
  return (
    <div className="h-[100vh] max-lg:px-2 lg:w-2/3 lg:mx-auto">
      <h2>Support</h2>
      <div className="pt-5">
        Eine generelle Bedienhilfe findest Du innerhalb von Pure Weight unter{" "}
        <span className="bg-[#222] text-[#ddd] p-1 rounded-[5px]">
          Einstellungen &#62; Bedienhilfe
        </span>
        . Hier findest Du alle wichtigen Informationen zur Bedienung von Pure Weight. Am besten Du
        nutzt die Filterfunktion, um schnell die passende Hilfe zu finden.
      </div>
      <div className="py-2">
        Falls dein Anliegen nicht in der Bedienhilfe zu finden ist, kannst Du dich gerne an uns
        wenden und dabei erwähnen, dass Du die Bedienhilfe bereits durchsucht hast. Dann fügen wir
        diesen Punkt gerne hinzu.
      </div>
      <div>
        Für alle weitere Fragen kannst Du dich gerne an{" "}
        <Link
          scrollsToAnchor={false}
          text="pureweight.app@gmail.com"
          href="mailto:pureweight.app@gmail.com"
        />{" "}
        wenden. Wir helfen Dir gerne so schnell wie möglich weiter.
      </div>
      <div className="mt-4 font-bold">
        Vielen Dank für dein Vertrauen und für die Nutzung von Pure Weight!
      </div>
    </div>
  );
};
