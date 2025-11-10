import "./globals.css";

export const metadata = {
  title: "YOUYIMEI Medical Cold Compress Mask - Professional B2B Solutions",
  description: "High-quality medical cold compress masks for retail stores and import companies. YOUYIMEI offers premium skincare solutions with proven results.",
  keywords: "medical mask, cold compress, skincare, B2B, wholesale, YOUYIMEI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
