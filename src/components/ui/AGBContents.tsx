import { useTranslation } from "react-i18next";

export const AGBContent = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "de") {
    return <GermanContent />;
  }
  return <EnglischContent />;
};

export const EnglischContent = () => {
  return (
    <p>
      <h2>1. General</h2>
      <h3>1.1. Scope and subject matter of the contract</h3>
      <p>
        These General Terms and Conditions (hereinafter: GTC) establish the legal framework for the
        use of the Pure Weight app, unless otherwise agreed.
      </p>
      <p>
        The Pure Weight app (hereinafter: app) is a strength training app that allows you to record
        and evaluate your training.
      </p>
      <h3>1.2. Contracting party</h3>
      <p>The provider of the app is:</p>
      <p>
        <div>Florian Erwerth</div>
        <div>Balanstraße 93</div>
        <div>81539 Munich</div>
        <div> Germany</div>
        <br />
        <div>Tel.: +49 157 30243460</div>
        <div>
          E‑Mail:
          <a href="mailto:pureweight.app@gmail.com" />
        </div>
        <div>Website: https://pureweight.info</div>
      </p>
      <h2>2. Services</h2>
      <h3>2.1. Paid services</h3>
      <p>
        The app is fully available to all users, if the required subscription has been concluded in
        the App Store.
      </p>
      <p>
        The exact scope of services of the app can be found in the app description in the Apple App
        Store (hereinafter: App Store) in the version valid at the time of conclusion of the
        contract.
      </p>
      <h3>2.2. Changes to the scope of services</h3>
      <p>
        The provider reserves the right to change the scope of services of the app, in particular to
        expand or limit it.
      </p>
      <h2>3. Conclusion of the contract</h2>
      <h3>3.1. Downloading the app</h3>
      <p>The app must first be downloaded.</p>
      <h3>3.2 Subscription</h3>
      <p>
        A subscription is required for the use of the app. The subscription fee is due in advance
        for the respective billing period.
      </p>
      <p>There are two subscription models:</p>
      <p>
        <li>Monthly subscription</li>
        <li>Annual subscription</li>
      </p>
      <p>After confirming the subscription in the App Store, the contract is concluded.</p>
      <p>
        Both subscription variants are preceded by a trial phase. During this trial phase, you can
        use the app with all features free of charge. The term of your subscription only begins
        after the trial phase has expired and you have not canceled the subscription via the App
        Store during this trial phase.
      </p>
      <p>
        The subscription can be canceled at any time. The cancellation must be made via the App
        Store. The cancellation takes effect at the end of the current billing period. After the end
        of the billing period, the subscription will not be renewed and the app can no longer be
        used.
      </p>
      <h3>3.3 Buying the app</h3>
      <p>
        The full functionality of the app can also be purchased. After paying the purchase price,
        the contract is concluded.
      </p>
      <p>
        You can withdraw from the purchase within 14 days without giving any reason. The
        cancellation can be made via the App Store.
      </p>
      <h2>4. Your obligations</h2>
      <h3>4.1. Health requirements</h3>
      <p>
        You use the app at your own risk. Your general state of health should be good. If you have
        known pre-existing conditions, you should consult a doctor to see if your physical
        conditions are suitable for training with the app. This applies especially if you know that
        you have one or more of the following complaints / interventions / illnesses:
      </p>
      <p>
        <li>Joint problems</li>
        <li>operative interventions</li>
        <li>cardiovascular diseases</li>
        <li>diseases of neuromuscular nature</li>
        <li>asthma or other lung or respiratory diseases</li>
        <li>other health restrictions</li>
      </p>
      <p>As a woman you should not train with the app if you are pregnant or breastfeeding.</p>
      <p>
        You should only go close to muscle failure under the supervision of a competent spotter /
        training partner who can help you in case of doubt.
      </p>
      <h3>4.2. Usage rights</h3>
      <p>
        We have the rights to the content of the app that is protected by copyright or otherwise.
        You only have a simple and non-transferable right to use these protected contents privately
        within the framework of the contractual provisions and you are not allowed to pass on your
        access data to third parties.
      </p>
      <h3>4.3. Behavioral obligations</h3>
      <p>
        You are obliged to refrain from all actions that impair the functionality of the app. This
        includes, for example, the use of scripts that access the app.
      </p>
      <h2>5. Usage fees</h2>
      <h3>5.1. Amount of usage fees</h3>
      <p>
        When you conclude a contract, the current prices at that time apply. An overview of the
        current prices can be found in the app description of the App Store.
      </p>
      <h3>5.2. Due date of payments</h3>
      <p>
        For a subscription with a term of one month, the payment is due in advance at the beginning
        of the billing month.
      </p>
      <p>
        For a subscription with a term of twelve months, the payment is due in advance at the
        beginning of the billing year.
      </p>
      <p>
        The first billing period begins on the day you conclude a subscription and thus conclude a
        contract.
      </p>
      <h2>6. Right of withdrawal</h2>
      <h3>6.1. Right of withdrawal</h3>
      <p>
        If you conclude a user contract or a subscription contract with us, you have the following
        right of withdrawal. You have the right to withdraw from the contract within fourteen days
        without giving any reason. The withdrawal period is fourteen days from the day the contract
        is concluded.
      </p>
      <p>
        To exercise your right of withdrawal, you must cancel your subscription within the
        fourteen-day period in the App Store.
      </p>
      <p>
        In addition, you can also contact:
        <p>
          <div>Florian Erwerth</div>
          <div>Balanstraße 93</div>
          <div>81539 München</div>
          <div> Deutschland</div>
          <br />
          <div>
            E‑Mail:
            <a href="mailto:pureweight.app@gmail.com" />
          </div>
        </p>
        to exercise your right of withdrawal. The revocation must be clearly explained.
      </p>
      <p>
        If you make use of this possibility, we will immediately (e.g. by e-mail) send you a
        confirmation of the receipt of such a revocation. To comply with the withdrawal period, it
        is sufficient that you send the notification of the exercise of the right of withdrawal
        before the end of the withdrawal period.
      </p>
      <h3>6.2. Consequences of withdrawal</h3>
      <p>
        If you withdraw from the contract, we will refund all payments we have received from you,
        including delivery costs (except for the additional costs resulting from the fact that you
        have chosen a different type of delivery than the cheapest standard delivery offered by us),
        immediately and at the latest within (14) fourteen days from the day on which we receive
        notification of your withdrawal from the contract. For this repayment, we will use the same
        means of payment that you used for the original transaction, unless expressly agreed
        otherwise with you; in no case will you be charged for this repayment.
      </p>
      <h3>6.3. Expiry of the right of withdrawal</h3>
      <p>
        Your right of withdrawal expires in the case of a contract for the delivery of digital
        content not on a physical data carrier, even if we have begun to execute the contract after
        you have expressly agreed that we begin to execute the contract before the end of the
        withdrawal period and you have confirmed your knowledge that you lose your right of
        withdrawal by giving your consent to the start of the execution of the contract.
      </p>
      <h3>6.4. Sample withdrawal form</h3>
      <p>
        If you want to withdraw from the contract, please fill out this form and send it back to:
        <p>
          <div>Florian Erwerth</div>
          <div>Balanstraße 93</div>
          <div>81539 München</div>
          <div> Deutschland</div>
          <br />
          <div>
            E‑Mail:
            <a href="mailto:pureweight.app@gmail.com" />
          </div>
        </p>
        <p>
          - I/we (*) hereby revoke the contract concluded by me/us (*) for the purchase of the
          following goods (*) /the provision of the following service (*) - Ordered on (*) /received
          on (*) - Name of the consumer(s) - Address of the consumer(s) - Signature of the
          consumer(s) (only in the case of communication on paper) Date _______ (*) Delete as
          applicable.
        </p>
      </p>
      <h2>7. Termination of the contract</h2>
      <h3>7.1. Term of the contract and termination</h3>
      <p>
        Your subscription is automatically extended by another month for a subscription with a term
        of one month or by another twelve months for a subscription with a term of twelve months, if
        you do not cancel your subscription in the settings of the App Store at least 24 hours
        before the end of the contract.
      </p>
      <p>
        After an effective cancellation, your subscription remains in effect until the end of the
        contract. During this time you can continue to use the app. Afterwards you will be excluded
        from using the app.
      </p>
      <p>
        We are entitled to terminate your subscription at the end of the term or at the end of the
        renewal period with a notice period of two weeks in text form.
      </p>
      <h3>7.3. Termination for good cause</h3>
      <p>
        Both parties have the right to terminate for good cause, which remains unaffected by the
        above provisions. We reserve the right to terminate your subscription if you are in default
        of payment.
      </p>
      <h2>8. Data protection</h2>
      <p>
        When using the app, we do not process any personal data. This privacy policy informs you
        about the nature and scope of data collection and shows you how we use your data.
      </p>
      <h2>9. Liability</h2>
      <h3>9.1. General</h3>
      <p>
        The app does not provide recommendations regarding the execution of the exercises you have
        saved. The app is only used to document your training performance. Therefore, we do not
        accept any liability for damages resulting from the execution of the exercises you have
        saved.
      </p>
      <h3>9.2. Product liability</h3>
      <p>
        Claims under the Product Liability Act remain unaffected by the above limitations or
        exclusions of liability.
      </p>
      <h3>9.3. No guarantee of achieving your training goals</h3>
      <p>
        We do not guarantee that you will achieve your training goals by using the app. The training
        result is also influenced by uncontrollable factors such as your genetic predisposition. It
        can therefore happen that different people achieve different results with the same use of
        the app.
      </p>
      <h3>9.4. Legal provisions for claims due to defective services</h3>
      <p>
        The legal provisions for claims due to defective services apply and your rights as a
        consumer remain unaffected in any case.
      </p>
      <h2>10. Final provisions</h2>
      <h3>10.1. Applicable law</h3>
      <p>
        These GTC and all legal relationships between you and us are subject to the law of the
        Federal Republic of Germany, excluding the UN Convention on Contracts for the International
        Sale of Goods (CISG).
      </p>
      <h3>10.2. Place of jurisdiction</h3>
      <p>
        If you do not have a general place of jurisdiction in Germany or in another EU member state
        or if you have moved your permanent residence to a country outside the EU after these
        General Terms and Conditions have become effective or if your place of residence or habitual
        abode is not known at the time of filing the action, the exclusive place of jurisdiction for
        all disputes arising from this contract is our place of business.
      </p>
      <h3>10.3. Contract language</h3>
      <p>The contract language is German.</p>
      <h3>10.4. No participation in consumer dispute resolution procedures</h3>
      <p>
        The EU Commission provides a platform for out-of-court dispute resolution, which gives you
        the opportunity to settle disputes related to your online order without going to court. You
        can find the dispute resolution platform here: https://ec.europa.eu/consumers/odr We are
        neither obliged nor willing to participate in a dispute resolution procedure before a
        consumer arbitration board.
      </p>
      <h3>10.5. Changes to our GTC</h3>
      <p>
        We are entitled to change our GTC with effect for the future if the changes are reasonable
        in consideration of your interests. We will of course inform you in advance about the type
        and scope of the changes and give you the opportunity to object to these changes within a
        reasonable period. We will also inform you that the changes will take effect if you do not
        object.
      </p>
    </p>
  );
};

