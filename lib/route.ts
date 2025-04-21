import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { leaseFieldCoordinates } from '../app/api/generate-lease/lib/coordinates';
import questions from '../questions.json';

export async function POST(req: Request) {
  const answers = await req.json();
  const pdfPath = path.join(process.cwd(), 'public', 'blank-lease.pdf');

  if (!fs.existsSync(pdfPath)) {
    return new NextResponse('PDF file not found', { status: 404 });
  }

  const existingPdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 10;

  for (const [key, value] of Object.entries(answers)) {
    const field = leaseFieldCoordinates[key];
    if (!field) continue;

    const page = pdfDoc.getPages()[field.page];
    page.drawText(String(value), {
      x: field.x,
      y: field.y,
      size: fontSize,
      font,
    });
  }

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="filled-lease.pdf"',
    },
  });
}