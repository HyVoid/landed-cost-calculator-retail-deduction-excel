[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-sjabloon voor Landed Cost-berekening, Zendingafwijkingen en Terugvordering van Retailaflagen (FMCG & Margebrug voor Import)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Cost Accounting & Margin Recovery](https://img.shields.io/badge/Tool-Landed%20Cost%20%26%20Deduction%20Audit-051C2C)

<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/2b016445-ce04-4943-8a86-f1371b49f1a3" />

**Een calculator voor import-landed costs, een afstemmingsmodel voor verzendkostenafwijkingen en een Excel-sjabloon voor het terugvorderen van retailchargebacks en inhoudingen. Gebouwd voor importeurs van consumptiegoederen (FMCG), supply chain-analisten en commerciële financiële controllers om PO-schattingen af te stemmen op werkelijke zeevracht, invoerrechten, valutakoersen (FX) en lokaal terminaltransport in de haven — terwijl de inhoudingen op retail-uitbetalingen worden gecontroleerd (waaronder Woolworths, Coles, ALDI, Kmart en Big W) om de werkelijke nettomarge op SKU-niveau bloot te leggen.**

> **Toegang tot de Landed Cost & Retail Margebrug-tools (geen registratie of installatie nodig)**
>
> - 🌐 **[Start de gratis webgebaseerde Landed Cost- en margebrug-simulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** — Test direct in je browser de PO-tot-zending landed cost-afwijking, FX-impactontleding en classificatie van retailaflagen (gratis HTML-editie).
> - 📥 **[Download de volledige Landed Cost- en retailaflagen-Excelwerkmap (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** — Ontvang de dynamische-array Microsoft Excel-sjabloon met 5 tabbladen voor offline zendingafstemming, tracking van uitbetalingsgeschillen en terugkerende SKU-rentabiliteitsaudits *(betaalde commerciële editie — met 30 dagen geld-terug-garantie)*.


Specifiek ontworpen voor **workflows voor offshore inkoop en importdistributie** — van PO's bij overzeese fabrieken, internationale zeevracht en Australische douaneafhandeling (DAFF/ABF) tot lokaal terminaltransport in de haven en groothandelsdistributie naar grote retailketens (**Woolworths, Coles, ALDI, Kmart en Big W**). In plaats van je ERP, grootboek of douane-expediteur te vervangen, fungeert deze Product Costing & Reconciliation Analyzer (PCRA) als een auditbare beslissingsondersteunende laag die één kritische commerciële vraag beantwoordt:

**Als de FOB-inkoopprijs, zeevracht, invoerrechten, lokale havenafhandeling, valutaschommelingen (FX) en retailuitbetalingsinhoudingen volledig zijn afgestemd — welke nettoproductmarge blijft er dan werkelijk over, en welke uitzonderingen vereisen onmiddellijke actie in de vorm van geschil of herprijzing?**

---

## Kernmetriken Importkalkulatie & Opgeloste Problemen met Margelekage in Retail

In plaats van losse expediteursfacturen, douaneaangiftebladen en PDF's van retailuitbetalingen te beheren, verenigt dit raamwerk kostenadministratie en commerciële afslagaudits. Zo koppelt het model **pijnpunten in import en retaildistributie** aan geautomatiseerde **margebrug-metrieken**:

| Pijnpunt marge import & retail | Geautomatiseerd afstemmings- & auditmechanisme | Gevolgde KPI's kostenadministratie & marge |
| :--- | :--- | :--- |
| **Ondergeschatte standaard-/geschatte landed costs** | Berekent de werkelijke baseline landed cost per PO en SKU opnieuw op basis van ruwe componentregels en legt weggelaten kostenelementen bloot voordat ze groothandelsprijzen vertekenen. | Verwachte vs. herberekende standaard landed cost ($/eenheid), vlag voor onderschatting van de baseline |
| **Niet-toegewezen zeevracht, rechten & havenkosten** | Wijst werkelijke vracht op containerniveau, douanerechten, terminalafhandeling in de haven (THC) en lokaal terminaltransport toe over geverifieerde ontvangen hoeveelheden. | Gerealiseerde landed cost per eenheid, verdeling vracht/rechten/haven/transport per SKU |
| **Gemengde FX- vs. logistiekkostenoverschrijdingen** | Ontleedt de totale verzendkostenafwijking door valutakoers (budget vs. werkelijke spot/gedekte koers) te scheiden van operationele vracht- en rechtstoeslagen. | Totale landed cost-afwijking ($ / %), FX-afwijkingsdriver, toerekening van vracht- & rechtoverschrijdingen |
| **Illusoire "boekbrutomarge"-rapportage** | Bouwt een meerstaps SKU-margebrug die boekhoudkundige marge verbindt met gerealiseerde verzendkosten en retailinhoudingen na verkoop. | Boekbrutomarge (%) $\rightarrow$ Gerealiseerde landed marge (%) $\rightarrow$ Netto-effectieve marge (%) |
| **Ondoorgrondelijke retailuitbetalings- & chargeback-codes** | Normaliseert gefragmenteerde afslagcodes van grote supermarkten en warenhuizen tot gestandaardiseerde categorieën (contractuele kortingen vs. betwistbare boetes). | Genormaliseerde afslagcategorie (handelsvoorwaarden, co-op, DIFOT/OTIF-boetes, ullage/schade), waarschuwingen voor niet-gemapte codes |
| **Gemiste terugvorderingen van retailclaims & chargebacks** | Vlagt hoogwaardige betwistbare inhoudingen aan op basis van configureerbare dollardrempels en wijst geschil-eigenaren en vereiste POD/leveringsbewijs-checklists toe. | Terugvorderbaar inhoudingenbestand ($), status geschilherstel, wachtrij met hoge-prioriteit SKU-uitzonderingen |

---

## Stap-voor-Stap Tutorial: Hoe je Import-Landed Costs afstemt en Retailaflagen controleert

De werkmap volgt een gestructureerde **4-fasen workflow voor zendingafsluiting en maandelijkse financiële afstemming**: configureer eenmalig je FX-koersen, rechten en mappings van retailcodes, plak de ruwe ERP-/uitbetalingsexporten, bekijk de afwijkingsbrug en start claimterugvorderingen.

### Stap 1: FX-koersen, Afwijkingsdrempels & Mappings van Retailaflagen configureren
Open het tabblad `01_Rules_Mapping` om je commerciële governance-parameters en opzoektabels vast te leggen:

- **Financiële & FX-controles:** Stel de rapportageperiode, de basisboekhoudvaluta (bijv. `AUD` / `USD`), de gebudgetteerde wisselkoers, de werkelijk gerealiseerde wisselkoers en de doelbrutomarge-ondergrens in.
- **Uitzonderingsalarmdrempels:** Definieer acceptabele landed cost-afwijkingstoleranties (%) en de dollardrempel voor waarschuwingen over hoogwaardige retailaflagen.
- **Normalisatie van rechten en retailcodes:** Controleer de invoerrechten en map propriëtaire afslagcodes van retailers (over Woolworths, Coles, ALDI, Kmart, Big W) naar gestandaardiseerde boekhoudcategorieën en terugvorderbaarheidsregels.

### Stap 2: PO-schattingen, Douanefacturen & Retailuitbetalingsopgaven importeren
Exporteer ruwe transactiegegevens uit je ERP, voorraadsysteem, douane-expediteur of leveranciersportalen van retailers (bijv. SAP, NetSuite, MYOB, Cin7, Dear/Unleashed, uitbetalings-CSV's van leveranciers) en plak ze in de gestructureerde invoerblokken van `02_Source_Data`:

- **Inkoop & ontvangst:** PO-kostenschattingen en werkelijk ontvangen magazijnhoeveelheden per SKU.
- **Logistiek & douaneafhandeling:** Werkelijke internationale vrachtfacturen, invoerrechtenbeoordelingen, havenkosten en facturen voor binnenlands terminaltransport.
- **Commerciële verkoop & inhoudingen:** Brutoverkoopfacturen van retailers en regel-voor-regel uitbetalingsafslagopgaven (met behoud van originele documentreferentie-ID's voor audittraceerbaarheid).

### Stap 3: De Landed Cost-engine & Afwijkingsontleding controleren
Loop door de geautomatiseerde berekentabbladen om de zendingseconomie te verifiëren voordat je de managementrapporten afrondt:

1. **Basis-kostenverificatie (`03_Cost_Engine`):** Bekijk de herberekende standaard landed cost per SKU om ontbrekende rechten- of vrachtaannames in je oorspronkelijke prijsblad te ontdekken.
2. **Afstemming van afwijkingen en inhoudingen (`04_Reconciliation`):** Controleer werkelijke landed costs per eenheid, de afwijzingstoerekening driver voor driver (FX vs. Vracht vs. Rechten vs. Haven), genormaliseerde categorieën van retailaflagen en automatische terugvorderingsvlaggen.
3. **Integriteitscontrole met nulrestaad:** Controleer of alle validatiewaarschuwingen zijn opgelost en of de afstemmingsrest gelijk is aan nul voordat je op managementoutputs vertrouwt.

### Stap 4: Chargebackgeschillen prioriteren & operationaliseren in de Excelwerkmap
Open `05_Management_Summary` om financiële afwijkingen om te zetten in commerciële acties:
- Bekijk de **Margebrug** voor producten met ernstige erosie (bijv. een SKU die zakt van een `35% Book Gross Margin` naar een `24% Net Effective Margin`).
- Bekijk de **Geschilherstelwachtrij**, wijs een accountmanager of logistieke eigenaar toe, verzamel leveringsbewijzen (POD) of e-mails van inkopers en volg de claimstatus tot oplossing.

> 🚢 **Klaar om margelekage over je importzendingen en retailaccounts te stoppen?** 
> Nadat je de afwijkingsbrug in de **[gratis browsergebaseerde Landed Cost- en Margesimulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** hebt verkend, schaf je de **[volledige PCRA Landed Cost- en Aflagenterugvordering-Excelwerkmap (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** aan om je eigen zendingbatches offline te verwerken, mappings van retailaflagen aan te passen en een herhaalbare maandelijkse margeaudit te onderhouden *(vereist Microsoft 365 of Excel 2021+ voor dynamische-arrayformules; met 30 dagen geld-terug-garantie)*.

---

## Waarom ik dit Import-Landed Cost- & Retailmargebrug-raamwerk heb gebouwd

In een offshore-import- en groothandel-retaildistributiebedrijf is de FOB-inkoopprijs van de fabriek slechts de startlijn van productkalkulatie.

Een commerciële offerte wordt doorgaans maanden van tevoren opgesteld met een gebudgetteerde wisselkoers en geschatte containervracht. Wanneer de fysieke zending door de douane gaat, wordt de importeur geconfronteerd met werkelijke zeevrachttoeslagen, invoerrechten, terminalafhandelingskosten en facturen voor binnenlands terminaltransport. Weken na levering aan de distributiecentra van retailers komen de uitbetalingsadviezen binnen — met inhoudingen voor promotionele co-op-kortingen, DIFOT/OTIF-late-leveringsboetes, barcode-/karton-nalevingsboetes of tekortclaims. Omdat deze gegevens weken uit elkaar binnenkomen via expediteurs, douane-expediteurs, magazijnteams en debiteurenbeheer, leven ze zelden in hetzelfde systeem.

### De illusie van "35% Boekmarge vs. 24% Netto-effectieve marge"
De kernanalytische fout in groothandelsdistributie is elke afdelingsspreadsheet als compleet behandelen:
- Een **inkoopkostenblad** kan wiskundig correct zijn terwijl het lokaal terminaltransport of douaneaangiftekosten volledig weglaat.
- Een **verkoopbrutomargerapport** oogt gezond met **35% Boekmarge** omdat het leunt op verouderde standaard landed costs.
- Een **debiteurenadministratie** schrijft retailnalevingsinhoudingen af als routinekosten van zakendoen zonder te controleren of magazijn-POD's een formeel geschil ondersteunen — of verspilt andersom personeelsuren aan contractuele kortingen die niet terugvorderbaar zijn.

Wanneer werkelijke zendingoverschrijdingen en niet-teruggevorderde retailaflagen worden samengevoegd, zakt die "gezonde" **35% boekbrutomarge-SKU vaak in naar een nettomarge van 24%**. Bij 24% verandert de commerciële actie volledig: het team moet het SKU onmiddellijk herprijzen, vracht-/leveranciersvoorwaarden hernegotiëren, de DIFOT-naleving van het magazijn herstellen of een terugvorderingsclaim voor inhoudingen indienen.

Ik heb PCRA gebouwd om die end-to-end diagnostische workflow te verpakken in een inspecteerbare, herhaalbare werkmap — verborgen kostenannames en betwistbare retailaflagen zichtbaar te maken voordat marge-erosie permanent wordt.

---

## Losse importspreadsheets vs. Geïntegreerde Landed Cost- & Afslagen-engine

| Kalkulatie- & margeauditdimensie | Losse ERP-exporten & ad-hoc kostenbladen | PCRA Landed Cost- & Margebrug-werkmap (deze tool) |
| :--- | :--- | :--- |
| **Standaard landed cost-baselines** | Weggelaten havenkosten of foutief berekende rechten sijpelen geruisloos in groothandelsprijslijsten en margerapporten. | Berekent de verwachte landed cost per PO en SKU onafhankelijk opnieuw en vlagt onderschatte baselines vóór prijsbeoordeling. |
| **Vracht- & douanetoewijzing na PO** | Container-, douane- en terminaltransportfacturen komen laat binnen en worden geboekt op forfaitaire overheadrekeningen. | Wijst werkelijke zendingspecifieke logistiek- en douanekosten toe over ontvangen hoeveelheden tot op SKU-niveau. |
| **Toerekening FX- vs. vrachtafwijkingen** | Financieteams zien een totale kostenoverschrijding maar kunnen valutadepreciatie niet isoleren van vrachttarieftsverhogingen. | Ontleedt de landed cost-afwijking per specifieke driver (**valutabeweging, zeevracht, invoerrechten, havenafhandeling, terminaltransport**). |
| **Multi-retail afslagnormalisatie** | Ondoorgrondelijke uitbetalingscodes van Woolworths, Coles, ALDI, Kmart en Big W verhinderen cross-account verliesanalyse. | Normaliseert retailerspecifieke afslagcodes tot gestructureerde categorieën en benadrukt niet-gemapte codes voor directe classificatie. |
| **Retailchargeback- & boete-terugvordering** | Betwistbare DIFOT-boetes en tekortclaims blijven begraven in promotionele kortingsinhoudingen — geld blijft op tafel liggen. | Past dollardrempels, terugvorderbaarheidsvlaggen, eigenaartoewijzing en bewijschecklists toe om een actioneerbare geschilwachtrij op te bouwen. |
| **Echte zichtbaarheid van SKU-rentabiliteit** | Het management leunt op één kopblad Brutomarge % dat supply chain-overschrijdingen en retailnalevingslekken maskeert. | Genereert een end-to-end **SKU-margebrug** (`Book Gross Margin` $\rightarrow$ `Realized Landed Margin` $\rightarrow$ `Net Effective Margin`). |

---

## Voor wie deze kalkulatie- & afstemmingstool is gebouwd: rollen & workflows

Deze toolkit in dubbel formaat (gratis browsersimulator + commerciële Excelwerkmap) is gebouwd voor financiële, supply chain- en commerciële retailteams in importintensieve consumptiegoederen:

- **Importeurs, groothandelaren & FMCG-merkoperators:** Krijg volledige zichtbaarheid over overzeese unit-economie. Gebruik de **import landed cost-calculator** om werkelijke containeraankomstkosten te verifiëren van Aziatische/overzeese fabrieken via Australische havenafhandeling tot binnenlandse levering.
- **Kostenaccountants, financiële controllers & commerciële FP&A-teams:** Vervang broze maandafsluit-afwijkingsafstemmingen door een gestandaardiseerde **PO-tot-werkelijkheid landed cost-afstemmingssjabloon**. Scheid FX-winsten/-verliezen van vrachtafwijkingen en stem de kosten van verkochte goederen (COGS) af met volledige documenttraceerbaarheid.
- **Nationale Accountmanagers (NAMs) & retailcommerciële leiders:** Stop met blind vliegen in assortimentsbeoordelingen van retailers. Gebruik de **SKU-margebrug en aflagenanalyse** om precies te zien hoe handelsvoorwaarden, promotionele kortingen en nalevingsboetes de nettorentabiliteit beïnvloeden bij **Woolworths, Coles, ALDI, Kmart en Big W**.
- **Debiteurenspecialisten (AR) & aflagenterugvordering:** Verander chaotische retailuitbetalingsopgaven in een geprioriteerde **chargeback-geschiltracker**. Isoleer hoogwaardige nalevingsboetes en tekortclaims van contractuele kortingen zodat je team alleen terugvorderbaar geld achterna zit, gedekt door leveringsbewijs.
- **Supply chain-, logistiek- & inkoopanalisten:** Audit expediteursfacturen, douane-expediteur tariefclassificaties en terminaltransportkosten per ontvangen eenheid om inefficiënties in containerbenutting en leveranciersoverberekeningen te identificeren.

---

## Branchetoepassingen & long-tail import-/retailscenario's

Of je nu huismerkartikelen, fast-moving consumer goods (FMCG), kleding of gereedschap importeert naar grote retailketens, dit model past zich aan op wrijvingsrijke margescenario's:

### 1. Aflagenaudit bij Australische supermarkten & warenhuizen (Woolworths, Coles, ALDI, Kmart, Big W)
Leveren aan grote Australische nationale retailers betekent navigeren door complexe leveranciershandelsvoorwaarden, promotionele financiering, ullage-toelagen en strenge supply chain-nalevingsregimes (zoals DIFOT / OTIF-leveringsvensters en pallet-/kartonlabelregels). Door **Retailer + Afslagcode**-combinaties te mappen in `01_Rules_Mapping` kunnen commerciële teams overeengekomen contractuele kortingen automatisch scheiden van betwistbare nalevingsboetes.

### 2. Ontleding van containerniveau zeevracht-, invoerrechten- & FX-afwijkingen
Wanneer een overzeese inkooporder wordt geprijsd op `0.68 AUD/USD` met een geschatte containervracht van `$3,500`, maar drie maanden later door de douane gaat op `0.64 AUD/USD` met piekseizoencongestietoeslagen en havenopslagkosten, verdampen de kopblad-productmarges. De `04_Reconciliation`-engine isoleert hoeveel van de kostenstijging per eenheid werd veroorzaakt door **valutabeweging versus logistiekinflatie**, en informeert of financiën de FX-hedging moet aanpassen of dat inkoop de expediteurstarieven moet hernegotiëren.

### 3. Onderbouwing van groothandelsprijsverhogingen & voorbereiding van assortimentsbeoordelingen
Retailinkopers accepteren groothandelsprijsverhogingen zelden op basis van vage claims over "stijgende supply chain-kosten". Gebruik de **herberekende landed cost-baseline en afwijkingsdriver-uitsplitsing** om verifieerbare kostenevidentie op componentniveau (rechten, zeevracht, FX) te presenteren tijdens onderhandelingen met retailinkopers, of identificeer structureel onrendabele SKU's die delisting of re-engineering vereisen.

---

### Operationele reikwijdte & governance-disclaimer
*PCRA is een analytisch beslissingsondersteuningsraamwerk en kostenafstemmingswerkmap — geen transactioneel ERP, geen wettelijk grootboek, geen gelicenseerd douaneaanmeldsysteem, geen belastingadviesdienst en geen geautomatiseerd retailgeschilportaal. Het verifieert geen vrachtfacturen van derden, vestigt geen juridisch recht op terugvordering van een retailaflag en dient geen claims in bij retailinkopers. De nauwkeurigheid van de output hangt strikt af van de volledigheid van de door de gebruiker aangeleverde brongegevens, codemappings en parameteraannames. De commerciële Excel-editie vereist **Microsoft 365 of Excel 2021 en later** (met ondersteuning voor dynamische-arrayformules).*

---

## Over de maker

Ik bouw lichte, inspecteerbare operationele beslissingsondersteuningstools voor terugkerende commerciële workflows met te veel bewegende variabelen om mentaal bij te houden, maar die geen kostend enterprise softwaresuite vereisen. De leidende ontwerpvraag is: **welke exacte kosten-, logistiek- en commerciële datapunten moeten op één plek worden samengebracht om de volgende prijs- of geschilbeslissing met vertrouwen te nemen?**

## Technische details

<details>
<summary>Voor technische beoordelaars, Excel-praktijkmensen en medewerkers</summary>

### Werkmaparchitectuur

Het Excel-ontwerp gebruikt vijf tabbladen en eenrichtingsflow van configuratie en brongegevens naar berekeningen en managementoutputs.

| Tabblad | Rol | Belangrijkste in- of outputs |
|---|---|---|
| `01_Rules_Mapping` | Parameter- en mappingbeheer | Basisvaluta, rapportageperiode, budget-/werkelijke FX-koersen, toleranties, rechtenmappings, retailaflagen-mappings, validatielijsten |
| `02_Source_Data` | Brondata-inname | PO's en geschatte kosten; zendingvracht, rechten, havenkosten en ontvangen hoeveelheid; retailfacturen, gefactureerde hoeveelheden en inhoudingen |
| `03_Cost_Engine` | Landed cost-herberekening | Herberekende FOB-waarde, standaardrechten, landed cost, baseline-afwijking, auditstatus |
| `04_Reconciliation` | Kostenafwijkings- en afslagenbeoordeling | Werkelijke landed cost per eenheid, totale afwijking, afwijkingscomponenten, genormaliseerde afslagcategorie, terugvorderingsvlag, status, bewijsrichtlijn |
| `05_Management_Summary` | Beslissingszicht | Netto-omzet, margestappen, marge-erosie, hoogimpact-SKU-uitzonderingen, samenvattingen van retailaflagen en terugvorderingen |

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

**Kerndatagroepen**

- `Table_FX`: valutacode, budget-FX-koers, werkelijke FX-koers en berekende FX-beweging.
- `Table_Duty`: categorie, HS-codeprefix, standaardrechtentarief en FTA-rechtentarief.
- `Table_Deductions`: retailer, ruwe afslagcode, genormaliseerde categorie, commerciële classificatie, terugvorderbaarheidsvlag, actie-eigenaar en vereist bewijs.
- `Table_PO_Est`: PO/SKU-identiteit, bestelde hoeveelheid, valuta, FOB-eenheidsprijs, geschatte vracht, geschat rechtentarief, geschatte overige landed costs en boekhoudkundige landed cost.
- `Table_Actual_Logistics`: PO-/zendingreferentie, werkelijke vracht, rechten, haven-/transportkosten en ontvangen hoeveelheid.
- `Table_Retail_Deductions`: retailfactuur- en afslaggegevens, inclusief ruwe codes en bedragen.

Het bronontwerpdocument specificeert 29 invoervelden (`In-01` tot `In-29`) en 21 sleuteloutputs (`Out-01` tot `Out-21`). De uitvoerlaag hangt af van de parametermappings en brongegevens; de samenvatting hangt af van de kostenengine en afstemmingsresultaten.

### Drie valkuilen die zelfs ervaren importkostenanalisten vangen

#### Valkuil 1 — Het bestaande landed cost-cijfer als geverifieerd behandelen

1. **Beslissing:** De huidige verkoopprijs van een SKU behouden omdat de werkmap een acceptabele marge toont.
2. **Verborgen aanname:** De boekhoudkundige landed cost bevat elke relevante component en gebruikt de juiste conversiebasis.
3. **Hoe de aanbeveling verandert:** Een herberekende baseline kan weggelaten vracht, rechten of lokale kosten blootleggen. Een marge die acceptabel leek, kan herprijzing of een correctie van het kostenmodel vereisen.
4. **Waarom de oorspronkelijke redenering faalt:** Een historische celwaarde is geen bewijs dat de onderliggende berekening compleet is.
5. **Gecorrigeerde aanpak:** Bereken de standaardkosten opnieuw vanuit de gemapte valutakoers, FOB-prijs, geschatte vracht, geschatte rechten en overige landed kosten; vergelijk met de geregistreerde boekhoudkosten.
6. **Beslissingsuitkomst:** Escaleer materiële verschillen voordat de baseline wordt gebruikt voor prijzen of prestatiebeoordeling.

<details>
<summary>Formulareferentie — landed cost-baseline</summary>

Illustratieve bedrijfslogica:

```text
Recalculated FOB (base currency) = FOB unit price × selected FX rate
Recalculated duty = recalculated FOB × applicable duty rate
Recalculated landed cost per unit
  = recalculated FOB + estimated freight per unit
    + recalculated duty + estimated other landed cost
Baseline variance = recalculated landed cost − book landed cost
```

Het bronontwerp gebruikt `XLOOKUP`, `LET`, `FILTER` en dynamische-arrayoutputs om de mappings toe te passen en berekeningen uit te breiden over gevulde records. De exacte belastingbasis en rechtbehandeling moeten worden bevestigd voor de betreffende goederen en douaneaangifte.

</details>

#### Valkuil 2 — De totale kostenoverschrijding als hoofdoorzaak behandelen

1. **Beslissing:** Vraag het logistiekteam om vracht te verlagen omdat de totale landed cost de schatting overschreed.
2. **Verborgen aanname:** Vracht is de hoofddriver van de afwijking.
3. **Hoe de aanbeveling verandert:** Het verschil kan in plaats daarvan worden veroorzaakt door wisselkoersen, rechten, haven-/transportkosten, hoeveelheidsafwijkingen of meer dan één factor.
4. **Waarom de oorspronkelijke redenering faalt:** Een totale afwijking kwantificeert de uitkomst, niet de oorzaak.
5. **Gecorrigeerde aanpak:** Vergelijk werkelijke eenheidskosten met de verwachte basis, bereken de beschikbare afwijkingscomponenten en controleer of hun som oprekent naar het totaal.
6. **Beslissingsuitkomst:** Wijs het onderzoek toe aan de meest plausibele kosteneigenaar, terwijl onopgeloste of niet-gemapte verschillen zichtbaar blijven.

<details>
<summary>Formulareferentie — afwijkingsafstemming</summary>

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

Een rest van nul is een nuttige interne rekenkundige controle, geen bewijs dat elke bronwaarde of toerekening economisch correct is. Het huidige prijsafwijkingsexample in de bronspecificatie hergebruikt dezelfde FOB-waarde voor werkelijke en verwachte prijs, waardoor die component per constructie nul is. Een echte inkoopprijsafwijking vereist een afzonderlijke verwachte FOB-prijs of een gedocumenteerd prijsaanpassingsveld. De componentlogica moet worden gevalideerd voordat het model voor formele rapportage wordt gebruikt.

</details>

#### Valkuil 3 — Elke retailaflag als verlies of terugvorderbare claim behandelen

1. **Beslissing:** Alle inhoudingen afschrijven — of elke inhouding als claim najagen.
2. **Verborgen aanname:** Alle afslagcodes hebben dezelfde contractuele status en bewijseisen.
3. **Hoe de aanbeveling verandert:** Een contractuele korting kan een normale commerciële kostenpost zijn, terwijl een leveringsnalevingsboete onderzoek rechtvaardigt als het leveringsrecord de claim tegenspreekt.
4. **Waarom de oorspronkelijke redenering faalt:** Een ruwe code of alleen een bedrag vestigt geen commerciële classificatie of terugvorderingsrecht.
5. **Gecorrigeerde aanpak:** Normaliseer het retailer/code-paar, pas een beoordeelde terugvorderbaarheidsvlag toe, identificeer de eigenaar en het vereiste bewijs en prioriteer hoogwaardige items.
6. **Beslissingsuitkomst:** Focus de inspanning op claims met een plausibele basis en voldoende ondersteunende documentatie; laat onbekende codes zichtbaar onopgelost.

<details>
<summary>Formulareferentie — aflagen-mapping en prioritering</summary>

Het bronontwerp bouwt een genormaliseerde opzoeksleutel uit de naam van de retailer en de ruwe code en gebruikt vervolgens `XLOOKUP` om de afslagcategorie, terugvorderbaarheidsvlag en bewijsrichtlijn op te halen. Onbekende codes geven een expliciete onbekend-status in plaats van stilzwijgend als bevestigde categorie te worden behandeld. Een drempel zoals `Param_Tol_Deduct` kan gekwalificeerde gevlagde inhoudingen in een prioritaire beoordelingspool plaatsen.

</details>

### Voorbeeldscenario

Het volgende is een **illustratieve berekening**, geen claim over een geteste klanttransactie.

Stel dat één SKU deze invoer per eenheid heeft:

| Item | Bedrag |
|---|---:|
| FOB-eenheidsprijs | US$10.00 |
| Budget-FX-koers | A$1.50 per US$1 |
| Geschatte vracht per eenheid | A$1.20 |
| Geschatte overige landed costs per eenheid | A$0.60 |
| Geschat rechtentarief | 5% |
| Werkelijke vracht per eenheid | A$1.60 |
| Werkelijke rechten per eenheid (uit afhandelingsgegevens) | A$0.85 |
| Werkelijke haven-/transportkosten per eenheid | A$0.90 |
| Werkelijke FX-koers | A$1.55 per US$1 |
| Ontvangen hoeveelheid | 1,000 eenheden |

Met de budget-FX-koers is de FOB-baseline A$15.00 per eenheid. Bij een rechtentarief van 5% op die FOB-basis zijn de geschatte rechten A$0.75. De geschatte landed cost is daarom A$17.55 per eenheid. Als de werkelijke FOB nog steeds US$10.00 is, geeft conversie tegen A$1.55 A$15.50; optelling van werkelijke vracht, rechten en haven-/transportkosten geeft A$18.85 per eenheid.

Het indicatieve verschil is A$1.30 per eenheid, of A$1,300 over 1,000 eenheden. Dit is genoeg om een voorbeeld absolute afwijkingsdrempel van A$500 te overschrijden, dus de batch moet worden onderzocht. De FX-beweging draagt onder deze aannames A$0.50 per eenheid bij; vracht is A$0.40 boven de schatting, rechten A$0.10 boven het geschatte bedrag en haven-/transport A$0.30 boven de schatting. Die componenten tellen op tot A$1.30 per eenheid.

De praktische aanbeveling is de douanewaardering en rechtbasis te verifiëren, de vrachtfactuur en lokale kosten af te stemmen en te bevestigen of de ontvangen hoeveelheid de juiste toewijzingsnoemer is. Pas nadat de kostenbrug oprekt, moet het team beslissen of het herprijst, toekomstige schattingen bijwerkt of een leveranciers- of logistiekkost aanvecht.

### Formulareferentie

<details>
<summary>FX-controles en risicovlaggen</summary>

**Doel:** Budget- en werkelijke conversiekoersen vergelijken en bewegingen buiten de geconfigureerde tolerantie vlaggen.

```excel
=D15:D20-C15:C20
```

Het ontwerp berekent de percentagebeweging relatief tot de budgetkoers en vergelijkt deze met `Param_Tol_Pct`. Controleer op een nul- of lege budgetkoers voordat je een percentageberekening gebruikt; een productie-implementatie zou een duidelijke validatiestatus moeten teruggeven in plaats van een onverklaarde deling-door-nul-uitkomst.

</details>

<details>
<summary>Bronvalidatie en dynamische lijsten</summary>

**Doel:** Onvolledige of ongeldige invoerrijen identificeren en dropdownlijsten gesynchroniseerd houden met de mappings.

```excel
=SORT(UNIQUE(FILTER(A15:A20,A15:A20<>"")))
```

Het ontwerp gebruikt ook `FILTER` om gevulde records te selecteren, `UNIQUE` om unieke lijsten te bouwen, `TRIM`/`UPPER` om opzoeksleutels te normaliseren en `XLOOKUP` om gemapte waarden op te halen. Dynamische-array spill-bereiken moeten vrij blijven.

</details>

<details>
<summary>Management margebrug</summary>

**Doel:** Laten zien hoe de kopbladmarge verandert wanneer landed cost-afwijkingen en retailaflagen worden meegenomen.

```text
Net sales = gross billed revenue − contractual rebates
Book gross margin = net sales − standard landed cost
Realized margin = book gross margin − landed-cost variance
Net effective profit = realized margin − non-rebate deductions
Net effective margin = net effective profit ÷ net sales
Margin erosion = book gross margin rate − net effective margin rate
```

De werkspecificatie groepeert niet-`REB`-afslagcategorieën samen als niet-kortingsinhoudingen in de samenvattingslogica. Die classificatie moet worden beoordeeld tegen het werkelijke commerciële woordenboek voordat het resultaat als definitieve boekhoudkundige marge wordt behandeld.

</details>

### Validatieregels

| Veld of gebied | Regel | Verwacht gedrag bij ongeldigheid |
|---|---|---|
| PO-nummer en SKU | Verplichte identificatoren; consistente tekstopmaak gebruiken | Vlag onvolledige records; neem niet aan dat een niet-gematchte rij is afgestemd |
| PO-hoeveelheid en ontvangen hoeveelheid | Moeten positief zijn voor per-eenheidtoewijzingen | Onderzoek nul- of negatieve hoeveelheden voordat je eenheidskosten interpreteert |
| Valutacode | Moet overeenkomen met een geconfigureerde valuta in `Table_FX` | Bekijk de niet-gemapte valuta; vertrouw niet op een fallback-koers |
| Budget- en werkelijke FX-koersen | Moeten numeriek en geldig voor de periode zijn | Corrigeer de koers en controleer afhankelijke berekeningen opnieuw |
| Rechtentarief en HS-/categoriegmapping | Moet overeenkomen met de betreffende goederen en douanebehandeling | Verifieer classificatie en toepasselijke tarief-/FTA-geschiktheid |
| PO-logistiekkoppeling | PO-referentie moet overeenkomen met de bron-PO-sleutel | Los niet-gematchte of dubbele records op vóór kostenvergelijking |
| Retailer + ruwe afslagcode | Moet mappen naar een beoordeelde interne categorie | Houd `CLAIM-UNKNOWN` / in behandeling zichtbaar en werk het woordenboek bij |
| Terugvorderbaarheidsvlag | Moet beoordeeld zijn; `Y`-, `N`- of in-behandeling-waarden hebben verschillende betekenissen | Stel een vlag niet gelijk aan een juridisch terugvorderingsrecht |
| Dynamische-array outputbereiken | Spill-cellen moeten leeg en niet handmatig overschreven zijn | Ruim blokkerende cellen op als `#SPILL!` verschijnt |
| Afwijkingsafstemming | Rest moet binnen het gedefinieerde afrondingsbeleid op nul uitkomen | Onderzoek ontbrekende kosten, inconsistente basen of foutieve toewijzingen |
| Margeberekeningen | Netto-omzet moet niet-nul zijn voor zinvolle margepercentages | Geef een gecontroleerde leegte/nul of waarschuwing terug in plaats van een resultaat met nulnoemer te interpreteren |

### Bedrijfsvereisten en bekende grenzen

- **Excel-versie:** Microsoft 365 of Excel 2021+ is vereist voor functies zoals `FILTER`, `XLOOKUP`, `SORT`, `UNIQUE`, `LET`, `HSTACK`, `BYROW`, `LAMBDA` en `CHOOSEROWS`. Oudere Excel-versies tonen mogelijk `_xlfn.`-fouten of berekenen het model niet.
- **Geen VBA-afhankelijkheid:** Het ontwerp van de werkmap is formulegestuurd en vereist geen VBA-macro's.
- **Dataschaal:** Het bronhandboek raadt aan PO-rijen te beperken tot ongeveer 10,000 per rapportageperiode en logistiek-/afslaggegevens tot ongeveer 50,000. Het beschrijft 100,000 rijen als bovengrens van compatibiliteit, met aparte periodebestanden aanbevolen daarboven. Werkelijke prestaties hangen af van de implementatie van de werkmap en hardware.
- **Invoerbehandeling:** Plak waarden in de aangewezen brongegevensgebieden. Overschrijf geen formulaoutputs en blokkeer geen dynamische-array spill-bereiken.
- **Samenwerking:** Bij grote imports gebruik je per keer één editor en sla je op na validatie om gelijktijdige bewerkingsconflicten te verminderen.
- **Australische focus:** Het model is ontworpen rond offshore inkoop, zeevracht, Australische importafhandeling en Australische retaildistributie. Rechtenwaardering, tariefclassificatie, FTA-geschiktheid, GST-behandeling en andere fiscale/douanevereisten moeten worden bevestigd voor de werkelijke transactie. Pas het model aan voordat je het gebruikt voor jurisdicties met andere waarderings- of belastingbasen.
- **Grens van beslissingsondersteuning:** PCRA vervangt geen boekhoudgegevens, geen ERP, geen douane- of belastingadvies en geen formele retailgeschilprocedures. Het verifieert geen bewijs en garandeert geen terugvordering.

### Probleemoplossing

| Symptoom | Waarschijnlijke oorzaak | Eerste reactie |
|---|---|---|
| `#SPILL!` | Een waarde of notitie blokkeert het dynamische-array outputbereik | Ruim de blokkerende cel op zonder de formuleanker te verwijderen |
| Wijzigingen worden niet herberekend | Excel-berekeningsmodus staat op Handmatig | Zet de berekening op Automatisch of druk op `F9` |
| `CLAIM-UNKNOWN` of `#N/A` | Retailer/code-paar ontbreekt in de mappingtabel | Voeg de nieuwe mapping toe en beoordeel in `01_Rules_Mapping` |
| `####` in bedragcellen | Kolombreedte is te smal | Pas de kolombreedte automatisch aan |
| Afwijkingsrest niet-nul | Ontbrekende kosten, hoeveelheidsmismatch of inconsistente toewijzingsbasis | Controleer bronfacturen, ontvangen hoeveelheid en elke afwijkingscomponent |

</details>

## Bedrijfslogica & Methodologie

PCRA combineert **landed cost-reconstructie, afwijkingsanalyse, eenheidskostentoewijzing, aflagenclassificatie en margebruganalyse**. Elke methode adresseert een andere faalmodus.

Landed cost-reconstructie stelt een vergelijkbare baseline vast uit inkoop- en importkostencomponenten in plaats van een historisch spreadsheetcijfer als leidend te behandelen. Eenheidskostentoewijzing maakt zendingsniveaukosten vergelijkbaar met productniveaueconomie, mits de toewijzingshoeveelheid en kostenbasis passend zijn. Afwijkingsanalyse maakt vervolgens van een enkele overschrijding een gestructureerd onderzoek over de drivers in de brongegevens. Een afstemmingsrest fungeert als rekenkundige controle: als het totaal niet kan worden verklaard door de gemapte componenten, is het resultaat niet klaar om te vertrouwen.

Aflagenclassificatie voegt een aparte commerciële controlegaag toe. Een contractuele korting en een betwiste leveringsboete verminderen beide het ontvangen geld, maar vragen niet dezelfde actie. Codes mappen, een eigenaar toewijzen en vereist bewijs identificeren helpt het team claims te prioriteren zonder aan te nemen dat elke inhouding terugvorderbaar is.

Ten slotte verbindt de margebrug deze operationele bevindingen met de beslissing die het management werkelijk moet nemen: blijft een product commercieel levensvatbaar na werkelijke landed costs en retailaflagen. Deze berekeningen ondersteunen onderzoek en prioritering; ze vervangen geen brondocumentverificatie, boekhoudbeleid, douaneadvies of juridische beoordeling van een retailclaim.

## Andere tools in deze serie

Verken het [Theseus Workshop GitHub-profiel](https://github.com/HyVoid) voor lichte Excel-gebaseerde operationele analysehulpmiddelen. Verwante tools richten zich op bouwkostenschatting, projectkostenbeheersing en andere terugkerende zakelijke beslissingen.

## Licentie

Dit project is gelicenseerd onder de **Apache License 2.0**. Zie de [tekst van de Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) voor de licentievoorwaarden.
