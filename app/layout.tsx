import type { Metadata } from "next";
import { afacad, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TWINCO",
  description: "TWINCO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacad.variable} ${inter.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="min-h-full overflow-x-clip">
        {/* No-JS fallback: never hide scroll-reveal content when JS is unavailable. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
