import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ThemeRegistry } from '@/app/ThemeRegistry';
import { Wrapper } from '@/app/wrapper';

export const metadata: Metadata = {
  title: 'M',
  description: 'Ivan Kroha portfolio',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.png"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      />
    </head>
    <body>
    <ThemeRegistry options={{key: 'joy'}}>
      <Wrapper>
        {children}
      </Wrapper>
    </ThemeRegistry>
    </body>
    </html>
  );
}
