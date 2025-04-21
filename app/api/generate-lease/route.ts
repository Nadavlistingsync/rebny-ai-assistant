import { NextRequest, NextResponse } from 'next/server';
import { generateLeasePDF } from '@/lib/fillLease';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // receives the form data
    const pdfBuffer = await generateLeasePDF(data); // pass data to the PDF generator

    return NextResponse.from(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="REBNY_Lease.pdf"',
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