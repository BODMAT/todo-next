import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: "ToDo",
  description: "To Do Next App",
};

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
