import "./globals.css";
import Cursor from "./Cursor";
import { GeistSans } from "geist/font/sans";
import { GeistPixelGrid } from "geist/font/pixel";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistPixelGrid.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6P20RD4T76"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6P20RD4T76');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
