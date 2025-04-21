import * as React from 'react';

export const metadata = {
  title: 'REBNY Lease Assistant',
  description: 'Auto-fill REBNY lease forms using AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
