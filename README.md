<p align="center">
  <strong>English</strong> · <a href="./README.zh-CN.md">简体中文</a>
</p>

# Reconcile Landed Costs and Reveal Real Product Margin with PCRA

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Decision Support](https://img.shields.io/badge/Tool-Decision%20Support-051C2C)

**PCRA (Product Costing & Reconciliation Analyzer) helps importers and consumer-goods teams reconcile expected vs. actual landed costs, explain margin erosion, and identify retailer deductions worth investigating. The browser version is free. The Excel version is paid with a 30-day money-back guarantee.**

> **No signup. No installation.**
>
> **Browser version: Free. Excel version: Paid with a 30-day money-back guarantee.**
>
> - [🌐 Open the browser version](./index.html) — free HTML edition.
> - [📥 Open the Excel workbook](./PCRA_Master_Model.xlsx) — Excel edition. Commercial purchase terms apply.
>
> *Repository note: these relative links assume `index.html` and `PCRA_Master_Model.xlsx` are published alongside this README. Confirm the files and replace the links with the live demo and purchase URLs before publishing if your repository uses different paths.*

PCRA is designed for a specific operating model: offshore purchasing, international ocean freight, Australian import clearance, domestic logistics, and distribution through major Australian retailers such as Woolworths, Coles, ALDI, Kmart, and Big W. It is a reusable cost-review and decision-support framework—not an ERP, accounting platform, customs filing system, or generic dashboard.

The central question is straightforward: **after purchase, freight, duty, local charges, foreign exchange, and retailer deductions are accounted for, what margin is actually left—and which differences need action?**

## What It Helps You Track

- **Expected vs. recalculated landed cost by PO and SKU**, making understated cost baselines easier to identify before they distort pricing decisions.
- **Actual freight, duty, port, and drayage cost per unit**, based on shipment expenses and received quantities.
- **Cost variance by likely driver**, so a total overrun can be investigated as freight, duty, FX, port charges, or other mapped components.
- **Book gross margin vs. realized landed-cost margin vs. net effective margin**, showing how operational leakage changes the commercial picture.
- **Retailer deductions by normalized category and recovery status**, separating known contractual rebates from claims that may deserve review.
- **High-priority exceptions**, including large cost variances, unknown deduction codes, and deductions flagged for potential recovery.

## Quick Start Workflow

1. **Set the control parameters.** On `01_Rules_Mapping`, confirm the reporting period, base currency, budget and actual exchange rates, cost-variance thresholds, target gross margin, and high-value deduction threshold. Review the duty and retailer-deduction mappings for the current business.
2. **Bring in existing source data.** Export purchase-order estimates, freight and customs invoices, receipt quantities, retailer sales, and deduction statements from existing systems or spreadsheets. Paste values into the corresponding input blocks in `02_Source_Data`. Keep source records traceable to their original documents.
3. **Review the calculated results.** Check `03_Cost_Engine` for the recalculated landed-cost baseline and `04_Reconciliation` for actual costs, variance drivers, deduction classifications, and recovery flags. Investigate validation warnings and any non-zero reconciliation residual before relying on the summary.
4. **Turn exceptions into actions.** Use `05_Management_Summary` to review margin erosion, the highest-impact SKU variances, and the potential recovery pool. Assign an owner, gather supporting documents, and update the dispute status. Refresh the source data on a weekly, monthly, or shipment-close cadence that fits the operation.

Set a few key parameters. Drop in existing data. Review the analysis. Refresh when the next batch closes.

## Why I Built This

In an import-and-distribution business, the purchase price is only one part of product cost. A quote may use a budget exchange rate and estimated freight; the final shipment may arrive with different freight charges, customs duty, port fees, and local delivery expenses. Weeks later, retailer remittance statements may introduce rebates, compliance fines, damage claims, or other deductions. These records often live in separate spreadsheets and arrive at different times.

The analytical failure is treating each view as complete. A cost sheet can be internally consistent but omit a charge. A margin report can look healthy because it uses estimated landed cost. A retailer deduction can be posted as a loss without checking whether the underlying delivery evidence supports a dispute—or treated as recoverable without the evidence needed to challenge it.

PCRA packages a repeatable reasoning process into a lightweight workbook: recalculate the cost baseline, compare it with actual shipment costs, explain the variance, normalize deduction codes, and carry the result into a margin bridge. The point is not to automate judgment. It is to make the assumptions and exceptions visible before a team decides whether to reprice, investigate a supplier or freight invoice, correct a cost model, or challenge a retailer deduction.

For example, a product may appear to earn a 35% book gross margin. If actual landed costs and retailer compliance deductions reduce its net effective margin to 24%, the decision is no longer simply “keep selling because the book margin is healthy.” The product needs a targeted review of cost assumptions, delivery performance, contract terms, and recovery evidence.

## Common Import Cost and Margin Problems This Solves

| Problem | Without PCRA | With PCRA |
|---|---|---|
| Estimated landed cost omits a component | A low baseline flows into pricing and margin reports unnoticed. | Recalculated cost is compared with the recorded baseline, with exceptions flagged for review. |
| Freight and local charges arrive after the PO is priced | A total overrun is visible only after the margin has already been reported. | Shipment-level charges are allocated across received units and compared with the expected cost basis. |
| FX movement is mixed with operational cost changes | Teams cannot tell whether a variance came from currency, freight, duty, or port handling. | Variance components provide a structured starting point for investigation, subject to the input fields available. |
| Retailer deductions use inconsistent codes | Rebates, compliance fines, damage claims, and unknown codes are difficult to compare. | Retailer-plus-code mappings normalize the records and expose unmapped codes for classification. |
| Potentially disputable fines are buried in deductions | Recoverable claims are missed, or staff spend time pursuing unsupported claims. | Recovery flags, value thresholds, owners, and evidence guidance create a prioritized review queue. |
| Headline gross margin hides leakage | Management sees a single margin figure that does not reflect all operational deductions. | A margin bridge separates book margin, realized landed-cost margin, and net effective margin. |

## Who This Is For

PCRA is intended for importers, consumer-goods operators, supply-chain analysts, cost accountants, finance controllers, and account managers who reconcile offshore purchasing with Australian retail distribution. It is especially useful when the source data already exists but the team needs a consistent way to join it, challenge the cost assumptions, and prioritize exceptions without implementing a new enterprise platform.

It is **not** designed to replace an ERP, general ledger, customs broker, tax adviser, or retailer dispute process. It does not independently verify invoices, determine legal entitlement to recover a deduction, or submit a claim. Results depend on the quality of source records, mappings, and assumptions.

No spreadsheet expertise is needed to begin with the free browser version. The Excel version is paid with a 30-day money-back guarantee. The Excel edition is intended for Microsoft 365 or Excel 2021 and later because it relies on modern dynamic-array functions.

## About

I build lightweight operational tools for recurring decisions that have too many moving parts to hold in a person's head, but do not necessarily justify a new software platform. The guiding question is: **what information needs to be in one place to make the next decision confidently?** PCRA is one example: a reusable cost-reconciliation method that turns fragmented purchase, logistics, customs, sales, and deduction records into a reviewable set of business exceptions.

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
