import { ActualLogisticsRecord, POEstimateRecord, RetailDeductionRecord } from '../types/pcra';

/**
 * Basic CSV parser supporting quotes and commas
 */
export function parseCSV(text: string): string[][] {
  const lines: string[][] = [];
  const rawLines = text.split(/\r?\n/);

  for (const rawLine of rawLines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    const row: string[] = [];
    let insideQuote = false;
    let entry = '';

    for (let i = 0; i < rawLine.length; i++) {
      const char = rawLine[i];
      if (char === '"') {
        if (insideQuote && rawLine[i + 1] === '"') {
          entry += '"';
          i++;
        } else {
          insideQuote = !insideQuote;
        }
      } else if (char === ',' && !insideQuote) {
        row.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry.trim());
    lines.push(row);
  }

  return lines;
}

/**
 * Convert array of objects to CSV string
 */
export function objectsToCSV<T extends Record<string, any>>(items: T[], headers: { key: keyof T; label: string }[]): string {
  const headerLine = headers.map((h) => `"${h.label}"`).join(',');
  const rowLines = items.map((item) => {
    return headers
      .map((h) => {
        const val = item[h.key];
        const strVal = val === null || val === undefined ? '' : String(val);
        return `"${strVal.replace(/"/g, '""')}"`;
      })
      .join(',');
  });
  return [headerLine, ...rowLines].join('\r\n');
}

/**
 * Triggers browser download of CSV string
 */
export function downloadCSV(filename: string, csvContent: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Sample CSV Templates
 */
export const poCsvTemplateHeaders = [
  { key: 'poNumber', label: 'PO_Number' },
  { key: 'skuCode', label: 'SKU_Code' },
  { key: 'productName', label: 'Product_Name' },
  { key: 'category', label: 'Category' },
  { key: 'poQty', label: 'PO_Qty' },
  { key: 'fobCurrency', label: 'FOB_Currency' },
  { key: 'fobUnitPriceFC', label: 'FOB_Price_FC' },
  { key: 'estFreightPerUnitAUD', label: 'Est_Freight_AUD' },
  { key: 'estDutyRate', label: 'Est_Duty_Rate' },
  { key: 'estOtherLandedCost', label: 'Est_Other_AUD' },
  { key: 'bookLandedCostPerUnit', label: 'Book_Landed_Cost' },
];

export const logisticsCsvTemplateHeaders = [
  { key: 'poNumber', label: 'PO_Number' },
  { key: 'skuCode', label: 'SKU_Code' },
  { key: 'shipmentId', label: 'Shipment_ID' },
  { key: 'arrivalDate', label: 'Arrival_Date' },
  { key: 'actualFreightInvoiceAUD', label: 'Actual_Freight_AUD' },
  { key: 'actualDutyPaidAUD', label: 'Actual_Duty_AUD' },
  { key: 'actualPortDrayageAUD', label: 'Actual_Port_AUD' },
  { key: 'actualReceivedQty', label: 'Actual_Received_Qty' },
];

export const retailCsvTemplateHeaders = [
  { key: 'invoiceRef', label: 'Invoice_Ref' },
  { key: 'retailerName', label: 'Retailer_Name' },
  { key: 'billedQty', label: 'Billed_Qty' },
  { key: 'contractPriceAUD', label: 'Contract_Price_AUD' },
  { key: 'deductionClaimRef', label: 'Deduction_Claim_Ref' },
  { key: 'deductionAmountAUD', label: 'Deduction_Amount_AUD' },
  { key: 'deductionCodeRaw', label: 'Deduction_Code_Raw' },
  { key: 'poMapRef', label: 'PO_Map_Ref' },
  { key: 'disputeStatus', label: 'Dispute_Status' },
];

export function parsePOFromCSV(csvText: string): POEstimateRecord[] {
  const matrix = parseCSV(csvText);
  if (matrix.length < 2) return [];

  const headers = matrix[0].map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const rows = matrix.slice(1);

  return rows.map((row, idx) => {
    const getValue = (candidateKeys: string[]) => {
      for (const key of candidateKeys) {
        const i = headers.findIndex((h) => h.includes(key));
        if (i !== -1 && row[i] !== undefined) return row[i];
      }
      return '';
    };

    const poNumber = getValue(['ponumber', 'po']) || `PO-${Date.now()}-${idx + 1}`;
    const skuCode = getValue(['skucode', 'sku']) || `SKU-${idx + 1}`;
    const productName = getValue(['productname', 'product', 'desc']) || `Imported Item ${idx + 1}`;
    const category = getValue(['category', 'cat']) || 'Homeware & Kitchen';
    const poQty = parseInt(getValue(['poqty', 'qty', 'quantity']) || '1000', 10);
    const fobCurrency = getValue(['fobcurrency', 'currency', 'curr']) || 'USD';
    const fobUnitPriceFC = parseFloat(getValue(['fobunitprice', 'fobprice', 'fob']) || '20.0');
    const estFreightPerUnitAUD = parseFloat(getValue(['estfreight', 'freight']) || '5.0');
    const estDutyRate = parseFloat(getValue(['estdutyrate', 'dutyrate', 'duty']) || '0.05');
    const estOtherLandedCost = parseFloat(getValue(['estother', 'otherlanded', 'port']) || '2.0');
    const bookLandedCostPerUnit = parseFloat(getValue(['booklandedcost', 'bookcost', 'book']) || '35.0');

    return {
      id: `po-csv-${Date.now()}-${idx}`,
      poNumber,
      skuCode,
      productName,
      category,
      poQty: isNaN(poQty) ? 0 : poQty,
      fobCurrency: fobCurrency.toUpperCase(),
      fobUnitPriceFC: isNaN(fobUnitPriceFC) ? 0 : fobUnitPriceFC,
      estFreightPerUnitAUD: isNaN(estFreightPerUnitAUD) ? 0 : estFreightPerUnitAUD,
      estDutyRate: isNaN(estDutyRate) ? 0 : estDutyRate,
      estOtherLandedCost: isNaN(estOtherLandedCost) ? 0 : estOtherLandedCost,
      bookLandedCostPerUnit: isNaN(bookLandedCostPerUnit) ? 0 : bookLandedCostPerUnit,
    };
  });
}

export function parseLogisticsFromCSV(csvText: string): ActualLogisticsRecord[] {
  const matrix = parseCSV(csvText);
  if (matrix.length < 2) return [];

  const headers = matrix[0].map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const rows = matrix.slice(1);

  return rows.map((row, idx) => {
    const getValue = (candidateKeys: string[]) => {
      for (const key of candidateKeys) {
        const i = headers.findIndex((h) => h.includes(key));
        if (i !== -1 && row[i] !== undefined) return row[i];
      }
      return '';
    };

    const poNumber = getValue(['ponumber', 'po']) || `PO-${idx + 1}`;
    const skuCode = getValue(['skucode', 'sku']) || '';
    const shipmentId = getValue(['shipmentid', 'shipment', 'bl']) || `BL-${Date.now()}-${idx + 1}`;
    const arrivalDate = getValue(['arrivaldate', 'arrival', 'date']) || new Date().toISOString().split('T')[0];
    const actualFreightInvoiceAUD = parseFloat(getValue(['actualfreight', 'freight']) || '0');
    const actualDutyPaidAUD = parseFloat(getValue(['actualduty', 'duty']) || '0');
    const actualPortDrayageAUD = parseFloat(getValue(['actualport', 'port', 'drayage']) || '0');
    const actualReceivedQty = parseInt(getValue(['actualreceivedqty', 'receivedqty', 'qty']) || '0', 10);

    return {
      id: `log-csv-${Date.now()}-${idx}`,
      poNumber,
      skuCode,
      shipmentId,
      arrivalDate,
      actualFreightInvoiceAUD: isNaN(actualFreightInvoiceAUD) ? 0 : actualFreightInvoiceAUD,
      actualDutyPaidAUD: isNaN(actualDutyPaidAUD) ? 0 : actualDutyPaidAUD,
      actualPortDrayageAUD: isNaN(actualPortDrayageAUD) ? 0 : actualPortDrayageAUD,
      actualReceivedQty: isNaN(actualReceivedQty) ? 0 : actualReceivedQty,
    };
  });
}

export function parseRetailFromCSV(csvText: string): RetailDeductionRecord[] {
  const matrix = parseCSV(csvText);
  if (matrix.length < 2) return [];

  const headers = matrix[0].map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const rows = matrix.slice(1);

  return rows.map((row, idx) => {
    const getValue = (candidateKeys: string[]) => {
      for (const key of candidateKeys) {
        const i = headers.findIndex((h) => h.includes(key));
        if (i !== -1 && row[i] !== undefined) return row[i];
      }
      return '';
    };

    const invoiceRef = getValue(['invoiceref', 'invoice']) || `INV-${Date.now()}-${idx + 1}`;
    const retailerName = getValue(['retailername', 'retailer']) || 'Woolworths';
    const billedQty = parseInt(getValue(['billedqty', 'qty']) || '500', 10);
    const contractPriceAUD = parseFloat(getValue(['contractprice', 'price']) || '50.0');
    const deductionClaimRef = getValue(['deductionclaimref', 'claimref', 'claim']) || `CLM-${Date.now()}-${idx + 1}`;
    const deductionAmountAUD = parseFloat(getValue(['deductionamount', 'amount']) || '0');
    const deductionCodeRaw = getValue(['deductioncoderaw', 'code', 'rawcode']) || 'REB-01';
    const poMapRef = getValue(['pomapref', 'po']) || '';
    const rawStatus = getValue(['disputestatus', 'status']);
    let disputeStatus: RetailDeductionRecord['disputeStatus'] = 'Pending Review';
    if (rawStatus.includes('Lodged') || rawStatus.includes('Dispute')) disputeStatus = 'Dispute Lodged';
    else if (rawStatus.includes('Settled') || rawStatus.includes('Recovered')) disputeStatus = 'Recovered & Settled';
    else if (rawStatus.includes('Written') || rawStatus.includes('Accepted')) disputeStatus = 'Accepted & Written Off';

    return {
      id: `ret-csv-${Date.now()}-${idx}`,
      invoiceRef,
      retailerName,
      billedQty: isNaN(billedQty) ? 0 : billedQty,
      contractPriceAUD: isNaN(contractPriceAUD) ? 0 : contractPriceAUD,
      deductionClaimRef,
      deductionAmountAUD: isNaN(deductionAmountAUD) ? 0 : deductionAmountAUD,
      deductionCodeRaw: deductionCodeRaw.toUpperCase(),
      poMapRef,
      disputeStatus,
    };
  });
}
