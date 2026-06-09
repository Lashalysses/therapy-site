import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroVision International Institute | Therapy & Psychological Counseling",
  description:
    "Professional therapy and psychological counseling services including family & couple therapy, integrative counseling, schema therapy, solution focused brief therapy, and sport psychology.",
  openGraph: {
    type: "website",
    title: "NeuroVision International Institute | Therapy & Psychological Counseling",
    description:
      "Professional therapy and psychological counseling services. Compassionate, evidence-based support tailored to you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
