[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Landed Cost Calculator, Shipment Variance & Retailer Deduction Recovery Excel Template (FMCG & Import Margin Bridge)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Cost Accounting & Margin Recovery](https://img.shields.io/badge/Tool-Landed%20Cost%20%26%20Deduction%20Audit-051C2C)

<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/2b016445-ce04-4943-8a86-f1371b49f1a3" />

**An import landed cost calculator, shipment cost variance reconciliation model, and retailer chargeback/deduction recovery Excel template. Built for consumer goods (FMCG) importers, supply chain analysts, and commercial finance controllers to reconcile PO estimates against actual ocean freight, customs duty, FX, and port drayage—while auditing retail remittance deductions (including Woolworths, Coles, ALDI, Kmart, and Big W) to expose true SKU-level net margin.**

> **Access the Landed Cost & Retail Margin Bridge Tools (No Signup or Installation)**
>
> - 🌐 **[Launch the Free Web-Based Landed Cost & Margin Bridge Simulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** — Test PO-to-shipment landed cost variance, FX impact decomposition, and retailer deduction classifications instantly in your browser (Free HTML Edition).
> - 📥 **[Download the Full Landed Cost & Retailer Deduction Excel Workbook (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** — Get the 5-sheet dynamic array Microsoft Excel template for offline shipment reconciliation, remittance dispute tracking, and recurring SKU profitability audits *(Paid Commercial Edition — backed by a 30-day money-back guarantee)*.
>

Designed specifically for **offshore sourcing and import distribution workflows**—spanning overseas factory POs, international ocean freight, Australian customs clearance (DAFF/ABF), local port drayage, and wholesale distribution into major retail chains (**Woolworths, Coles, ALDI, Kmart, and Big W**). Rather than replacing your ERP, general ledger, or customs broker, this Product Costing & Reconciliation Analyzer (PCRA) acts as an auditable decision-support layer answering one critical commercial question:

**After FOB purchase price, ocean freight, customs duty, local port handling, foreign exchange (FX) swings, and retailer remittance deductions are fully reconciled, what net product margin is actually left—and which exceptions require immediate dispute or repricing action?**

---

## Core Import Costing Metrics & Retail Margin Leakage Problems Solved

Instead of managing disconnected freight forwarder invoices, customs entry sheets, and retailer remittance PDFs, this framework unifies cost accounting and commercial deduction auditing. Here is how the model maps **import and retail distribution pain points** to automated **margin bridge metrics**:

| Import & Retail Margin Pain Point | Automated Reconciliation & Audit Mechanism | Key Cost Accounting & Margin KPIs Tracked |
| :--- | :--- | :--- |
| **Understated Standard / Estimated Landed Costs** | Recalculates true baseline landed cost per PO and SKU from raw component rules, exposing omitted cost elements before they distort wholesale pricing. | Expected vs. recalculated standard landed cost ($/unit), baseline understatement flag |
| **Unallocated Ocean Freight, Duty & Port Charges** | Allocates actual container-level ocean freight, customs tariff duties, port terminal handling (THC), and local drayage across verified received unit quantities. | Realized landed cost per unit, freight/duty/port/drayage cost split per SKU |
| **Blended FX vs. Logistics Cost Overruns** | Decomposes total shipment cost variance by isolating foreign exchange (budget vs. actual spot/hedged rate) from operational freight and duty rate spikes. | Total landed cost variance ($ / %), FX variance driver, freight & duty overrun attribution |
| **Illusory "Book Gross Margin" Reporting** | Builds a multi-stage SKU margin bridge connecting accounting book margin to realized shipment costs and post-sale retail deductions. | Book Gross Margin (%) $\rightarrow$ Realized Landed Margin (%) $\rightarrow$ Net Effective Margin (%) |
| **Cryptic Retailer Remittance & Chargeback Codes** | Normalizes fragmented deduction codes across major grocers and department stores into standardized buckets (contractual rebates vs. disputable fines). | Normalized deduction category (Trading Terms, Co-op, DIFOT/OTIF Fines, Ullage/Damage), unmapped code alerts |
| **Missed Retailer Claim & Chargeback Recoveries** | Flags high-value disputable deductions against configurable dollar thresholds, assigning dispute owners and required POD/delivery evidence checklists. | Recoverable deduction pool ($), dispute recovery status, high-priority SKU exception queue |

---

## Step-by-Step Tutorial: How to Reconcile Import Landed Costs & Audit Retailer Deductions

The workbook follows a structured **4-stage shipment-close and monthly financial reconciliation workflow**: configure your FX, duty, and retailer code mappings once, drop in raw ERP/remittance exports, inspect the variance bridge, and trigger claim recoveries.

### Step 1: Configure FX Rates, Variance Thresholds & Retailer Deduction Mappings
Open the `01_Rules_Mapping` sheet to establish your commercial governance parameters and lookup tables:

- **Financial & FX Controls:** Set the reporting period, base accounting currency (e.g., `AUD` / `USD`), budgeted exchange rate, actual realized exchange rate, and target gross margin floor.
- **Exception Alert Thresholds:** Define acceptable landed-cost variance tolerances (%) and the dollar threshold for high-value retailer deduction alerts.
- **Tariff & Retailer Code Normalization:** Review customs duty rates and map proprietary retailer deduction codes (across Woolworths, Coles, ALDI, Kmart, Big W) to standardized accounting categories and recovery eligibility rules.

### Step 2: Import PO Estimates, Customs Invoices & Retailer Remittance Statements
Export raw transaction records from your ERP, inventory system, customs broker, or retailer supplier portals (e.g., SAP, NetSuite, MYOB, Cin7, Dear/Unleashed, vendor remittance CSVs) and paste them into the structured input blocks in `02_Source_Data`:

- **Purchasing & Receiving:** Purchase Order (PO) cost estimates and actual warehouse receipt quantities by SKU.
- **Logistics & Customs Clearance:** Actual international freight invoices, customs duty assessments, port charges, and domestic drayage bills.
- **Commercial Sales & Deductions:** Gross retailer sales invoices and line-item remittance deduction statements (retaining original document reference IDs for audit traceability).

### Step 3: Audit the Landed Cost Engine & Variance Decomposition
Navigate through the automated calculation sheets to verify shipment economics before finalizing management reports:

1. **Baseline Cost Verification (`03_Cost_Engine`):** Inspect the recalculated standard landed cost per SKU to catch missing duty or freight assumptions in your initial pricing sheet.
2. **Variance & Deduction Reconciliation (`04_Reconciliation`):** Review actual per-unit landed costs, driver-by-driver variance attribution (FX vs. Freight vs. Duty vs. Port), normalized retailer deduction buckets, and automated recovery flags.
3. **Zero-Residual Integrity Check:** Verify that all validation warnings are cleared and the reconciliation residual equals zero before relying on executive outputs.

### Step 4: Prioritize Chargeback Disputes & Operationalize in the Excel Workbook
Open `05_Management_Summary` to turn financial variances into commercial actions:
- Inspect the **Margin Bridge** for products suffering severe erosion (e.g., a SKU dropping from a `35% Book Gross Margin` down to a `24% Net Effective Margin`).
- Review the **Dispute Recovery Queue**, assign an account manager or logistics owner, compile proof-of-delivery (POD) or buyer email evidence, and track claim status through resolution.

> 🚢 **Ready to stop margin leakage across your import shipments and retail accounts?** 
> After exploring the variance bridge in the **[Free Browser-Based Landed Cost & Margin Simulator](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)**, get the **[Full PCRA Landed Cost & Deduction Recovery Excel Workbook (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** to process your own shipment batches offline, customize retailer deduction mappings, and maintain a repeatable monthly margin audit *(requires Microsoft 365 or Excel 2021+ for dynamic array formulas; backed by a 30-day money-back guarantee)*.

---

## Why I Built This Import Landed Cost & Retail Margin Bridge Framework

In an offshore import and wholesale retail distribution business, the factory FOB purchase price is merely the starting line of product costing.

A commercial quote is typically built months in advance using a budgeted foreign exchange rate and estimated container freight. When the physical shipment clears customs, the importer faces actual ocean freight surcharges, customs tariff duties, port terminal handling fees, and domestic drayage bills. Weeks after delivery to retail distribution centers, retailer remittance advices arrive—deducting promotional co-op rebates, DIFOT/OTIF late-delivery penalties, barcode/carton compliance fines, or shortage claims. Because these records arrive weeks apart across freight forwarders, customs brokers, warehouse teams, and accounts receivable, they rarely live in the same system.

### The "35% Book Margin vs. 24% Net Effective Margin" Illusion
The core analytical failure in wholesale distribution is treating each departmental spreadsheet as complete:
- A **purchasing cost sheet** can be mathematically accurate while completely omitting local port drayage or customs entry fees.
- A **sales gross margin report** looks healthy at **35% Book Margin** because it relies on outdated standard landed costs.
- An **accounts receivable ledger** writes off retailer compliance deductions as routine cost-of-doing-business without checking whether warehouse PODs support a formal dispute—or conversely, wastes staff hours chasing contractual rebates that are non-recoverable.

When actual shipment overruns and unrecovered retailer deductions are bridged together, that "healthy" **35% book gross margin SKU frequently collapses to a 24% net effective margin**. At 24%, the commercial action changes completely: the team must immediately reprice the SKU, renegotiate freight/supplier terms, fix warehouse DIFOT compliance, or file a deduction recovery claim.

I built PCRA to package that end-to-end diagnostic workflow into an inspectable, repeatable workbook—making hidden cost assumptions and disputable retail deductions visible before margin erosion becomes permanent.

---

## Disconnected Import Spreadsheets vs. Integrated Landed Cost & Deduction Engine

| Costing & Margin Audit Dimension | Disconnected ERP Exports & Ad-Hoc Cost Sheets | PCRA Landed Cost & Margin Bridge Workbook (This Tool) |
| :--- | :--- | :--- |
| **Standard Landed Cost Baselines** | Omitted port fees or duty miscalculations flow silently into wholesale price lists and margin reports. | Independently recalculates expected landed cost by PO and SKU, flagging understated baselines prior to pricing review. |
| **Post-PO Freight & Customs Allocation** | Container freight, customs duty, and local drayage invoices arrive late and get booked to lump-sum overhead accounts. | Allocates actual shipment-level logistics and customs charges across received unit quantities down to the SKU level. |
| **FX vs. Freight Variance Attribution** | Finance teams see a total cost overrun but cannot isolate currency depreciation from freight forwarder rate hikes. | Decomposes landed cost variance by specific driver (**FX movement, ocean freight, customs duty, port handling, drayage**). |
| **Multi-Retailer Deduction Normalization** | Cryptic remittance codes across Woolworths, Coles, ALDI, Kmart, and Big W prevent cross-account loss analysis. | Normalizes retailer-specific deduction codes into structured buckets and highlights unmapped codes for immediate classification. |
| **Retail Chargeback & Fine Recovery** | Disputable DIFOT fines and shortage claims sit buried inside promotional rebate deductions, leaving cash on the table. | Applies dollar thresholds, recovery eligibility flags, owner assignments, and evidence checklists to build an actionable dispute queue. |
| **True SKU Profitability Visibility** | Leadership relies on a single headline Gross Margin % that masks supply chain overruns and retail compliance leakage. | Generates an end-to-end **SKU Margin Bridge** (`Book Gross Margin` $\rightarrow$ `Realized Landed Margin` $\rightarrow$ `Net Effective Margin`). |

---

## Who This Costing & Reconciliation Tool Is Built For: Roles & Workflows

This dual-format (Free Browser Simulator + Commercial Excel Workbook) toolkit is built for finance, supply chain, and commercial retail teams operating in import-heavy consumer goods:

- **Importers, Wholesalers & FMCG Brand Operators:** Gain complete visibility over offshore unit economics. Use the **import landed cost calculator** to verify true container arrival costs from Asia/overseas factories through Australian port clearance and domestic delivery.
- **Cost Accountants, Financial Controllers & Commercial FP&A Teams:** Replace fragile month-end variance reconciliations with a standardized **PO-to-actual landed cost reconciliation template**. Separate FX gains/losses from freight variances and reconcile cost of goods sold (COGS) with full document traceability.
- **National Account Managers (NAMs) & Retail Commercial Leads:** Stop flying blind into retailer range reviews. Use the **SKU margin bridge and deduction analyzer** to see exactly how trading terms, promotional rebates, and compliance penalties impact net profitability across **Woolworths, Coles, ALDI, Kmart, and Big W**.
- **Accounts Receivable (AR) & Deduction Recovery Specialists:** Turn messy retailer remittance statements into a prioritized **chargeback dispute tracker**. Isolate high-value compliance fines and shortage claims from contractual rebates so your team only chases recoverable cash backed by delivery evidence.
- **Supply Chain, Logistics & Procurement Analysts:** Audit freight forwarder invoices, customs broker tariff classifications, and port drayage charges per received unit to identify container utilization inefficiencies and supplier overcharges.

---

## Industry Use Cases & Long-Tail Import/Retail Scenarios

Whether you import private-label homewares, fast-moving consumer goods (FMCG), apparel, or hardware into major retail chains, this model adapts to high-friction margin scenarios:

### 1. Australian Supermarket & Department Store Deduction Auditing (Woolworths, Coles, ALDI, Kmart, Big W)
Supplying major Australian national retailers involves navigating complex vendor trading terms, promotional funding, ulage allowances, and strict supply-chain compliance regimes (such as DIFOT / OTIF delivery windows and pallet/carton labeling rules). By mapping **Retailer + Deduction Code** combinations in `01_Rules_Mapping`, commercial teams can automatically separate agreed contractual rebates from disputable compliance penalties.

### 2. Container-Level Ocean Freight, Customs Duty & FX Variance Decomposition
When an overseas Purchase Order is priced at `0.68 AUD/USD` with an estimated `$3,500` container freight rate, but clears customs three months later at `0.64 AUD/USD` with peak-season congestion surcharges and port detention fees, headline product margins evaporate. The `04_Reconciliation` engine isolates how much of the per-unit cost spike was driven by **currency movement versus logistics inflation**, informing whether finance needs to adjust FX hedging or procurement needs to renegotiate forwarder rates.

### 3. Wholesale Price-Increase Justification & Range Review Preparation
Retail buyers rarely accept wholesale price increases based on vague claims of "rising supply chain costs." Use the **recalculated landed cost baseline and variance driver breakdown** to present verifiable, component-level cost evidence (duty, ocean freight, FX) during retail buyer negotiations, or identify chronically unprofitable SKUs that require delisting or re-engineering.

---

### Operational Scope & Governance Disclaimer
*PCRA is an analytical decision-support framework and cost-reconciliation workbook—not a transactional ERP, statutory general ledger, licensed customs brokerage filing system, tax advisory service, or automated retailer dispute portal. It does not independently verify third-party freight invoices, establish legal entitlement to recover a retail deduction, or lodge claims with retail buyers. Output accuracy depends strictly on the completeness of user-supplied source records, code mappings, and parameter assumptions. The commercial Excel edition requires **Microsoft 365 or Excel 2021 and later** (supporting dynamic array formulas).*

---

## About the Creator

I build lightweight, inspectable operational decision-support tools for recurring commercial workflows that have too many moving variables to track mentally, yet do not require deploying a costly enterprise software suite. The guiding engineering question is: **What exact cost, logistics, and commercial data points must be brought together in one place to make the next pricing or dispute decision confidently?**

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The Excel design uses five sheets and a one-way flow from configuration and source data to calculations and management outputs.

| Sheet | Role | Main inputs or outputs |
|---|---|---|
| `01_Rules_Mapping` | Parameter and mapping control | Base currency, reporting period, budget/actual FX rates, tolerances, duty mappings, retailer deduction mappings, validation lists |
| `02_Source_Data` | Source-data intake | PO and estimated costs; shipment freight, duty, port charges and received quantity; retailer invoices, billed quantities, and deductions |
| `03_Cost_Engine` | Landed-cost recalculation | Recalculated FOB value, standard duty, landed cost, baseline variance, audit status |
| `04_Reconciliation` | Cost variance and deduction review | Actual landed cost per unit, total variance, variance components, normalized deduction category, recovery flag, status, evidence guidance |
| `05_Management_Summary` | Decision view | Net sales, margin stages, margin erosion, high-impact SKU exceptions, retailer deduction and recovery summaries |

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

**Core data groups**

- `Table_FX`: currency code, budget FX rate, actual FX rate, and calculated FX movement.
- `Table_Duty`: category, HS-code prefix, default duty rate, and FTA duty rate.
- `Table_Deductions`: retailer, raw deduction code, normalized category, commercial classification, recoverability flag, action owner, and required evidence.
- `Table_PO_Est`: PO/SKU identity, ordered quantity, currency, FOB unit price, estimated freight, estimated duty rate, estimated other landed cost, and book landed cost.
- `Table_Actual_Logistics`: PO/shipment reference, actual freight, duty, port/drayage costs, and received quantity.
- `Table_Retail_Deductions`: retailer invoice and deduction records, including raw codes and amounts.

The source design documents 29 input fields (`In-01` to `In-29`) and 21 key outputs (`Out-01` to `Out-21`). The output layer depends on the parameter mappings and source data; the summary depends on the cost engine and reconciliation results.

### Three Traps That Catch Even Experienced Import Cost Analysts

#### Trap 1 — Treating the existing landed-cost figure as verified

1. **Decision:** Keep a SKU's current selling price because the workbook shows an acceptable margin.
2. **Hidden assumption:** The book landed cost includes every relevant component and uses the correct conversion basis.
3. **How the recommendation changes:** A recalculated baseline may expose omitted freight, duty, or local charges. A margin that looked acceptable may need repricing or a cost-model correction.
4. **Why the original reasoning fails:** A historical cell value is not evidence that its underlying calculation is complete.
5. **Corrected approach:** Recalculate the standard cost from the mapped currency rate, FOB price, estimated freight, estimated duty, and other landed charges; compare it with the recorded book cost.
6. **Decision outcome:** Escalate material differences before using the baseline for pricing or performance evaluation.

<details>
<summary>Formula reference — landed-cost baseline</summary>

Illustrative business logic:

```text
Recalculated FOB (base currency) = FOB unit price × selected FX rate
Recalculated duty = recalculated FOB × applicable duty rate
Recalculated landed cost per unit
  = recalculated FOB + estimated freight per unit
    + recalculated duty + estimated other landed cost
Baseline variance = recalculated landed cost − book landed cost
```

The source design uses `XLOOKUP`, `LET`, `FILTER`, and dynamic-array outputs to apply the mappings and extend calculations across populated records. The exact tax base and duty treatment must be confirmed for the applicable goods and customs entry.

</details>

#### Trap 2 — Treating the total cost overrun as a root cause

1. **Decision:** Ask the logistics team to reduce freight because total landed cost exceeded the estimate.
2. **Hidden assumption:** Freight is the main driver of the variance.
3. **How the recommendation changes:** The difference may instead be driven by exchange rates, duty, port/drayage charges, quantity mismatches, or more than one factor.
4. **Why the original reasoning fails:** A total variance quantifies the outcome, not its cause.
5. **Corrected approach:** Compare actual unit costs with the expected basis, calculate the available variance components, and check that their sum reconciles to the total.
6. **Decision outcome:** Assign investigation to the most plausible cost owner, while keeping unresolved or unmapped differences visible.

<details>
<summary>Formula reference — variance reconciliation</summary>

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

A residual of zero is a useful internal arithmetic check, not proof that every source value or attribution is economically correct. The source specification's current price-variance example reuses the same FOB value for both actual and expected price, which makes that component zero by construction. A genuine purchase-price variance requires a distinct expected FOB price or a documented price-adjustment field. The component logic should be validated before the model is used for formal reporting.

</details>

#### Trap 3 — Treating every retailer deduction as either a loss or a recoverable claim

1. **Decision:** Write off all deductions—or pursue every deduction as a claim.
2. **Hidden assumption:** All deduction codes have the same contractual status and evidence requirements.
3. **How the recommendation changes:** A contractual rebate may be a normal commercial cost, while a delivery-compliance fine may warrant investigation if the delivery record contradicts the claim.
4. **Why the original reasoning fails:** A raw code or amount alone does not establish commercial classification or recovery entitlement.
5. **Corrected approach:** Normalize the retailer/code pair, apply a reviewed recoverability flag, identify the owner and required evidence, and prioritize high-value items.
6. **Decision outcome:** Focus effort on claims with a plausible basis and sufficient supporting documentation; leave unknown codes visibly unresolved.

<details>
<summary>Formula reference — deduction mapping and prioritization</summary>

The source design builds a normalized lookup key from the retailer name and raw code, then uses `XLOOKUP` to retrieve the deduction category, recoverability flag, and evidence guidance. Unknown codes return an explicit unknown status rather than being silently treated as a confirmed category. A threshold such as `Param_Tol_Deduct` can place qualifying flagged deductions in a priority review pool.

</details>

### Example Scenario

The following is an **illustrative calculation**, not a claim about a tested customer transaction.

Assume one SKU has these per-unit inputs:

| Item | Amount |
|---|---:|
| FOB unit price | US$10.00 |
| Budget FX rate | A$1.50 per US$1 |
| Estimated freight per unit | A$1.20 |
| Estimated other landed cost per unit | A$0.60 |
| Estimated duty rate | 5% |
| Actual freight per unit | A$1.60 |
| Actual duty per unit (from clearance records) | A$0.85 |
| Actual port/drayage per unit | A$0.90 |
| Actual FX rate | A$1.55 per US$1 |
| Received quantity | 1,000 units |

Using the budget FX rate, the FOB baseline is A$15.00 per unit. At a 5% duty rate on that FOB basis, estimated duty is A$0.75. Estimated landed cost is therefore A$17.55 per unit. If the actual FOB is still US$10.00, its conversion at A$1.55 gives A$15.50; adding actual freight, duty, and port/drayage gives A$18.85 per unit.

The indicative difference is A$1.30 per unit, or A$1,300 across 1,000 units. This is enough to exceed an example absolute variance threshold of A$500, so the batch should be investigated. The FX movement contributes A$0.50 per unit under these assumptions; freight is A$0.40 above estimate, duty is A$0.10 above the estimated amount, and port/drayage is A$0.30 above estimate. Those components sum to A$1.30 per unit.

The practical recommendation is to verify the customs valuation and duty basis, reconcile the freight invoice and local charges, and confirm whether the received quantity is the correct allocation denominator. Only after the cost bridge reconciles should the team decide whether to reprice, update future estimates, or challenge a supplier or logistics charge.

### Formula Reference

<details>
<summary>FX controls and risk flagging</summary>

**Purpose:** Compare budget and actual conversion rates and flag movements beyond the configured tolerance.

```excel
=D15:D20-C15:C20
```

The design calculates percentage movement relative to the budget rate and compares it with `Param_Tol_Pct`. Check for a zero or blank budget rate before using a percentage calculation; a production implementation should return a clear validation status rather than an unexplained divide-by-zero result.

</details>

<details>
<summary>Source validation and dynamic lists</summary>

**Purpose:** Identify incomplete or invalid input rows and keep dropdown lists synchronized with the mappings.

```excel
=SORT(UNIQUE(FILTER(A15:A20,A15:A20<>"")))
```

The design also uses `FILTER` to select populated records, `UNIQUE` to build distinct lists, `TRIM`/`UPPER` to normalize lookup keys, and `XLOOKUP` to retrieve mapped values. Dynamic-array spill ranges must remain unobstructed.

</details>

<details>
<summary>Management margin bridge</summary>

**Purpose:** Show how the headline margin changes as landed-cost variance and retailer deductions are incorporated.

```text
Net sales = gross billed revenue − contractual rebates
Book gross margin = net sales − standard landed cost
Realized margin = book gross margin − landed-cost variance
Net effective profit = realized margin − non-rebate deductions
Net effective margin = net effective profit ÷ net sales
Margin erosion = book gross margin rate − net effective margin rate
```

The workbook specification groups non-`REB` deduction categories together as non-rebate deductions in its summary logic. That classification should be reviewed against the actual commercial dictionary before treating the result as a final accounting margin.

</details>

### Validation Rules

| Field or area | Rule | Expected behavior when invalid |
|---|---|---|
| PO number and SKU | Required identifiers; use consistent text formatting | Flag incomplete records; do not assume an unmatched row is reconciled |
| PO quantity and received quantity | Must be positive for per-unit allocations | Investigate zero or negative quantities before interpreting unit costs |
| Currency code | Must match a configured currency in `Table_FX` | Review the unmapped currency; do not rely on a fallback rate |
| Budget and actual FX rates | Must be numeric and valid for the period | Correct the rate and recheck dependent calculations |
| Duty rate and HS/category mapping | Must match the applicable goods and customs treatment | Verify classification and applicable tariff/FTA eligibility |
| PO-to-logistics link | PO reference must match the source PO key | Resolve unmatched or duplicate records before cost comparison |
| Retailer + raw deduction code | Must map to a reviewed internal category | Keep `CLAIM-UNKNOWN` / pending review visible and update the dictionary |
| Recoverability flag | Must be reviewed; `Y`, `N`, or pending values have different meanings | Do not equate a flag with a legal entitlement to recover |
| Dynamic-array output ranges | Spill cells must be empty and not manually overwritten | Clear obstructing cells if `#SPILL!` appears |
| Variance reconciliation | Residual should reconcile to zero within the defined rounding policy | Investigate missing costs, inconsistent bases, or incorrect allocations |
| Margin calculations | Net sales must be non-zero for meaningful margin rates | Return a controlled blank/zero or warning rather than interpret a zero-denominator result |

### Operating Requirements and Known Boundaries

- **Excel version:** Microsoft 365 or Excel 2021+ is required for functions such as `FILTER`, `XLOOKUP`, `SORT`, `UNIQUE`, `LET`, `HSTACK`, `BYROW`, `LAMBDA`, and `CHOOSEROWS`. Older Excel versions may show `_xlfn.` errors or fail to calculate the model.
- **No VBA dependency:** The workbook design is formula-driven and does not require VBA macros.
- **Data scale:** The source manual recommends keeping PO rows to about 10,000 per reporting period and logistics/deduction records to about 50,000. It describes 100,000 rows as an upper compatibility boundary, with separate period files recommended beyond that scale. Actual performance depends on workbook implementation and hardware.
- **Input handling:** Paste values into designated source-data areas. Do not overwrite formula outputs or obstruct dynamic-array spill ranges.
- **Collaboration:** For large imports, use one editor at a time and save after validation to reduce concurrent-edit conflicts.
- **Australian focus:** The model is designed around offshore procurement, ocean freight, Australian import clearance, and Australian retail distribution. Duty valuation, tariff classification, FTA eligibility, GST treatment, and other tax/customs requirements must be confirmed for the actual transaction. Adapt the model before using it for jurisdictions with different valuation or tax bases.
- **Decision-support boundary:** PCRA does not replace accounting records, an ERP, customs advice, tax advice, or formal retailer dispute procedures. It does not independently verify evidence or guarantee recovery.

### Troubleshooting

| Symptom | Likely cause | First response |
|---|---|---|
| `#SPILL!` | A value or note blocks the dynamic-array output range | Clear the obstructing cell without deleting the formula anchor |
| Changes do not recalculate | Excel calculation mode is set to Manual | Switch calculation to Automatic or press `F9` |
| `CLAIM-UNKNOWN` or `#N/A` | Retailer/code pair is missing from the mapping table | Add and review the new mapping in `01_Rules_Mapping` |
| `####` in amount cells | Column width is too narrow | Auto-fit the column width |
| Non-zero variance residual | Missing charge, quantity mismatch, or inconsistent allocation basis | Check source invoices, received quantity, and each variance component |

</details>

## The Business Logic & Methodology

PCRA combines **landed-cost reconstruction, variance analysis, unit-cost allocation, deduction classification, and margin-bridge analysis**. Each method addresses a different failure mode.

Landed-cost reconstruction establishes a comparable baseline from purchase and import cost components rather than treating a historical spreadsheet figure as authoritative. Unit-cost allocation makes shipment-level charges comparable with product-level economics, provided the allocation quantity and cost basis are appropriate. Variance analysis then turns a single overrun into a structured investigation across the drivers represented in the source data. A reconciliation residual acts as an arithmetic control: if the total cannot be explained by the mapped components, the result is not ready to be trusted.

Deduction classification adds a separate commercial-control layer. A contractual rebate and a disputed delivery fine may both reduce cash received, but they do not imply the same action. Mapping codes, assigning an owner, and identifying required evidence help the team prioritize claims without assuming that every deduction is recoverable.

Finally, the margin bridge connects these operational findings to the decision management actually needs to make: whether a product remains commercially viable after actual landed costs and retailer deductions. These calculations support investigation and prioritization; they do not replace source-document verification, accounting policy, customs advice, or a legal assessment of a retailer claim.

## Other Tools in This Series

Explore the [Theseus Workshop GitHub profile](https://github.com/HyVoid) for lightweight Excel-based operational analysis tools. Related tools focus on construction estimating, project cost control, and other recurring business decisions.

## License

This project is licensed under the **Apache License 2.0**. See the [Apache License 2.0 text](https://www.apache.org/licenses/LICENSE-2.0) for the license terms.
