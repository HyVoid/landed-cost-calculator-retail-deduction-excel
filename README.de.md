[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-Vorlage für Landed-Cost-Berechnung, Sendungsabweichungen und Rückforderung von Händlerabzügen (FMCG & Margenbrücke im Importhandel)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Cost Accounting & Margin Recovery](https://img.shields.io/badge/Tool-Landed%20Cost%20%26%20Deduction%20Audit-051C2C)

<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/2b016445-ce04-4943-8a86-f1371b49f1a3" />

**Ein Landed-Cost-Rechner für Importe, ein Abstimmungsmodell für Sendungskostenabweichungen und eine Excel-Vorlage zur Rückforderung von Händlerabzügen und Chargebacks. Entwickelt für Importeure von Konsumgütern (FMCG), Supply-Chain-Analysten und Commercial-Finance-Controller, um PO-Schätzungen gegen tatsächliche Seefracht, Zölle, Wechselkurse (FX) und Hafenüberlandverkehr abzugleichen — während die Abzüge aus Händlerabrechnungen (einschließlich Woolworths, Coles, ALDI, Kmart und Big W) geprüft werden, um die echte Nettomarge auf SKU-Ebene aufzudecken.**

> **Zugang zu den Landed Cost & Margenbrücke-Tools (keine Registrierung oder Installation)**
>
> - 🌐 **[Starten Sie den kostenlosen webbasierten Landed-Cost- und Margenbrücken-Simulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** — Testen Sie PO-zu-Sendung-Landed-Cost-Abweichungen, FX-Impact-Zerlegung und Händlerabzugs-Klassifizierungen sofort im Browser (kostenlose HTML-Edition).
> - 📥 **[Laden Sie die vollständige Landed-Cost- und Händlerabzugs-Excel-Arbeitsmappe herunter (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** — Erhalten Sie die 5-Blatt-Microsoft-Excel-Vorlage mit dynamischen Arrays für Offline-Sendungsabstimmung, Verfolgung von Abrechnungsstreitigkeiten und wiederkehrende SKU-Rentabilitätsaudits *(Bezahlte Kommerzielle Edition — mit 30-tägiger Geld-zurück-Garantie)*.


Speziell entwickelt für **Workflows für Offshore-Beschaffung und Importdistribution** — von Factory-POs ins Ausland über internationale Seefracht, australische Zollabfertigung (DAFF/ABF), lokalen Hafenüberlandverkehr bis zur Großhandelsdistribution in große Handelsketten (**Woolworths, Coles, ALDI, Kmart und Big W**). Statt Ihr ERP, Ihr Hauptbuch oder Ihren Zollagenten zu ersetzen, fungiert dieser Product Costing & Reconciliation Analyzer (PCRA) als auditierbare Entscheidungsunterstützungsebene, die eine entscheidende kommerzielle Frage beantwortet:

**Wenn FOB-Einkaufspreis, Seefracht, Zölle, lokale Hafenabfertigung, Wechselkursschwankungen (FX) und Händlerabrechnungsabzüge vollständig abgestimmt sind — welche Nettoproduktmarge bleibt tatsächlich übrig, und welche Ausnahmen erfordern sofortiges Handeln bei Streitfällen oder Repricing?**

---

## Kernmetriken der Importkalkulation & Gelöste Probleme bei Margenverlusten im Handel

Statt getrennte Spediteursrechnungen, Zollanmeldungsblätter und Händlerabrechnungs-PDFs zu verwalten, vereint dieser Rahmen Kostenrechnung und kommerzielle Abzugsprüfung. So ordnet das Modell **Schwachpunkte bei Import und Handelsdistribution** automatisierten **Margenbrücken-Metriken** zu:

| Schwachpunkt bei Import- & Handelsmarge | Automatisierter Abgleichs- & Prüfmechanismus | Überwachte KPIs für Kostenrechnung & Marge |
| :--- | :--- | :--- |
| **Untertrimmte Standard-/geschätzte Landed Costs** | Berechnet die wahre Basis-Landed-Cost je PO und SKU aus Rohkomponentenregeln neu und deckt weggelassene Kostenelemente auf, bevor sie Großhandelspreise verzerren. | Erwartete vs. neu berechnete Standard-Landed Cost ($/Einheit), Kennzeichen für Unterschätzung der Baseline |
| **Nicht zugewiesene Seefracht, Zölle & Hafengebühren** | Verteilt tatsächliche Fracht auf Container-Ebene, Zollabgaben, Terminalhandhabung im Hafen (THC) und lokalen Überlandverkehr auf verifizierte Empfangsmengen. | Realisierte Landed Cost je Einheit, Aufteilung Fracht/Zoll/Hafen/Überlandverkehr je SKU |
| **Vermischte FX- vs. Logistik-Kostenüberschreitungen** | Zerlegt die Gesamtabweichung der Sendungskosten, indem Wechselkurs (Budget vs. tatsächlicher Spot-/Hedging-Kurs) von operativen Fracht- und Zollsatzspitzen getrennt wird. | Gesamtabweichung der Landed Cost ($ / %), FX-Abweichungstreiber, Zuordnung von Fracht- & Zollüberschreitungen |
| **Illusorische „Buch-Bruttomarge"-Berichte** | Erstellt eine mehrstufige SKU-Margenbrücke, die die buchhalterische Marge mit realisierten Sendungskosten und Nachverkaufs-Handelsabzügen verbindet. | Buch-Bruttomarge (%) $\rightarrow$ Realisierte Landed-Marge (%) $\rightarrow$ Netto-Effektivmarge (%) |
| **Kryptische Händlerabrechnungs- & Chargeback-Codes** | Normalisiert fragmentierte Abzugscodes großer Lebensmitteleinzelhändler und Kaufhäuser zu standardisierten Kategorien (vertragliche Rabatte vs. anfechtbare Strafen). | Normalisierte Abzugskategorie (Trading Terms, Co-op, DIFOT/OTIF-Strafen, Schwund/Beschädigung), Warnungen bei nicht gemappten Codes |
| **Verpasste Händlerclaim- & Chargeback-Rückforderungen** | Kennzeichnet hochwertige anfechtbare Abzüge anhand konfigurierbarer Dollar-Schwellen, weist Streitfallverantwortliche und erforderliche POD/Lieferevidenz-Checklisten zu. | Rückforderbarer Abzugspool ($), Status der Streitbeilegung, Warteschlange prioritärer SKU-Ausnahmen |

---

## Schritt-für-Schritt-Anleitung: Wie Sie Import-Landed Costs abgleichen und Händlerabzüge prüfen

Die Arbeitsmappe folgt einem strukturierten **4-stufigen Workflow für Sendungsabschluss und monatlichen Finanzabgleich**: Konfigurieren Sie einmalig FX-Kurse, Zölle und Händlercode-Mappings, fügen Sie Roh-ERP-/Abrechnungsexporte ein, prüfen Sie die Abweichungsbrücke und lösen Sie Claim-Rückforderungen aus.

### Schritt 1: FX-Kurse, Abweichungsschwellen & Händlerabzugs-Mappings konfigurieren
Öffnen Sie das Blatt `01_Rules_Mapping`, um Ihre kommerziellen Governance-Parameter und Nachschlagetabellen festzulegen:

- **Finanz- & FX-Kontrollen:** Legen Sie die Berichtsperiode, die Basis-Buchhaltungswährung (z. B. `AUD` / `USD`), den budgetierten Wechselkurs, den tatsächlich realisierten Wechselkurs und die Ziel-Bruttomargenuntergrenze fest.
- **Ausnahme-Alarm-Schwellen:** Definieren Sie akzeptable Landed-Cost-Abweichungstoleranzen (%) und den Dollar-Schwellenwert für Warnungen zu hochwertigen Händlerabzügen.
- **Zoll- & Händlercode-Normalisierung:** Prüfen Sie die Zollsätze und mappen Sie proprietäre Händlerabzugscodes (über Woolworths, Coles, ALDI, Kmart, Big W) auf standardisierte Buchhaltungskategorien und Rückforderungs-Berechtigungsregeln.

### Schritt 2: PO-Schätzungen, Zollrechnungen & Händlerabrechnungen importieren
Exportieren Sie Rohtransaktionsdaten aus Ihrem ERP, Inventarsystem, Zollagenten oder Lieferantenportalen der Händler (z. B. SAP, NetSuite, MYOB, Cin7, Dear/Unleashed, Lieferanten-Abrechnungs-CSVs) und fügen Sie sie in die strukturierten Eingabeblöcke von `02_Source_Data` ein:

- **Beschaffung & Wareneingang:** PO-Kostenschätzungen und tatsächlich eingegangene Lagermengen je SKU.
- **Logistik & Zollabfertigung:** Tatsächliche internationale Frachtrechnungen, Zollbescheide, Hafengebühren und Inlands-Überlandverkehrsrechnungen.
- **Kommerzielle Verkäufe & Abzüge:** Bruttoverkaufsrechnungen der Händler und positionsgenaue Abrechnungsabzugslisten (mit Original-Belegreferenz-IDs zur Audit-Nachverfolgbarkeit).

### Schritt 3: Landed-Cost-Engine & Abweichungszerlegung prüfen
Gehen Sie die automatisierten Berechnungsblätter durch, um die Sendungswirtschaft vor Abschluss der Managementberichte zu verifizieren:

1. **Basis-Kostenverifizierung (`03_Cost_Engine`):** Prüfen Sie die neu berechnete Standard-Landed Cost je SKU, um fehlende Zoll- oder Frachtannahmen in Ihrem ursprünglichen Preisblatt zu entdecken.
2. **Abweichungs- & Abzugsabstimmung (`04_Reconciliation`):** Überprüfen Sie tatsächliche Landed Costs je Einheit, die Abweichungszuordnung Treiber für Treiber (FX vs. Fracht vs. Zoll vs. Hafen), normalisierte Händlerabzugs-Kategorien und automatische Rückforderungskennzeichen.
3. **Integritätsprüfung mit Nullrest:** Vergewissern Sie sich, dass alle Validierungswarnungen behoben sind und der Abstimmungsrest null beträgt, bevor Sie auf Führungsergebnisse vertrauen.

### Schritt 4: Chargeback-Streitfälle priorisieren & in der Excel-Arbeitsmappe operationalisieren
Öffnen Sie `05_Management_Summary`, um finanzielle Abweichungen in kommerzielle Maßnahmen umzusetzen:
- Prüfen Sie die **Margenbrücke** auf Produkte mit schwerer Erosion (z. B. ein SKU, das von einem `35% Book Gross Margin` auf ein `24% Net Effective Margin` fällt).
- Prüfen Sie die **Streitbeilegungs-Warteschlange**, weisen Sie einen Key-Account-Manager oder Logistikverantwortlichen zu, stellen Sie Lieferevidenz (POD) oder Käufer-E-Mails zusammen und verfolgen Sie den Claim-Status bis zur Lösung.

> 🚢 **Bereit, Margenverluste bei Ihren Importsendungen und Handelskonten zu stoppen?** 
> Nachdem Sie die Abweichungsbrücke im **[kostenlosen Browser-basierten Landed-Cost- und Margensimulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** erkundet haben, holen Sie sich die **[vollständige PCRA-Landed-Cost- und Abzugsrückforderungs-Excel-Arbeitsmappe (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)**, um eigene Sendungsläufe offline zu verarbeiten, Händlerabzugs-Mappings anzupassen und ein wiederholbares monatliches Margen-Audit zu pflegen *(erfordert Microsoft 365 oder Excel 2021+ für dynamische Array-Formeln; mit 30-tägiger Geld-zurück-Garantie)*.

---

## Warum ich diesen Import-Landed-Cost- & Handelsmargenbrücken-Rahmen gebaut habe

Im Offshore-Import- und Großhandelsvertrieb ist der werkseitige FOB-Einkaufspreis nur die Startlinie der Produktkalkulation.

Ein kommerzielles Angebot wird typischerweise Monate im Voraus mit einem budgetierten Wechselkurs und geschätzter Containerfracht erstellt. Wenn die physische Sendung den Zoll passiert, sieht sich der Importeur tatsächliche Seefrachtzuschläge, Zollabgaben, Terminalhandhabungsgebühren und Inlands-Überlandverkehrsrechnungen gegenüber. Wochen nach der Lieferung an die Distributionszentren des Handels treffen die Händlerabrechnungsanzeigen ein — mit Abzügen für Werbe-Co-op-Rabatte, DIFOT/OTIF-Verspätungsstrafen, Barcode-/Karton-Compliance-Strafen oder Fehlmengenreklamationen. Da diese Belege wochenversetzt bei Speditionen, Zollagenten, Lagerteams und Debitorenbuchhaltung eintreffen, leben sie selten im selben System.

### Die Illusion von „35% Buchmarge vs. 24% Netto-Effektivmarge"
Der analytische Kernfehler im Großhandelsvertrieb besteht darin, jede Abteilungs-Tabelle als vollständig zu behandeln:
- Ein **Einkaufskostenblatt** kann mathematisch korrekt sein und dennoch lokale Hafenüberlandkosten oder Zollanmeldegebühren vollständig weglassen.
- Ein **Verkaufs-Bruttomargenbericht** sieht bei **35% Buchmarge** gesund aus, weil er auf veralteten Standard-Landed Costs beruht.
- Eine **Debitorenbuchhaltung** schreibt Händler-Compliance-Abzüge als routineartige Geschäftskosten ab, ohne zu prüfen, ob Lager-PODs einen formellen Einspruch stützen — oder umgekehrt verschwendet sie Mitarbeiterstunden mit vertraglichen Rabatten, die nicht zurückforderbar sind.

Wenn tatsächliche Sendungsüberschreitungen und nicht zurückgeforderte Händlerabzüge zusammengerechnet werden, bricht dieses SKU mit „gesunder" **35% Buch-Bruttomarge häufig auf 24% Netto-Effektivmarge ein**. Bei 24% ändert sich die kommerzielle Maßnahme vollständig: Das Team muss das SKU sofort neu bepreisen, Fracht-/Lieferantenkonditionen neu verhandeln, die DIFOT-Compliance des Lagers korrigieren oder einen Abzugsrückforderungsanspruch einreichen.

Ich habe PCRA gebaut, um diesen End-to-End-Diagnose-Workflow in eine überprüfbare, wiederholbare Arbeitsmappe zu packen — versteckte Kostenannahmen und anfechtbare Handelsabzüge sichtbar zu machen, bevor die Margenerosion dauerhaft wird.

---

## Getrennte Import-Tabellen vs. integrierte Landed-Cost- & Abzugs-Engine

| Kalkulations- & Margenprüf-Dimension | Getrennte ERP-Exporte & Ad-hoc-Kostenblätter | PCRA-Landed-Cost- & Margenbrücken-Arbeitsmappe (dieses Tool) |
| :--- | :--- | :--- |
| **Standard-Landed-Cost-Baselines** | Weggelassene Hafengebühren oder falsch berechnete Zölle fließen still in Großhandelspreislisten und Margenberichte. | Berechnet die erwartete Landed Cost je PO und SKU unabhängig neu und kennzeichnet unterschätzte Baselines vor der Preisprüfung. |
| **Fracht- & Zollzuweisung nach PO** | Containerfracht-, Zoll- und Überlandverkehrsrechnungen kommen spät und werden auf pauschale Gemeinkostenkonten gebucht. | Weist tatsächliche sendungsspezifische Logistik- und Zollkosten den empfangenen Mengen bis auf SKU-Ebene zu. |
| **FX- vs. Fracht-Abweichungszuordnung** | Finanzteams sehen eine Gesamtüberschreitung, können aber Währungsabwertung nicht von Spediteurstariferhöhungen trennen. | Zerlegt die Landed-Cost-Abweichung nach konkretem Treiber (**FX-Bewegung, Seefracht, Zoll, Hafenabfertigung, Überlandverkehr**). |
| **Multi-Händler-Abzugsnormalisierung** | Kryptische Abrechnungscodes von Woolworths, Coles, ALDI, Kmart und Big W verhindern kontenübergreifende Verlustanalysen. | Normalisiert händlerspezifische Abzugscodes in strukturierte Kategorien und hebt nicht gemappte Codes zur sofortigen Klassifizierung hervor. |
| **Retail-Chargeback- & Strafen-Rückforderung** | Anfechtbare DIFOT-Strafen und Fehlmengenreklamationen versinken in Werberabatt-Abzügen — Geld bleibt auf dem Tisch liegen. | Wendet Dollar-Schwellen, Rückforderungs-Berechtigungskennzeichen, Verantwortlichenzuweisungen und Evidenz-Checklisten an, um eine umsetzbare Streitwarteschlange aufzubauen. |
| **Echte SKU-Rentabilitätssicht** | Die Führung setzt auf eine einzige Headline-Bruttomarge %, die Supply-Chain-Überschreitungen und Retail-Compliance-Leckagen verschleiert. | Erzeugt eine End-to-End-**SKU-Margenbrücke** (`Book Gross Margin` $\rightarrow$ `Realized Landed Margin` $\rightarrow$ `Net Effective Margin`). |

---

## Für wen dieses Kalkulations- & Abstimmungstool gebaut ist: Rollen & Workflows

Dieses Dual-Format-Toolkit (kostenloser Browser-Simulator + kommerzielle Excel-Arbeitsmappe) richtet sich an Finanz-, Supply-Chain- und Commercial-Retail-Teams in importintensiven Konsumgütermärkten:

- **Importeure, Großhändler & FMCG-Markenbetreiber:** Volle Transparenz über Offshore-Stückwirtschaft. Nutzen Sie den **Import-Landed-Cost-Rechner**, um echte Containerankunftskosten von Asien-/Auslandsfabriken über die australische Hafenabfertigung bis zur Inlandszustellung zu verifizieren.
- **Kostenrechner, Finanzcontroller & Commercial-FP&A-Teams:** Ersetzen Sie zerbrechliche Monatsabschluss-Abweichungsabstimmungen durch eine standardisierte **PO-zu-Ist-Landed-Cost-Abstimmungsvorlage**. Trennen Sie FX-Gewinne/-Verluste von Frachtabweichungen und stimmen Sie die Herstellkosten (COGS) mit vollständiger Belegnachverfolgbarkeit ab.
- **Key-Account-Manager (NAMs) & Retail-Commercial-Leads:** Hören Sie auf, bei Range Reviews der Händler blind zu fliegen. Nutzen Sie die **SKU-Margenbrücke und den Abzugsanalysator**, um genau zu sehen, wie Handelskonditionen, Werberabatte und Compliance-Strafen die Nettorentabilität bei **Woolworths, Coles, ALDI, Kmart und Big W** beeinflussen.
- **Debitorenspezialisten (AR) & Abzugsrückforderungsexperten:** Verwandeln Sie chaotische Händlerabrechnungen in einen priorisierten **Chargeback-Streitverfolger**. Isolieren Sie hochwertige Compliance-Strafen und Fehlmengenreklamationen von vertraglichen Rabatten, damit Ihr Team nur durch Lieferevidenz gedecktes, zurückforderbares Geld verfolgt.
- **Supply-Chain-, Logistik- & Beschaffungsanalysten:** Prüfen Sie Spediteursrechnungen, Zollagenten-Tarifklassifikationen und Hafenüberlandkosten je empfangener Einheit, um Containernutzungs-Ineffizienzen und Lieferantenübergebühren zu identifizieren.

---

## Branchen-Anwendungsfälle & Nischen-Import-/Retail-Szenarien

Ob Sie Eigenmarken-Haushaltswaren, Fast Moving Consumer Goods (FMCG), Bekleidung oder Baumarktartikel in große Handelsketten importieren — dieses Modell passt sich reibungsintensiven Margenszenarien an:

### 1. Abzugsprüfung bei australischen Supermärkten & Kaufhäusern (Woolworths, Coles, ALDI, Kmart, Big W)
Die Belieferung großer australischer nationaler Händler erfordert die Navigation durch komplexe Lieferanten-Handelskonditionen, Werbefinanzierung, Schwund-Zulagen und strenge Supply-Chain-Compliance-Regime (wie DIFOT-/OTIF-Lieferfenster und Paletten-/Karton-Etikettierungsregeln). Durch das Mappen der Kombinationen **Händler + Abzugscode** in `01_Rules_Mapping` können kommerzielle Teams vereinbarte vertragliche Rabatte automatisch von anfechtbaren Compliance-Strafen trennen.

### 2. Containerbezogene Zerlegung von Seefracht-, Zoll- & FX-Abweichungen
Wenn ein Auslandsauftrag mit `0.68 AUD/USD` und einer geschätzten Containerfracht von `$3,500` kalkuliert wird, aber drei Monate später mit `0.64 AUD/USD`, Hochsaison-Stauzuschlägen und Hafendemurrage-Gebühren verzollt wird, verdampfen die Headline-Produktmargen. Die `04_Reconciliation`-Engine isoliert, wie viel des Stückkostensprungs durch **Währungsbewegung versus Logistikinflation** verursacht wurde — und zeigt, ob die Finanzabteilung die FX-Absicherung anpassen oder der Einkauf die Spediteurstarife neu verhandeln muss.

### 3. Begründung von Großhandelspreiserhöhungen & Vorbereitung von Range Reviews
Handelseinkäufer akzeptieren Großhandelspreiserhöhungen selten auf Grundlage vager Behauptungen über „steigende Supply-Chain-Kosten". Nutzen Sie die **neu berechnete Landed-Cost-Baseline und die Abweichungstreiber-Aufschlüsselung**, um bei Verhandlungen mit Handelseinkäufern überprüfbare Kostenevidenz auf Komponentenebene (Zoll, Seefracht, FX) vorzulegen, oder identifizieren Sie dauerhaft unrentable SKUs, die ein Delisting oder Re-Engineering erfordern.

---

### Operativer Umfang & Governance-Hinweis
*PCRA ist ein analytischer Entscheidungsunterstützungsrahmen und eine Kostenabstimmungs-Arbeitsmappe — kein transaktionales ERP, kein gesetzliches Hauptbuch, kein lizenziertes Zolldatei-System, keine Steuerberatung und kein automatisiertes Händlerstreitportal. Es verifiziert keine Fremd-Frachtrechnungen eigenständig, begründet keinen rechtlichen Anspruch auf Rückforderung eines Handelsabzugs und reicht keine Claims bei Handelseinkäufern ein. Die Ausgabegenauigkeit hängt strikt von der Vollständigkeit der benutzerseitig gelieferten Quelldatensätze, Code-Mappings und Parameterannahmen ab. Die kommerzielle Excel-Edition erfordert **Microsoft 365 oder Excel 2021 und höher** (mit Unterstützung dynamischer Array-Formeln).*

---

## Über den Ersteller

Ich baue leichte, überprüfbare operative Entscheidungsunterstützungs-Tools für wiederkehrende kommerzielle Workflows mit zu vielen beweglichen Variablen für die mentale Verfolgung, die jedoch keine teure Enterprise-Software-Suite erfordern. Die leitende Ingenieursfrage lautet: **Welche exakten Kosten-, Logistik- und kommerziellen Datenpunkte müssen an einem Ort zusammengebracht werden, um die nächste Pricing- oder Streitfallentscheidung sicher zu treffen?**

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitwirkende</summary>

### Arbeitsmappen-Architektur

Das Excel-Design nutzt fünf Blätter und einen Einbahnfluss von Konfiguration und Quelldaten zu Berechnungen und Management-Ausgaben.

| Blatt | Rolle | Wichtigste Ein- oder Ausgaben |
|---|---|---|
| `01_Rules_Mapping` | Parameter- und Mapping-Steuerung | Basiswährung, Berichtsperiode, Budget-/Ist-FX-Kurse, Toleranzen, Zoll-Mappings, Händlerabzugs-Mappings, Validierungslisten |
| `02_Source_Data` | Quelldaten-Erfassung | POs und Kostenschätzungen; Sendungsfracht, Zölle, Hafengebühren und Empfangsmenge; Händlerrechnungen, fakturierte Mengen und Abzüge |
| `03_Cost_Engine` | Landed-Cost-Neuberechnung | Neuberechneter FOB-Wert, Standardzoll, Landed Cost, Baseline-Abweichung, Audit-Status |
| `04_Reconciliation` | Kostenabweichungs- und Abzugsprüfung | Tatsächliche Landed Cost je Einheit, Gesamtabweichung, Abweichungskomponenten, normalisierte Abzugskategorie, Rückforderungskennzeichen, Status, Evidenzleitfaden |
| `05_Management_Summary` | Entscheidungssicht | Nettoumsatz, Margenstufen, Margenerosion, hochwirksame SKU-Ausnahmen, Zusammenfassungen zu Händlerabzügen und Rückforderungen |

```text
01_Rules_Mapping ───────┐
   │ parameters/rules   │ validation and lookups
   ▼                    ▼
02_Source_Data ──────► 03_Cost_Engine
   │                         │ recalculated baseline
   └─────────────────────┬───┘
                         ▼
                 04_Reconciliation
                  │ variance + claims
                  ▼
                05_Management_Summary
```

**Kerndatengruppen**

- `Table_FX`: Währungscode, Budget-FX-Kurs, tatsächlicher FX-Kurs und berechnete FX-Bewegung.
- `Table_Duty`: Kategorie, HS-Code-Präfix, Standardzollsatz und FTA-Zollsatz.
- `Table_Deductions`: Händler, Rohabzugscode, normalisierte Kategorie, kommerzielle Klassifikation, Rückforderbarkeitskennzeichen, Maßnahmenverantwortlicher und erforderliche Evidenz.
- `Table_PO_Est`: PO/SKU-Identität, bestellte Menge, Währung, FOB-Einheitspreis, geschätzte Fracht, geschätzter Zollsatz, geschätzte sonstige Landed Costs und Buch-Landed-Cost.
- `Table_Actual_Logistics`: PO-/Sendungsreferenz, tatsächliche Fracht, Zoll, Hafen-/Überlandkosten und Empfangsmenge.
- `Table_Retail_Deductions`: Händlerrechnungs- und Abzugsdatensätze einschließlich Rohcodes und Beträgen.

Das Quelldesigndokument spezifiziert 29 Eingabefelder (`In-01` bis `In-29`) und 21 Schlüsselausgaben (`Out-01` bis `Out-21`). Die Ausgabeschicht hängt von den Parameter-Mappings und Quelldaten ab; die Zusammenfassung hängt von der Kosten-Engine und den Abstimmungsergebnissen ab.

### Drei Fallen, die selbst erfahrene Importkosten-Analysten erwischen

#### Falle 1 — Den bestehenden Landed-Cost-Wert als verifiziert behandeln

1. **Entscheidung:** Den aktuellen Verkaufspreis eines SKUs beibehalten, weil die Arbeitsmappe eine akzeptable Marge zeigt.
2. **Versteckte Annahme:** Die Buch-Landed-Cost enthält jede relevante Komponente und nutzt die korrekte Umrechnungsbasis.
3. **Wie sich die Empfehlung ändert:** Eine neu berechnete Baseline kann weggelassene Fracht, Zölle oder lokale Gebühren offenlegen. Eine akzeptabel scheinende Marge kann Repricing oder eine Korrektur des Kostenmodells erfordern.
4. **Warum die ursprüngliche Argumentation scheitert:** Ein historischer Zellwert ist kein Beweis dafür, dass die zugrunde liegende Berechnung vollständig ist.
5. **Korrigiertes Vorgehen:** Die Standardkosten aus dem gemappten Währungskurs, FOB-Preis, geschätzter Fracht, geschätztem Zoll und sonstigen Landed-Gebühren neu berechnen; mit den erfassten Buchkosten vergleichen.
6. **Entscheidungsergebnis:** Wesentliche Abweichungen eskalieren, bevor die Baseline für Pricing oder Leistungsbewertung verwendet wird.

<details>
<summary>Formelreferenz — Landed-Cost-Baseline</summary>

Illustrative Geschäftslogik:

```text
Recalculated FOB (base currency) = FOB unit price × selected FX rate
Recalculated duty = recalculated FOB × applicable duty rate
Recalculated landed cost per unit
  = recalculated FOB + estimated freight per unit
    + recalculated duty + estimated other landed cost
Baseline variance = recalculated landed cost − book landed cost
```

Das Quelldesign nutzt `XLOOKUP`, `LET`, `FILTER` und dynamische Array-Ausgaben, um die Mappings anzuwenden und Berechnungen über alle ausgefüllten Datensätze zu erstrecken. Die genaue Steuerbasis und Zollbehandlung müssen für die betreffenden Waren und Zollanmeldung bestätigt werden.

</details>

#### Falle 2 — Die Gesamtkostenüberschreitung als Ursache behandeln

1. **Entscheidung:** Das Logistikteam bitten, die Fracht zu senken, weil die Gesamtkosten die Schätzung überschritten haben.
2. **Versteckte Annahme:** Fracht ist der Haupttreiber der Abweichung.
3. **Wie sich die Empfehlung ändert:** Die Differenz kann stattdessen durch Wechselkurse, Zölle, Hafen-/Überlandgebühren, Mengenabweichungen oder mehr als einen Faktor verursacht sein.
4. **Warum die ursprüngliche Argumentation scheitert:** Eine Gesamtabweichung quantifiziert das Ergebnis, nicht dessen Ursache.
5. **Korrigiertes Vorgehen:** Tatsächliche Stückkosten mit der erwarteten Basis vergleichen, verfügbare Abweichungskomponenten berechnen und prüfen, dass ihre Summe zum Gesamtbetrag aufrechnet.
6. **Entscheidungsergebnis:** Die Untersuchung dem plausibelsten Kostenverantwortlichen zuweisen, während ungelöste oder nicht gemappte Differenzen sichtbar bleiben.

<details>
<summary>Formelreferenz — Abweichungsabstimmung</summary>

```text
Total cost variance
  = (actual landed cost per unit − expected landed cost per unit)
    × actual received quantity

Freight variance = (actual freight per unit − estimated freight per unit)
                   × actual received quantity
Duty variance    = (actual duty per unit − expected duty per unit)
                   × actual received quantity
FX variance      = FOB amount × (actual FX rate − budget FX rate)
                   × actual received quantity
Port variance    = (actual port cost per unit − estimated other landed cost)
                   × actual received quantity

Residual = total variance − sum of mapped variance components
```

Ein Rest von null ist eine nützliche interne arithmetische Kontrolle, kein Beweis, dass jeder Quellwert oder jede Zuordnung ökonomisch korrekt ist. Das aktuelle Preisabweichungsbeispiel der Quellspezifikation verwendet denselben FOB-Wert für Ist- und Erwartungspreis, wodurch diese Komponente konstruktionsbedingt null ist. Eine echte Einkaufspreisabweichung erfordert einen getrennten erwarteten FOB-Preis oder ein dokumentiertes Preisanpassungsfeld. Die Komponentenlogik sollte validiert werden, bevor das Modell für formales Reporting genutzt wird.

</details>

#### Falle 3 — Jeden Händlerabzug als Verlust oder zurückforderbaren Claim behandeln

1. **Entscheidung:** Alle Abzüge abschreiben — oder jeden Abzug als Claim verfolgen.
2. **Versteckte Annahme:** Alle Abzugscodes haben denselben vertraglichen Status und dieselben Evidenzanforderungen.
3. **Wie sich die Empfehlung ändert:** Ein vertraglicher Rabatt kann eine normale Geschäftskostenposition sein, während eine Liefercompliance-Strafe eine Untersuchung rechtfertigen kann, wenn der Liefernachweis dem Claim widerspricht.
4. **Warum die ursprüngliche Argumentation scheitert:** Ein Rohcode oder Betrag allein begründet weder kommerzielle Klassifikation noch Rückforderungsberechtigung.
5. **Korrigiertes Vorgehen:** Das Paar Händler/Code normalisieren, ein geprüftes Rückforderbarkeitskennzeichen anwenden, Verantwortlichen und erforderliche Evidenz identifizieren und hochwertige Posten priorisieren.
6. **Entscheidungsergebnis:** Den Aufwand auf Claims mit plausibler Basis und ausreichender Beleglage konzentrieren; unbekannte Codes sichtbar ungeklärt lassen.

<details>
<summary>Formelreferenz — Abzugs-Mapping und Priorisierung</summary>

Das Quelldesign baut einen normalisierten Suchschlüssel aus Händlername und Rohcode und nutzt dann `XLOOKUP`, um Abzugskategorie, Rückforderbarkeitskennzeichen und Evidenzleitfaden abzurufen. Unbekannte Codes liefern einen expliziten Unbekannt-Status, statt stillschweigend als bestätigte Kategorie behandelt zu werden. Ein Schwellwert wie `Param_Tol_Deduct` kann qualifizierte gekennzeichnete Abzüge in einen Prioritätsprüfungspool stellen.

</details>

### Beispielszenario

Das Folgende ist eine **illustrative Berechnung**, keine Aussage über eine getestete Kundentransaktion.

Angenommen, ein SKU hat folgende Stückeingaben:

| Posten | Betrag |
|---|---:|
| FOB-Einheitspreis | US$10.00 |
| Budget-FX-Kurs | A$1.50 pro US$1 |
| Geschätzte Fracht je Einheit | A$1.20 |
| Geschätzte sonstige Landed Costs je Einheit | A$0.60 |
| Geschätzter Zollsatz | 5% |
| Tatsächliche Fracht je Einheit | A$1.60 |
| Tatsächlicher Zoll je Einheit (aus Abfertigungsunterlagen) | A$0.85 |
| Tatsächlicher Hafen-/Überlandverkehr je Einheit | A$0.90 |
| Tatsächlicher FX-Kurs | A$1.55 pro US$1 |
| Empfangene Menge | 1,000 Einheiten |

Mit dem Budget-FX-Kurs beträgt die FOB-Basis A$15.00 je Einheit. Bei 5% Zollsatz auf dieser FOB-Basis beträgt der geschätzte Zoll A$0.75. Die geschätzte Landed Cost liegt daher bei A$17.55 je Einheit. Bleibt der tatsächliche FOB bei US$10.00, ergibt die Umrechnung mit A$1.55 A$15.50; zuzüglich tatsächlicher Fracht, Zoll und Hafen-/Überlandverkehr ergeben sich A$18.85 je Einheit.

Die indikative Differenz beträgt A$1.30 je Einheit bzw. A$1,300 über 1,000 Einheiten. Das reicht, um eine Beispiel-Absolutschwelle von A$500 zu überschreiten, sodass die Charge untersucht werden sollte. Die FX-Bewegung trägt unter diesen Annahmen A$0.50 je Einheit bei; die Fracht liegt A$0.40 über der Schätzung, der Zoll A$0.10 über dem geschätzten Betrag und der Hafen-/Überlandverkehr A$0.30 über der Schätzung. Diese Komponenten ergeben zusammen A$1.30 je Einheit.

Die praktische Empfehlung: Die Zollbewertung und Zollbasis verifizieren, die Frachtrechnung und lokalen Gebühren abstimmen und bestätigen, ob die Empfangsmenge der korrekte Zuweisungsnenner ist. Erst wenn die Kostenbrücke aufrechnet, sollte das Team entscheiden, ob es neu bepreist, künftige Schätzungen aktualisiert oder eine Lieferanten- oder Logistikgebühr anfechtet.

### Formelreferenz

<details>
<summary>FX-Kontrollen und Risikokennzeichnung</summary>

**Zweck:** Budgetierte und tatsächliche Umrechnungskurse vergleichen und Bewegungen jenseits der konfigurierten Toleranz kennzeichnen.

```excel
=D15:D20-C15:C20
```

Das Design berechnet die prozentuale Bewegung relativ zum Budgetkurs und vergleicht sie mit `Param_Tol_Pct`. Prüfen Sie vor prozentualen Berechnungen, ob der Budgetkurs null oder leer ist; eine Produktivimplementierung sollte einen klaren Validierungsstatus zurückgeben statt eines unerklärten Division-durch-null-Ergebnisses.

</details>

<details>
<summary>Quellenvalidierung und dynamische Listen</summary>

**Zweck:** Unvollständige oder ungültige Eingabezeilen identifizieren und Dropdown-Listen mit den Mappings synchron halten.

```excel
=SORT(UNIQUE(FILTER(A15:A20,A15:A20<>"")))
```

Das Design nutzt auch `FILTER` zum Auswählen ausgefüllter Datensätze, `UNIQUE` zum Aufbau eindeutiger Listen, `TRIM`/`UPPER` zur Normalisierung von Suchschlüsseln und `XLOOKUP` zum Abrufen gemappter Werte. Dynamische Array-Überlaufbereiche müssen frei bleiben.

</details>

<details>
<summary>Management-Margenbrücke</summary>

**Zweck:** Zeigen, wie sich die Headline-Marge verändert, wenn Landed-Cost-Abweichungen und Händlerabzüge einbezogen werden.

```text
Net sales = gross billed revenue − contractual rebates
Book gross margin = net sales − standard landed cost
Realized margin = book gross margin − landed-cost variance
Net effective profit = realized margin − non-rebate deductions
Net effective margin = net effective profit ÷ net sales
Margin erosion = book gross margin rate − net effective margin rate
```

Die Arbeitsmappenspezifikation gruppiert Nicht-`REB`-Abzugskategorien in ihrer Zusammenfassungslogik als Nicht-Rabatt-Abzüge. Diese Klassifikation sollte anhand des tatsächlichen kommerziellen Wörterbuchs geprüft werden, bevor das Ergebnis als endgültige Buchhaltungsmarge behandelt wird.

</details>

### Validierungsregeln

| Feld oder Bereich | Regel | Erwartetes Verhalten bei Ungültigkeit |
|---|---|---|
| PO-Nummer und SKU | Pflichtidentifikatoren; konsistente Textformatierung verwenden | Unvollständige Datensätze kennzeichnen; nicht davon ausgehen, dass eine nicht zugeordnete Zeile abgestimmt ist |
| PO-Menge und Empfangsmenge | Müssen für Stückzuweisungen positiv sein | Null- oder negative Mengen untersuchen, bevor Stückkosten interpretiert werden |
| Währungscode | Muss einer konfigurierten Währung in `Table_FX` entsprechen | Die nicht gemappte Währung prüfen; sich nicht auf einen Fallback-Kurs stützen |
| Budget- und Ist-FX-Kurse | Müssen numerisch und für die Periode gültig sein | Kurs korrigieren und abhängige Berechnungen erneut prüfen |
| Zollsatz und HS-/Kategorie-Mapping | Müssen den betreffenden Waren und der Zollbehandlung entsprechen | Klassifikation und geltende Tarif-/FTA-Berechtigung verifizieren |
| PO-Logistik-Verknüpfung | PO-Referenz muss dem Quell-PO-Schlüssel entsprechen | Nicht zugeordnete oder doppelte Datensätze vor Kostenvergleich klären |
| Händler + Rohabzugscode | Muss auf eine geprüfte interne Kategorie mappen | `CLAIM-UNKNOWN` / ausstehende Prüfung sichtbar halten und Wörterbuch aktualisieren |
| Rückforderbarkeitskennzeichen | Muss geprüft sein; `Y`-, `N`- oder ausstehende Werte haben unterschiedliche Bedeutungen | Ein Kennzeichen nicht mit einem gesetzlichen Rückforderungsanspruch gleichsetzen |
| Dynamische Array-Ausgabebereiche | Überlaufzellen müssen leer und nicht manuell überschrieben sein | Blockierende Zellen freigeben, wenn `#SPILL!` erscheint |
| Abweichungsabstimmung | Rest muss innerhalb der definierten Rundungspolitik auf null aufgehen | Fehlende Kosten, inkonsistente Basen oder falsche Zuweisungen untersuchen |
| Margenberechnungen | Nettoumsatz muss ungleich null sein, damit Margensätze aussagekräftig sind | Kontrollierte Leer-/Nullausgabe oder Warnung zurückgeben, statt ein Ergebnis mit Nenner null zu interpretieren |

### Betriebsanforderungen und bekannte Grenzen

- **Excel-Version:** Microsoft 365 oder Excel 2021+ wird für Funktionen wie `FILTER`, `XLOOKUP`, `SORT`, `UNIQUE`, `LET`, `HSTACK`, `BYROW`, `LAMBDA` und `CHOOSEROWS` benötigt. Ältere Excel-Versionen zeigen möglicherweise `_xlfn.`-Fehler oder berechnen das Modell nicht.
- **Keine VBA-Abhängigkeit:** Das Arbeitsmappendesign ist formelgesteuert und benötigt keine VBA-Makros.
- **Datenumfang:** Das Quellhandbuch empfiehlt, PO-Zeilen auf etwa 10,000 je Berichtsperiode und Logistik-/Abzugsdatensätze auf etwa 50,000 zu begrenzen. 100,000 Zeilen werden als obere Kompatibilitätsgrenze beschrieben, darüber hinaus werden separate Periodendateien empfohlen. Die tatsächliche Leistung hängt von der Arbeitsmappenimplementierung und der Hardware ab.
- **Eingabehandlung:** Werte in die dafür vorgesehenen Quelldatenbereiche einfügen. Formelausgaben nicht überschreiben und dynamische Array-Überlaufbereiche nicht blockieren.
- **Zusammenarbeit:** Bei großen Imports jeweils nur einen Editor nutzen und nach der Validierung speichern, um gleichzeitige Bearbeitungskonflikte zu reduzieren.
- **Australischer Fokus:** Das Modell ist auf Offshore-Beschaffung, Seefracht, australische Importabfertigung und australische Handelsdistribution ausgelegt. Zollbewertung, Tarifklassifikation, FTA-Berechtigung, GST-Behandlung und weitere Steuer-/Zollanforderungen müssen für die tatsächliche Transaktion bestätigt werden. Passen Sie das Modell an, bevor Sie es für Rechtsräume mit anderen Bewertungs- oder Steuerbasen verwenden.
- **Grenze der Entscheidungsunterstützung:** PCRA ersetzt keine Buchhaltungsunterlagen, kein ERP, keine Zoll- oder Steuerberatung und keine formellen Händlerstreitverfahren. Es verifiziert keine Evidenz eigenständig und garantiert keine Rückforderung.

### Fehlerbehebung

| Symptom | Wahrscheinliche Ursache | Erste Reaktion |
|---|---|---|
| `#SPILL!` | Ein Wert oder eine Notiz blockiert den dynamischen Array-Ausgabebereich | Blockierende Zelle freigeben, ohne den Formelanker zu löschen |
| Änderungen werden nicht neu berechnet | Excel-Berechnungsmodus steht auf Manuell | Berechnung auf Automatisch umstellen oder `F9` drücken |
| `CLAIM-UNKNOWN` oder `#N/A` | Händler-/Code-Paar fehlt in der Mapping-Tabelle | Neues Mapping in `01_Rules_Mapping` hinzufügen und prüfen |
| `####` in Betragszellen | Spaltenbreite ist zu schmal | Spaltenbreite automatisch anpassen |
| Abweichungsrest ungleich null | Fehlende Gebühr, Mengenabweichung oder inkonsistente Zuweisungsbasis | Quellrechnungen, Empfangsmenge und jede Abweichungskomponente prüfen |

</details>

## Geschäftslogik & Methodik

PCRA kombiniert **Landed-Cost-Rekonstruktion, Abweichungsanalyse, Stückkostenzuweisung, Abzugs-Klassifikation und Margenbrückenanalyse**. Jede Methode adressiert einen anderen Fehlermodus.

Die Landed-Cost-Rekonstruktion schafft eine vergleichbare Baseline aus Beschaffungs- und Importkostenkomponenten, statt einen historischen Tabellenwert als maßgeblich zu behandeln. Die Stückkostenzuweisung macht sendungsspezifische Gebühren mit der Produktökonomie vergleichbar, sofern Zuweisungsmenge und Kostenbasis geeignet sind. Die Abweichungsanalyse verwandelt dann eine einzelne Überschreitung in eine strukturierte Untersuchung über die in den Quelldaten abgebildeten Treiber. Ein Abstimmungsrest dient als arithmetische Kontrolle: Lässt sich die Summe nicht durch die gemappten Komponenten erklären, ist das Ergebnis nicht vertrauenswürdig.

Die Abzugs-Klassifikation fügt eine separate kommerzielle Kontrollebene hinzu. Ein vertraglicher Rabatt und eine bestrittene Lieferstrafe mindern beide den Zahlungseingang, ziehen aber nicht dieselbe Maßnahme nach sich. Codes zu mappen, einen Verantwortlichen zuzuweisen und erforderliche Evidenz zu identifizieren hilft dem Team, Claims zu priorisieren, ohne anzunehmen, dass jeder Abzug zurückforderbar ist.

Schließlich verbindet die Margenbrücke diese operativen Erkenntnisse mit der Entscheidung, die das Management tatsächlich treffen muss: Bleibt ein Produkt nach tatsächlichen Landed Costs und Händlerabzügen wirtschaftlich tragfähig? Diese Berechnungen unterstützen Untersuchung und Priorisierung; sie ersetzen keine Quellenbeleg-Verifizierung, Buchhaltungspolitik, Zollberatung oder rechtliche Bewertung eines Händleranspruchs.

## Weitere Tools dieser Serie

Entdecken Sie das [Theseus-Workshop-GitHub-Profil](https://github.com/HyVoid) für leichte Excel-basierte operative Analysetools. Verwandte Tools konzentrieren sich auf Baukostenkalkulation, Projektkostenkontrolle und andere wiederkehrende Geschäftsentscheidungen.

## Lizenz

Dieses Projekt ist unter der **Apache License 2.0** lizenziert. Siehe den [Text der Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) für die Lizenzbedingungen.
