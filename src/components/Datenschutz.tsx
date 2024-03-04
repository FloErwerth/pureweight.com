import { Link } from "./Link";
import { Modal } from "./Modal";
//adjust this text for the website, add headers, paragraphs spacing etc

export const Datenschutz = () => {
  return (
    <Modal
      dialogTitle="Datenschutzerklärung"
      Trigger={() => <Link classNames="text-[#ddd]" href="" text="Datenschutzerklärung" />}
    >
      <div className="flex flex-col gap-10 *:text-[#ddd]">
        <p>
          <p>
            <h2>1. Verantwortlicher</h2> Der Verantwortliche im Sinne der
            Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der
            Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p>
            <div>Florian Erwerth</div>
            <div>Balanstraße 93</div>
            <div>81539 München</div>
            <div> Deutschland</div>
            <br />
            <div>Tel.: +49 157 30243460</div>
            <div>E‑Mail: pureweight.app@gmail.com</div>
            <div>Website: https://pureweight.info</div>
          </p>

          <p>
            <h2>2. Allgemeines</h2>
            <h3>2.1 Umfang der Verarbeitung von personenbezogenen daten</h3>
            <p>Wir verarbeiten keine personenbezogenen Daten unserer Nutzer in Pure Weight.</p>
            <h3>2.2. Rechtsgrundlage für die Verarbeitung personenbezogener</h3>
            <p>
              Auch wenn Pure Weight keine Daten verarbeitet sind wir verpflichtet die
              Rechtsgrundlage für die Verarbeitung personenbezogener Daten anzugeben.
              <br />
              <br /> Daten Sofern die Rechtsgrundlage in unserer Datenschutzerklärung nicht genannt
              wird, beruht die Verarbeitung von personenbezogenen Daten auf folgenden
              Rechtsgrundlagen: Soweit wir für Verarbeitungsvorgänge personenbezogener Daten deine
              Einwilligung einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung
              (DSGVO) als Rechtsgrundlage. Bei der Verarbeitung von personenbezogenen Daten, die zur
              Erfüllung eines Vertrages, dessen Vertragspartei du bist, erforderlich ist, dient Art.
              6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
              die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind. Soweit eine
              Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO
              als Rechtsgrundlage. Für den Fall, dass lebenswichtige Interessen von dir oder einer
              anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich
              machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage. Ist die Verarbeitung zur
              Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten
              erforderlich und überwiegen deine Interessen, Grundrechte und Grundfreiheiten das
              erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage
              für die Verarbeitung.
            </p>
            <h3>2.3. Datenlöschung und Speicherdauer</h3>
            <p>
              Da keine Daten verarbeitet werden, gibt es auch keine Speicherdauer oder Löschung von
              Daten.
            </p>
            <h2>3. Daten, die du selbst in der App eingibst</h2>
            <h3>3.1. Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Um mit Pure Weight Workouts tracken zu können müssen folgende Daten im Endgerät
              gespeichert werden:
              <p>
                <li>Namen von Workouts</li>
                <li>Namen von Übungen</li>
                <li>Anzahl von Wiederholungen</li>
                <li>Anzahl von Sätzen</li>
                <li>Gewicht von Übungen</li>
                <li>Notizen</li>
              </p>
              Diese Daten werden dann auch verwendet, um Trainingsfortschritte zu präsentieren.
            </p>
            <h3>3.2. Rechtsgrundlage für die Datenverarbeitung</h3>
            <p>
              Die Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten, die du selbst in
              der App eingibst, ist Art. 6 Abs. 1 lit. b DSGVO, da die Erhebung dieser Daten im
              Rahmen der Erfüllung eines Vertrages, dessen Vertragspartei der Nutzer ist oder der
              Durchführung vorvertraglicher Maßnahmen dient.
            </p>
            <h3>3.3. Zweck der Datenverarbeitung</h3>
            <p>Wir speichern Daten, die du selbst in Pure Weight eingibst auf dem Endgerät, um:</p>
            <p>
              <li>den Trainingsfortschritt anzuzeigen</li>
              <li>das Trainingsdatum und die Dauer anzuzeigen</li>
              <li>eine Zusammenfassung des vorher abgeschlossenen Trainings anzeigen zu können</li>
              <li>den Messfortschritt anzuzeigen</li>
            </p>
            <h3>3.4. Dauer der Speicherung</h3>
            <p>Alle Daten werden gelöscht, sobald Pure Weight deinstalliert wurde.</p>
            <h3>3.5 Widerspruchs- und Beseitigungsmöglichkeit</h3>
            <p>
              Da alle Daten auf dem Endgerät verbleiben hat der Nutzer zu jederzeit die volle
              Kontrolle über die in Punkt 3.1 und Punkt 3.2 erwähnten Daten. Eine Widerspruchs- oder
              Beseitigungsmöglichkeit ist daher nicht notwendig.
            </p>
            <h2>4. Begründung eines Vertragsverhältnisses</h2>
            <h3>4.1. Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Das Abonement wird über den von Apple betriebenen App Store abgeschlossen. Dort werden
              die relevanten Daten wie deine z.B. deine Apple ID oder deine Zahlungsinformationen
              verarbeitet und gespeichert, um die Zahlung und die Nutzung des Abonements zu
              ermöglichen.
            </p>
            <p>
              Die Datenschutzerklärung von Apple ist hier zu finden:
              https://www.apple.com/de/privacy
            </p>
            <h3>4.2. Rechtsgrundlage für die Datenverarbeitung</h3>
            <p>
              Die Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten ist Art. 6 Abs. 1
              lit. b DSGVO, da die Erhebung dieser Daten im Rahmen der Erfüllung eines Vertrages,
              dessen Vertragspartei der Nutzer ist oder der Durchführung vorvertraglicher Maßnahmen
              dient.
            </p>
            <h3>4.3. Zweck der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung der personenbezogenen Daten dient der Abwicklung des Abonements und
              der Zahlung.
            </p>
            <h3>4.4. Dauer der Speicherung</h3>
            <p>
              Die Dauer der Datenspeicherung findest Du in der Datenschutzerklärung von Apple
              (https://www.apple.com/de/privacy).
            </p>
            <h3>4.5 Widerspruchs- und Beseitigungsmöglichkeit</h3>
            <p>
              Da die Daten von Apple verarbeitet werden, ist die Widerspruchs- und
              Beseitigungsmöglichkeit in der Datenschutzerklärung von Apple zu finden.
              (https://www.apple.com/de/privacy).
            </p>
            <h2>5. Google Fonts</h2>
            <p>
              Unsere Website benutzt Google Fonts Schriftarten (Google LLC, 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA). Die Datenschutzerklärung des Anbieters ist
              hier zu finden: https://www.google.com/policies/privacy
            </p>
            <h2>6. Deine Rechte</h2>
            <h3>6.1 Auskunftsrecht</h3>
            <p>
              Du kannst von dem Verantwortlichen eine Bestätigung darüber verlangen, ob
              personenbezogene Daten, die dich betreffen, von uns verarbeitet werden.
            </p>
            <p>
              Liegt eine solche Verarbeitung vor, kannst du von dem Verantwortlichen über folgende
              Informationen Auskunft verlangen:
            </p>
            <p>
              <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden</li>{" "}
              <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden</li>
              <li>
                die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die dich
                betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden
              </li>
              <li>
                die geplante Dauer der Speicherung der dich betreffenden personenbezogenen Daten
                oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung
                der Speicherdauer
              </li>
              <li>
                das Bestehen eines Rechts auf Berichtigung oder Löschung der dich betreffenden
                personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den
                Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung
              </li>
              <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
              <li>
                alle verfügbaren Informationen über die Herkunft der Daten, wenn die
                personenbezogenen Daten nicht bei dir erhoben werden
              </li>
              <li>
                das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling
                gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige
                Informationen über die involvierte Logik sowie die Tragweite und die angestrebten
                Auswirkungen einer derartigen Verarbeitung für dich.
              </li>
            </p>
            <p>
              Dir steht das Recht zu, Auskunft darüber zu verlangen, ob die dich betreffenden
              personenbezogenen Daten in ein Drittland oder an eine internationale Organisation
              übermittelt werden. In diesem Zusammenhang kannst du verlangen, über die geeigneten
              Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu
              werden.
            </p>
            <h3>16.2. Recht auf Berichtigung</h3>
            <p>
              Du hast ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
              Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die dich
              betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung
              unverzüglich vorzunehmen.
            </p>
            <h3>16.3. Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Unter den folgenden Voraussetzungen kannst du die Einschränkung der Verarbeitung der
              dich betreffenden personenbezogenen Daten verlangen:
            </p>
            <p>
              <li>
                wenn du die Richtigkeit der dich betreffenden personenbezogenen für eine Dauer
                bestreitest, die es dem Verantwortlichen ermöglicht, die Richtigkeit der
                personenbezogenen Daten zu überprüfen
              </li>
              <li>
                die Verarbeitung unrechtmäßig ist und du die Löschung der personenbezogenen Daten
                ablehnst und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten
                verlangst
              </li>
              <li>
                der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung
                nicht länger benötigt, du sie jedoch zur Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen benötigst, oder
              </li>
              <li>
                wenn du Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt hast
                und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber
                deinen Gründen überwiegen.
              </li>
            </p>
            <p>
              Wurde die Verarbeitung der dich betreffenden personenbezogenen Daten eingeschränkt,
              dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit deiner Einwilligung
              oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
              Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
              eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats
              verarbeitet werden.
            </p>
            <h3>16.4. Recht auf Löschung</h3>
            <p>
              a) Löschungspflicht
              <br />
              Du kannst von dem Verantwortlichen verlangen, dass die dich betreffenden
              personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist
              verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe
              zutrifft:
              <li>
                Die dich betreffenden personenbezogenen Daten sind für die Zwecke, für die sie
                erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
              </li>
              <li>
                Du widerrufst deine Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1
                lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen
                Rechtsgrundlage für die Verarbeitung.
              </li>
              <li>
                Du legst gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es
                liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder du legst
                gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
              </li>
              <li>
                Die dich betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.
              </li>
              <li>
                Die Löschung der dich betreffenden personenbezogenen Daten ist zur Erfüllung einer
                rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                erforderlich, dem der Verantwortliche unterliegt.
              </li>
              <li>
                Die dich betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste
                der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
              </li>
              b) Information an Dritte
              <br />
              Hat der Verantwortliche die dich betreffenden personenbezogenen Daten öffentlich
              gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so trifft
              er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten
              angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung
              Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren,
              dass du als betroffene Person von ihnen die Löschung aller Links zu diesen
              personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen
              Daten verlangt hast.
              <br />
              c) Ausnahmen
              <br />
              Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist:
              <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
              <li>
                zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht
                der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert,
                oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in
                Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
              </li>
              <li>
                aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß
                Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
              </li>
              <li>
                für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder
                historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO,
                soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der
                Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder
              </li>
              <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
              <h3>6.5. Recht auf Unterrichtung</h3>
              <p>
                Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
                gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen
                Empfängern, denen die dich betreffenden personenbezogenen Daten offengelegt wurden,
                diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung
                mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem
                unverhältnismäßigen Aufwand verbunden. Ihnen steht gegenüber dem Verantwortlichen
                das Recht zu, über diese Empfänger unterrichtet zu werden.
              </p>
              <h3>6.6. Recht auf Datenübertragbarkeit</h3>
              <p>
                Du hast das Recht, die dich betreffenden personenbezogenen Daten, die du dem
                Verantwortlichen bereitgestellt hast, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten. Außerdem hast du das Recht, diese Daten einem
                anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die
                personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
                <li>
                  die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art.
                  9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO
                  beruht und
                </li>
                <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
              </p>
              <p>
                In Ausübung dieses Rechts hast du ferner das Recht, zu erwirken, dass die dich
                betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen
                Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten
                und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
              </p>
              <p>
                Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
                personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist, die
                im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die
                dem Verantwortlichen übertragen wurde.
              </p>
              <h3>6.7. Widerspruchsrecht</h3>
              <p>
                Du hast das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung der dich betreffenden personenbezogenen Daten, die
                aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzule gen;
                dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der
                Verantwortliche verarbeitet die dich betreffenden personenbezogenen Daten nicht
                mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung
                nachweisen, die deine Interessen, Rechte und Freiheiten überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen. Werden die dich betreffenden personenbezogenen Daten verarbeitet,
                um Direktwerbung zu betreiben, hast du das Recht, jederzeit Widerspruch gegen die
                Verarbeitung der dich betreffenden personenbezogenen Daten zum Zwecke derartiger
                Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                Direktwerbung in Verbindung steht. Widersprichst du der Verarbeitung für Zwecke der
                Direktwerbung, so werden die dich betreffenden personenbezogenen Daten nicht mehr
                für diese Zwecke verarbeitet. Im Zusammenhang mit der Nutzung von Diensten der
                Informationsgesellschaft kannst du ungeachtet der Richtlinie 2002/58/EG dein
                Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische
                Spezifikationen verwendet werden.
              </p>
              <h3>6.8. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
              <p>
                Du hast das Recht, deine datenschutzrechtliche Einwilligungserklärung jederzeit zu
                widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund
                der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                <h3>6.9. Automatisierte Entscheidung im Einzelfall einschließlich Profiling</h3>
                Du hast das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung
                — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die dir
                gegenüber rechtliche Wirkung entfaltet oder dich in ähnlicher Weise erheblich
                beeinträchtigt. Dies gilt nicht, wenn die Entscheidung
                <li>
                  für den Abschluss oder die Erfüllung eines Vertrags zwischen dir und dem
                  Verantwortlichen erforderlich ist,
                </li>
                <li>
                  aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
                  Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene
                  Maßnahmen zur Wahrung deiner Rechte und Freiheiten sowie deiner berechtigten
                  Interessen enthalten oder
                </li>
                <li>mit deiner ausdrücklichen Einwilligung erfolgt.</li>
              </p>
              <p>
                Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien
                personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2
                lit. a oder g DSGVO gilt und angemessene Maßnahmen zum Schutz der Rechte und
                Freiheiten sowie deiner berechtigten Interessen getroffen wurden. In den in Absatz 1
                genannten Fällen trifft der Verantwortliche angemessene Maßnahmen, um die Rechte und
                Freiheiten sowie deine berechtigten Interessen zu wahren, wozu mindestens das Recht
                auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf
                Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
              </p>
              <h3>6.10. Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                Rechtsbehelfs steht dir das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                insbesondere in dem Mitgliedstaat deines Aufenthaltsorts, deines Arbeitsplatzes oder
                des Orts des mutmaßlichen Verstoßes, zu, wenn du der Ansicht bist, dass die
                Verarbeitung der dich betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
                Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der
                Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </p>
              <h2>7. Änderung der Datenschutzbestimmung</h2>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung
                der geltenden Datenschutzvorschriften zu ändern bzw. anzupassen. Die letzte Änderung
                dieser Datenschutzbestimmung erfolgte am 12. Februar, 2021.
              </p>
            </p>
          </p>
        </p>
      </div>
    </Modal>
  );
};
