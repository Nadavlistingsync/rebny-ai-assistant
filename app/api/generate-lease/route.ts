import { NextResponse } from 'next/server';
import { generateLeasePDF } from '../lib/fillLease';

export async function POST() {
  try {
    const pdfBytes = await generateLeasePDF();
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="rebny_lease.pdf"',
      },
    });
  } catch (err) {
    console.error('Error generating PDF:', err);
    return new NextResponse(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
