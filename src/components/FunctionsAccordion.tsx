import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FunctionAccordion() {
  return (
    <div className="flex justify-center mt-[30px] mb-[200px]">
      <div className="lg:w-1/2 max-lg:w-full rounded-xl bg-[#222] lg:p-10 max-lg:p-4 max-lg:mx-4">
        <div className="text-xl text-center text-[#ddd]">Entdecke alle Funktionen im Detail</div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#ddd]">Workout Tracking</AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              Das Tracking ist so designed, dass Du schnell und einfach deinen Fortschritt im Gym
              tracken kannst. Beim Eintragen der Werte eines Satzes, werden diese Werte automatisch
              für die folgenden Sätze übernommen. Du kannst die Reihenfolge der getrackten Übung
              einfach per Swipe bestimmen. Und natürlich können alle eingetragenen Werte auch wieder
              verändert werden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#ddd]">Fortschritte sehen</AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              Zeige Graphen für deine abgeschlossenen Workouts an. So kannst Du deine Fortschritte
              über die Zeit sehen und analysieren. Es stehen verschiedene Anzeigen wie z.B. das
              gesamte bewegte Gewicht oder die durchscnittliche Wiederholungszahl zur Verfügung.
              <br />
              <br />
              In der Workout übersicht erhältst Du außerdem eine Schnellübersicht zu deiner
              Performance vom letzten Workout verglichen zum vorletzten Workout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#ddd]">Behalte den Überblick</AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              Deine Workouts können gefiltert und sortiert werden. Die Reihenfolge der ausgeführten
              Übungen kann einfach per Drag and Drop geändert werden. <br />
              <br />
              Eine Übersicht über alle abgeschlossenen Workout hast Du ebenfalls zur Verfügung.
              Wähle einen Monat aus und ändere ein abgeschlossenes Workout, wenn Du einen Fehler bei
              den Eintragungen entdeckt hast.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#ddd]">Messungen</AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              Zusätzlich zu den Workouts kannst Du auch andere Messungen durchführen. Auch hier
              wurde Wert auf eine einfache Bedienung gelegt. Erstelle einfach eine neue Messung mit
              einem Namen, einer Einheit und einem Wert und speichere die Messung.
              <br />
              <br />
              Die Messungen können ebenfalls in Graphen angezeigt werden und bieten in der Übersicht
              eine Schnellübersicht über die Entwicklung deiner Messungen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[#ddd]">Einstellungen</AccordionTrigger>
            <AccordionContent className="max-lg:pt-2 py-5 lg:px-2 text-[#ddd]">
              Pure Weight lässt sich auch auf deine Wünsche anpassen. Möchtest Du zum Beispiel, dass
              die Stoppuhr nach jedem Satz automatisch mit der in der Workout erstellten Pausenzeit
              gestartet wird, so kannst Du dies in den Einstellungen festlegen.
              <br /> <br />
              Lade Dir die App herunter und sieh Dir die Einstellungen einfach an.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
