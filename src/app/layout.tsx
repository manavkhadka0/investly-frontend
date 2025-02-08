import './globals.css';

import type { Metadata } from 'next';

import { DM_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import QueryProvider from '@/context/query-provider';
import { ThemeProvider } from '@/context/theme-provider';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Investly',
  description: 'Investly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${dm_sans.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
