import "./globals.css";
import Cursor from "./Cursor";
import { GeistSans } from "geist/font/sans";
import { GeistPixelGrid } from "geist/font/pixel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistPixelGrid.variable}`}>
      <body className="font-sans">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
