import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      test_now: "Test now",
      test_now_long: "Test Pure Weight",
      headline_1: "Tracking progress with",
      headline_2: "is the easiest.",
      subtitle: "Pure Weight is designed to be easy to use - without sacrificing any features.",
      easy_tracking: "Easy tracking",
      easy_tracking_subtitle: "Track your gym progress quickly and easily.",
      see_progress: "See progress",
      see_progress_subtitle: "Show graphs for your completed workouts.",
      keep_overview: "Keep the overview",
      keep_overview_subtitle: "Keep track of your workouts and see your progress.",
      explore_function_title: "Explore all features in detail",
      explore_function_1_title: "Easy tracking",
      explore_function_1_content: `The tracking is designed to be able to quickly and easily track your progress in the gym.
                When entering the values of a set, these values are automatically
                taken over for the following sets. You can easily determine the order of the tracked exercise
                by swiping. And of course, all entered values can also be changed again.`,
      explore_function_2_title: "See progress",
      explore_function_2_content_1: `Show graphs for your completed workouts. This way you can see and analyze your progress
                    over time. There are different displays such as the
                    total weight moved or the average number of repetitions available.`,
      explore_function_2_content_2: `In the workout overview you also get a quick overview of your performance    
                    from the last workout compared to the second last workout.`,
      explore_function_3_title: "Keep the overview",
      explore_function_3_content_1: `Your workouts can be filtered and sorted. The order of the executed
                        Exercises can be easily changed by drag and drop.`,
      explore_function_3_content_2: `You also have an overview of all completed workouts. Select a month and change a completed workout if you find an error in the entries.`,
      explore_function_4_title: "Measurements",
      explore_function_4_content_1: `In addition to the workouts, you can also take other measurements. Measurements are also designed to keep the tracking as simple as possible. Simply create a new measurement with
                        a name, a unit and a value and save the measurement.`,
      explore_function_4_content_2: `The measurements can also be displayed in graphs and offer in the overview
                        a quick overview of the development of your measurements.`,
      agb: "Terms and Conditions",
      datenschutz: "Privacy Policy",
      imprint: "Imprint",
      support_content_1: "You can find general help within Pure Weight under",
      support_content_2:
        "Here you will find all important information on how to use Pure Weight. It is best to use the filter function to quickly find the appropriate help.",
      support_content_3:
        "If your concern is not found in the help, you are welcome to contact us and mention that you have already searched the help. Then we will be happy to add this point.",
      support_content_4: "For all further questions you are welcome to contact",
      support_content_5: "We will be happy to help you as soon as possible.",
      support_content_6: "Thank you for your trust and for using Pure Weight!",
      support_help_1: "Settings",
      support_help_2: "Manual",
    },
  },
  de: {
    translation: {
      test_now: "Jetzt testen",
      test_now_long: "Pure Weight testen",
      headline_1: "Fortschritte mit",
      headline_2: "einfach tracken",
      subtitle:
        "Pure Weight legt Wert darauf einfach bedienbar zu sein - ohne Abstriche bei den Feautres zu machen.",
      easy_tracking: "Einfaches Tracken",
      easy_tracking_subtitle: "Tracke deinen Fortschritt im Gym schnell und einfach.",
      see_progress: "Fortschritt sehen",
      see_progress_subtitle: "Zeige Graphen für deine abgeschlossenen Workouts an.",
      keep_overview: "Behalte den Überblick",
      keep_overview_subtitle:
        "Behalte den Überblick über deine Workouts und sehe deinen Fortschritt.",
      explore_function_title: "Entdecke alle Features im Detail",
      explore_function_1_title: "Einfaches Tracken",
      explore_function_1_content: `Das Tracking ist so designed, dass Du schnell und einfach deinen Fortschritt im Gym
              tracken kannst. Beim Eintragen der Werte eines Satzes, werden diese Werte automatisch
              für die folgenden Sätze übernommen. Du kannst die Reihenfolge der getrackten Übung
              einfach per Swipe bestimmen. Und natürlich können alle eingetragenen Werte auch wieder
              verändert werden.`,
      explore_function_2_title: "Fortschritt sehen",
      explore_function_2_content_1: ` Zeige Graphen für deine abgeschlossenen Workouts an. So kannst Du deine Fortschritte
              über die Zeit sehen und analysieren. Es stehen verschiedene Anzeigen wie z.B. das
              gesamte bewegte Gewicht oder die durchscnittliche Wiederholungszahl zur Verfügung.`,
      explore_function_2_content_2: `In der Workout übersicht erhältst Du außerdem eine Schnellübersicht zu deiner Performance
                vom letzten Workout verglichen zum vorletzten Workout.`,
      explore_function_3_title: "Behalte den Überblick",
      explore_function_3_content_1: `Deine Workouts können gefiltert und sortiert werden. Die Reihenfolge der ausgeführten
              Übungen kann einfach per Drag and Drop geändert werden.`,
      explore_function_3_content_2: `Eine Übersicht über alle abgeschlossenen Workout hast Du ebenfalls zur Verfügung. Wähle einen Monat aus und ändere ein abgeschlossenes Workout, wenn Du einen Fehler bei den Eintragungen entdeckt hast.`,
      explore_function_4_title: "Messungen",
      explore_function_4_content_1: `Zusätzlich zu den Workouts kannst Du auch andere Messungen durchführen. Auch hier
              wurde Wert auf eine einfache Bedienung gelegt. Erstelle einfach eine neue Messung mit
              einem Namen, einer Einheit und einem Wert und speichere die Messung.`,
      explore_function_4_content_2: `Die Messungen können ebenfalls in Graphen angezeigt werden und bieten in der Übersicht
                eine Schnellübersicht über die Entwicklung deiner Messungen.`,
      agb: "Allgemeine Geschäftsbedingungen",
      datenschutz: "Datenschutzerklärung",
      imprint: "Impressum",
      support_help_1: "Einstellungen",
      support_help_2: "Bedienhilfe",
      support_content_1: "Eine generelle Bedienhilfe findest Du innerhalb von Pure Weight unter",
      support_content_2:
        "Hier findest Du alle wichtigen Informationen zur Bedienung von Pure Weight. Am besten Du nutzt die Filterfunktion, um schnell die passende Hilfe zu finden.",
      support_content_3:
        "Falls dein Anliegen nicht in der Bedienhilfe zu finden ist, kannst Du dich gerne an uns wenden und dabei erwähnen, dass Du die Bedienhilfe bereits durchsucht hast. Dann fügen wir diesen Punkt gerne hinzu.",
      support_content_4: "Für alle weitere wende dich gerne an",
      support_content_5: "Wir helfen Dir gerne so schnell wie möglich weiter.",
      support_content_6: "Vielen Dank für dein Vertrauen und für die Nutzung von Pure Weight!",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
