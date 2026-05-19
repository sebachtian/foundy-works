import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Foundy Works — Find the Why. Build What Matters.",
  description:
    "Foundy helps organizations and individuals define what should be built and why, then turns that clarity into scalable systems and products.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon-256.png",
  },
  openGraph: {
    title: "Foundy Works",
    description: "Find the Why. Build What Matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
