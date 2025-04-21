import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// @ts-ignore
import { leaseFieldCoordinates } from './coordinates';
// @ts-ignore
import questions from './questions.json';

export async function generateLeasePDF(data: Record<string, string>): Promise<Uint8Array> {
  const pdfPath = path.join(process.cwd(), 'public', 'Combined_Condo_Lease.pdf');
  const existingPdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 10;

  for (const q of questions.questions) {
    const value = data[q.key];
    const coords = leaseFieldCoordinates[q.key];
    if (!value || !coords) continue;

    pages[coords.page].drawText(String(value), {
      x: coords.x,
      y: coords.y,
      size: fontSize,
      font,
      color: rgb(0, 0, 0),
    });
  }

  return pdfDoc.save();
}