export const GermanContent = () => {
  return (
    <p>
      <h2>1. Allgemeines</h2>
      <h3>1.1. Geltungsbereich und Vertragsgegenstand</h3>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend: AGB) legen den Rechtsrahmen für die
        Nutzung App Pure Weight fest, soweit nicht etwas anderes vereinbart ist.
      </p>
      <p>
        Die Pure Weight App (nachfolgend: App) ist eine Krafttrainings-App, die dir erlaubt dein
        Training aufzuzeichnen und auszuwerten.
      </p>
      <h3>1.2. Vertragspartner</h3>
      <p>Anbieter der App ist:</p>
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
      <h2>2. Leistungen</h2>
      <h3>2.1. Entgeltliche Leistungen</h3>
      <p>
        Die App steht allen Nutzenden im vollen Umfang zur Verfügung, wenn das erforderliche
        Abonnement im App Store abgeschlossen wurde.
      </p>
      <p>
        Der genaue Leistungsumfang der App ergibt sich aus der App-Beschreibung im Apple App Store
        (nachfolgend: App Store) in der zum Zeitpunkt des Vertragsschlusses gültigen Fassung.
      </p>
      <h3>2.2. Änderungen des Leistungsumfangs</h3>
      <p>
        Der Anbieter behält sich das Recht vor, den Leistungsumfang der App zu ändern, insbesondere
        zu erweitern oder zu beschränken.
      </p>
      <h2>3. Zustandekommen des Vertrages</h2>
      <h3>3.1. Herunterladen der App</h3>
      <p>Die App muss zunächst heruntergeladen werden.</p>
      <h3>3.2 Abonnement</h3>
      <p>
        Für die Nutzung der App ein Abonnement erforderlich. Die Abonnementgebühr wird im Voraus für
        den jeweiligen Abrechnungszeitraum fällig.
      </p>
      <p>Es gibt zwei Abo-Modelle:</p>
      <p>
        <li>Monatliches Abonements</li>
        <li>Jährliches Abonnement</li>
      </p>
      <p>Nach dem Bestätigen des Abonnements im App Store kommt der Vertrag zustande.</p>
      <p>
        Beiden Abonnement-Varianten ist eine Testphase vorgeschaltet. Während dieser Testphase
        kannst du die App kostenlos im vollem Umfang nutzen. Die Laufzeit deines Abonnements beginnt
        erst nachdem die Zeit der Testphase verstrichen ist und du das Abonnement während dieser
        Testphase nicht über den App Store gekündigt hast.
      </p>
      <p>
        Die Kündigung des Abonnements ist jederzeit möglich. Die Kündigung muss über den App Store
        erfolgen. Die Kündigung wird wirksam zum Ende des laufenden Abrechnungszeitraums. Nach
        Ablauf des Abrechnungszeitraums wird das Abonnement nicht mehr verlängert und die App kann
        nicht mehr genutzt werden.
      </p>
      <h3>3.3 Kauf der App</h3>
      <p>
        Die volle Funktionsumfang der App kann auch gekauft werden. Nach dem Bezahlen des
        Kaufbetrags kommt der Vertrag zustande.
      </p>
      <p>
        Von dem Kauf kann innerhalb von 14 Tagen ohne Angabe von Gründen zurückgetreten werden. Die
        Kündigung kann über den App Store erfolgen.
      </p>
      <h2>4. Deine Pflichten</h2>
      <h3>4.1. Gesundheitliche Voraussetzungen</h3>
      <p>
        Du nutzt die App auf eigenes Risiko. Dein allgemeiner Gesundheitszustand sollte gut sein.
        Bei bekannten Vorerkrankungen, solltest du dich von einem Arzt beraten lassen, ob deine
        körperlichen Voraussetzungen für das Training mit der App geeignet sind. Das gilt vor allem
        dann, wenn du weißt, dass du eine oder mehrere der folgenden Beschwerden / Eingriffe /
        Erkrankungen hast bzw. hattest:
      </p>
      <p>
        <li>Gelenkprobleme</li>
        <li>operative Eingriffe</li>
        <li>kardiovaskuläre Erkrankungen</li>
        <li>Erkrankungen neuromuskulärer Natur</li>
        <li>Asthma oder andere Lungen- oder Atemwegserkrankungen</li>
        <li>andere gesundheitliche Einschränkungen</li>
      </p>
      <p>Als Frau solltest du nicht mit der App trainieren, wenn du schwanger bist oder stillst.</p>
      <p>
        Du solltest nur unter Aufsicht eines kompetenten Spotters / Trainingspartners, der dir im
        Zweifel zur Hilfe kommen kann, nah ans Muskelversagen gehen.
      </p>
      <h3>4.2. Nutzungsrechte</h3>
      <p>
        Uns stehen die Rechte der urheberrechtlich oder anderweitig geschützten Inhalte der App zu.
        Du hast lediglich ein einfaches und nicht-übertragbares Recht, diese geschützten Inhalte
        privat im Rahmen der Vertragsbestimmungen zu nutzen und darfst deine Zugangsdaten auch nicht
        an Dritte weitergeben.
      </p>
      <h3>4.3. Verhaltenspflichten</h3>
      <p>
        Du bist dazu verpflichtet, alle Handlungen zu unterlassen, die die Funktionsfähigkeit der
        App beeinträchtigen. Dazu gehört z.B. die Verwendung von Skripten, die auf die App zu
        greifen.
      </p>
      <h2>5. Nutzungsentgelte</h2>
      <h3>5.1. Höhe der Nutzungsentgelte</h3>
      <p>
        Wenn du einen Vertrag abschließt, gelten die zu diesem Zeitpunkt aktuellen Preise. Eine
        Übersicht der aktuellen Preise findest du in der App-Beschreibung des App Stores.
      </p>
      <h3>5.2. Fälligkeit der Zahlungen</h3>
      <p>
        Bei einem Abonnement mit einer Laufzeit von einem Monat ist die Zahlung jeweils zu Beginn
        des Abrechnungsmonats sofort im Voraus fällig.
      </p>
      <p>
        Bei einem Abonnement mit einer Laufzeit von zwölf Monaten ist die Zahlung jeweils zu Beginn
        des Abrechnungsjahres sofort im Voraus fällig.
      </p>
      <p>
        Der erste Abrechnungszeitraum beginnt an dem Tag, an dem du ein Abonnement abgeschlossen und
        somit einen Vertrag geschlossen hast.
      </p>
      <h2>6. Widerrufsbelehrung</h2>
      <h3>6.1. Widerrufsrecht</h3>
      <p>
        Wenn du mit uns einen Nutzungsvertrag oder einen Vertrag über ein Abonnement abschließt,
        steht dir jeweils das nachfolgende Widerrufsrecht zu. Du hast das Recht, binnen vierzehn
        Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
        Tage ab dem Tag des Vertragsschlusses.
      </p>
      <p>
        Um dein Widerrufsrecht auszuüben, musst du dein Abonnement innerhalb der Frist von vierzehn
        Tagen im App Store kündigen.
      </p>
      <p>
        Zudem kannst Du auch Kontakt mit:
        <p>
          <div>Florian Erwerth</div>
          <div>Balanstraße 93</div>
          <div>81539 München</div>
          <div> Deutschland</div>
          <br />
          <div>E‑Mail: pureweight.app@gmail.com</div>
        </p>
        aufnehmen, um von deinem Widerrufsrecht Gebrauch zu machen. Der Widerruf muss dabei
        eindeutig erklärt werden.
      </p>
      <p>
        Machst du von dieser Möglichkeit Gebrauch, so werden wir dir unverzüglich (z.B. per E‑Mail)
        eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln. Zur Wahrung der
        Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts
        vor Ablauf der Widerrufsfrist absendest.
      </p>
      <h3>6.2. Folgen des Widerrufs</h3>
      <p>
        Wenn du den Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten
        haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
        daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste
        Standardlieferung gewählt hast), unverzüglich und spätestens binnen (14) vierzehn Tagen ab
        dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf des Vertrags bei uns
        eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der
        ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas
        anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <h3>6.3. Erlöschen des Widerrufsrechts</h3>
      <p>
        Dein Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem
        körperlichen Datenträger befindlichen digitalen Inhalten auch dann, wenn wir mit der
        Ausführung des Vertrags begonnen haben, nachdem du ausdrücklich zugestimmt hast, dass wir
        mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und du deine
        Kenntnis davon bestätigt hast, dass du durch deine Zustimmung mit Beginn der Ausführung des
        Vertrags dein Widerrufsrecht verlierst.
      </p>
      <h3>6.4. Muster-Widerrufsformular</h3>
      <p>
        Wenn du den Vertrag widerrufen willst, dann füll bitte dieses Formular aus und sende es
        zurück an:
        <p>
          <div>Florian Erwerth</div>
          <div>Balanstraße 93</div>
          <div>81539 München</div>
          <div> Deutschland</div>
          <br />
          <div>E‑Mail: pureweight.app@gmail.com</div>
        </p>
        <p>
          - Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den
          Kauf der folgenden Waren (*) /die Erbringung der folgenden Dienstleistung (*) - Bestellt
          am (*) /erhalten am (*) - Name des/der Verbraucher(s) - Anschrift des/der Verbraucher(s) -
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier) Datum _______ (*)
          Unzutreffendes streichen.
        </p>
      </p>
      <h2>7. Vertragsbeendigung</h2>
      <h3>7.1. Vertragslaufzeit und Kündigung</h3>
      <p>
        Dein Abonnement verlängert sich automatisch um einen weiteren Monat bei einem Abonnement mit
        einer Laufzeit von einem Monat oder um weiter zwölf Monate bei einem Abonnement mit einer
        Laufzeit von zwölf Monaten, wenn du dein Abonnement nicht spätestens bis 24 Stunden vor dem
        Vertragsende in den Einstellungen des App Stores kündigst.
      </p>
      <p>
        Nach einer wirksamen Kündigung bleibt dein Abonnement bis zum Vertragsende bestehen. Während
        dieser Zeit kannst du die App weiter benutzen. Anschließend wirst Du von der Nutzung der App
        ausgeschlossen.
      </p>
      <p>
        Wir sind dazu berechtigt, dein Abonnement zum Ende der Laufzeit oder zum Ende des
        Verlängerungszeitraums mit einer Frist von zwei Wochen in Textform zu kündigen.
      </p>
      <h3>7.3. Kündigung aus wichtigem Grund</h3>
      <p>
        Beide Parteien haben das Recht zur Kündigung aus wichtigem Grund, welches durch die
        vorstehenden Regelungen unberührt bleibt. Wir behalten uns vor dein Abonnement zu kündigen,
        wenn Du in Zahlungsverzug bist.
      </p>
      <h2>8. Datenschutz</h2>
      <p>
        Bei der Nutzung der App verarbeiten keine personenbezogenen Daten. Diese
        Datenschutzerklärung klärt dich über die Art und den Umfang der Datenerhebung auf und zeigt
        dir wie wir deine Daten nutzen.
      </p>
      <h2>9. Haftung</h2>
      <h3>9.1. Allgemein</h3>
      <p>
        Von der App werden keine Empfehlungen bezüglich der Ausführung der von Dir gespeicherten
        Übungen gegeben. Die App dient lediglich der Dokumentation deiner Trainingsleistungen. Daher
        übernehmen wir keine Haftung für Schäden, die durch die Ausführung der von dir gespeicherten
        Übungen entstehen.
      </p>
      <h3>9.2. Produkthaftung</h3>
      <p>
        Von den vorgenannten Haftungsbeschränkungen oder -ausschlüssen unberührt bleiben Ansprüche
        nach dem Produkthaftungsgesetz.
      </p>
      <h3>9.3. Keine Garantie für das Erreichen deiner Trainingsziele</h3>
      <p>
        Wir übernehmen keine Garantie dafür, dass du deine Trainingsziele durch Nutzung der App
        erreichst. Das Trainingsergebnis wird nämlich auch durch nicht steuerbare Faktoren wie z.B.
        deine genetischen Voraussetzungen beeinflusst. Dementsprechend kann es dazu führen, dass bei
        gleicher Nutzung der App, verschiedene Personen unterschiedliche Ergebnisse erzielen.
      </p>
      <h3>9.4. Gesetzliche Bestimmungen für Ansprüche aufgrund mangelhafter Leistungen</h3>
      <p>
        Es gelten die gesetzlichen Bestimmungen für Ansprüche aufgrund mangelhafter Leistungen und
        deine Rechte als Verbraucher bleiben in jedem Fall unberührt.
      </p>
      <h2>10. Schlussbestimmungen</h2>
      <h3>10.1. Anwendbares Recht</h3>
      <p>
        Diese AGB und alle Rechtsbeziehungen zwischen dir und uns unterliegen dem Recht der
        Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
      </p>
      <h3>10.2. Gerichtsstand</h3>
      <p>
        Hast du keinen allgemeinen Gerichtsstand in Deutschland oder in einem anderen
        EU-Mitgliedstaat oder hast du deinen festen Wohnsitz nach Wirksamwerden dieser Allgemeinen
        Geschäftsbedingungen in ein Land außerhalb der EU verlegt oder ist dein Wohnsitz oder
        gewöhnlicher Aufenthaltsort im Zeitpunkt der Klageerhebung nicht bekannt, ist
        ausschließlicher Gerichtsstand für sämtliche Streitigkeiten aus diesem Vertrag unser
        Geschäftssitz.
      </p>
      <h3>10.3. Vertragssprache</h3>
      <p>Die Vertragssprache ist Deutsch.</p>
      <h3>10.4. Keine Teilnahme an Verbraucherstreitbeilegungsverfahren</h3>
      <p>
        Die EU-Kommission stellt eine Plattform für außergerichtliche Streitschlichtungen bereit,
        die es dir ermöglicht, Streitigkeiten im Zusammenhang mit deiner Online-Bestellung
        außergerichtlich beizulegen. Hier findest du die Streitbeilegungs-Plattform:
        https://ec.europa.eu/consumers/odr Wir sind weder verpflichtet noch bereit, vor einer
        Verbraucherschlichtungsstelle an einem Streitbeilegungsverfahren teilzunehmen.
      </p>
      <h3>10.5. Änderungen unserer AGB</h3>
      <p>
        Wir sind dazu berechtigt, unsere AGB mit Wirkung für die Zukunft zu ändern, wenn die
        Änderungen unter Berücksichtigung deiner Interessen zumutbar sind. Wir werden dich
        selbstverständlich über die Art und den Umfang der Änderungen vorzeitig in Kenntnis setzen
        und dir die Möglichkeit geben, diesen Änderungen innerhalb einer angemessenen Frist zu
        widersprechen. Außerdem werden wir dich darauf hinweisen, dass die Änderungen bei Ausbleiben
        eines Widerspruchs wirksam werden.
      </p>
    </p>
  );
};
