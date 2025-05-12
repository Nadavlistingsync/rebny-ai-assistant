import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const {
      unitAddress,
      unitNumber,
      borough,
      tenantName,
      leaseStart,
      leaseEnd,
      rent,
    } = data

    // Input validation
    if (!unitAddress || !unitNumber || !borough || !tenantName || !leaseStart || !leaseEnd || !rent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([612, 792])
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const draw = (label: string, value: string, y: number) => {
      page.drawText(`${label}: ${value}`, {
        x: 50,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      })
    }

    draw('Unit Address', unitAddress, 700)
    draw('Unit Number', unitNumber, 680)
    draw('Borough', borough, 660)
    draw('Tenant Name', tenantName, 640)
    draw('Lease Start', leaseStart, 620)
    draw('Lease End', leaseEnd, 600)
    draw('Rent', `$${rent}`, 580)

    const pdfBytes = await pdfDoc.save()

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="rebny_lease.pdf"',
      },
    })
  } catch (error: any) {
    console.error('Error generating lease:', error)
    return NextResponse.json({ error: 'Failed to generate lease', details: error?.message || error }, { status: 500 })
  }
}
