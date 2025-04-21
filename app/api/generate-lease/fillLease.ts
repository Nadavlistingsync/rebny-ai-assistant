import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { leaseFieldCoordinates } from '../../lib/coordinates';
import questions from '../../../questions.json';

export async function generateLeasePDF() {
  // Load original blank lease PDF
  const leasePath = path.resolve(process.cwd(), 'public', 'Combined_Condo_Lease.pdf');
  const existingPdfBytes = fs.readFileSync(leasePath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Loop through all mapped fields
  for (const [field, value] of Object.entries(questions)) {
    const coords = leaseFieldCoordinates[field];
    if (!coords) continue;

    const page = pages[coords.page];
    page.drawText(String(value), {
      x: coords.x,
      y: coords.y,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });
  }

  // Save final output
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(process.cwd(), 'public', 'filled_lease.pdf');
  fs.writeFileSync(outputPath, pdfBytes);

  return outputPath;
}

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pdfPath = await generateLeasePDF();
    return NextResponse.json({ status: 'success', path: pdfPath });
  } catch (error) {
    console.error('Error generating lease PDF:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to generate lease' }, { status: 500 });
  }
}